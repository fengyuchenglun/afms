import React from 'react';
import { PageHeader } from 'antd';
import pageData from 'configs/page';
import './index.scss';

export default ({ page } : { page: string; }) => {
  const data = pageData[page] || {};
  return (
    <div className="page-header">
      <PageHeader
        title={data.title || ''}
      />
    </div>
  );
}
