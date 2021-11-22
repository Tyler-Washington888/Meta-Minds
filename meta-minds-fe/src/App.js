import './App.css';
import "./App.css";
import { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Landing from "./screens/Landing/Landing";
import SignIn from "./screens/SignIn/SignIn";
import SignUp from "./screens/SignUp/SignUp";
import Explore from "./screens/Explore/Explore";
import Meta from './screens/Meta/Meta.jsx';
import Mana from './screens/Mana/Mana';
import Crypto from './screens/Crypto/Crypto';
import Conspiracy from './screens/Conspiracy/Conspiracy';
import UserPosts from './screens/UserPosts/UserPosts';
import UpdatePost from './screens/UpdatePost/UpdatePost';
import CreatePost from './screens/CreatePost/CreatePost';
import ViewPost from './screens/ViewPost/ViewPost';
import { getPosts } from './Services/Posts';
import {
  loginUser,
  registerUser,
  removeToken,
  verifyUser,
} from './Services/auth';

function App() {
  const [posts, setPosts] = useState([])
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getPosts();
      setPosts(allPosts);
    }
    fetchPosts();
  }, [])

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push('/explore');
  };

  const handleRegister = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push('/explore');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
  };

  return (
    <div className="App">
      <Switch>
        <Route path='/create-post'>
          <Layout currentUser={currentUser} posts={posts} handleLogout={handleLogout}>
            <CreatePost currentUser={currentUser} />
          </Layout>
        </Route>
        <Route path='/update-post/:post_id'>
          <Layout currentUser={currentUser} posts={posts} handleLogout={handleLogout}>
            <UpdatePost />
          </Layout>
        </Route>
        <Route path='/view-post/:post_id'>
          <Layout currentUser={currentUser} posts={posts} handleLogout={handleLogout}>
            <ViewPost posts={posts} />
          </Layout>
        </Route>
        <Route path='/user-posts/:id'>
          <Layout currentUser={currentUser} posts={posts} handleLogout={handleLogout}>
            <UserPosts currentUser={currentUser} posts={posts} />
          </Layout>
        </Route>
        <Route path='/explore'>
          <Layout className='' currentUser={currentUser} posts={posts} handleLogout={handleLogout}>
            <Explore posts={posts} />
          </Layout >
        </Route>
        <Route path='/meta'>
          <Layout currentUser={currentUser} posts={posts} handleLogout={handleLogout}>
            <Meta currentUser={currentUser} posts={posts} />
          </Layout>
        </Route>
        <Route path='/mana'>
          <Layout currentUser={currentUser} posts={posts} handleLogout={handleLogout}>
            <Mana currentUser={currentUser} posts={posts} />
          </Layout>
        </Route>
        <Route path='/crypto'>
          <Layout currentUser={currentUser} posts={posts} handleLogout={handleLogout}>
            <Crypto currentUser={currentUser} posts={posts} />
          </Layout>
        </Route>
        <Route path='/conspiracy'>
          <Layout currentUser={currentUser} posts={posts} handleLogout={handleLogout}>
            <Conspiracy currentUser={currentUser} posts={posts} />
          </Layout>
        </Route>
        <Route path="/sign-in">
          <SignIn handleLogin={handleLogin} />
        </Route>
        <Route path='/sign-up'>
          <SignUp handleRegister={handleRegister} />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </div >
  );
}

export default App;