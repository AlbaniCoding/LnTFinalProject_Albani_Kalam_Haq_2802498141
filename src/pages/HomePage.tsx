
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar></Navbar>
      <div className='flex flex-col justify-center align-center items-center'>
        <h1 className='pt-10 w-max'>Belanja Lebih Nyaman dengan TokoHappy</h1>
        <p>Registrasi sekarang demi merasakan kemudahan dan kenyamanan berbelanja langsung dari rumah anda</p>
        <button className='text-white mt-40 p-5 w-3xs rounded-full bg-blue-500 hover:bg-blue-700' onClick={() => navigate('/register')}>Registrasi Sekarang</button>
        <div className='p-48'>
          <h1>About Us</h1>
          <p>Kami adalah TokoHappy Toko E-Commerce nomor 1 di Indonesia, hadir untuk memberikan pelayanan berbelanja online terbaik</p>
        </div>
      </div>
      
    </>
  )
}

export default HomePage