export default function Navbar() {
    const navLinks = ['HOME', 'NEWS', 'POLITICS', 'BUSINESS', 'NATIONAL', 'CULTURE', 'OPINION', 'LIFESTYLE', 'SPORTS']
    return (
        <nav className="bg-white border-t border-blink">
            <div className="mx-auto max-w-7xl px-6">
                <ul className="flex flex-wrap justify-center py-5 gap-x-4 gap-y-2 text-sm font-semibold uppercase text-blink">
                    {navLinks.map((link) => (
                    <li key={link}>
                      <a className="border-b-2 border-transparent pb-1 transition-colors hover:border-blink"
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