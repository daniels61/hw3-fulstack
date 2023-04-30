import './App.css';
import SideBar from './components/SideBar';
import Post from './components/Post';

function Navbar() {
  return (
    <div className="navbar">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
      <a href="#login" className="right-align">Login</a>
    </div>
  );
}


const lst = [
  {id: 1, title:'Blog post 1#' ,description: 'My first blog post is all about me, and how to write a new post in my blog.',publlished: '1 day ago', img: process.env.PUBLIC_URL +'/picture/Profile.png' ,  },
  {id: 2, title:'Blog post 2#' ,description: 'My second blog post is all about my blog post.',publlished: '2 day ago', img: process.env.PUBLIC_URL +'/picture/aboutme.jpg' ,  },
  {id: 3, title:'Blog post 3#' ,description: 'My Third blog post is all about me, and how to write a new post in my blog.',publlished: '3 day ago', img: process.env.PUBLIC_URL +'/picture/contact.jpg' ,  },
 
]



function App() {
  const posts = lst.map((item) => <Post key={item.id} description={item.description} img={item.img} title={item.title} publlished={item.publlished}/>)
  return (
    <div>
       <Navbar /> 
      <h1>This is My blog</h1>
      {posts}     
      <SideBar/>
    </div>
  );
}



export default App;
