import { useState } from 'react'

import './App.css'

import { Outlet } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        container principal
      </div>
      <Header/>
      <Outlet/>
      <Footer/>

    </>
  )
}

export default App
