import './App.css'
import Navbar from './components/navbar'
import Dashboard from './components/Dashboard'
import Category from './components/Category'
import Ongoing from './components/Ongoing'
import Completed from './components/Completed'
import Suggested from './components/Suggested'

function App() {

  return (
    <>
    <div className='flex flex-col min-h-screen bg-gray-800 text-white '>
      <Navbar />
      <Dashboard />
      <Category />
      <Ongoing />
      <Completed />
      <Suggested />
    </div>
    </>
  )
}

export default App
