import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu; 
import styles from './MainLayout.less';

const MainLayout = React.createClass({
  render() {
    return (
      <div className={styles.normal}>
        <div className={styles.head}>
          <h1><Link to="/" style={{ color: 'white' }}>Demo</Link></h1>
        </div>
        <div className={styles.content}>
          <div className={styles.side}>
            <Menu style={{ width: 240,background:'#FAFAFA' }} mode="inline" onClick={this.handleClick}>
              <SubMenu key="sub1" title={<span><Icon type="appstore-o" /><span>表单小栗子</span></span>}>
                <Menu.Item key="1" style={{background:'#FAFAFA'}}><Link to="/form1">基础表单</Link></Menu.Item>
                <Menu.Item key="2" style={{background:'#FAFAFA'}}><Link to="/form2">表单校验</Link></Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="bars" /><span>表格小栗子</span></span>}>
                <Menu.Item key="3" style={{background:'#FAFAFA'}}><Link to="/table">基础表格</Link></Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title={<span><Icon type="folder" /><span>其他小栗子</span></span>}>
                <Menu.Item key="4" style={{background:'#FAFAFA'}}><Link to="/carousel">轮播图</Link></Menu.Item>
                <Menu.Item key="5" style={{background:'#FAFAFA'}}><Link to="/collapse">折叠面板</Link></Menu.Item>
                <Menu.Item key="6" style={{background:'#FAFAFA'}}><Link to="/modal">对话框</Link></Menu.Item>
              </SubMenu>
            </Menu>
          </div>
          <div className={styles.main}>
            {
              React.Children.map(this.props.children, function (child) {
                  return <div>{child}</div>;
              })
            }
          </div>
        </div>
      </div>
    );
  }
});

export default MainLayout;
