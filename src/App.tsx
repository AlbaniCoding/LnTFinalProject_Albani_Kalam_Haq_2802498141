import HomePage from './pages/HomePage'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import ProductsPage from './pages/ProductsPage'
import AdminPanel from './pages/AdminPanel'
import RegisterPage from './pages/RegisterPage'
import AdminEdit from './pages/AdminEdit'
import AdminCreate from './pages/AdminCreate'
import Checkout from './pages/Checkout'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/login' element={<LoginPage/>}></Route>
      <Route path='/register' element={<RegisterPage/>}></Route>
      <Route path='/products' element={<ProductsPage/>}></Route>
      <Route path='/admin' element= {<AdminPanel/>}></Route>
      <Route path='/edit' element={<AdminEdit/>}></Route>
      <Route path='/create' element={<AdminCreate/>}></Route>
      <Route path='/checkout' element={<Checkout/>}></Route>
    </Routes>
  )
}

export default App
