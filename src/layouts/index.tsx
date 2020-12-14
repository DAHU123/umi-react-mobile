import React from 'react';
import styles from './index.less';
import { Link } from 'umi';

function Layout(props: any) {
  return (
    <div className={styles['wrap-layout']}>
      <div className='content'>
        Layout大布局对应的页面
        {props.children}
      </div>
      <div className='bottom'>
        <Link to='/home'>首页</Link>
        <Link to='/home'>内容</Link>
        <Link to='/home'>分享</Link>
        <Link to='/home'>我的</Link>
      </div>
    </div>
  )
}

export default Layout
