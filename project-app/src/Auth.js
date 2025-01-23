import React from 'react'
import { isauthenticated } from './services'

import { Navigate, Outlet } from 'react-router-dom'

export default function Auth() {
  return (
    isauthenticated ? <Outlet /> : <Navigate to="/access" />
  )
}
// try{
// Response = await axios.}