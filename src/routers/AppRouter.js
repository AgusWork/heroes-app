import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import LoginScreen from '../components/login/LoginScreen'
import DashboardRoutes from './DashboardRoutes';
import PrivateRoutes from './PrivateRoutes';
import PublicRoute from './PublicRoute';

const AppRouter = () => {

  
  return (
    <BrowserRouter >
      <Routes>
         
          <Route path='/login' element={<PublicRoute> <LoginScreen/> </PublicRoute>}></Route>
          <Route path='/*' element={<PrivateRoutes> <DashboardRoutes/> </PrivateRoutes>} />
          {/* <Route path='/*' element={<DashboardRoutes/>}></Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
