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

![Dummy Link](https://res.cloudinary.com/tylerwashington98/image/upload/v1640927370/Meta-Minds/Group_13_1_atphx4.png)

- Sign In Screeen 

![Dummy Link](https://res.cloudinary.com/tylerwashington98/image/upload/v1640927923/Meta-Minds/Group_5_jldqyj.png)

- Sign Up Screen 

![Dummy Link](https://res.cloudinary.com/tylerwashington98/image/upload/v1640926195/Meta-Minds/Screen_Shot_2021-12-30_at_11.44.53_PM_hthrgq.png)

- Meta Screen

![Dummy Link](https://res.cloudinary.com/tylerwashington98/image/upload/v1640926311/Meta-Minds/Screen_Shot_2021-12-30_at_11.47.46_PM_rrjf8j.png)

- Mana Screen

![Dummy Link](https://res.cloudinary.com/tylerwashington98/image/upload/v1640926328/Meta-Minds/Screen_Shot_2021-12-30_at_11.47.30_PM_zxuubv.png)

- Crypto Screen

![Dummy Link](https://res.cloudinary.com/tylerwashington98/image/upload/v1640926354/Meta-Minds/Screen_Shot_2021-12-30_at_11.47.59_PM_hm7ank.png)
- Film Screen  

![Dummy Link](https://res.cloudinary.com/tylerwashington98/image/upload/v1640926368/Meta-Minds/Screen_Shot_2021-12-30_at_11.48.13_PM_gfcegk.png)

- User Posts Screen  

![Dummy Link](https://res.cloudinary.com/tylerwashington98/image/upload/v1640926408/Meta-Minds/Screen_Shot_2021-12-30_at_11.48.27_PM_zr00k7.png)

- Create Post Screen  

![Dummy Link](https://res.cloudinary.com/tylerwashington98/image/upload/v1640926432/Meta-Minds/Screen_Shot_2021-12-30_at_11.48.39_PM_m5yorn.png)

- View Post Screen  

![Dummy Link](https://res.cloudinary.com/tylerwashington98/image/upload/v1640926856/Meta-Minds/Screen_Shot_2021-12-30_at_11.45.45_PM_nfhgrw.png)

- Update Post Screen  

![Dummy Link](https://res.cloudinary.com/tylerwashington98/image/upload/v1640926449/Meta-Minds/Screen_Shot_2021-12-30_at_11.47.16_PM_sfbpml.png)






#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. Include a link to your component tree

[Component Tree Sample](https://gist.git.generalassemb.ly/davidtwhitlatch/414107e2560ae0bb65e233570f2fe056#file-component-tree-png)

#### Component Architecture

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
|__ services/

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.

[ERD Sample](https://drive.google.com/file/d/1kLyQTZqfcA4jjKWQexfEkG2UspyclK8Q/view)
<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
