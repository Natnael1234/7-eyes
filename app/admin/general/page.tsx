import { getSiteConfig, updateSiteConfig } from "@/app/actions"

export default async function GeneralSettingsPage() {
    const config = await getSiteConfig()

    return (
        <div className="max-w-4xl">
            <h1 className="text-3xl font-bold mb-8">General Settings</h1>

            <form action={updateSiteConfig} className="space-y-8">

                {/* Hero Section */}
                <div className="bg-white/5 border border-white/10 p-6 rounded-xl space-y-4">
                    <h2 className="text-xl font-semibold text-yellow-brand mb-4">Hero Section</h2>
                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Hero Title</label>
                        <input type="text" name="heroTitle" defaultValue={config?.heroTitle} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white" />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Hero Subtitle</label>
                        <input type="text" name="heroSubtitle" defaultValue={config?.heroSubtitle} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white" />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Hero Image URL (Optional)</label>
                        <input type="text" name="heroImage" defaultValue={config?.heroImage || ''} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm text-gray-400 mb-1">Years Experience</label>
                            <input type="number" name="experienceYears" defaultValue={config?.experienceYears || 0} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white" />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-400 mb-1">Global Partners</label>
                            <input type="number" name="partnersCount" defaultValue={config?.partnersCount || 0} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white" />
                        </div>
                    </div>
                </div>

                {/* About Section */}
                <div className="bg-white/5 border border-white/10 p-6 rounded-xl space-y-4">
                    <h2 className="text-xl font-semibold text-yellow-brand mb-4">About Section</h2>
                    <div>
                        <label className="block text-sm text-gray-400 mb-1">About Text</label>
                        <textarea name="aboutText" rows={4} defaultValue={config?.aboutText || ''} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white" />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Mission</label>
                        <textarea name="mission" rows={3} defaultValue={config?.mission || ''} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white" />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Vision</label>
                        <textarea name="vision" rows={3} defaultValue={config?.vision || ''} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white" />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-400 mb-1">About Image URL (Optional)</label>
                        <input type="text" name="aboutImage" defaultValue={config?.aboutImage || ''} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white" />
                    </div>
                </div>

                {/* Contact Info */}
                <div className="bg-white/5 border border-white/10 p-6 rounded-xl space-y-4">
                    <h2 className="text-xl font-semibold text-yellow-brand mb-4">Contact Info</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm text-gray-400 mb-1">Email</label>
                            <input type="email" name="email" defaultValue={config?.email} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white" />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-400 mb-1">Phone</label>
                            <input type="text" name="phone" defaultValue={config?.phone} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Address</label>
                        <input type="text" name="address" defaultValue={config?.address} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white" />
                    </div>
                </div>

                {/* Social Media */}
                <div className="bg-white/5 border border-white/10 p-6 rounded-xl space-y-4">
                    <h2 className="text-xl font-semibold text-yellow-brand mb-4">Social Media</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm text-gray-400 mb-1">Facebook</label>
                            <input type="text" name="facebook" defaultValue={config?.facebook || ''} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white" placeholder="https://facebook.com/..." />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-400 mb-1">Instagram</label>
                            <input type="text" name="instagram" defaultValue={config?.instagram || ''} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white" placeholder="https://instagram.com/..." />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-400 mb-1">LinkedIn</label>
                            <input type="text" name="linkedin" defaultValue={config?.linkedin || ''} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white" placeholder="https://linkedin.com/..." />
                        </div>
                    </div>
                </div>

                <button type="submit" className="bg-yellow-brand text-black font-bold py-3 px-8 rounded-xl hover:bg-yellow-brand/90 transition-colors">
                    Save Changes
                </button>
            </form>
        </div>
    )
}
