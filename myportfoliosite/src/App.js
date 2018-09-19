//Entry point for website
import React, { Component } from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main'
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
          {/*This section creates the Layout of the website from React-MDL*/}
    return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-colour" title={<Link style={{textDecoration: 'none', color:'white'}} to='/'>Home</Link>} scroll>
            <Navigation>
            {/*This is the list of links in the navigation bar*/}
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color:'grey'}} to='/'>Home</Link>}>
            <Navigation>
            {/*This is the list of links in the side menu*/}
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>
    );
  }
}

export default App;
