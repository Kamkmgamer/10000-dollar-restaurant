import { cn } from '@/lib/utils';
import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, label, error, id, ...props }, ref) => {
        return (
            <div className="space-y-1.5">
                {label && (
                    <label
                        htmlFor={id}
                        className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--cream-400)]"
                    >
                        {label}
                    </label>
                )}
                <input
                    id={id}
                    className={cn(
                        'flex h-12 w-full rounded-lg border border-[var(--obsidian-600)] bg-[var(--obsidian-800)] px-4 text-sm text-[var(--cream-100)] ring-offset-[var(--background)]',
                        'placeholder:text-[var(--cream-500)]/50',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--copper-500)]/50 focus-visible:border-[var(--copper-500)]/30',
                        'transition-all duration-300',
                        'disabled:cursor-not-allowed disabled:opacity-50',
                        error && 'border-red-500/50 focus-visible:ring-red-500/50',
                        className
                    )}
                    ref={ref}
                    {...props}
                />
                {error && (
                    <p className="text-xs text-red-400">{error}</p>
                )}
            </div>
        );
    }
);
Input.displayName = 'Input';

export { Input };
