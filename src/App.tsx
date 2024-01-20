import './App.css'
import SideBar from './components/SideBar'
import Header from './layouts/components/Header'
import MyCenter from './layouts/components/MyCenter'

function App() {
  return (
    <div className="flex bg-[#f7f8f9]">
      <SideBar />
      <div className='flex flex-col w-full m-4'>
        <Header />
        <MyCenter />
      </div>
    </div>
  )
}

export default App
