import Navbar from './Navbar'
import logo from '../assets/logo.png'

export default function Header() {
    return (
        <header className="bg-white border-b border-yelloish">
            <div className='max-w-7xl mx-auto px-3 py-3 sm:px-4 sm:py-4 md:px-6 md:py-5'>
              <div className="flex items-center justify-between md:justify-center">
                <button className="text-xl sm:text-2xl md:hidden">☰</button>
                <img
                  src={logo}
                  alt="The Downtown"
                  className="h-4 w-auto sm:h-6 md:h-8"
                />
              </div>
            </div>
            <div className="hidden md:block">
              <Navbar />
            </div>
        </header>
    )
}