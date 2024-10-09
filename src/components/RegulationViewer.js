import React, { useState } from 'react';
import rmdRegulations from '../data/rmdRegulations';

function RegulationViewer() {
  const [content, setContent] = useState('');

  const loadContent = async (id) => {
    if (id === 'BF-RMD-GM-01') {
      const module = await import('../data/BF-RMD-GM-01-content');
      setContent(module.default);
    }
    // Add more conditions if you have more dynamic imports
  };

  return (
    <div>
      {rmdRegulations.map((regulation) => (
        <div key={regulation.category}>
          <h2>{regulation.category}</h2>
          {regulation.items.map((item) => (
            <div key={item.id}>
              <button onClick={() => loadContent(item.id)}>{item.title}</button>
            </div>
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