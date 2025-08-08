import * as React from 'react';
import styles from './styles.module.css';


type BadgeVariant = 'default' | 'secondary' | 'destructive' | 'outline';
interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
}

const variantToClassName: Record<BadgeVariant, string> = {
  default:      styles['variantDefault'],
  secondary:    styles['variantSecondary'],
  destructive:  styles['variantDestructive'],
  outline:      styles['variantOutline']
};

function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  const classes = [styles['root'], variantToClassName[variant], className]
    .filter(Boolean)
    .join(' ');
  return <div className={classes} {...props} />;
}


export { Badge };
