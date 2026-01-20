import Navbar from './Navbar'
export default function Header() {
    return (
        <header className="bg-white border-b border-blink">
            <div className='container mx-auto px-4 py-4 text-center'>
                <h1 className='text-4xl text-black font-bold tracking-wide'>THE DOWNTOWN</h1>
            </div>
            <Navbar />
        </header>
    )
}