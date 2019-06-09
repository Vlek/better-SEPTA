import React, { Component } from 'react';
import "antd/dist/antd.css";
import Home from "./Home.js";

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { FaSubway } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout;

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
             <Menu.Item key="3">
            <Link to="/outline">
               <Icon type="down-circle" theme="filled" />
              <span>Trolley</span>
              </Link>
            </Menu.Item>
          </Menu>
          </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} ><h1>Better SEPTA Map</h1></Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }} />

            <div style={{ padding: 24, background: '#fff', minHeight: 550 }}><Home /></div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Better-Septa ©2019 Created by Derek McCammond, Samridh Prasad, Pratik Shekhar</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default HomeLayout;