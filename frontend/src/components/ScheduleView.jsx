import { useState } from 'react';
import { getSlotColor, BLOCK_COLORS } from '../mockData';

/**
 * ScheduleView — Member 3: Master Timetable & Campus Allocation
 *
 * Tabbed schedule display showing:
 *  - Each slot as a tab (Day 1 Morning, etc.)
 *  - Courses with student counts
 *  - Sequential room allocation: CB (Floor 1-5) -> AB1 (Floor 1-4) -> AB2 (Floor 1-4)
 *  - Classrooms strictly capped at 70 students
 *  - Interactive Block Filter: All | CB (Central Block) | AB1 | AB2
 */
export default function ScheduleView({ schedule }) {
  const [activeTab, setActiveTab] = useState(0);
  const [blockFilter, setBlockFilter] = useState('ALL'); // 'ALL' | 'CB' | 'AB1' | 'AB2'

  if (!schedule?.length) {
    return (
      <div className="empty-state" style={{ minHeight: 320 }}>
        <div className="empty-icon">📅</div>
        <p>No schedule generated yet</p>
      </div>
    );
  }

  const activeSlot = schedule[activeTab] || schedule[0];
  const slotColor  = getSlotColor(activeSlot.slot_id);

  // Compute block distribution in active slot
  const blockStats = { CB: 0, AB1: 0, AB2: 0 };
  let totalClassroomsInSlot = 0;
  activeSlot.courses.forEach(c => {
    (c.rooms || []).forEach(r => {
      totalClassroomsInSlot++;
      const blk = r.block || (r.room_id ? r.room_id.split('-')[0] : 'CB');
      if (blockStats[blk] !== undefined) blockStats[blk]++;
    });
  });

  return (
    <div className="fade-in">
      {/* ── Slot Selection Tabs ── */}
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 18 }}>
        {schedule.map((slot, idx) => {
          const color = getSlotColor(slot.slot_id);
          const isActive = idx === activeTab;
          return (
            <button
              key={slot.slot_id}
              onClick={() => setActiveTab(idx)}
              style={{
                padding: '7px 14px',
                borderRadius: 8,
                border: `1px solid ${isActive ? color : 'rgba(255,255,255,0.08)'}`,
                background: isActive ? `${color}22` : 'rgba(255,255,255,0.02)',
                color: isActive ? color : '#94a3b8',
                fontSize: 12,
                fontWeight: isActive ? 700 : 500,
                cursor: 'pointer',
                transition: 'all 0.2s',
                fontFamily: 'Inter, sans-serif',
                display: 'flex',
                alignItems: 'center',
                gap: 6
              }}
            >
              <span style={{
                width: 8, height: 8,
                borderRadius: '50%',
                background: color,
                opacity: isActive ? 1 : 0.4,
                boxShadow: isActive ? `0 0 6px ${color}` : 'none'
              }} />
              Slot {slot.slot_id}
            </button>
          );
        })}
      </div>

      {/* ── Slot Header & Campus Block Utilization ── */}
      <div style={{
        padding: '16px 20px',
        background: `${slotColor}12`,
        border: `1px solid ${slotColor}35`,
        borderRadius: 14,
        marginBottom: 16,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 12
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 14, height: 14,
            borderRadius: '50%',
            background: slotColor,
            boxShadow: `0 0 10px ${slotColor}`
          }} />
          <div>
            <div style={{ fontWeight: 800, color: slotColor, fontSize: 16 }}>
              {activeSlot.slot_label}
            </div>
            <div style={{ fontSize: 12, color: '#94a3b8', marginTop: 2 }}>
              {activeSlot.courses.length} course{activeSlot.courses.length !== 1 ? 's' : ''} running concurrently &nbsp;·&nbsp;
              <strong>{activeSlot.total_slot_students || activeSlot.courses.reduce((a, c) => a + c.student_count, 0)}</strong> students seated
            </div>
          </div>
        </div>

        {/* Block quick pills */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <div style={{ fontSize: 11, color: '#64748b', fontWeight: 600, textTransform: 'uppercase' }}>
            Rooms by Block:
          </div>
          <span style={{
            padding: '4px 10px', borderRadius: 6, fontSize: 11, fontWeight: 700,
            background: 'rgba(59,130,246,0.15)', color: '#93c5fd', border: '1px solid rgba(59,130,246,0.3)'
          }}>
            CB: {blockStats.CB} rooms
          </span>
          <span style={{
            padding: '4px 10px', borderRadius: 6, fontSize: 11, fontWeight: 700,
            background: 'rgba(139,92,246,0.15)', color: '#c4b5fd', border: '1px solid rgba(139,92,246,0.3)'
          }}>
            AB1: {blockStats.AB1} rooms
          </span>
          <span style={{
            padding: '4px 10px', borderRadius: 6, fontSize: 11, fontWeight: 700,
            background: 'rgba(16,185,129,0.15)', color: '#6ee7b7', border: '1px solid rgba(16,185,129,0.3)'
          }}>
            AB2: {blockStats.AB2} rooms
          </span>
        </div>
      </div>

      {/* ── Filter Bar ── */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          <span style={{ fontSize: 12, color: '#64748b', marginRight: 4 }}>Filter Classrooms:</span>
          {[
            { id: 'ALL', label: 'All Campus' },
            { id: 'CB',  label: 'CB Block (Floors 1-5)' },
            { id: 'AB1', label: 'AB1 Block (Floors 1-4)' },
            { id: 'AB2', label: 'AB2 Block (Floors 1-4)' }
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setBlockFilter(f.id)}
              style={{
                padding: '4px 10px',
                borderRadius: 6,
                border: blockFilter === f.id ? '1px solid #3b82f6' : '1px solid rgba(255,255,255,0.06)',
                background: blockFilter === f.id ? 'rgba(59,130,246,0.2)' : 'transparent',
                color: blockFilter === f.id ? '#93c5fd' : '#64748b',
                fontSize: 11,
                fontWeight: blockFilter === f.id ? 700 : 500,
                cursor: 'pointer'
              }}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div style={{ fontSize: 11, color: '#475569' }}>
          🏛️ Classrooms: 70 seats &nbsp;·&nbsp; 🔬 Labs: 35 seats
        </div>
      </div>

      {/* ── Courses Table ── */}
      <div style={{
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: 14,
        overflow: 'hidden'
      }}>
        <table className="schedule-table">
          <thead>
            <tr>
              <th style={{ width: 110 }}>Course Code</th>
              <th style={{ width: 220 }}>Course Name</th>
              <th style={{ width: 120 }}>Students</th>
              <th>Classroom Allocation (70 per room · sequential Floor 1→5)</th>
              <th style={{ width: 110 }}>Invigilators</th>
            </tr>
          </thead>
          <tbody>
            {activeSlot.courses.map((course) => {
              // Apply block filter to visible rooms
              const filteredRooms = blockFilter === 'ALL'
                ? course.rooms
                : (course.rooms || []).filter(r => (r.block || r.room_id.split('-')[0]) === blockFilter);

              const invCount = course.invigilators || Math.ceil(course.student_count / 35);

              return (
                <tr key={course.course_code} className="slide-up">
                  <td>
                    <span style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: 13,
                      fontWeight: 700,
                      color: slotColor
                    }}>
                      {course.course_code}
                    </span>
                  </td>
                  <td style={{ color: '#cbd5e1', fontWeight: 500 }}>
                    {course.course_name}
                  </td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{
                        fontWeight: 800,
                        fontSize: 15,
                        color: '#f1f5f9'
                      }}>
                        {course.student_count}
                      </span>
                      <span style={{ fontSize: 11, color: '#64748b' }}>students</span>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {filteredRooms.length === 0 ? (
                        <span style={{ fontSize: 11, color: '#475569', fontStyle: 'italic' }}>
                          No rooms in {blockFilter} block for this course
                        </span>
                      ) : (
                        filteredRooms.map((room) => {
                          const blk = room.block || (room.room_id ? room.room_id.split('-')[0] : 'CB');
                          const blkColor = BLOCK_COLORS[blk] || '#3b82f6';
                          const isFull = room.assigned_count >= (room.capacity || 70);

                          return (
                            <span
                              key={room.room_id}
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 6,
                                padding: '3px 8px',
                                background: `${blkColor}12`,
                                border: `1px solid ${blkColor}35`,
                                borderRadius: 6,
                                fontSize: 12,
                                fontFamily: 'JetBrains Mono, monospace'
                              }}
                              title={`${room.display_name || room.room_id}: ${room.assigned_count}/${room.capacity || 70} students`}
                            >
                              <span style={{
                                fontSize: 10,
                                fontWeight: 700,
                                color: blkColor,
                                background: `${blkColor}25`,
                                padding: '1px 4px',
                                borderRadius: 3
                              }}>
                                {blk} F{room.floor || 1}
                              </span>
                              <strong style={{ color: '#f1f5f9' }}>{room.room_id}</strong>
                              <span style={{
                                color: isFull ? '#6ee7b7' : '#fcd34d',
                                fontSize: 11,
                                fontWeight: 600
                              }}>
                                ({room.assigned_count}/{room.capacity || 70})
                              </span>
                            </span>
                          );
                        })
                      )}
                    </div>
                  </td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ fontSize: 14 }}>👤</span>
                      <span style={{ fontWeight: 700, color: '#cbd5e1' }}>{invCount}</span>
                      <span style={{ fontSize: 11, color: '#64748b' }}>staff</span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* ── Slot Summary Bar ── */}
      <div style={{
        marginTop: 14,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 18px',
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.05)',
        borderRadius: 10,
        fontSize: 12,
        color: '#64748b'
      }}>
        <div style={{ display: 'flex', gap: 20 }}>
          <span>
            Total Students in Slot:{' '}
            <strong style={{ color: '#f1f5f9' }}>
              {activeSlot.courses.reduce((a, c) => a + c.student_count, 0).toLocaleString()}
            </strong>
          </span>
          <span>
            Total Classrooms Used:{' '}
            <strong style={{ color: '#f1f5f9' }}>
              {activeSlot.courses.reduce((a, c) => a + (c.rooms ? c.rooms.length : 0), 0)}
            </strong>
          </span>
          <span>
            Invigilators on Duty:{' '}
            <strong style={{ color: '#f1f5f9' }}>
              {activeSlot.courses.reduce((a, c) => a + (c.invigilators || Math.ceil(c.student_count / 35)), 0)}
            </strong>
          </span>
        </div>
        <div>
          Algorithm:{' '}
          <strong style={{ color: slotColor }}>Welsh-Powell Graph Coloring χ(G)</strong>
        </div>
      </div>
    </div>
  );
}
