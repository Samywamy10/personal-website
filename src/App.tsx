import React from 'react';

import './App.css';
import Sidebar from './components/Sidebar/Sidebar';

import Navbar from './components/Navbar/Navbar';
import { Route, BrowserRouter } from 'react-router-dom';
import Blog from './components/Blog/Blog';
import Resume from './components/Resume/Resume';

const App: React.FC= () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar className="sidebar"/>
        <div className="content">
          <Navbar />
          <Route exact path="/" component={Resume} />
          <Route path={["/blog/:postname","/blog"]} component={Blog} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
