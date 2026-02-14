'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    MessageCircle,
    Check,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';

const inquiryTypes = [
    'General Inquiry',
    'Reservations',
    'Private Dining',
    'Events & Catering',
    'Feedback',
    'Press & Media',
    'Careers',
];

export default function ContactPage() {
    const [inquiryType, setInquiryType] = useState('General Inquiry');
    const [sent, setSent] = useState(false);

    if (sent) {
        return (
            <div className="min-h-screen bg-[var(--obsidian-950)] pt-24 pb-32">
                <div className="mx-auto max-w-lg px-4 text-center">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="premium-card p-12">
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, type: 'spring' }}
                            className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10"
                        >
                            <Check className="h-10 w-10 text-emerald-400" />
                        </motion.div>
                        <h2 className="mt-8 font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--cream-100)]">
                            Message Sent!
                        </h2>
                        <p className="mt-3 text-[var(--cream-400)]">
                            We&apos;ll get back to you within 24 hours.
                        </p>
                        <Button variant="outline" onClick={() => setSent(false)} className="mt-8">
                            Send Another
                        </Button>
                    </motion.div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[var(--obsidian-950)] pt-24 pb-32">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--copper-500)]">Get In Touch</span>
                    <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold text-[var(--cream-100)] sm:text-6xl">
                        Contact Us
                    </h1>
                    <p className="mt-4 max-w-xl text-lg text-[var(--cream-400)]">
                        Questions, reservations, or just want to say hello? We&apos;d love to hear from you.
                    </p>
                </motion.div>

                <div className="mt-14 grid gap-12 lg:grid-cols-5">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="lg:col-span-3"
                    >
                        <div className="premium-card p-8 space-y-6">
                            {/* Inquiry Type */}
                            <div>
                                <label className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--cream-400)]">Inquiry Type</label>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {inquiryTypes.map((type) => (
                                        <button
                                            key={type}
                                            onClick={() => setInquiryType(type)}
                                            className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${inquiryType === type
                                                    ? 'bg-[var(--copper-500)] text-[var(--obsidian-950)]'
                                                    : 'border border-[var(--obsidian-600)] text-[var(--cream-400)] hover:border-[var(--copper-500)]/20'
                                                }`}
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <Input label="First Name" placeholder="John" id="contactFirst" />
                                <Input label="Last Name" placeholder="Doe" id="contactLast" />
                            </div>
                            <Input label="Email" placeholder="john@example.com" type="email" id="contactEmail" />
                            <Input label="Phone" placeholder="(212) 555-0000" type="tel" id="contactPhone" />
                            <div>
                                <label className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--cream-400)]">Message</label>
                                <textarea
                                    className="mt-1.5 w-full rounded-lg border border-[var(--obsidian-600)] bg-[var(--obsidian-800)] p-4 text-sm text-[var(--cream-100)] placeholder:text-[var(--cream-500)]/50 focus:border-[var(--copper-500)]/30 focus:outline-none focus:ring-2 focus:ring-[var(--copper-500)]/20 h-32 resize-none transition-all"
                                    placeholder="Tell us how we can help..."
                                />
                            </div>
                            <Button variant="copper" size="lg" className="w-full gap-2" onClick={() => setSent(true)}>
                                <Send className="h-4 w-4" /> Send Message
                            </Button>
                        </div>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6 lg:col-span-2"
                    >
                        {/* Direct Contact */}
                        <div className="premium-card p-6 space-y-5">
                            <h3 className="text-sm font-medium uppercase tracking-wider text-[var(--copper-400)]">
                                Direct Contact
                            </h3>
                            <div className="space-y-4">
                                <a href="mailto:hello@bellaitalia.com" className="flex items-center gap-3 text-sm text-[var(--cream-300)] transition-colors hover:text-[var(--copper-400)]">
                                    <Mail className="h-4 w-4 text-[var(--copper-500)]/50" />
                                    hello@bellaitalia.com
                                </a>
                                <a href="tel:+12125550100" className="flex items-center gap-3 text-sm text-[var(--cream-300)] transition-colors hover:text-[var(--copper-400)]">
                                    <Phone className="h-4 w-4 text-[var(--copper-500)]/50" />
                                    (212) 555-0100
                                </a>
                                <div className="flex items-start gap-3">
                                    <Clock className="mt-0.5 h-4 w-4 text-[var(--copper-500)]/50" />
                                    <div className="text-sm text-[var(--cream-300)]">
                                        <p>Responses within 24 hours</p>
                                        <p className="text-[var(--cream-500)]">Mon–Sun, 9am–10pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Locations Quick Links */}
                        <div className="premium-card p-6 space-y-4">
                            <h3 className="text-sm font-medium uppercase tracking-wider text-[var(--copper-400)]">
                                Locations
                            </h3>
                            {['Downtown — 123 Main St', 'Westside — 456 Oak Ave', 'Harbor View — 789 Waterfront Dr'].map((loc) => (
                                <div key={loc} className="flex items-center gap-3 text-sm text-[var(--cream-300)]">
                                    <MapPin className="h-4 w-4 text-[var(--copper-500)]/50" />
                                    {loc}
                                </div>
                            ))}
                        </div>

                        {/* FAQ CTA */}
                        <div className="premium-card p-6 text-center">
                            <MessageCircle className="mx-auto h-8 w-8 text-[var(--copper-500)]/30" />
                            <h3 className="mt-3 font-medium text-[var(--cream-100)]">Frequently Asked</h3>
                            <p className="mt-1 text-xs text-[var(--cream-500)]">Find quick answers to common questions about ordering, reservations, and more.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
