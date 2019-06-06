import React, { Component } from 'react';
import "antd/dist/antd.css";
import Home from "./Home.js";

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { FaTrain,FaSubway,FaBusAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class HomeLayout extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
            <Link to="/">
              <Icon type="home" theme="filled" />
              <span>Home</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
            <Link to="/about">
              <Icon type="team" />
              <span>About Us</span>
              </Link>
            </Menu.Item>
            <FaSubway />
            <SubMenu
              key="sub1"
              title={
                <span>
                <Link to="/outline">
                  <span>Trolley</span>
                  </Link>
                </span>
              }
            >
              <Menu.Item key="3"> Trolley 1</Menu.Item>
              <Menu.Item key="4"> Trolley 2</Menu.Item>
              <Menu.Item key="5"> Trolley 3</Menu.Item>
            </SubMenu>
             <FaTrain />
            <SubMenu
              key="sub2"
              title={
                <span>
                <Link to="/outline">
                  <span>Train</span>
                  </Link>
                </span>
              }
            >
              <Menu.Item key="6"> Train 1</Menu.Item>
              <Menu.Item key="8"> Train 2</Menu.Item>
            </SubMenu>
            <FaBusAlt />
            <SubMenu
              key="sub3"
              title={
                <span>
                <Link to="/outline">
                  <span>Bus</span>
                  </Link>
                </span>
              }
            >
              <Menu.Item key="6"> Bus 1</Menu.Item>
              <Menu.Item key="8"> Bus 2</Menu.Item>
            </SubMenu>

          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} >Routes Are Displayed On The Google Maps Below:</Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }} />

            <div style={{ padding: 24, background: '#fff', minHeight: 550 }}><Home /></div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Better-Septa ©2019 Created by Derek McCammond, Samrid Prasad, Pratik ShekharD</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default HomeLayout;