'use client';

import { motion } from 'framer-motion';
import {
    Users,
    Wine,
    Music,
    Sparkles,
    ChefHat,
    Camera,
    Star,
    ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import Link from 'next/link';

const spaces = [
    {
        name: 'The Wine Room',
        capacity: '8-12 guests',
        desc: 'An intimate vault-style space surrounded by our curated wine collection. Perfect for exclusive tastings and small celebrations.',
        features: ['Curated Wine Wall', 'Custom Tasting Menus', 'Dedicated Sommelier'],
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&auto=format&fit=crop',
        price: 'From $150/person',
    },
    {
        name: 'The Chef\'s Table',
        capacity: '4-8 guests',
        desc: 'Front-row seats to the kitchen. Watch Chef Marco craft your personalized multi-course meal in real time.',
        features: ['Live Kitchen View', 'Personalized Menu', 'Direct Chef Interaction'],
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop',
        price: 'From $200/person',
    },
    {
        name: 'The Garden Terrace',
        capacity: '20-50 guests',
        desc: 'An enchanting outdoor space adorned with string lights and climbing vines, ideal for receptions and garden parties.',
        features: ['Open-Air Setting', 'Live Music Option', 'Custom Decorations'],
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
        price: 'From $120/person',
    },
    {
        name: 'The Grand Hall',
        capacity: '50-150 guests',
        desc: 'Our premier event space with vaulted ceilings, grand chandeliers, and a dedicated bar — for weddings, galas, and landmark celebrations.',
        features: ['Full Event Staff', 'Custom Lighting', 'A/V Equipment', 'Dance Floor'],
        image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&auto=format&fit=crop',
        price: 'Custom Quote',
    },
];

export default function PrivateDiningPage() {
    return (
        <div className="min-h-screen bg-[var(--obsidian-950)] pt-24 pb-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
                    <Badge variant="copper" className="gap-1.5"><Sparkles className="h-3 w-3" /> Private Dining</Badge>
                    <h1 className="mt-6 font-[family-name:var(--font-display)] text-5xl font-bold text-[var(--cream-100)] sm:text-6xl">
                        Exclusive Spaces for
                        <br />
                        <span className="gradient-text">Unforgettable Moments</span>
                    </h1>
                    <p className="mt-4 max-w-xl text-lg text-[var(--cream-400)]">
                        From intimate celebrations to grand events — tailored menus, dedicated service, and extraordinary settings.
                    </p>
                </motion.div>

                <div className="mt-16 space-y-16">
                    {spaces.map((space, i) => (
                        <motion.div
                            key={space.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className={`grid gap-8 lg:grid-cols-2 ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
                        >
                            <div className={`group relative overflow-hidden rounded-2xl ${i % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                                <img src={space.image} alt={space.name} className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105 lg:h-full" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--obsidian-950)]/60 via-transparent to-transparent" />
                                <Badge variant="copper" className="absolute top-4 left-4">{space.capacity}</Badge>
                            </div>
                            <div className="flex flex-col justify-center">
                                <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--cream-100)]">
                                    {space.name}
                                </h2>
                                <p className="mt-4 leading-relaxed text-[var(--cream-400)]">{space.desc}</p>
                                <ul className="mt-6 space-y-2">
                                    {space.features.map((f) => (
                                        <li key={f} className="flex items-center gap-2 text-sm text-[var(--cream-300)]">
                                            <Star className="h-3 w-3 fill-[var(--copper-500)] text-[var(--copper-500)]" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-6 font-[family-name:var(--font-display)] text-xl font-bold text-[var(--copper-400)]">
                                    {space.price}
                                </p>
                                <div className="mt-6">
                                    <Link href="/contact">
                                        <Button variant="copper" className="gap-2">
                                            Inquire Now <ArrowRight className="h-4 w-4" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
