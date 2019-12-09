import React, { useEffect } from 'react';
import pageData from 'configs/page';

export default ({ page } : { page: string; }) => {
  useEffect(() => {
    window.Prism.highlightAll();
  }, [page]);
  const data = pageData[page] || { code: [] };
  return (
    data.code.map((code: string, index: number) => (
      <pre key={index}>
        <code className="language-jsx line-numbers">
          {code ? code : `// Error: code of "${code}" not found`}
        </code>
      </pre>
    ))
  );
}