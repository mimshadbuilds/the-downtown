import Navbar from './Navbar'
import logo from '../assets/logo.png'
export default function Header() {
    return (
        <header className="bg-white">
            <div className='container mx-auto px-4 py-4 text-center'>
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