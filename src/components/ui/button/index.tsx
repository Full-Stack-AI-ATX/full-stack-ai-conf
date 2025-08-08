import * as React from 'react';
import styles from './styles.module.css';


type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantToClassName: Record<ButtonVariant, string> = {
  default: styles['variantDefault'],
  destructive: styles['variantDestructive'],
  outline: styles['variantOutline'],
  secondary: styles['variantSecondary'],
  ghost: styles['variantGhost'],
  link: styles['variantLink']
};

const sizeToClassName: Record<ButtonSize, string> = {
  default: styles['sizeDefault'],
  sm: styles['sizeSm'],
  lg: styles['sizeLg'],
  icon: styles['sizeIcon']
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    const composedClassName = [
      styles['root'],
      variantToClassName[variant],
      sizeToClassName[size],
      className
    ]
      .filter(Boolean)
      .join(' ');

    return <button className={composedClassName} ref={ref} {...props} />;
  }
);
Button.displayName = 'Button';


export { Button };
