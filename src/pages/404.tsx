import React from 'react';
import { Result, Icon } from 'antd-mobile';

function NoMatchPage() {
  return (
    <Result
      img={<Icon type="cross-circle-o" style={{ fill: '#F13642' }} />}
      title="404"
      message="您所访问的页面不存在"
    />
  )
}

export default NoMatchPage
