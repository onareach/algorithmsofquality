'use client';

import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidProps {
  chart: string;
}

export default function Mermaid({ chart }: MermaidProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const renderMermaid = async () => {
      if (ref.current) {
        try {
          // Initialize mermaid only once
          mermaid.initialize({
            startOnLoad: false,
            theme: 'default',
            securityLevel: 'loose',
            er: {
              fontSize: 14,
              useMaxWidth: true,
            },
            flowchart: {
              useMaxWidth: true,
            },
          });
          
          const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
          
          // Use mermaid.render instead of init for better error handling
          const { svg } = await mermaid.render(id, chart);
          ref.current.innerHTML = svg;
        } catch (error) {
          console.error('Mermaid rendering error:', error);
          // Fallback to code block if rendering fails
          ref.current.innerHTML = `<pre><code>${chart}</code></pre>`;
        }
      }
    };

    renderMermaid();
  }, [chart]);

  return <div ref={ref} className="my-6 w-full overflow-x-auto" />;
}
