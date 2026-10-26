import { useEffect, useRef } from 'react';
import { Network } from 'vis-network/standalone';
import { getSlotColor } from '../mockData';

/**
 * ConflictGraph — Member 3: Interactive Conflict Graph View
 *
 * Renders the exam conflict graph using vis-network:
 *  - Each node = a course, colored by its assigned slot
 *  - Each edge = shared students (conflict), weighted by count
 *  - Hovering highlights the conflicting neighbors
 *  - Proves visually: no two connected nodes share the same color
 */
export default function ConflictGraph({ data }) {
  const containerRef = useRef(null);
  const networkRef   = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !data?.nodes?.length) return;

    const nodes = data.nodes.map((n) => {
      const color = getSlotColor(n.slot);
      return {
        id:    n.id,
        label: n.id,
        title: `${n.id}\n${n.label}\nSlot ${n.slot} | ${n.student_count} students | ${n.degree} conflicts`,
        size:         Math.max(18, Math.min(n.student_count / 6, 42)),
        color: {
          background: color,
          border:     color,
          highlight:  { background: '#ffffff', border: color },
          hover:      { background: `${color}cc`, border: '#ffffff' }
        },
        font: {
          size:  11,
          color: '#ffffff',
          face:  'Inter',
          bold:  { color: '#ffffff', size: 11 }
        },
        shape:       'dot',
        borderWidth: 2,
        shadow: {
          enabled: true,
          color:   `${color}66`,
          size:    12,
          x: 0, y: 3
        }
      };
    });

    const edges = data.edges.map((e, i) => ({
      id:     i,
      from:   e.from,
      to:     e.to,
      value:  e.weight,
      title:  `${e.weight} shared students`,
      color: {
        color:     'rgba(255,255,255,0.12)',
        highlight: 'rgba(255,255,255,0.5)',
        hover:     'rgba(255,255,255,0.35)'
      },
      width:      Math.max(1, Math.log(e.weight) * 0.8),
      smooth:     { type: 'continuous', roundness: 0.3 }
    }));

    const options = {
      physics: {
        enabled:   true,
        stabilization: { iterations: 150 },
        barnesHut: {
          gravitationalConstant: -12000,
          centralGravity:        0.2,
          springLength:          120,
          springConstant:        0.05,
          damping:               0.09
        }
      },
      interaction: {
        hover:          true,
        tooltipDelay:   150,
        hideEdgesOnDrag: true,
        navigationButtons: false,
        keyboard:       false
      },
      edges: {
        smooth: { type: 'continuous' }
      },
      nodes: {
        scaling: { min: 14, max: 48 }
      },
      background: 'transparent'
    };

    const network = new Network(
      containerRef.current,
      { nodes, edges },
      options
    );
    networkRef.current = network;

    // Highlight neighbors on hover
    network.on('hoverNode', ({ node }) => {
      const connectedEdges = network.getConnectedEdges(node);
      const connectedNodes = new Set(network.getConnectedNodes(node));
      connectedNodes.add(node);

      // Dim all nodes except neighbors
      const updatedNodes = data.nodes.map((n) => {
        const isConnected = connectedNodes.has(n.id);
        const color = getSlotColor(n.slot);
        return {
          id:      n.id,
          opacity: isConnected ? 1 : 0.15,
          color: {
            background: isConnected ? color : `${color}22`,
            border:     isConnected ? color : `${color}44`,
          }
        };
      });
      network.body.data.nodes.update(updatedNodes);
    });

    network.on('blurNode', () => {
      const reset = data.nodes.map((n) => {
        const color = getSlotColor(n.slot);
        return {
          id:      n.id,
          opacity: 1,
          color: {
            background: color,
            border:     color,
          }
        };
      });
      network.body.data.nodes.update(reset);
    });

    return () => {
      network.destroy();
      networkRef.current = null;
    };
  }, [data]);

  if (!data?.nodes?.length) {
    return (
      <div className="empty-state" style={{ minHeight: 320 }}>
        <div className="empty-icon">🕸️</div>
        <p>Upload enrollment data to see the conflict graph</p>
      </div>
    );
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div ref={containerRef} style={{ width: '100%', height: '100%', minHeight: 480 }} />

      {/* Legend */}
      <div style={{
        position: 'absolute',
        bottom: 16, left: 16,
        background: 'rgba(10,15,30,0.85)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 10,
        padding: '10px 14px',
        backdropFilter: 'blur(8px)',
        fontSize: 12,
        color: '#94a3b8'
      }}>
        <div style={{ fontWeight: 600, marginBottom: 8, color: '#f1f5f9', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.07em' }}>
          Slot Colors
        </div>
        {[...new Set(data.nodes.map(n => n.slot))].sort().map(slot => (
          <div key={slot} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 5 }}>
            <div style={{
              width: 10, height: 10, borderRadius: '50%',
              background: getSlotColor(slot),
              boxShadow: `0 0 6px ${getSlotColor(slot)}88`
            }} />
            <span>Slot {slot}</span>
          </div>
        ))}
      </div>

      {/* Info overlay */}
      <div style={{
        position: 'absolute',
        top: 12, right: 12,
        background: 'rgba(10,15,30,0.8)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 8,
        padding: '8px 12px',
        backdropFilter: 'blur(8px)',
        fontSize: 11,
        color: '#64748b'
      }}>
        Hover a node to highlight conflicts
      </div>
    </div>
  );
}
