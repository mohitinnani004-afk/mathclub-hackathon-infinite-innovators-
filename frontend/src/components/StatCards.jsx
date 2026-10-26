/**
 * StatCards — Member 3: Top metric cards
 *
 * Displays key metrics from the summary object:
 *  - Total Students (4,000)
 *  - Total Courses (48+ courses across 8 branches)
 *  - Exam Slots Used (heuristic result)
 *  - Conflicting Course Pairs
 *  - Campus Classrooms (130 Classrooms @ 70 capacity)
 *  - 3 Campus Blocks (CB: 5 Floors, AB1: 4 Floors, AB2: 4 Floors)
 */

export default function StatCards({ summary }) {
  const cards = [
    {
      key:   'total_students',
      val:   summary ? (summary.total_students ?? 4000).toLocaleString() : null,
      label: 'Total Students',
      icon:  '🎓',
      color: '#3b82f6',
      desc:  '8 branches enrolled'
    },
    {
      key:   'total_courses',
      val:   summary ? (summary.total_courses ?? 52) : null,
      label: 'Total Courses',
      icon:  '📚',
      color: '#10b981',
      desc:  'Core & common disciplines'
    },
    {
      key:   'slots_required',
      val:   summary ? (summary.slots_required ?? 13) : null,
      label: 'Exam Slots Used',
      icon:  '🗓️',
      color: '#f59e0b',
      desc:  'Welsh-Powell heuristic result'
    },
    {
      key:   'conflict_pairs',
      val:   summary ? (summary.conflict_pairs ?? 0).toLocaleString() : null,
      label: 'Conflicting Course Pairs',
      icon:  '⚡',
      color: '#f43f5e',
      desc:  'Edges in the conflict graph'
    },
    {
      key:   'classrooms',
      val:   summary ? '130 Rooms' : null,
      label: 'Classrooms (70 Cap)',
      icon:  '🏛️',
      color: '#8b5cf6',
      desc:  '70 students / classroom'
    },
    {
      key:   'blocks',
      val:   '3 Blocks',
      label: 'CB • AB1 • AB2',
      icon:  '🏢',
      color: '#06b6d4',
      desc:  'CB (5 Flr), AB1 (4), AB2 (4)'
    }
  ];

  return (
    <div
      className="stagger"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: 14
      }}
    >
      {cards.map((c) => (
        <div
          key={c.key}
          className="stat-card"
          style={{ '--accent-color': c.color }}
        >
          <div className="stat-icon">{c.icon}</div>
          {summary ? (
            <div className="stat-value" style={{ fontSize: '1.75rem', fontWeight: 800 }}>
              {c.val}
            </div>
          ) : (
            <div style={{
              height: 34, width: '60%',
              background: 'rgba(255,255,255,0.06)',
              borderRadius: 6,
              marginBottom: 8,
              animation: 'pulse 1.5s ease-in-out infinite'
            }} />
          )}
          <div className="stat-label" style={{ fontWeight: 700, fontSize: '0.85rem' }}>{c.label}</div>
          <div style={{ fontSize: 11, color: '#64748b', marginTop: 4 }}>{c.desc}</div>
        </div>
      ))}
    </div>
  );
}
