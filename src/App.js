import React from 'react';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import NotFoundPage from './pages/NotFoundPage';
import NavBar from './NavBar';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import './App.css';



function App() {
  return (
    <Router>
    <div className="App">
      <NavBar/>
      <div className='page-body'>
        <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/about" component={AboutPage} />
        <Route path="/articles-List" component={ArticlesListPage} />
        <Route path="/article/:name" component={ArticlePage}/>
        <Route component={NotFoundPage} />
        </Switch>
     </div>
    </div>
    </Router>
  );
}

export default App;
