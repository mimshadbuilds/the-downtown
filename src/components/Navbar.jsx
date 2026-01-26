export default function Navbar() {
    const navLinks = ['HOME', 'NEWS', 'POLITICS', 'BUSINESS', 'NATIONAL', 'CULTURE', 'OPINION', 'LIFESTYLE', 'SPORTS']
    return (
        <nav className="bg-white border-t border-blink">
            <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6">
                <ul className="flex items-center gap-x-3 overflow-x-auto whitespace-nowrap py-3 text-[0.7rem] font-semibold uppercase text-blink scrollbar-hide sm:gap-x-4 sm:py-3.5 sm:text-xs md:flex-wrap md:justify-center md:py-4 md:text-sm">
                    {navLinks.map((link) => (
                    <li key={link}>
                      <a className="border-b-2 border-transparent pb-0.5 transition-colors hover:border-blink sm:pb-1"
                        href="#"
                        >
                        {link}
                        </a>
                    </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}