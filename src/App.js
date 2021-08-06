import './App.css';
import ThemeContext, { theme } from './components/ThemeContext';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import 'fontsource-roboto';
import Home from './components/Home';
import PostPage from './components/PostPage';

function mapStateToProps(state) {
  return {
    postData : state.post
  }
}

function App({postData}) {

  return (
      <ThemeContext.Provider value= { theme }>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Home postList={postData}/>
            </Route>
            <Route path="/post/:postId">
              <PostPage postList={postData}/>
            </Route>
          </Switch>
        </Router> 
      </ThemeContext.Provider>   
  );
}

export default connect(mapStateToProps)(App)
