import React, { Component, Suspense, lazy } from 'react';
import CacheBuster from './CacheBuster';
import './App.css';
const Sample =  lazy(() => import('./Sample')) ;

class App extends Component {
  render() {
    return (
      <CacheBuster>
        {({ loading, isLatestVersion, refreshCacheAndReload }) => {
          if (loading) return null;
          if (!loading && !isLatestVersion) {
            refreshCacheAndReload();
          }

          return (
            <Suspense fallback={<p>loading</p>}>
              <div className="App">
              <header className="App-header">
                <h1>Cache Busting - Example</h1>
                <p>
                  Bundle version - <code>v{global.appVersion}</code>
                </p>
              </header>
              <Sample />
            </div>
            </Suspense>
          );
        }}
      </CacheBuster>
    );
  }
}

export default App;
