import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'

export default function Layout({ children }) {  // children is the content of the page
  return (
    <div className='layout'>
        <Navbar />
        <div className='content'>
            { children }
        </div>
        <footer>
            <p>Copyright 2022 &copy; Lorenzo Mercado</p>
        </footer>
    </div>
  )
}
