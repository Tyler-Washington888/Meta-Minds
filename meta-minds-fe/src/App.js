import './App.css';
import { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import Landing from "./screens/Landing/Landing.jsx";
import SignIn from "./screens/SignIn/SignIn.jsx";
import SignUp from "./screens/SignUp/SignUp.jsx";
import Explore from "./screens/Explore/Explore.jsx";
import Meta from './screens/Meta/Meta.jsx';
import Mana from './screens/Mana/Mana.jsx';
import Crypto from './screens/Crypto/Crypto.jsx';
import Film from './screens/Film/Film.jsx';
import UserPosts from './screens/UserPosts/UserPosts.jsx';
import UpdatePost from './screens/UpdatePost/UpdatePost.jsx';
import CreatePost from './screens/CreatePost/CreatePost.jsx';
import ViewPost from './screens/ViewPost/ViewPost.jsx';
import { getPosts } from "./services/Posts";
import { getUsers } from "./services/Users";
import {
  loginUser,
  registerUser,
  removeToken,
  verifyUser,
} from './services/auth';
import ScrollToTop from "./components/ScrollToTop.jsx";

function App() {
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])
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
    const fecthUsers = async () => {
      const allUsers = await getUsers();
      setUsers(allUsers)
    }
    fecthUsers();
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
      <ScrollToTop >
        <Switch>
          <Route path='/create-post'>
            <Layout currentUser={currentUser} posts={posts} handleLogout={handleLogout}>
              <CreatePost currentUser={currentUser} />
            </Layout>
          </Route>
          <Route path='/update-post/:post_id'>
            <Layout currentUser={currentUser} posts={posts} handleLogout={handleLogout}>
              <UpdatePost users={users} currentUser={currentUser} />
            </Layout>
          </Route>
          <Route path='/view-post/:post_id'>
            <Layout currentUser={currentUser} posts={posts} handleLogout={handleLogout}>
              <ViewPost users={users} currentUser={currentUser} posts={posts} />
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
          <Route path='/film'>
            <Layout currentUser={currentUser} posts={posts} handleLogout={handleLogout}>
              <Film currentUser={currentUser} posts={posts} />
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
      </ScrollToTop>
    </div >
  );
}

export default App;