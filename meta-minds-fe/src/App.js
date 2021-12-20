import './App.css';
import { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from "react-router";
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
  }, [posts.length])

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



  // <div className="App">
  //   <Switch>
  //     <Route path="/explore" exact component={Contacts} />
  //   </Switch>
  // </div >

  return (
    <div className="App">


      <Switch>
        <Route exact path='/create-post'>
          <ScrollToTop />
          <Layout currentUser={currentUser} posts={posts} handleLogout={handleLogout}>
            <CreatePost currentUser={currentUser} />
          </Layout>
        </Route>

        <Route exact path='/update-post/:post_id'>
          <ScrollToTop />
          <Layout currentUser={currentUser} posts={posts} handleLogout={handleLogout}>
            <UpdatePost users={users} currentUser={currentUser} />
          </Layout>
        </Route>

        <Route exact path='/view-post/:post_id'>
          <ScrollToTop />
          <Layout currentUser={currentUser} posts={posts} handleLogout={handleLogout}>
            <ViewPost users={users} currentUser={currentUser} posts={posts} />
          </Layout>
        </Route>

        <Route exact path='/user-posts/:id'>
          <ScrollToTop />
          <Layout currentUser={currentUser} posts={posts} handleLogout={handleLogout}>
            <UserPosts currentUser={currentUser} posts={posts} />
          </Layout>
        </Route>

        <Route exact path='/explore'>
          <ScrollToTop />
          <Layout className='' currentUser={currentUser} posts={posts} handleLogout={handleLogout}>
            <Explore posts={posts} />
          </Layout >
        </Route>

        <Route path='/meta'>
          <ScrollToTop />
          <Layout currentUser={currentUser} posts={posts} handleLogout={handleLogout}>
            <Meta currentUser={currentUser} posts={posts} />
          </Layout>
        </Route>

        <Route path='/mana'>
          <ScrollToTop />
          <Layout currentUser={currentUser} posts={posts} handleLogout={handleLogout}>
            <Mana currentUser={currentUser} posts={posts} />
          </Layout>
        </Route>

        <Route path='/crypto'>
          <ScrollToTop />
          <Layout currentUser={currentUser} posts={posts} handleLogout={handleLogout}>
            <Crypto currentUser={currentUser} posts={posts} />
          </Layout>
        </Route>

        <Route exact path='/film'>
          <ScrollToTop />
          <Layout currentUser={currentUser} posts={posts} handleLogout={handleLogout}>
            <Film currentUser={currentUser} posts={posts} />
          </Layout>
        </Route>

        <Route exact path="/sign-in">
          <SignIn handleLogin={handleLogin} />
        </Route>

        <Route exact path='/sign-up'>
          <SignUp handleRegister={handleRegister} />
        </Route>

        <Route exact path="/">
          <Landing />
        </Route>

      </Switch>


    </div >
  );
}

export default App;