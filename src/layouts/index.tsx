import React from 'react';
import styles from './index.less';

function Layout() {
  return (
    <div className={styles['wrap-layout']}>
      <div className='content'>
        Layout大布局对应的页面
        content
      </div>
      <div className='bottom'>
        <div>首页</div>
        <div>内容</div>
        <div>分享</div>
        <div>我的</div>
      </div>
    </div>
  )
}

export default Layout
