// import { useState } from 'react'
import Navbar from '../components/Navbar'

function HomePage() {

  return (
    <>
      <Navbar></Navbar>
      <div className='flex flex-col justify-center align-center items-center'>
        <h1 className='pt-10 w-max'>Belanja Lebih Nyaman dengan TokoHappy</h1>
        <p>Registrasi sekarang demi merasakan kemudahan dan kenyamanan berbelanja langsung dari rumah anda</p>
        <button className='text-white mt-40 p-5 w-3xs rounded-full bg-blue-500 hover:bg-blue-700' onClick={() => console.log("registering")}>Registrasi Sekarang</button>
      </div>
    </>
  )
}

export default HomePage