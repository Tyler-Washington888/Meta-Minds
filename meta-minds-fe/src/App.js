import './App.css';
import { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from "react-router";
import Layout from "./components/Layout/Layout.jsx";
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
  const [refresh, setRefresh] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getPosts();
      setPosts(allPosts);
    }
    fetchPosts();
  }, [refresh])

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
    history.push('/');
  };

  const handleRegister = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push('/');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
  };



  return (
    <div className="App">

      <Switch>
        <Route exact path='/create-post'>
          <ScrollToTop />
          <Layout currentUser={currentUser} posts={posts} handleLogout={handleLogout}>
            <CreatePost setRefresh={setRefresh} currentUser={currentUser} />
          </Layout>
        </Route>

        <Route exact path='/update-post/:post_id'>
          <ScrollToTop />
          <Layout currentUser={currentUser} posts={posts} handleLogout={handleLogout}>
            <UpdatePost setRefresh={setRefresh} users={users} currentUser={currentUser} />
          </Layout>
        </Route>

        <Route exact path='/view-post/:post_id'>
          <ScrollToTop />
          <Layout currentUser={currentUser} posts={posts} handleLogout={handleLogout}>
            <ViewPost setRefresh={setRefresh} users={users} currentUser={currentUser} posts={posts} />
          </Layout>
        </Route>

        <Route exact path='/user-posts/:id'>
          <ScrollToTop />
          <Layout currentUser={currentUser} posts={posts} handleLogout={handleLogout}>
            <UserPosts setRefresh={setRefresh} currentUser={currentUser} posts={posts} />
          </Layout>
        </Route>

        <Route path='/meta'>
          <ScrollToTop />
          <Layout currentUser={currentUser} posts={posts} handleLogout={handleLogout}>
            <Meta setRefresh={setRefresh} currentUser={currentUser} posts={posts} />
          </Layout>
        </Route>

        <Route path='/mana'>
          <ScrollToTop />
          <Layout currentUser={currentUser} posts={posts} handleLogout={handleLogout}>
            <Mana setRefresh={setRefresh} currentUser={currentUser} posts={posts} />
          </Layout>
        </Route>

        <Route path='/crypto'>
          <ScrollToTop />
          <Layout currentUser={currentUser} posts={posts} handleLogout={handleLogout}>
            <Crypto setRefresh={setRefresh} currentUser={currentUser} posts={posts} />
          </Layout>
        </Route>

        <Route exact path='/film'>
          <ScrollToTop />
          <Layout currentUser={currentUser} posts={posts} handleLogout={handleLogout}>
            <Film setRefresh={setRefresh} currentUser={currentUser} posts={posts} />
          </Layout>
        </Route>

        <Route exact path="/sign-in">
          <SignIn handleLogin={handleLogin} />
        </Route>

        <Route exact path='/sign-up'>
          <SignUp handleRegister={handleRegister} />
        </Route>

        <Route exact path='/'>
          <ScrollToTop />
          <Layout currentUser={currentUser} posts={posts} handleLogout={handleLogout}>
            <Explore refresh={refresh} posts={posts} />
          </Layout >
        </Route>

      </Switch>

    </div >
  );
}

export default App;