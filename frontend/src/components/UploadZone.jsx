import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const API_GATEWAY = import.meta.env.VITE_API_URL || 'http://localhost:3001';

/**
 * UploadZone — Member 3: Drag-and-drop CSV Upload
 *
 * Features:
 *  - Drag-and-drop or click-to-browse
 *  - Accepts .csv and .json files
 *  - Shows preview of parsed rows count
 *  - Two demo dataset buttons for instant testing
 */
export default function UploadZone({ onUpload, onDemo, loading }) {
  const [dragMsg, setDragMsg] = useState(null);

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    if (rejectedFiles.length > 0) {
      setDragMsg('❌ Only CSV or JSON files are accepted');
      setTimeout(() => setDragMsg(null), 3000);
      return;
    }
    if (acceptedFiles.length > 0) {
      setDragMsg(null);
      onUpload(acceptedFiles[0]);
    }
  }, [onUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'text/csv': ['.csv'], 'application/json': ['.json'] },
    maxFiles: 1,
    disabled: loading
  });

  return (
    <div>
      {/* Drop zone */}
      <div
        {...getRootProps()}
        className={`upload-zone ${isDragActive ? 'active' : ''}`}
        id="upload-dropzone"
        style={{ opacity: loading ? 0.5 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
      >
        <input {...getInputProps()} id="enrollment-file-input" />

        <div style={{
          fontSize: isDragActive ? '3rem' : '2.5rem',
          marginBottom: 16,
          transition: 'all 0.2s',
          filter: isDragActive ? 'none' : 'grayscale(0.5)'
        }}>
          {isDragActive ? '📂' : '📁'}
        </div>

        {dragMsg ? (
          <p style={{ color: '#f43f5e', fontWeight: 600 }}>{dragMsg}</p>
        ) : isDragActive ? (
          <p style={{ color: '#3b82f6', fontWeight: 700, fontSize: '1.05rem' }}>
            Drop your enrollment file here!
          </p>
        ) : (
          <>
            <p style={{ fontWeight: 600, fontSize: '1.05rem', color: '#f1f5f9', marginBottom: 8 }}>
              Drag & drop enrollment CSV or JSON
            </p>
            <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: 20 }}>
              or click to browse your files
            </p>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '8px 20px',
              background: 'rgba(59,130,246,0.12)',
              border: '1px solid rgba(59,130,246,0.25)',
              borderRadius: 99,
              color: '#93c5fd',
              fontSize: 13,
              fontWeight: 500
            }}>
              <span>📎</span> Browse Files
            </div>
          </>
        )}
      </div>

      {/* Format hint */}
      <div style={{
        marginTop: 10,
        padding: '8px 14px',
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.05)',
        borderRadius: 8,
        fontSize: 12,
        color: '#475569',
        fontFamily: 'JetBrains Mono, monospace'
      }}>
        Required columns: <span style={{ color: '#93c5fd' }}>student_id</span>,{' '}
        <span style={{ color: '#6ee7b7' }}>course_code</span>,{' '}
        <span style={{ color: '#fcd34d' }}>course_name (optional)</span>
      </div>

      {/* Sample files download */}
      <div style={{
        marginTop: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '8px 12px',
        background: 'rgba(59,130,246,0.06)',
        border: '1px solid rgba(59,130,246,0.18)',
        borderRadius: 8,
        fontSize: 12
      }}>
        <span style={{ color: '#93c5fd', fontWeight: 600 }}>📥 Sample Files:</span>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <a
            href={`${API_GATEWAY}/api/sample/csv`}
            download="sample_enrollments.csv"
            style={{ color: '#6ee7b7', textDecoration: 'none', background: 'rgba(16,185,129,0.15)', padding: '3px 8px', borderRadius: 5, fontWeight: 600, fontSize: 11 }}
          >
            Starter .CSV
          </a>
          <a
            href={`${API_GATEWAY}/api/sample/json`}
            download="sample_enrollments.json"
            style={{ color: '#fcd34d', textDecoration: 'none', background: 'rgba(245,158,11,0.15)', padding: '3px 8px', borderRadius: 5, fontWeight: 600, fontSize: 11 }}
          >
            Starter .JSON
          </a>
          <a
            href={`${API_GATEWAY}/api/sample/4000/csv`}
            download="sample_enrollments_4000.csv"
            style={{ color: '#93c5fd', textDecoration: 'none', background: 'rgba(59,130,246,0.2)', padding: '3px 8px', borderRadius: 5, fontWeight: 600, fontSize: 11 }}
          >
            4K .CSV
          </a>
          <a
            href={`${API_GATEWAY}/api/sample/4000/json`}
            download="sample_enrollments_4000.json"
            style={{ color: '#c4b5fd', textDecoration: 'none', background: 'rgba(139,92,246,0.2)', padding: '3px 8px', borderRadius: 5, fontWeight: 600, fontSize: 11 }}
          >
            4K .JSON
          </a>
        </div>
      </div>

      {/* Demo dataset buttons */}
      <div style={{ marginTop: 16 }}>
        <div style={{ fontSize: 11, color: '#475569', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 10 }}>
          Or try a demo dataset
        </div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <button
            className="btn btn-secondary"
            id="demo-realistic-btn"
            onClick={() => onDemo('realistic')}
            disabled={loading}
            style={{ fontSize: 13, border: '1px solid rgba(59,130,246,0.4)', background: 'rgba(59,130,246,0.1)' }}
          >
            <span>🏫</span>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontWeight: 700, color: '#93c5fd' }}>4,000 Campus Scale</div>
              <div style={{ fontSize: 10, color: '#94a3b8', fontWeight: 400 }}>4,000 students · 8 branches · CB/AB1/AB2</div>
            </div>
          </button>
          <button
            className="btn btn-secondary"
            id="demo-mock-btn"
            onClick={() => onDemo('mock')}
            disabled={loading}
            style={{ fontSize: 13 }}
          >
            <span>🔌</span>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontWeight: 700 }}>Offline Mock</div>
              <div style={{ fontSize: 10, color: '#64748b', fontWeight: 400 }}>4,000 students (Instant preview)</div>
            </div>
          </button>
          <button
            className="btn btn-secondary"
            id="demo-small-btn"
            onClick={() => onDemo('small')}
            disabled={loading}
            style={{ fontSize: 13 }}
          >
            <span>⚡</span>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontWeight: 700 }}>Small Demo</div>
              <div style={{ fontSize: 10, color: '#64748b', fontWeight: 400 }}>30 students, 6 courses</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
