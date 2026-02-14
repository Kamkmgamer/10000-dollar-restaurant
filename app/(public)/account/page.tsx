'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    User,
    ShoppingBag,
    Heart,
    MapPin,
    Award,
    Gift,
    CreditCard,
    Clock,
    Star,
    Settings,
    LogOut,
    TrendingUp,
    ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Input } from '@/components/ui/Input';
import Link from 'next/link';

const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'orders', label: 'Orders', icon: ShoppingBag },
    { id: 'favorites', label: 'Favorites', icon: Heart },
    { id: 'settings', label: 'Settings', icon: Settings },
];

const recentOrders = [
    { id: '#BEL-2847', date: 'Feb 14, 2026', total: '$176.00', status: 'Delivered', items: 4 },
    { id: '#BEL-2820', date: 'Feb 10, 2026', total: '$92.50', status: 'Delivered', items: 3 },
    { id: '#BEL-2798', date: 'Feb 6, 2026', total: '$134.00', status: 'Delivered', items: 5 },
];

const favorites = [
    { name: 'Ossobuco alla Milanese', price: 48, category: 'Secondi', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=300&auto=format&fit=crop' },
    { name: 'Tagliatelle al Tartufo', price: 38, category: 'Pasta', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=300&auto=format&fit=crop' },
    { name: 'Tiramisu Classico', price: 16, category: 'Dolci', image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=300&auto=format&fit=crop' },
    { name: 'Negroni Classico', price: 18, category: 'Beverages', image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=300&auto=format&fit=crop' },
];

export default function AccountPage() {
    const [activeTab, setActiveTab] = useState('overview');

    return (
        <div className="min-h-screen bg-[var(--obsidian-950)] pt-24 pb-32">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between">
                    <div>
                        <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--cream-100)]">
                            Welcome back, Alex
                        </h1>
                        <p className="mt-1 text-sm text-[var(--cream-400)]">Member since January 2024</p>
                    </div>
                    <Badge variant="copper" className="gap-1.5"><Award className="h-3 w-3" /> Silver Member</Badge>
                </motion.div>

                {/* Quick Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4"
                >
                    {[
                        { label: 'Loyalty Points', value: '847', icon: Award, color: 'var(--copper-400)' },
                        { label: 'Total Orders', value: '34', icon: ShoppingBag, color: 'var(--copper-400)' },
                        { label: 'Favorites', value: '12', icon: Heart, color: 'var(--copper-400)' },
                        { label: 'Gift Cards Sent', value: '3', icon: Gift, color: 'var(--copper-400)' },
                    ].map((stat) => (
                        <div key={stat.label} className="premium-card p-5 text-center">
                            <stat.icon className="mx-auto h-5 w-5" style={{ color: stat.color }} />
                            <p className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--cream-100)]">{stat.value}</p>
                            <p className="mt-0.5 text-[10px] uppercase tracking-wider text-[var(--cream-500)]">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>

                {/* Tabs */}
                <div className="mt-10 flex gap-1 border-b border-[var(--obsidian-700)]">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 border-b-2 px-5 py-3 text-sm font-medium transition-all ${activeTab === tab.id
                                ? 'border-[var(--copper-500)] text-[var(--copper-400)]'
                                : 'border-transparent text-[var(--cream-500)] hover:text-[var(--cream-300)]'
                                }`}
                        >
                            <tab.icon className="h-4 w-4" />
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="mt-8">
                    {activeTab === 'overview' && (
                        <div className="space-y-6">
                            {/* Loyalty Progress */}
                            <div className="premium-card p-6">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-medium text-[var(--cream-100)]">Loyalty Progress</h3>
                                    <Link href="/loyalty"><span className="text-xs text-[var(--copper-400)]">View Details →</span></Link>
                                </div>
                                <div className="mt-4">
                                    <div className="flex justify-between text-xs text-[var(--cream-500)]">
                                        <span>Silver — 847 pts</span>
                                        <span>Gold — 1,500 pts</span>
                                    </div>
                                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-[var(--obsidian-700)]">
                                        <motion.div initial={{ width: 0 }} animate={{ width: '56%' }} transition={{ duration: 1.2 }}
                                            className="h-full rounded-full bg-gradient-to-r from-[var(--copper-600)] to-[var(--copper-400)]"
                                        />
                                    </div>
                                    <p className="mt-2 text-xs text-[var(--cream-500)]">653 points to Gold tier</p>
                                </div>
                            </div>

                            {/* Recent Orders */}
                            <div className="premium-card divide-y divide-[var(--obsidian-700)]">
                                <div className="p-6 flex items-center justify-between">
                                    <h3 className="font-medium text-[var(--cream-100)]">Recent Orders</h3>
                                    <button onClick={() => setActiveTab('orders')} className="text-xs text-[var(--copper-400)]">View All →</button>
                                </div>
                                {recentOrders.map((order) => (
                                    <div key={order.id} className="flex items-center justify-between p-6">
                                        <div>
                                            <p className="text-sm font-medium text-[var(--cream-100)]">{order.id}</p>
                                            <p className="text-xs text-[var(--cream-500)]">{order.date} · {order.items} items</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm font-medium text-[var(--cream-100)]">{order.total}</p>
                                            <Badge variant="success">{order.status}</Badge>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'orders' && (
                        <div className="premium-card divide-y divide-[var(--obsidian-700)]">
                            <div className="p-6"><h3 className="font-medium text-[var(--cream-100)]">All Orders</h3></div>
                            {[...recentOrders, ...recentOrders].map((order, i) => (
                                <div key={i} className="flex items-center justify-between p-6">
                                    <div>
                                        <p className="text-sm font-medium text-[var(--cream-100)]">{order.id}</p>
                                        <p className="text-xs text-[var(--cream-500)]">{order.date} · {order.items} items</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="text-right">
                                            <p className="text-sm font-medium text-[var(--cream-100)]">{order.total}</p>
                                            <Badge variant="success">{order.status}</Badge>
                                        </div>
                                        <Button variant="ghost" size="sm">Reorder</Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === 'favorites' && (
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {favorites.map((item) => (
                                <div key={item.name} className="group premium-card overflow-hidden flex flex-col">
                                    <div className="h-40 overflow-hidden">
                                        <img src={item.image} alt={item.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                    </div>
                                    <div className="p-4 flex-1 flex flex-col">
                                        <p className="text-[10px] uppercase tracking-wider text-[var(--copper-500)]">{item.category}</p>
                                        <p className="mt-1 font-medium text-[var(--cream-100)]">{item.name}</p>
                                        <div className="mt-auto pt-3 flex items-center justify-between">
                                            <span className="text-lg font-bold text-[var(--copper-400)]">${item.price}</span>
                                            <Button variant="copper" size="sm" className="gap-1"><ShoppingBag className="h-3 w-3" /> Order</Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === 'settings' && (
                        <div className="space-y-6 max-w-xl">
                            <div className="premium-card p-6 space-y-5">
                                <h3 className="text-sm uppercase tracking-wider text-[var(--copper-400)]">Profile</h3>
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <Input label="First Name" defaultValue="Alex" id="accFirstName" />
                                    <Input label="Last Name" defaultValue="Johnson" id="accLastName" />
                                </div>
                                <Input label="Email" defaultValue="alex@example.com" id="accEmail" />
                                <Input label="Phone" defaultValue="(212) 555-0000" id="accPhone" />
                                <Button variant="copper">Save Changes</Button>
                            </div>
                            <div className="premium-card p-6 space-y-4">
                                <h3 className="text-sm uppercase tracking-wider text-[var(--copper-400)]">Preferences</h3>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-[var(--cream-300)]">Email Notifications</span>
                                    <div className="h-6 w-11 rounded-full bg-[var(--copper-500)] p-0.5">
                                        <div className="h-5 w-5 translate-x-5 rounded-full bg-white transition-transform" />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-[var(--cream-300)]">SMS Order Updates</span>
                                    <div className="h-6 w-11 rounded-full bg-[var(--copper-500)] p-0.5">
                                        <div className="h-5 w-5 translate-x-5 rounded-full bg-white transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
