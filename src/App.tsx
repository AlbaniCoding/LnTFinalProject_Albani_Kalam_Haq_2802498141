import HomePage from './pages/HomePage'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import ProductsPage from './pages/ProductsPage'
import AdminPanel from './pages/AdminPanel'
import RegisterPage from './pages/RegisterPage'
function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/login' element={<LoginPage/>}></Route>
      <Route path='/register' element={<RegisterPage/>}></Route>
      <Route path='/products' element={<ProductsPage/>}></Route>
      <Route path='/admin' element= {<AdminPanel/>}></Route>
    </Routes>
  )
}

export default App
