import React, { useState } from 'react';
import rmdRegulations from '../data/rmdStandards';

function StandardViewer() {
  const [content, setContent] = useState('');

  const loadContent = async (id) => {
    try {
      const module = await import(`../data/${id}-content`);
      console.log("Loaded content:", module.default);  // 디버깅용 로그
      setContent(<module.default />);  // 컴포넌트로 렌더링
    } catch (error) {
      console.error("콘텐츠 로딩 오류:", error);
      setContent(`콘텐츠를 불러올 수 없습니다. (${id})`);
    }
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
      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
      }}>
        <h3>Content</h3>
        {typeof content === 'string' ? <p>{content}</p> : content}
      </div>
    </div>
  );
}

export default StandardViewer;
