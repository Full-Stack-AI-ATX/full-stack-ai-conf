import type { HTMLAttributes }  from 'react';
import { forwardRef }           from 'react';
import styles                   from './styles.module.css';


const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
  const classes = [styles['card'], className].filter(Boolean).join(' ');
  return <div ref={ref} className={classes} {...props} />;
});
Card.displayName = 'Card';

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
  const classes = [styles['cardHeader'], className].filter(Boolean).join(' ');
  return <div ref={ref} className={classes} {...props} />;
});
CardHeader.displayName = 'CardHeader';

const CardTitle = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
  const classes = [styles['cardTitle'], className].filter(Boolean).join(' ');
  return <div ref={ref} className={classes} {...props} />;
});
CardTitle.displayName = 'CardTitle';

const CardDescription = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
  const classes = [styles['cardDescription'], className]
    .filter(Boolean)
    .join(' ');
  return <div ref={ref} className={classes} {...props} />;
});
CardDescription.displayName = 'CardDescription';

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
  const classes = [styles['cardContent'], className].filter(Boolean).join(' ');
  return <div ref={ref} className={classes} {...props} />;
});
CardContent.displayName = 'CardContent';

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
  const classes = [styles['cardFooter'], className].filter(Boolean).join(' ');
  return <div ref={ref} className={classes} {...props} />;
});
CardFooter.displayName = 'CardFooter';


export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
