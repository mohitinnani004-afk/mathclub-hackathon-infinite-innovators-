import { useState, useCallback } from 'react';
import axios from 'axios';
import StatCards    from './components/StatCards';
import ConflictGraph from './components/ConflictGraph';
import ScheduleView  from './components/ScheduleView';
import UploadZone    from './components/UploadZone';
import { MOCK_DATA } from './mockData';

const API_GATEWAY = import.meta.env.VITE_API_URL || 'http://localhost:3001';

// ─────────────────────────────────────────────
// Toast notification
// ─────────────────────────────────────────────
function Toast({ message, type, onClose }) {
  if (!message) return null;
  return (
    <div className={`toast toast-${type}`} role="alert">
      <span>{type === 'success' ? '✅' : '❌'}</span>
      <span style={{ flex: 1 }}>{message}</span>
      <button
        onClick={onClose}
        style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', fontSize: 16 }}
      >
        ×
      </button>
    </div>
  );
}

// ─────────────────────────────────────────────
// Main App
// ─────────────────────────────────────────────
export default function App() {
  const [scheduleData, setScheduleData] = useState(null);
  const [loading, setLoading]           = useState(false);
  const [activeView, setActiveView]     = useState('graph'); // 'graph' | 'schedule'
  const [toast, setToast]               = useState(null);
  const [mode, setMode]                 = useState('idle'); // 'idle' | 'demo' | 'live'

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  // ── Handle real CSV upload ──
  const handleUpload = useCallback(async (file) => {
    setLoading(true);
    setScheduleData(null);
    try {
      const form = new FormData();
      form.append('file', file);

      const res = await axios.post(`${API_GATEWAY}/api/upload`, form, {
        headers: { 'Content-Type': 'multipart/form-data' },
        timeout: 30000
      });

      setScheduleData(res.data);
      setMode('live');
      setActiveView('graph');
      showToast(`✨ Schedule computed! ${res.data.summary.slots_required} slots used across ${res.data.summary.conflict_pairs} conflicting course pairs.`);
    } catch (err) {
      const msg = err.response?.data?.error || err.message;
      if (err.code === 'ECONNREFUSED' || err.message?.includes('Network Error')) {
        showToast('Backend not running — loading mock data instead', 'error');
        setScheduleData(MOCK_DATA);
        setMode('demo');
        setActiveView('graph');
      } else {
        showToast(msg || 'Upload failed', 'error');
      }
    } finally {
      setLoading(false);
    }
  }, []);

  // ── Handle demo dataset ──
  const handleDemo = useCallback(async (size) => {
    if (size === 'mock') {
      setScheduleData(MOCK_DATA);
      setMode('demo');
      setActiveView('graph');
      showToast('Loaded offline mock data — no backend required');
      return;
    }

    setLoading(true);
    setScheduleData(null);
    try {
      // Fetch demo CSV from Node server, then POST to Python
      const csvRes = await axios.get(`${API_GATEWAY}/api/demo/${size}`, {
        responseType: 'blob',
        timeout: 10000
      });

      const file = new File([csvRes.data], `demo_${size}.csv`, { type: 'text/csv' });
      const form = new FormData();
      form.append('file', file);

      const res = await axios.post(`${API_GATEWAY}/api/upload`, form, {
        headers: { 'Content-Type': 'multipart/form-data' },
        timeout: 30000
      });

      setScheduleData(res.data);
      setMode('live');
      setActiveView('graph');
      showToast(`Demo loaded! Welsh-Powell used ${res.data.summary.slots_required} exam slots.`);
    } catch (err) {
      showToast('Backend unavailable — loading offline mock', 'error');
      setScheduleData(MOCK_DATA);
      setMode('demo');
      setActiveView('graph');
    } finally {
      setLoading(false);
    }
  }, []);

  // ── Export handlers ──
  const handleExportExcel = async () => {
    if (!scheduleData) return;
    try {
      const res = await axios.post(`${API_GATEWAY}/api/export/excel`, scheduleData, {
        responseType: 'blob'
      });
      const url = URL.createObjectURL(res.data);
      const a   = document.createElement('a');
      a.href     = url;
      a.download = 'exam_schedule.xlsx';
      a.click();
      showToast('Excel file downloaded');
    } catch {
      showToast('Export failed — server not reachable', 'error');
    }
  };

  const handleExportHTML = async () => {
    if (!scheduleData) return;
    try {
      const res = await axios.post(`${API_GATEWAY}/api/export/html`, scheduleData, {
        responseType: 'blob'
      });
      const url = URL.createObjectURL(res.data);
      const a   = document.createElement('a');
      a.href     = url;
      a.download = 'exam_schedule.html';
      a.click();
      showToast('HTML report downloaded');
    } catch {
      showToast('Export failed — server not reachable', 'error');
    }
  };

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* ══ HEADER ══ */}
      <header style={{
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '0 32px',
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'rgba(10,15,30,0.8)',
        backdropFilter: 'blur(12px)',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{
            width: 36, height: 36,
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            borderRadius: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 18
          }}>
            🧠
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: 16, letterSpacing: '-0.02em' }}>
              ExamSlot<span style={{ color: '#3b82f6' }}>AI</span>
            </div>
            <div style={{ fontSize: 11, color: '#475569', fontWeight: 500 }}>
              Smart Exam Slot Management
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div className="algo-pill">
            <span>Graph</span>
            Welsh-Powell Heuristic
          </div>

          {mode !== 'idle' && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              padding: '4px 12px',
              background: mode === 'live' ? 'rgba(16,185,129,0.12)' : 'rgba(245,158,11,0.12)',
              border: `1px solid ${mode === 'live' ? 'rgba(16,185,129,0.25)' : 'rgba(245,158,11,0.25)'}`,
              borderRadius: 99,
              fontSize: 12,
              color: mode === 'live' ? '#6ee7b7' : '#fcd34d',
              fontWeight: 600
            }}>
              <span style={{
                width: 6, height: 6,
                borderRadius: '50%',
                background: mode === 'live' ? '#10b981' : '#f59e0b',
                animation: mode === 'live' ? 'pulse 2s ease infinite' : 'none'
              }} />
              {mode === 'live' ? 'Live API' : 'Demo Mode'}
            </div>
          )}
        </div>
      </header>

      <main style={{ padding: '32px', maxWidth: 1400, margin: '0 auto' }}>

        {/* ══ HERO SECTION (shown only before first schedule) ══ */}
        {!scheduleData && !loading && (
          <div style={{
            textAlign: 'center',
            marginBottom: 40,
            padding: '48px 32px'
          }} className="slide-up">
            <div style={{
              display: 'inline-flex',
              gap: 8,
              alignItems: 'center',
              padding: '6px 14px',
              background: 'rgba(139,92,246,0.1)',
              border: '1px solid rgba(139,92,246,0.2)',
              borderRadius: 99,
              fontSize: 12,
              color: '#c4b5fd',
              fontWeight: 600,
              marginBottom: 24
            }}>
              🏆 Math Club Hackathon — Infinite Innovators
            </div>

            <h1 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: 16,
              background: 'linear-gradient(135deg, #f1f5f9 0%, #94a3b8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Smart Exam Slot<br />
              <span style={{
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Management System
              </span>
            </h1>

            <p style={{
              fontSize: '1.05rem',
              color: '#64748b',
              maxWidth: 620,
              margin: '0 auto 36px',
              lineHeight: 1.7
            }}>
              Graph coloring helps build campus exam schedules. <strong>4,000 students</strong> across <strong>8 engineering branches</strong> mapped into <strong>CB, AB1, and AB2</strong> blocks with <strong>70-student classrooms</strong> — no student has overlapping exams in the generated schedule.
            </p>

            {/* Feature pills */}
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}>
              {[
                { icon: '🎓', text: '4,000 Students · 8 Branches' },
                { icon: '🏛️', text: '70 Students / Classroom' },
                { icon: '🏢', text: 'CB (5 Flr) · AB1 (4 Flr) · AB2 (4 Flr)' },
                { icon: '🔢', text: 'Welsh-Powell Graph Coloring' },
                { icon: '⚡', text: '0 Clashes Guaranteed' }
              ].map(f => (
                <div key={f.text} style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  padding: '6px 14px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 99,
                  fontSize: 13,
                  color: '#94a3b8'
                }}>
                  {f.icon} {f.text}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ══ STAT CARDS ══ */}
        <div style={{ marginBottom: 28 }}>
          <StatCards summary={scheduleData?.summary} />
        </div>

        {/* ══ MAIN GRID ══ */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: scheduleData ? '380px 1fr' : '1fr',
          gap: 24,
          alignItems: 'start'
        }}>

          {/* ── LEFT PANEL: Upload + Controls ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* Upload card */}
            <div className="glass" style={{ padding: 24, borderRadius: 18 }}>
              <div style={{ marginBottom: 20 }}>
                <h2 style={{ fontSize: 15, fontWeight: 700, marginBottom: 4 }}>
                  📤 Upload Enrollments
                </h2>
                <p style={{ fontSize: 13, color: '#64748b' }}>
                  CSV or JSON with student enrollment records
                </p>
              </div>

              {loading ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 0', gap: 16 }}>
                  <div className="spinner" />
                  <p style={{ color: '#64748b', fontSize: 14 }}>
                    Running Welsh-Powell algorithm…
                  </p>
                  <p style={{ color: '#475569', fontSize: 12 }}>
                    Building conflict graph & allocating rooms
                  </p>
                </div>
              ) : (
                <UploadZone onUpload={handleUpload} onDemo={handleDemo} loading={loading} />
              )}
            </div>

            {/* Algorithm info card */}
            <div className="glass" style={{ padding: 20, borderRadius: 14 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#8b5cf6', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 12 }}>
                🧮 Math Engine
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  { step: '1', desc: 'Build G=(V,E) conflict graph', detail: 'V=courses, E=shared students' },
                  { step: '2', desc: 'Welsh-Powell coloring', detail: 'Sort by degree → greedy assign' },
                  { step: '3', desc: 'Assign exam slots', detail: 'Greedy heuristic; result may not be minimum' },
                  { step: '4', desc: 'Bin-packing rooms', detail: 'Greedy first-fit decreasing' }
                ].map(s => (
                  <div key={s.step} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <div style={{
                      width: 22, height: 22,
                      borderRadius: 6,
                      background: 'rgba(139,92,246,0.15)',
                      border: '1px solid rgba(139,92,246,0.25)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 11, fontWeight: 700, color: '#c4b5fd',
                      flexShrink: 0
                    }}>
                      {s.step}
                    </div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: '#e2e8f0' }}>{s.desc}</div>
                      <div style={{ fontSize: 11, color: '#475569', marginTop: 1 }}>{s.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Export buttons (shown after schedule) */}
            {scheduleData && (
              <div className="glass" style={{ padding: 20, borderRadius: 14 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 12 }}>
                  📥 Export Schedule
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <button className="btn btn-success btn-lg" id="export-excel-btn" onClick={handleExportExcel}
                    style={{ justifyContent: 'center' }}>
                    📊 Download Excel Workbook
                  </button>
                  <button className="btn btn-secondary" id="export-html-btn" onClick={handleExportHTML}
                    style={{ justifyContent: 'center', fontSize: 14 }}>
                    🖨️ Printable HTML Report
                  </button>
                </div>
              </div>
            )}

            {/* Summary details */}
            {scheduleData?.summary && (
              <div className="glass" style={{ padding: 20, borderRadius: 14 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#f59e0b', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 12 }}>
                  📈 Graph Analysis
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {[
                    ['Slots Used (heuristic)', scheduleData.summary.slots_required],
                    ['Graph Density', scheduleData.summary.graph_density],
                    ['Conflicting Course Pairs', scheduleData.summary.conflict_pairs],
                    ['Algorithm', scheduleData.summary.algorithm?.split(' ').slice(0,2).join(' ')],
                  ].map(([k, v]) => (
                    <div key={k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 12 }}>
                      <span style={{ color: '#64748b' }}>{k}</span>
                      <span style={{ fontWeight: 700, color: '#f1f5f9', fontFamily: 'JetBrains Mono, monospace' }}>{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ── RIGHT PANEL: Visualization (only after schedule) ── */}
          {scheduleData && (
            <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {scheduleData.summary.room_allocation_feasible === false && (
                <div role="alert" style={{ padding: 14, borderRadius: 10, color: '#fecaca', background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.35)' }}>
                  Room capacity is insufficient for every course. Additional rooms are needed for: {scheduleData.summary.overflow_courses.join(', ')}.
                </div>
              )}
              {/* View toggle */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="tabs">
                  <button
                    className={`tab ${activeView === 'graph' ? 'active' : ''}`}
                    id="tab-graph"
                    onClick={() => setActiveView('graph')}
                  >
                    🕸️ Conflict Graph
                  </button>
                  <button
                    className={`tab ${activeView === 'schedule' ? 'active' : ''}`}
                    id="tab-schedule"
                    onClick={() => setActiveView('schedule')}
                  >
                    📅 Timetable
                  </button>
                </div>

                {activeView === 'graph' && (
                  <div style={{ fontSize: 12, color: '#475569' }}>
                    Same color = no conflict &nbsp;·&nbsp;
                    Edge weight = shared students
                  </div>
                )}
              </div>

              {/* Graph View */}
              {activeView === 'graph' && (
                <div className="graph-container" style={{ height: 540 }}>
                  <ConflictGraph data={scheduleData.graph_data} />
                </div>
              )}

              {/* Schedule View */}
              {activeView === 'schedule' && (
                <div className="glass" style={{ padding: 24, borderRadius: 18 }}>
                  <ScheduleView schedule={scheduleData.schedule} />
                </div>
              )}

              {/* Graph proof callout */}
              {activeView === 'graph' && (
                <div style={{
                  padding: '14px 20px',
                  background: 'rgba(139,92,246,0.08)',
                  border: '1px solid rgba(139,92,246,0.2)',
                  borderRadius: 12,
                  fontSize: 13,
                  color: '#c4b5fd',
                  lineHeight: 1.6
                }}>
                  <strong>Visual Proof:</strong> No two connected nodes (courses with shared students) share the same color.
                  This is a valid graph coloring, so students have no overlapping exams. Welsh-Powell used <strong>{scheduleData.summary.slots_required}</strong> slots; a greedy coloring does not guarantee the minimum.
                </div>
              )}
            </div>
          )}
        </div>

        {/* ══ EMPTY STATE (no schedule yet) ══ */}
        {!scheduleData && !loading && (
          <div style={{
            marginTop: 16,
            padding: '48px 32px',
            border: '1px dashed rgba(255,255,255,0.06)',
            borderRadius: 20,
            textAlign: 'center',
            color: '#475569'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: 12, opacity: 0.4 }}>🕸️</div>
            <p style={{ fontSize: 14, marginBottom: 8 }}>
              The conflict graph and generated schedule will appear here
            </p>
            <p style={{ fontSize: 12, color: '#334155' }}>
              Upload a CSV or click "Offline Mock" to see a demo instantly
            </p>
          </div>
        )}
      </main>

      {/* ══ FOOTER ══ */}
      <footer style={{
        marginTop: 48,
        padding: '24px 32px',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 12
      }}>
        <div style={{ fontSize: 12, color: '#475569' }}>
          ExamSlotAI · Math Club Hackathon 2024 · <span style={{ color: '#3b82f6' }}>Infinite Innovators</span>
        </div>
        <div style={{ display: 'flex', gap: 20, fontSize: 12, color: '#334155' }}>
          <span>🐍 Python FastAPI</span>
          <span>⚡ Node.js</span>
          <span>⚛️ React + Vite</span>
          <span>🕸️ vis-network</span>
        </div>
      </footer>

      {/* Toast */}
      <Toast message={toast?.message} type={toast?.type} onClose={() => setToast(null)} />
    </div>
  );
}
