'use client'

import { useEffect } from 'react'
import { incrementVisits } from '@/app/actions'

export default function VisitTracker() {
    useEffect(() => {
        // Simple visit tracking on mount
        // In a real app, you might check for a session cookie to avoid duplicates
        const track = async () => {
            try {
                await incrementVisits()
            } catch (e) {
                console.error('Failed to track visit', e)
            }
        }
        track()
    }, [])

    return null
}
