import React from 'react'
import './App.css'
import Header from './Header'
import Contents from './About'
import Footer from './Footer'
const App =() =>{
  return (
    <div className ="container">
      <Header />
      <Contents />
      <Footer />
    </div>
  )
}


export default App;
