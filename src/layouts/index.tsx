import React, { useEffect } from 'react';
import styles from './index.less';
import { Link } from 'umi';

function Layout(props: any) {
  return (
    <div className={styles['wrap-layout']}>
      <div className='content'>
        layouts对应的页面
        <br/>
        点击下方tab进行路由切换
        <br/>
        {props.children}
      </div>
      <div className='bottom'>
        <Link to='/home'>首页</Link>
        <Link to='/content'>内容</Link>
        <Link to='/share'>分享</Link>
        <Link to='/mine'>我的</Link>
      </div>
    </div>
  )
}

export default Layout
