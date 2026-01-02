'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()

    const links = [
        { href: '/admin/dashboard', label: 'Dashboard' },
        { href: '/admin/experiences', label: 'Experiences' },
        { href: '/admin/partners', label: 'Partners' },
        { href: '/admin/general', label: 'General Info' },
    ]

    return (
        <div className="min-h-screen bg-gray-900 text-white flex">
            {/* Sidebar */}
            <aside className="w-64 bg-black/50 border-r border-white/10 p-6">
                <div className="mb-8">
                    <h1 className="text-xl font-bold text-yellow-brand">Admin Panel</h1>
                </div>
                <nav className="space-y-2">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`block px-4 py-2 rounded-lg transition-colors ${pathname === link.href
                                ? 'bg-yellow-brand text-black font-semibold'
                                : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/"
                        target="_blank"
                        className="block px-4 py-2 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white mt-8 border-t border-white/10 pt-4"
                    >
                        View Site
                    </Link>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-y-auto">
                {children}
            </main>
        </div>
    )
}
