# Meta-Minds
- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Project Overview

**Meta-Minds** is a blog that allows users to create and discover ideas related to Web3. 


<br>

## MVP

- The Meta Minds MVP is a full CRUD, full stack application with a Rails back end and React front end. It is fully responsive, and styled using CSS. 

<br>

### Goals

- RESTful JSON API built with Ruby on Rails with full CRUD
- Full CRUD interactive front end built with React
- Form to input new posts and update posts
- Display all user posts 
- Implement Auth for users
- Fully responsive styling with two media queries
- Clean, organized, and structured code

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Javascript library for building user interfaces |
|   React Router   | Library for routing, enabling navigation between components|
|   axios | Promise-based HTTP client for Node.js and the browser | 
|   bcrypt | Password hashing function | 
|   jwt | Securely transmits information between parties as a JSON object | 
|   cors | Allows a server to indicate any origins from which a browser should permit loading resources|
| CKEditor| WYSIWYG rich text editor|
| Luxon | Library for dealing with dates and times in JavaScript |
| React HTML Parser | A utility for converting HTML strings into React components | 

<br>

### Client (Front End)

#### Wireframes

[Link to Wireframes](https://www.figma.com/file/CT10ITn6qskLHAbIXvlNJA/Meta-Minds-team-library?node-id=0%3A1)

- Home Screen   

<img src='meta-minds-fe/src/misc/Group 24.png'>

- Sign In Screeen 

![Dummy Link](https://res.cloudinary.com/tylerwashington98/image/upload/v1640927923/Meta-Minds/Group_5_jldqyj.png)

- Sign Up Screen 

![Dummy Link](https://res.cloudinary.com/tylerwashington98/image/upload/v1640928027/Meta-Minds/Group_6_em96eg.png)

- Meta Screen

![Dummy Link](https://res.cloudinary.com/tylerwashington98/image/upload/v1640928109/Meta-Minds/Group_19_grf1gc.png)

- Mana Screen

![Dummy Link](https://res.cloudinary.com/tylerwashington98/image/upload/v1640928120/Meta-Minds/Group_18_yzvtsr.png)

- Crypto Screen

<img src='meta-minds-fe/src/misc/Group 20.png'> 

- Film Screen  

<img src='meta-minds-fe/src/misc/Group 21.png'>

- User Posts Screen  

<img src='meta-minds-fe/src/misc/Group 22.png'>

- Create Post Screen  

![Dummy Link](https://res.cloudinary.com/tylerwashington98/image/upload/v1640928134/Meta-Minds/Group_23_qzdz1o.png)

- View Post Screen  

![Dummy Link](https://res.cloudinary.com/tylerwashington98/image/upload/v1640928118/Meta-Minds/Group_10_rnl93d.png)

- Update Post Screen  

![Dummy Link](https://res.cloudinary.com/tylerwashington98/image/upload/v1640928136/Meta-Minds/Group_17_rocrhs.png)



#### Component Tree

![Dummy Link](https://res.cloudinary.com/tylerwashington98/image/upload/v1640990059/Meta-Minds/Group_1_1_u8mczb.png)


#### Component Architecture

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ assets/
      |__ icons
      |__ images
|__ components/
      |__ Header.jsx
      |__ Footer.jsx
      |__ Layout.jsx
      |__ ScrollToTop.jsx
|__ screens/
      |__ CreatePost.jsx
      |__ Crypto.jsx
      |__ Explore.jsx
      |__ Film.jsx
      |__ Mana.jsx
      |__ Meta.jsx
      |__ SignIn.jsx
      |__ SignUp.jsx
      |__ UpdatePost.jsx
      |__ UserPost.jsx
      |__ ViewPost.jsx
|__ services/
      |__ Api_config.js
      |__ auth.js
      |__ Posts.js
      |__ Users.js
      |__ Comments.js

```

#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Wireframes, ERD, Component Tree   |    H     |     3 hrs      |     3 hrs     |    3 hrs    |
|Set up and test CRUD on back end |    H     |     3 hrs      |     3 hrs     |    3 hrs     |
|Set up React App|    H     |     1 hrs      |     1 hrs     |    1 hrs     |
|Create file structure|    H     |     1 hrs      |     1 hrs     |    1 hrs     |
|Create and test CRUD on front end|    H     |     3 hrs      |     3 hrs     |    3 hrs     |
|Create layout components|    H     |     3 hrs      |     3 hrs     |    3 hrs     |
|Create Signin/Sign up Screens|    H     |     3 hrs      |     2 hrs     |    2 hrs     |
|Create CreatePost screen|    H     |     3 hrs      |     3 hrs     |    3 hrs     |
|Create Explore screen|    H     |     3 hrs      |     3 hrs     |    3 hrs     |
|Create Meta screen|    H     |     3 hrs      |     3 hrs     |    3 hrs     |
|Create Mana screen|    H     |     3 hrs      |     3 hrs     |    3 hrs     |
|Create Crypto screen|    H     |     3 hrs      |     3 hrs     |    3 hrs     |
|Create Film screen|    H     |     3 hrs      |     3 hrs     |    3 hrs     |
|Create UserPosts screen|    H     |     3 hrs      |     3 hrs     |    3 hrs     |
|Create CreatePost screen|    H     |     3 hrs      |     3 hrs     |    3 hrs     |
|Create ViewPost screen|    H     |     3 hrs      |     3 hrs     |    3 hrs     |
|Create UpdatePost screen|    H     |     3 hrs      |     3 hrs     |    3 hrs     |
|Basic Styling|    H     |     3 hrs      |     3 hrs     |    3 hrs     |
|Test and clean up code|    H     |     3 hrs      |     3 hrs     |    3 hrs     |
|Advanced Styling and finetuning|    M     |     5hrs      |     5 hrs     |    5 hrs     |
|Post MVP|    L    |     3 hrs      |     3 hrs    |    TBD      |
| TOTAL               |          |    61 hrs     |  61hrs    |     TBD     |

<br>

### Server (Back End)

#### ERD Model

While the ERD contains a comments table, I chose not to display the comments on the front end for aesthetic purposes. 

![Dummy Link](https://res.cloudinary.com/tylerwashington98/image/upload/v1641006604/Meta-Minds/Screen_Shot_2021-12-31_at_10.09.24_PM_w2ppna.png)

<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

***
## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
