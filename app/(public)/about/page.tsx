'use client';

import { motion } from 'framer-motion';
import {
    Award,
    Leaf,
    Users,
    Heart,
    ChefHat,
    Clock,
    Globe,
    Star,
    MapPin,
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const timeline = [
    { year: '2009', title: 'The Beginning', desc: 'Chef Marco Bellini opens the first Bella Italia in a 30-seat space in downtown Manhattan, serving family recipes from Tuscany.' },
    { year: '2012', title: 'Critics\' Darling', desc: 'Awarded "Best New Italian" by New York Magazine. First Michelin Bib Gourmand recognition.' },
    { year: '2015', title: 'Westside Opens', desc: 'The garden-patio concept that brought Italian farm-to-table dining to the Upper West Side.' },
    { year: '2018', title: 'Harbor View Debut', desc: 'Our most ambitious location: waterfront dining with rooftop terrace overlooking the Statue of Liberty.' },
    { year: '2021', title: 'Digital Evolution', desc: 'Launched our full digital platform — online ordering, loyalty rewards, and real-time tracking.' },
    { year: '2024', title: 'Sustainability Award', desc: 'Named NYC\'s Most Sustainable Restaurant Group. 100% renewable energy, zero-waste kitchen.' },
];

const team = [
    {
        name: 'Marco Bellini',
        role: 'Executive Chef & Founder',
        bio: 'Born in Florence, trained at Le Cordon Bleu. 25+ years crafting authentic Italian cuisine with a modern edge.',
        image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&auto=format&fit=crop',
    },
    {
        name: 'Sofia Marchetti',
        role: 'Head Pastry Chef',
        bio: 'Former Pasticceria Marchesi. Brings Milanese dessert artistry to every dolci creation.',
        image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&auto=format&fit=crop',
    },
    {
        name: 'Alessandro Vitale',
        role: 'Sommelier & Bar Director',
        bio: 'Certified Master Sommelier with a 600-label Italian wine collection and innovative cocktail program.',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop',
    },
];

const values = [
    { icon: Leaf, title: 'Sustainability', desc: 'Zero-waste kitchens, local sourcing, 100% renewable energy across all locations.' },
    { icon: Heart, title: 'Authenticity', desc: 'Every recipe rooted in Italian tradition, using imported DOP ingredients from trusted artisans.' },
    { icon: Users, title: 'Community', desc: 'We feed more than guests — supporting local farms, food banks, and culinary education programs.' },
    { icon: Globe, title: 'Innovation', desc: 'From our digital ordering platform to experimental tasting menus, we push boundaries while honoring roots.' },
];

const stats = [
    { value: '15+', label: 'Years' },
    { value: '3', label: 'Locations' },
    { value: '85+', label: 'Team Members' },
    { value: '500K+', label: 'Guests Served' },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[var(--obsidian-950)] pt-24 pb-32">
            {/* Hero */}
            <section className="relative overflow-hidden">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl py-16">
                        <Badge variant="copper" className="gap-2"><Award className="h-3 w-3" /> Est. 2009</Badge>
                        <h1 className="mt-6 font-[family-name:var(--font-display)] text-5xl font-bold text-[var(--cream-100)] sm:text-6xl lg:text-7xl">
                            Our Story
                        </h1>
                        <p className="mt-6 text-xl leading-relaxed text-[var(--cream-400)]">
                            From a 30-seat trattoria in downtown Manhattan to three iconic New York locations,
                            Bella Italia is a story of passion, authenticity, and the relentless pursuit of the
                            perfect Italian dining experience.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="border-y border-[var(--copper-500)]/5 bg-[var(--obsidian-900)]/50">
                <div className="mx-auto max-w-5xl grid grid-cols-2 sm:grid-cols-4 gap-8 px-4 py-12 sm:px-6">
                    {stats.map((stat) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <p className="font-[family-name:var(--font-display)] text-4xl font-bold text-[var(--copper-400)]">
                                {stat.value}
                            </p>
                            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[var(--cream-500)]">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Timeline */}
            <section className="py-24">
                <div className="mx-auto max-w-3xl px-4 sm:px-6">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center font-[family-name:var(--font-display)] text-4xl font-bold text-[var(--cream-100)]"
                    >
                        The Journey
                    </motion.h2>
                    <div className="mt-16 relative">
                        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--copper-500)]/30 via-[var(--copper-500)]/10 to-transparent" />
                        <div className="space-y-12">
                            {timeline.map((event, i) => (
                                <motion.div
                                    key={event.year}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="relative flex gap-8 pl-2"
                                >
                                    <div className="relative flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border border-[var(--copper-500)]/20 bg-[var(--obsidian-850)]">
                                        <span className="text-xs font-bold text-[var(--copper-400)]">{event.year}</span>
                                    </div>
                                    <div className="pt-3">
                                        <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--cream-100)]">
                                            {event.title}
                                        </h3>
                                        <p className="mt-2 text-sm leading-relaxed text-[var(--cream-400)]">{event.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 border-t border-[var(--copper-500)]/5">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center font-[family-name:var(--font-display)] text-4xl font-bold text-[var(--cream-100)]"
                    >
                        What We Stand For
                    </motion.h2>
                    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {values.map((v, i) => (
                            <motion.div
                                key={v.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="premium-card p-6 text-center flex flex-col items-center"
                            >
                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--copper-500)]/10 bg-[var(--copper-500)]/5">
                                    <v.icon className="h-5 w-5 text-[var(--copper-500)]" />
                                </div>
                                <h3 className="mt-4 font-[family-name:var(--font-display)] text-lg font-bold text-[var(--cream-100)]">
                                    {v.title}
                                </h3>
                                <p className="mt-2 text-sm text-[var(--cream-400)]">{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-24 border-t border-[var(--copper-500)]/5">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center font-[family-name:var(--font-display)] text-4xl font-bold text-[var(--cream-100)]"
                    >
                        Meet the Team
                    </motion.h2>
                    <div className="mt-14 grid gap-8 sm:grid-cols-3">
                        {team.map((member, i) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group premium-card overflow-hidden flex flex-col"
                            >
                                <div className="h-64 overflow-hidden bg-gradient-to-br from-[var(--obsidian-800)] to-[var(--obsidian-900)]">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--cream-100)]">
                                        {member.name}
                                    </h3>
                                    <p className="mt-1 text-xs uppercase tracking-wider text-[var(--copper-400)]">
                                        {member.role}
                                    </p>
                                    <p className="mt-3 text-sm text-[var(--cream-400)]">{member.bio}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 border-t border-[var(--copper-500)]/5">
                <div className="mx-auto max-w-2xl text-center px-4">
                    <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold text-[var(--cream-100)]">
                        Come Dine with Us
                    </h2>
                    <p className="mt-4 text-[var(--cream-400)]">
                        Experience our passion for Italian cuisine firsthand.
                    </p>
                    <div className="mt-8 flex justify-center gap-4">
                        <Link href="/reservations"><Button variant="copper" size="lg">Make a Reservation</Button></Link>
                        <Link href="/menu"><Button variant="outline" size="lg">View Menu</Button></Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
