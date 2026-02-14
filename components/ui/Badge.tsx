import { cn } from '@/lib/utils';

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'default' | 'copper' | 'success' | 'warning' | 'outline';
    className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
    return (
        <span
            className={cn(
                'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em]',
                {
                    'border border-[var(--obsidian-600)] bg-[var(--obsidian-800)] text-[var(--cream-300)]':
                        variant === 'default',
                    'border border-[var(--copper-500)]/30 bg-[var(--obsidian-900)]/60 backdrop-blur-md text-[var(--copper-400)]':
                        variant === 'copper',
                    'border border-emerald-500/20 bg-emerald-500/5 text-emerald-400':
                        variant === 'success',
                    'border border-amber-500/20 bg-amber-500/5 text-amber-400':
                        variant === 'warning',
                    'border border-[var(--copper-500)]/30 bg-transparent text-[var(--copper-400)]':
                        variant === 'outline',
                },
                className
            )}
        >
            {children}
        </span>
    );
}
