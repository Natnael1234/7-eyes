'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { registerAdmin } from '@/app/actions' // We will assume this is where it is

export default function SignUpPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')
        setSuccess(false)

        try {
            const formData = new FormData()
            formData.append('email', email)
            formData.append('password', password)

            await registerAdmin(formData)
            setSuccess(true)
            setTimeout(() => {
                router.push('/admin/login')
            }, 2000)
        } catch (err: any) {
            setError(err.message || 'Failed to register')
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-black">
            <div className="bg-gray-900 p-8 rounded-xl border border-white/10 w-full max-w-md">
                <h1 className="text-2xl font-bold text-white mb-6 text-center">Admin Sign Up</h1>

                {error && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-3 rounded-lg mb-4 text-sm">
                        {error}
                    </div>
                )}

                {success && (
                    <div className="bg-green-500/10 border border-green-500/20 text-green-500 p-3 rounded-lg mb-4 text-sm">
                        Registration successful! Redirecting...
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
                            required
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
                            required
                            minLength={6}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-yellow-brand text-black font-bold py-2 rounded-lg hover:bg-yellow-brand/90 transition-colors"
                    >
                        Create Account
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <Link href="/admin/login" className="text-gray-400 hover:text-white text-sm">
                        Already have an account? Sign In
                    </Link>
                </div>
            </div>
        </div>
    )
}
