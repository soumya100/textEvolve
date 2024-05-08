'use client'
import NavBar from '@/components/NavBar'
import React from 'react'
import { NavBarHooks } from './Hooks'

const NavBarContainer = () => {

  const {resolvedTheme, handleDarkTheme, handleLightTheme}=NavBarHooks()

  return (
    <NavBar theme={resolvedTheme} handleDarkTheme={handleDarkTheme} handleLightTheme={handleLightTheme}/>
  )
}

export default NavBarContainer
