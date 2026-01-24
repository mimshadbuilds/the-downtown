import Navbar from './Navbar'
import logo from '../assets/logo.png'

export default function Header() {
    return (
        <header className="bg-white border-b border-yelloish">
            <div className='max-w-7xl mx-auto px-5 py-5'>
            <div className="flex flex-col items-center gap-4">
          <img 
            src={logo} 
            alt="" 
            className="h-8 w-auto sm:h-10"
          />
        </div>
            </div>
            <Navbar />
        </header>
    )
}