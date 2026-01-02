'use client'

import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const result = await signIn('credentials', {
            redirect: false,
            email,
            password,
        })

        if (result?.error) {
            setError('Invalid email or password')
        } else {
            router.refresh()
            router.push('/admin/dashboard')
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-black">
            <div className="bg-gray-900 p-8 rounded-xl border border-white/10 w-full max-w-md">
                <h1 className="text-2xl font-bold text-white mb-6 text-center">Admin Login</h1>

                {error && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-3 rounded-lg mb-4 text-sm">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-400 text-sm mb-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-yellow-brand focus:outline-none"
                            placeholder="admin@seveneyes.com"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-400 text-sm mb-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-yellow-brand focus:outline-none"
                            placeholder="••••••••"
                        />
                        <p className="text-xs text-gray-500 mt-1">Default password: admin123</p>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-yellow-brand text-black font-bold py-2 rounded-lg hover:bg-yellow-brand/90 transition-colors"
                    >
                        Sign In
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <Link href="/admin/signup" className="text-gray-400 hover:text-white text-sm">
                        Don't have an account? Sign Up
                    </Link>
                </div>
            </div>
        </div>
    )
}
