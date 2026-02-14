'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Search,
    Filter,
    ShoppingBag,
    Plus,
    Minus,
    X,
    Flame,
    Leaf,
    Wheat,
    Timer,
    Star,
    ChevronRight,
    AlertTriangle,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { TiltCard } from '@/components/3d/TiltCard';
import Link from 'next/link';

const categories = [
    'All',
    'Antipasti',
    'Pasta',
    'Secondi',
    'Pesce',
    'Contorni',
    'Dolci',
    'Beverages',
];

const allergenFilters = [
    { id: 'vegetarian', label: 'Vegetarian', icon: Leaf },
    { id: 'gluten-free', label: 'Gluten-Free', icon: Wheat },
    { id: 'spicy', label: 'Spicy', icon: Flame },
];

const menuItems = [
    // Antipasti
    { name: 'Burrata e Prosciutto', description: 'Creamy burrata, San Daniele prosciutto, arugula, aged balsamic, grilled focaccia', price: 22, category: 'Antipasti', popular: true, vegetarian: false, glutenFree: false, spicy: false, prepTime: '10 min', image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=400&auto=format&fit=crop' },
    { name: 'Carpaccio di Manzo', description: 'Thinly sliced Wagyu beef, truffle aioli, arugula, shaved parmigiano, capers', price: 26, category: 'Antipasti', popular: false, vegetarian: false, glutenFree: true, spicy: false, prepTime: '8 min', image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=400&auto=format&fit=crop' },
    { name: 'Arancini al Tartufo', description: 'Crispy risotto balls stuffed with black truffle and fontina, marinara dip', price: 18, category: 'Antipasti', popular: true, vegetarian: true, glutenFree: false, spicy: false, prepTime: '12 min', image: 'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?w=400&auto=format&fit=crop' },
    { name: 'Calamari Fritti', description: 'Flash-fried squid rings, cherry pepper aioli, lemon, fresh herbs', price: 19, category: 'Antipasti', popular: false, vegetarian: false, glutenFree: false, spicy: true, prepTime: '10 min', image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&auto=format&fit=crop' },
    // Pasta
    { name: 'Tagliatelle al Tartufo', description: 'Fresh egg pasta, black truffle shavings, parmigiano fonduta, truffle oil', price: 38, category: 'Pasta', popular: true, vegetarian: true, glutenFree: false, spicy: false, prepTime: '25 min', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&auto=format&fit=crop' },
    { name: 'Cacio e Pepe', description: 'Tonnarelli pasta, Pecorino Romano, freshly cracked Tellicherry pepper', price: 28, category: 'Pasta', popular: true, vegetarian: true, glutenFree: false, spicy: true, prepTime: '20 min', image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&auto=format&fit=crop' },
    { name: 'Lobster Ravioli', description: 'Maine lobster-filled pasta pillows, saffron cream, dill, tobiko', price: 44, category: 'Pasta', popular: true, vegetarian: false, glutenFree: false, spicy: false, prepTime: '30 min', image: 'https://images.unsplash.com/photo-1587740908075-9e245070dfaa?w=400&auto=format&fit=crop' },
    { name: 'Pappardelle al Ragù', description: 'Wide ribbon pasta, slow-braised short rib ragù, ricotta salata, basil', price: 32, category: 'Pasta', popular: false, vegetarian: false, glutenFree: false, spicy: false, prepTime: '25 min', image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&auto=format&fit=crop' },
    // Secondi
    { name: 'Ossobuco alla Milanese', description: 'Slow-braised veal shank, saffron risotto, gremolata, roasted marrow', price: 48, category: 'Secondi', popular: true, vegetarian: false, glutenFree: true, spicy: false, prepTime: '45 min', image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400&auto=format&fit=crop' },
    { name: 'Bistecca alla Fiorentina', description: '40oz dry-aged Porterhouse, rosemary, garlic, extra-virgin olive oil', price: 95, category: 'Secondi', popular: true, vegetarian: false, glutenFree: true, spicy: false, prepTime: '35 min', image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=400&auto=format&fit=crop' },
    { name: 'Pollo alla Parmigiana', description: 'Crispy chicken, San Marzano tomato sauce, melted mozzarella, fresh basil', price: 32, category: 'Secondi', popular: false, vegetarian: false, glutenFree: false, spicy: false, prepTime: '30 min', image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=400&auto=format&fit=crop' },
    // Pesce
    { name: 'Branzino al Cartoccio', description: 'Mediterranean sea bass in parchment, cherry tomatoes, olives, capers', price: 42, category: 'Pesce', popular: true, vegetarian: false, glutenFree: true, spicy: false, prepTime: '30 min', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&auto=format&fit=crop' },
    { name: 'Gamberi alla Griglia', description: 'Grilled tiger prawns, garlic butter, chili flakes, grilled lemon', price: 36, category: 'Pesce', popular: false, vegetarian: false, glutenFree: true, spicy: true, prepTime: '15 min', image: 'https://images.unsplash.com/photo-1625943553852-781c6dd46faa?w=400&auto=format&fit=crop' },
    // Contorni
    { name: 'Truffle Fries', description: 'Hand-cut fries, truffle oil, parmigiano, fresh herbs', price: 14, category: 'Contorni', popular: true, vegetarian: true, glutenFree: true, spicy: false, prepTime: '10 min', image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&auto=format&fit=crop' },
    { name: 'Roasted Broccolini', description: 'Charred broccolini, garlic, chili, lemon zest, almonds', price: 12, category: 'Contorni', popular: false, vegetarian: true, glutenFree: true, spicy: true, prepTime: '8 min', image: 'https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?w=400&auto=format&fit=crop' },
    // Dolci
    { name: 'Tiramisu Classico', description: 'Mascarpone cream, espresso-soaked savoiardi, Valrhona cocoa', price: 16, category: 'Dolci', popular: true, vegetarian: true, glutenFree: false, spicy: false, prepTime: '5 min', image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&auto=format&fit=crop' },
    { name: 'Panna Cotta', description: 'Vanilla bean cream, seasonal berry compote, pistachio crumble', price: 14, category: 'Dolci', popular: false, vegetarian: true, glutenFree: true, spicy: false, prepTime: '5 min', image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&auto=format&fit=crop' },
    // Beverages
    { name: 'Negroni Classico', description: 'Tanqueray gin, Campari, Carpano Antica Formula', price: 18, category: 'Beverages', popular: true, vegetarian: true, glutenFree: true, spicy: false, prepTime: '3 min', image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&auto=format&fit=crop' },
    { name: 'Espresso Martini', description: 'Absolut vodka, Kahlúa, freshly pulled espresso, vanilla', price: 17, category: 'Beverages', popular: true, vegetarian: true, glutenFree: true, spicy: false, prepTime: '3 min', image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&auto=format&fit=crop' },
];

interface CartItem {
    name: string;
    price: number;
    quantity: number;
}

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function MenuPage() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [activeFilters, setActiveFilters] = useState<string[]>([]);
    const [cart, setCart] = useState<CartItem[]>([]);
    const [cartOpen, setCartOpen] = useState(false);

    const filteredItems = useMemo(() => {
        return menuItems.filter((item) => {
            const matchCategory = selectedCategory === 'All' || item.category === selectedCategory;
            const matchSearch =
                searchQuery === '' ||
                item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.description.toLowerCase().includes(searchQuery.toLowerCase());
            const matchFilters =
                activeFilters.length === 0 ||
                activeFilters.every((f) => {
                    if (f === 'vegetarian') return item.vegetarian;
                    if (f === 'gluten-free') return item.glutenFree;
                    if (f === 'spicy') return item.spicy;
                    return true;
                });
            return matchCategory && matchSearch && matchFilters;
        });
    }, [selectedCategory, searchQuery, activeFilters]);

    const addToCart = (item: { name: string; price: number }) => {
        setCart((prev) => {
            const existing = prev.find((c) => c.name === item.name);
            if (existing) {
                return prev.map((c) =>
                    c.name === item.name ? { ...c, quantity: c.quantity + 1 } : c
                );
            }
            return [...prev, { name: item.name, price: item.price, quantity: 1 }];
        });
    };

    const removeFromCart = (name: string) => {
        setCart((prev) => {
            const existing = prev.find((c) => c.name === name);
            if (existing && existing.quantity > 1) {
                return prev.map((c) =>
                    c.name === name ? { ...c, quantity: c.quantity - 1 } : c
                );
            }
            return prev.filter((c) => c.name !== name);
        });
    };

    const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    const toggleFilter = (f: string) => {
        setActiveFilters((prev) =>
            prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]
        );
    };

    return (
        <div className="min-h-screen bg-[var(--obsidian-950)]">
            {/* Hero */}
            <section className="relative pb-16 pt-8">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--copper-500)]">
                            Our Menu
                        </span>
                        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold text-[var(--cream-100)] sm:text-6xl lg:text-7xl">
                            Taste of Italy
                        </h1>
                        <p className="mt-4 max-w-xl text-lg text-[var(--cream-400)]">
                            Discover our carefully curated dishes, crafted with the finest imported Italian ingredients and seasonal produce.
                        </p>
                    </motion.div>

                    {/* Search + Filters */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"
                    >
                        {/* Search */}
                        <div className="relative max-w-md flex-1">
                            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--cream-500)]" />
                            <input
                                type="text"
                                placeholder="Search dishes..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full rounded-full border border-[var(--obsidian-600)] bg-[var(--obsidian-800)] py-3 pl-11 pr-4 text-sm text-[var(--cream-100)] placeholder:text-[var(--cream-500)]/50 transition-all focus:border-[var(--copper-500)]/30 focus:outline-none focus:ring-2 focus:ring-[var(--copper-500)]/20"
                            />
                        </div>

                        {/* Allergen Filters */}
                        <div className="flex flex-wrap gap-2">
                            {allergenFilters.map((filter) => (
                                <button
                                    key={filter.id}
                                    onClick={() => toggleFilter(filter.id)}
                                    className={`flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-wider transition-all duration-300 ${activeFilters.includes(filter.id)
                                        ? 'border-[var(--copper-500)]/40 bg-[var(--copper-500)]/10 text-[var(--copper-400)]'
                                        : 'border-[var(--obsidian-600)] bg-transparent text-[var(--cream-400)] hover:border-[var(--copper-500)]/20'
                                        }`}
                                >
                                    <filter.icon className="h-3.5 w-3.5" />
                                    {filter.label}
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Category Tabs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-8 flex gap-2 overflow-x-auto pb-2 scrollbar-hide"
                    >
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${selectedCategory === cat
                                    ? 'bg-[var(--copper-500)] text-[var(--obsidian-950)]'
                                    : 'border border-[var(--obsidian-600)] text-[var(--cream-400)] hover:border-[var(--copper-500)]/20 hover:text-[var(--copper-400)]'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Menu Grid */}
            <section className="pb-32">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <AnimatePresence mode="popLayout">
                            {filteredItems.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4, delay: index * 0.03 }}
                                >
                                    <TiltCard className="group premium-card overflow-hidden flex flex-col h-full">
                                        {/* Image */}
                                        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[var(--obsidian-800)] to-[var(--obsidian-900)]">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--obsidian-900)]/80 via-transparent to-transparent" />
                                            {/* Badges */}
                                            <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                                                {item.popular && (
                                                    <Badge variant="copper">
                                                        <Star className="h-2.5 w-2.5" /> Popular
                                                    </Badge>
                                                )}
                                                {item.vegetarian && (
                                                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                                                        <Leaf className="h-3 w-3" />
                                                    </span>
                                                )}
                                                {item.glutenFree && (
                                                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/10 text-amber-400">
                                                        <Wheat className="h-3 w-3" />
                                                    </span>
                                                )}
                                                {item.spicy && (
                                                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500/10 text-red-400">
                                                        <Flame className="h-3 w-3" />
                                                    </span>
                                                )}
                                            </div>
                                            <div className="absolute top-3 right-3">
                                                <span className="rounded-full bg-[var(--obsidian-950)]/70 px-2.5 py-1 text-[10px] text-[var(--cream-300)] backdrop-blur-sm">
                                                    <Timer className="mr-0.5 inline h-3 w-3" />
                                                    {item.prepTime}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-5 flex-1 flex flex-col">
                                            <div className="flex items-start justify-between gap-3">
                                                <div className="flex-1">
                                                    <span className="text-[9px] uppercase tracking-[0.2em] text-[var(--copper-500)]">
                                                        {item.category}
                                                    </span>
                                                    <h3 className="mt-0.5 font-[family-name:var(--font-display)] text-xl font-bold text-[var(--cream-100)]">
                                                        {item.name}
                                                    </h3>
                                                </div>
                                                <p className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--copper-400)]">
                                                    ${item.price}
                                                </p>
                                            </div>
                                            <p className="mt-2 text-xs leading-relaxed text-[var(--cream-400)]">
                                                {item.description}
                                            </p>
                                            <div className="mt-auto pt-4">
                                                {cart.find((c) => c.name === item.name) ? (
                                                    <div className="flex items-center gap-3">
                                                        <button
                                                            onClick={() => removeFromCart(item.name)}
                                                            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--obsidian-600)] text-[var(--cream-400)] transition-colors hover:border-[var(--copper-500)]/30 hover:text-[var(--copper-400)]"
                                                        >
                                                            <Minus className="h-3.5 w-3.5" />
                                                        </button>
                                                        <span className="w-8 text-center font-medium text-[var(--cream-100)]">
                                                            {cart.find((c) => c.name === item.name)?.quantity}
                                                        </span>
                                                        <button
                                                            onClick={() => addToCart(item)}
                                                            className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--copper-500)] text-[var(--obsidian-950)] transition-colors hover:bg-[var(--copper-400)]"
                                                        >
                                                            <Plus className="h-3.5 w-3.5" />
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        className="gap-1.5 w-full"
                                                        onClick={() => addToCart(item)}
                                                    >
                                                        <Plus className="h-3.5 w-3.5" />
                                                        Add to Order
                                                    </Button>
                                                )}
                                            </div>
                                        </div>
                                    </TiltCard>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {filteredItems.length === 0 && (
                        <div className="py-20 text-center">
                            <p className="text-lg text-[var(--cream-400)]">No dishes found matching your criteria.</p>
                            <button
                                onClick={() => { setSearchQuery(''); setActiveFilters([]); setSelectedCategory('All'); }}
                                className="mt-4 text-sm text-[var(--copper-400)] underline underline-offset-4"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Floating Cart Button */}
            {cartCount > 0 && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2"
                >
                    <button
                        onClick={() => setCartOpen(true)}
                        className="flex items-center gap-4 rounded-full bg-[var(--copper-500)] px-8 py-4 font-medium text-[var(--obsidian-950)] shadow-[0_10px_40px_rgba(199,125,74,0.3)] transition-all hover:shadow-[0_10px_60px_rgba(199,125,74,0.4)] hover:bg-[var(--copper-400)]"
                    >
                        <ShoppingBag className="h-5 w-5" />
                        <span>View Order ({cartCount} items)</span>
                        <span className="rounded-full bg-[var(--obsidian-950)]/20 px-3 py-1 text-sm font-bold">
                            ${cartTotal.toFixed(2)}
                        </span>
                    </button>
                </motion.div>
            )}

            {/* Cart Drawer */}
            <AnimatePresence>
                {cartOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setCartOpen(false)}
                            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                            className="fixed right-0 top-0 z-50 h-full w-full max-w-md border-l border-[var(--copper-500)]/10 bg-[var(--obsidian-900)] shadow-2xl"
                        >
                            <div className="flex h-full flex-col">
                                {/* Header */}
                                <div className="flex items-center justify-between border-b border-[var(--obsidian-700)] p-6">
                                    <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--cream-100)]">
                                        Your Order
                                    </h2>
                                    <button
                                        onClick={() => setCartOpen(false)}
                                        className="flex h-10 w-10 items-center justify-center rounded-full text-[var(--cream-400)] transition-colors hover:bg-[var(--obsidian-700)]"
                                    >
                                        <X className="h-5 w-5" />
                                    </button>
                                </div>

                                {/* Items */}
                                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                                    {cart.map((item) => (
                                        <div
                                            key={item.name}
                                            className="flex items-center justify-between rounded-xl border border-[var(--obsidian-700)] bg-[var(--obsidian-850)] p-4"
                                        >
                                            <div className="flex-1">
                                                <p className="text-sm font-medium text-[var(--cream-100)]">{item.name}</p>
                                                <p className="mt-0.5 text-xs text-[var(--cream-500)]">
                                                    ${item.price} each
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <button
                                                    onClick={() => removeFromCart(item.name)}
                                                    className="flex h-7 w-7 items-center justify-center rounded-full border border-[var(--obsidian-600)] text-[var(--cream-400)]"
                                                >
                                                    <Minus className="h-3 w-3" />
                                                </button>
                                                <span className="w-6 text-center text-sm text-[var(--cream-100)]">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    onClick={() => addToCart(item)}
                                                    className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--copper-500)] text-[var(--obsidian-950)]"
                                                >
                                                    <Plus className="h-3 w-3" />
                                                </button>
                                            </div>
                                            <p className="ml-4 font-medium text-[var(--copper-400)]">
                                                ${(item.price * item.quantity).toFixed(2)}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                {/* Footer */}
                                <div className="border-t border-[var(--obsidian-700)] p-6 space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-[var(--cream-400)]">Subtotal</span>
                                        <span className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--cream-100)]">
                                            ${cartTotal.toFixed(2)}
                                        </span>
                                    </div>
                                    <Link href="/order" onClick={() => setCartOpen(false)}>
                                        <Button variant="copper" size="lg" className="w-full gap-2">
                                            <ShoppingBag className="h-4 w-4" />
                                            Proceed to Checkout
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
