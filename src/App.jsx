import React from 'react'
import "./styles/root.scss"
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import News from './components/News.jsx';
import Footer from './components/Footer.jsx';
import "./styles/media.scss"
function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <News />
      <Footer />
    </>
  )
}

export default App;