import React from 'react';
import { QueueAnim } from 'antd';

const IndexView = () => {
  return (
    <div style={{ textAlign: 'center', fontSize: 24, lineHeight: 2, marginTop: 100}}>
      <QueueAnim delay={500} style={{ height: 150 }}>
      <div key="a">hi 这里是 Ant Design 的小 Demo </div>
      <div key="b">欢迎点击左侧导航查看相应演示</div>
      </QueueAnim>
    </div>
  );
};

export default IndexView;