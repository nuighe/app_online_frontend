import { useEffect, useState } from 'react'

import axios from './util/axio.customize'
import Header from './componnent/hearder';
import { Outlet } from 'react-router-dom';

function App() {


  useEffect(() => {
    const fethHelloWorld = async () => {
      const res = await axios.get(`/category`);
      console.log(">>>> check res: ", res)
    }
    fethHelloWorld()
  }, [])
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
