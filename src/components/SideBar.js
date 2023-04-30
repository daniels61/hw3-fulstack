import React, { Component } from 'react';

class SideBar extends Component {
  render() {
  return (
    <div className="right">
      <h1>Latest</h1>
      <h3>Blog post 1# <a href="#home">Go to page</a></h3>
      <h3>Blog post 2# <a href="#about">Go to page</a></h3>
      <h3>Blog post 3# <a href="#contact">Go to page</a></h3>
      <p>________________________</p>
      <h1>Popular</h1>
      <h3>Blog post 3# <a href="#contact">Go to page</a></h3>
      <h3>Blog post 1# <a href="#home">Go to page</a></h3>
      <h3>Blog post 2# <a href="#about">Go to page</a></h3>
    </div>
  );
}
}
export default SideBar;

