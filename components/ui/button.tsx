import { AnchorHTMLAttributes, ButtonHTMLAttributes, forwardRef, ForwardedRef } from 'react';
import { cn } from '@/lib/utils';

type SharedButtonProps = {
  className?: string;
};

type ButtonProps =
  | ({ href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement> & SharedButtonProps)
  | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement> & SharedButtonProps);

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, href, ...props }, ref: ForwardedRef<HTMLButtonElement | HTMLAnchorElement>) => {
    const classes = cn(
      'inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200',
      'bg-brand-500 text-white shadow-md shadow-brand-500/20 hover:bg-brand-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
      className,
    );

    if (href) {
      return <a ref={ref as ForwardedRef<HTMLAnchorElement>} href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)} />;
    }

    return <button ref={ref as ForwardedRef<HTMLButtonElement>} className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)} />;
  },
);
Button.displayName = 'Button';

export default Button;
