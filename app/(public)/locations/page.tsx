'use client';

import { motion } from 'framer-motion';
import {
    MapPin,
    Phone,
    Clock,
    Car,
    Wifi,
    Accessibility,
    Music,
    Wine,
    Star,
    Navigation,
    ShoppingBag,
    ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import Link from 'next/link';

const locations = [
    {
        name: 'Downtown',
        tagline: 'The Original',
        address: '123 Main Street, New York, NY 10001',
        phone: '(212) 555-0100',
        hours: {
            weekday: '11:00 AM – 11:00 PM',
            weekend: '10:00 AM – 12:00 AM',
        },
        features: ['Full Bar', 'Live Jazz', 'Private Room', 'Valet Parking', 'Wheelchair Accessible', 'Wi-Fi'],
        seats: 120,
        rating: 4.9,
        reviews: 1284,
        waitTime: '15 min',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&auto=format&fit=crop',
        mapEmbed: 'https://maps.google.com',
        description: 'Our flagship location in the heart of Manhattan. Where it all began in 2009, featuring the original wood-fired oven and an intimate candlelit atmosphere that has captivated New Yorkers for over fifteen years.',
    },
    {
        name: 'Westside',
        tagline: 'Garden Retreat',
        address: '456 Oak Avenue, New York, NY 10024',
        phone: '(212) 555-0200',
        hours: {
            weekday: '11:00 AM – 10:00 PM',
            weekend: '10:00 AM – 11:00 PM',
        },
        features: ['Garden Patio', 'Brunch', 'Pet-Friendly', 'Parking', 'Wheelchair Accessible', 'Wi-Fi'],
        seats: 80,
        rating: 4.8,
        reviews: 876,
        waitTime: '5 min',
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&auto=format&fit=crop',
        mapEmbed: 'https://maps.google.com',
        description: 'A tranquil escape on the Upper West Side featuring a lush garden patio and a menu celebrating seasonal, farm-to-table ingredients. Perfect for weekend brunches and intimate evening dinners.',
    },
    {
        name: 'Harbor View',
        tagline: 'Waterfront Dining',
        address: '789 Waterfront Drive, New York, NY 10280',
        phone: '(212) 555-0300',
        hours: {
            weekday: '10:00 AM – 12:00 AM',
            weekend: '10:00 AM – 1:00 AM',
        },
        features: ['Waterfront', 'Rooftop', 'Event Space', 'Valet Parking', 'Wheelchair Accessible', 'Wi-Fi'],
        seats: 200,
        rating: 4.9,
        reviews: 2103,
        waitTime: '25 min',
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&auto=format&fit=crop',
        mapEmbed: 'https://maps.google.com',
        description: 'Our crown jewel on the Battery Park waterfront. Featuring breathtaking views of the Statue of Liberty, a glamorous rooftop terrace, and our largest private event space.',
    },
];

const featureIcons: Record<string, React.ElementType> = {
    'Full Bar': Wine,
    'Live Jazz': Music,
    'Private Room': Star,
    'Valet Parking': Car,
    'Wheelchair Accessible': Accessibility,
    'Wi-Fi': Wifi,
    'Garden Patio': Star,
    'Brunch': Star,
    'Pet-Friendly': Star,
    'Parking': Car,
    'Waterfront': Star,
    'Rooftop': Star,
    'Event Space': Star,
};

export default function LocationsPage() {
    return (
        <div className="min-h-screen bg-[var(--obsidian-950)] pb-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
                    <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--copper-500)]">
                        Find Us
                    </span>
                    <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold text-[var(--cream-100)] sm:text-6xl lg:text-7xl">
                        Our Locations
                    </h1>
                    <p className="mx-auto mt-4 max-w-xl text-lg text-[var(--cream-400)]">
                        Three distinct dining experiences across New York City
                    </p>
                </motion.div>

                {/* Location Cards */}
                <div className="mt-16 space-y-20">
                    {locations.map((loc, index) => (
                        <motion.div
                            key={loc.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className={`grid gap-8 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
                        >
                            {/* Image */}
                            <div className={`group relative overflow-hidden rounded-2xl ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                                <img
                                    src={loc.image}
                                    alt={loc.name}
                                    className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105 lg:h-full"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--obsidian-950)]/80 via-transparent to-transparent" />
                                {/* Live badge */}
                                <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full border border-[var(--copper-500)]/15 bg-[var(--obsidian-950)]/70 px-3 py-1.5 backdrop-blur-sm">
                                    <span className="relative flex h-2 w-2">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                                    </span>
                                    <span className="text-xs font-medium text-[var(--cream-300)]">
                                        ~{loc.waitTime} wait
                                    </span>
                                </div>
                                {/* Rating */}
                                <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full border border-[var(--copper-500)]/15 bg-[var(--obsidian-950)]/70 px-3 py-1.5 backdrop-blur-sm">
                                    <Star className="h-3.5 w-3.5 fill-[var(--copper-500)] text-[var(--copper-500)]" />
                                    <span className="text-xs font-medium text-[var(--cream-200)]">{loc.rating}</span>
                                    <span className="text-[10px] text-[var(--cream-500)]">({loc.reviews.toLocaleString()})</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col justify-center">
                                <Badge variant="copper">{loc.tagline}</Badge>
                                <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold text-[var(--cream-100)]">
                                    {loc.name}
                                </h2>
                                <p className="mt-4 leading-relaxed text-[var(--cream-400)]">
                                    {loc.description}
                                </p>

                                {/* Details Grid */}
                                <div className="mt-8 grid grid-cols-2 gap-4">
                                    <div className="space-y-3">
                                        <div className="flex items-start gap-3">
                                            <MapPin className="mt-0.5 h-4 w-4 text-[var(--copper-500)]/50" />
                                            <p className="text-sm text-[var(--cream-300)]">{loc.address}</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Phone className="h-4 w-4 text-[var(--copper-500)]/50" />
                                            <p className="text-sm text-[var(--cream-300)]">{loc.phone}</p>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-start gap-3">
                                            <Clock className="mt-0.5 h-4 w-4 text-[var(--copper-500)]/50" />
                                            <div className="text-sm text-[var(--cream-300)]">
                                                <p>Mon-Fri: {loc.hours.weekday}</p>
                                                <p>Sat-Sun: {loc.hours.weekend}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {loc.features.map((feat) => (
                                        <Badge key={feat} variant="outline">{feat}</Badge>
                                    ))}
                                </div>

                                {/* Actions */}
                                <div className="mt-8 flex flex-wrap gap-3">
                                    <Link href="/order">
                                        <Button variant="copper" className="gap-2">
                                            <ShoppingBag className="h-4 w-4" /> Order Here
                                        </Button>
                                    </Link>
                                    <Link href="/reservations">
                                        <Button variant="outline">Reserve a Table</Button>
                                    </Link>
                                    <a href={loc.mapEmbed} target="_blank" rel="noopener noreferrer">
                                        <Button variant="ghost" className="gap-2">
                                            <Navigation className="h-4 w-4" /> Directions
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
