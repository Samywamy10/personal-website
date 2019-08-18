import React, { useState, useEffect } from 'react';
import RSSParser from 'rss-parser';

import './App.css';
import Sidebar from './components/Sidebar/Sidebar';

import Navbar from './components/Navbar/Navbar';
import { Route, BrowserRouter } from 'react-router-dom';
import Blog, { BlogTypes } from './components/Blog/Blog';
import Resume from './components/Resume/Resume';
import { createMuiTheme } from '@material-ui/core';
import { orange } from '@material-ui/core/colors';
import { ThemeProvider } from '@material-ui/styles';

const App: React.FC= () => {
  const [items, setItems] = useState<undefined | RSSParser.Item[]>([]);

  const theme = createMuiTheme({
    palette: {
      primary: orange,
    }
  });

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
      <ThemeProvider theme={theme}>
        <div className="app">
          <Sidebar className="sidebar"/>
          <div className="content">
            <Navbar />
            <Route exact path="/" component={Resume} />
            <Route path={["/blog/:postname","/blog"]} component={(props: BlogTypes) => <Blog {...props} items={items ? items : []} />} />
          </div>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
