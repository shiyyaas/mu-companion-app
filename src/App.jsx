import './App.css'
import Navbar from './components/navbar'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <div className='flex flex-col min-h-screen bg-gray-800 text-white '>
      <Navbar  />
      <Footer />
    </div>
    </>
  )
}

export default App
