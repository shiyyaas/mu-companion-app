import './App.css'
import Navbar from './components/navbar'
import Dashboard from './components/Dashboard'
import Category from './components/Category'
import Summary from './components/Summary'

function App() {

  return (
    <>
    <div className='flex flex-col min-h-screen bg-gray-900 text-white '>
      <Navbar />
      <Dashboard />
      <Category />
      <Summary />
    </div>
    </>
  )
}

export default App
