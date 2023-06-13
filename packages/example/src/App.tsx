import {Layout, Menu} from 'antd';
import "./App.css";
import {Outlet} from "react-router-dom";

const { Header, Content, Footer } = Layout;

export function App() {

  return (
    <Layout className="layout">
      <Header className="header" style={{height: 67}}>
        <div className="logo"/>
        <Menu mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Account</Menu.Item>
          <Menu.Item key="6">Transfer</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '50px 50px', minHeight: "calc(100vh - 67px - 64px)" }}>
        <div className="site-layout-content">
          <Outlet />
        </div>
      </Content>
      <Footer style={{textAlign: 'center'}}>Visit the <a href="https://github.com/AleoHQ/sdk">Aleo Snap Github
        repo</a>.</Footer>
    </Layout>
  )
}
