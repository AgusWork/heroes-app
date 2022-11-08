import NavBar from "../components/Ui/NavBar"
import { Route, Routes } from 'react-router-dom'
import MarvelScreen from '../components/marvel/MarvelScreen'
import SearchScreen from '../components/search/SearchScreen'
import DcScreen from '../components/DC/DcScreen'
import Hero from "../components/hero/Hero"

const DashboardRoutes = () => {
  return (
    <>
      <NavBar/>
      <div className='container'>

      <Routes>
          <Route path='marvel' element={<MarvelScreen />}></Route>
          <Route path='DC' element={<DcScreen/>}></Route>
          <Route path='search' element={<SearchScreen/>}></Route>
          <Route path="hero/:heroId" element={<Hero/>} ></Route> 
          <Route path='/' element={<MarvelScreen />}></Route>
      </Routes>
      </div>
    </>
  )
}

export default DashboardRoutes
