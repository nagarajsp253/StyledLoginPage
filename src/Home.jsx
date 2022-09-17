import React from 'react'
import "./App.css"

const Home = () => {
  return (
    <div>
      <p>I am Home page</p>
      <div>
        <img src={require('./Images/home.png')} alt="png image" width="200" height="200" />
        <img src={require('./Images/logo.webp')} alt="webp image" width="200" height="200" />
        <img src={require('./Images/home.jfif')} alt="jfif image" width="200" height="200" />
        <img src={require('./Images/hero.svg')} alt="svg image" width="200" height="200" />
        <img src={require('./Images/home.jpg')} alt="jpg image" width="200" height="200" />
      </div>
    </div>
  )
}

export default Home
