import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive font-bold text-lg",
	{
		variants: {
			variant: {
				default: 'bg-white text-black shadow-xs hover:bg-primary/90 hover:bg-white/70',
				destructive:
					'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
				outline:
					'border border-input bg-transparent text-white shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-transparent dark:border-input dark:hover:bg-input/50',
				'outline-dark':
					'border border-black bg-transparent text-black shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-transparent dark:border-black dark:hover:bg-black/50',
				secondary: 'bg-theme-primary text-white shadow-xs hover:bg-theme-primary/80 shadow-xs hover:bg-theme-primary/90',
				raised: 'bg-white text-neutral-900 border-2 border-neutral-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150 font-bold',
				'raised-vibrant': 'bg-[#1E0903] text-white border-2 border-[#1E0903] font-bold',
				ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
				link: 'text-primary underline-offset-4 hover:underline',
			},
			size: {
				default: 'h-12 px-4 py-2 has-[>svg]:px-3',
				sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
				lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
				icon: 'size-9',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
);

export type ButtonVariantType = VariantProps<typeof buttonVariants>['variant'];

function Button({
	className,
	variant,
	size,
	asChild = false,
	...props
}: React.ComponentProps<'button'> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean;
	}) {
	const Comp = asChild ? Slot : 'button';

	if (variant === 'raised-vibrant') {
		return (
			<div className={'relative group'}>
				<Comp
					data-slot='button'
					{...props}
					className={cn(buttonVariants({ variant, size, className }), 'relative z-3 group-hover:translate-1 transition-all duration-150 ')}
				/>
				<span className='absolute inset-0 bg-[linear-gradient(90deg,#FE318D_5%,#FF3973_18%,#EF7976_31%,#FD9454_47%,#D5877E_67%,#9BD91A_83%,#09F200_93%,#3ED20D_100%)] translate-1 z-1 rounded-md group-hover:translate-1.5'></span>
				<span className='absolute inset-0 bg-[#E87722] translate-2 z-0 rounded-md '></span>
			</div>
		);
	}

	return <Comp data-slot='button' className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };
