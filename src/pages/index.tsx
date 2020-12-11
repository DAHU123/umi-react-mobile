import React from 'react';
import styles from './index.less';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';

export default (props: any) => {
  return (
    <div>
      <Button type="primary">primary</Button>
      <h1 className={styles.title}>Page index</h1>
      {props.children}
    </div>
  );
}
