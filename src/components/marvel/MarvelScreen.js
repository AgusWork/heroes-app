import React from 'react'
import HeroList from '../hero/HeroList'

const MarvelScreen = () => {
  return (
    <>
      <h1 style={{ width:"300px", height:"60px" ,backgroundColor:"white", borderRadius:"40px", textAlign:"center"}}>MarvelScreen</h1>
      <hr style={{backgroundColor:"white"}}/>
      <HeroList publisher={'Marvel Comics'}/>
    </>
  )
}

export default MarvelScreen
