export default function Navbar() {
    const navLinks = ['HOME', 'NEWS', 'POLITICS', 'BUSINESS', 'NATIONAL', 'CULTURE', 'OPINION', 'LIFESTYLE', 'SPORTS']
    return (
        <nav className="bg-white border-t border-blink">
            <div className="mx-auto max-w-7xl px-6">
                <ul className="flex flex-wrap justify-center py-3 gap-x-4 gap-y-2 text-sm font-semibold uppercase tracking-[0.2em] text-blink">
                    {navLinks.map((link) => (
                    <li key={link}>
                        <a href="#" className="relative pb-2 transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-blink after:opacity-0 after:transition-opacity hover:after:opacity-100">
                        {link}
                        </a>
                    </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}