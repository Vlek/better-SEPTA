import React, { Component } from 'react';
import "antd/dist/antd.css";
import GoogleMap from "../GoogleMap";

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { FaTrain,FaSubway,FaBusAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom'

import Actions from '../../actions/Actions.js';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Outline extends Component {


constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = { collapsed: false};
  }

  onSubmit(e) {
      e.preventDefault();
      Actions.searchRoutes();
    }




  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['3']} mode="inline">
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
                  <span onClick = {this.onSubmit}>Trolley</span>
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
              <Menu.Item key="7"> Train 2</Menu.Item>
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
              <Menu.Item key="8"> Bus 1</Menu.Item>
              <Menu.Item key="9"> Bus 2</Menu.Item>
            </SubMenu>

          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} >Routes Are Displayed On The Google Maps Below:</Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }} />

            <div style={{ padding: 24, background: '#fff', minHeight: 550 }}><GoogleMap /></div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Better-Septa ©2019 Created by Derek McCammond, Samrid Prasad, Pratik Shekhar</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Outline;