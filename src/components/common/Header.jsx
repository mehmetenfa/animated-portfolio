import React, { useState } from 'react'
import { Menu } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { navlink } from '../data/dummydata'
import logo from '../data/images/logo.png'
 
export const Header = () => {
  const [responsive, setResponsive] = useState(false)
  return (
    <>
      <header>
        <div>
          <div>
            <img src={logo} alt="" data-aos='zoom-in-right' />
          </div>
          <div className={responsive ? 'hideMenu' : 'nav'}>
              {}
          </div>
        </div>
      </header>
    </>
  )
}
