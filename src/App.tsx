import React, { useState, useEffect } from 'react';
import RSSParser from 'rss-parser';

import './App.css';
import Sidebar from './components/Sidebar/Sidebar';

import Navbar from './components/Navbar/Navbar';
import { Route, BrowserRouter } from 'react-router-dom';
import Blog, { BlogTypes } from './components/Blog/Blog';
import Resume from './components/Resume/Resume';

const App: React.FC= () => {
  const [items, setItems] = useState<undefined | RSSParser.Item[]>([]);

  async function fetchData() {
      let parser = new RSSParser();
      const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"

      parser.parseURL(CORS_PROXY + 'https://medium.com/feed/@samjwright', function(err, feed) {
          setItems(feed.items ? feed.items : []);
      });
  }

  useEffect(() => {
      fetchData();
  }, []);
  
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar className="sidebar"/>
        <div className="content">
          <Navbar />
          <Route exact path="/" component={Resume} />
          <Route path={["/blog/:postname","/blog"]} component={(props: BlogTypes) => <Blog {...props} items={items ? items : []} />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
