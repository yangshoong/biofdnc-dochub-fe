import React, { useState, useCallback } from 'react';
import rmdRegulations from '../data/rmdRegulations';

function RegulationViewer() {
  const [content, setContent] = useState('');

  const loadContent = useCallback(async (id) => {
    try {
      const module = await import(`../data/${id}-content`);
      setContent(module.default);
    } catch (error) {
      console.error(`Failed to load content for ${id}:`, error);
      setContent('Content not found');
    }
  }, []);

  return (
    <div>
      {rmdRegulations.map((regulation) => (
        <div key={regulation.category}>
          <h2>{regulation.category}</h2>
          {regulation.items.map((item) => (
            <button key={item.id} onClick={() => loadContent(item.id)}>
              {item.title}
            </button>
          ))}
        </div>
      ))}
      <div>
        <h3>Content</h3>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default RegulationViewer;