'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const categories = ['All', 'Interior', 'Dishes', 'Events', 'Team'];

const images = [
    { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop', category: 'Interior', span: 'col-span-2 row-span-2' },
    { src: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=600&auto=format&fit=crop', category: 'Dishes', span: '' },
    { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop', category: 'Interior', span: '' },
    { src: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&auto=format&fit=crop', category: 'Dishes', span: '' },
    { src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop', category: 'Interior', span: 'col-span-2' },
    { src: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&auto=format&fit=crop', category: 'Team', span: '' },
    { src: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&auto=format&fit=crop', category: 'Dishes', span: '' },
    { src: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=600&auto=format&fit=crop', category: 'Events', span: '' },
    { src: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&auto=format&fit=crop', category: 'Dishes', span: '' },
    { src: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&auto=format&fit=crop', category: 'Team', span: '' },
    { src: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&auto=format&fit=crop', category: 'Events', span: 'col-span-2' },
    { src: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&auto=format&fit=crop', category: 'Interior', span: '' },
];

export default function GalleryPage() {
    const [filter, setFilter] = useState('All');
    const [lightbox, setLightbox] = useState<string | null>(null);

    const filtered = filter === 'All' ? images : images.filter((img) => img.category === filter);

    return (
        <div className="min-h-screen bg-[var(--obsidian-950)] pt-24 pb-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
                    <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--copper-500)]">Gallery</span>
                    <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold text-[var(--cream-100)] sm:text-6xl">
                        A Visual Journey
                    </h1>
                </motion.div>

                {/* Filters */}
                <div className="mt-10 flex justify-center gap-2">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${filter === cat
                                ? 'bg-[var(--copper-500)] text-[var(--obsidian-950)]'
                                : 'border border-[var(--obsidian-600)] text-[var(--cream-400)] hover:border-[var(--copper-500)]/20'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div layout className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 lg:gap-4">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((img, i) => (
                            <motion.div
                                key={img.src}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, delay: i * 0.03 }}
                                className={`group relative cursor-pointer overflow-hidden rounded-xl ${img.span}`}
                                onClick={() => setLightbox(img.src)}
                            >
                                <img
                                    src={img.src}
                                    alt={img.category}
                                    className="h-48 w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110 sm:h-56 lg:h-64"
                                    style={img.span?.includes('row-span-2') ? { height: '100%' } : {}}
                                />
                                <div className="absolute inset-0 bg-[var(--obsidian-950)]/0 transition-all duration-300 group-hover:bg-[var(--obsidian-950)]/30" />
                                <div className="absolute bottom-3 left-3 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                    <span className="rounded-full bg-[var(--obsidian-950)]/80 px-3 py-1 text-xs text-[var(--cream-300)] backdrop-blur-sm">
                                        {img.category}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightbox && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--obsidian-950)]/95 backdrop-blur-xl p-4"
                        onClick={() => setLightbox(null)}
                    >
                        <button className="absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--obsidian-800)] text-[var(--cream-400)]">
                            <X className="h-6 w-6" />
                        </button>
                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            src={lightbox}
                            alt="Gallery"
                            className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
