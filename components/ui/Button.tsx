import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'outline' | 'ghost' | 'link' | 'copper' | 'glass';
    size?: 'default' | 'sm' | 'lg' | 'icon';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'default', size = 'default', ...props }, ref) => {
        return (
            <button
                className={cn(
                    'group relative inline-flex items-center justify-center overflow-hidden rounded-full font-medium transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] disabled:pointer-events-none disabled:opacity-50',
                    {
                        'bg-[var(--copper-500)] text-[var(--obsidian-950)] hover:bg-[var(--copper-400)] hover:shadow-[0_0_30px_rgba(199,125,74,0.25)]':
                            variant === 'default',
                        'border border-[var(--copper-500)]/30 bg-transparent text-[var(--foreground)] hover:border-[var(--copper-500)]/60 hover:bg-[var(--copper-500)]/5':
                            variant === 'outline',
                        'text-[var(--foreground)] hover:bg-[var(--obsidian-700)]':
                            variant === 'ghost',
                        'text-[var(--copper-400)] underline-offset-4 hover:underline':
                            variant === 'link',
                        'bg-gradient-to-r from-[var(--copper-600)] via-[var(--copper-400)] to-[var(--copper-600)] bg-[length:200%_100%] text-[var(--obsidian-950)] font-semibold hover:animate-[shimmer_2s_ease-in-out_infinite] hover:shadow-[0_0_50px_rgba(199,125,74,0.3)]':
                            variant === 'copper',
                        'glass-effect border border-[var(--copper-500)]/10 text-[var(--foreground)] hover:border-[var(--copper-500)]/30 hover:bg-[var(--obsidian-800)]/80':
                            variant === 'glass',
                        'h-10 px-6 py-2 text-sm': size === 'default',
                        'h-8 px-4 text-xs': size === 'sm',
                        'h-13 px-8 text-base tracking-wide': size === 'lg',
                        'h-10 w-10 p-0': size === 'icon',
                    },
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = 'Button';

export { Button };
export type { ButtonProps };
