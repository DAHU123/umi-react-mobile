import React from 'react';
import styles from './index.less';
import { Button, Radio, Accordion, List } from 'antd-mobile';

const RadioItem = Radio.RadioItem;

export default (props: any) => {
  const onChange = (key: any) => {
    console.log(key);
  }
  return (
    <div>
      <Button type="primary">primary</Button>
      <h1 className={styles.title}>Page index</h1>
      {props.children}
      <br/>
      <Radio className="my-radio" onChange={e => console.log('checkbox', e)}>Agree</Radio>
      <Accordion accordion openAnimation={{}} className="my-accordion" onChange={onChange}>
        <Accordion.Panel header="Title 1">
          <List className="my-list">
            <List.Item>content 1</List.Item>
            <List.Item>content 2</List.Item>
            <List.Item>content 3</List.Item>
          </List>
        </Accordion.Panel>
        <Accordion.Panel header="Title 2" className="pad">this is panel content2 or other</Accordion.Panel>
        <Accordion.Panel header="Title 3" className="pad">
          text text text text text text text text text text text text text text text
        </Accordion.Panel>
      </Accordion>
    </div>
  );
}
