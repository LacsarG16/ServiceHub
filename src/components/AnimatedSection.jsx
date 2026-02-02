import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({
    children,
    animation = 'fadeUp',
    delay = 0,
    duration = 0.6,
    threshold = 0.1,
    className = '',
    ...props
}) => {
    const [ref, inView] = useInView({
        threshold,
        triggerOnce: true
    });

    const animations = {
        fadeUp: {
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
        },
        fadeDown: {
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 }
        },
        fadeLeft: {
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
        },
        fadeRight: {
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 }
        },
        scale: {
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 }
        },
        fade: {
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
        }
    };

    const selectedAnimation = animations[animation] || animations.fadeUp;

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={selectedAnimation}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

// Staggered children animation
export const StaggerContainer = ({ children, staggerDelay = 0.1, className = '' }) => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={container}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const StaggerItem = ({ children, className = '' }) => {
    const item = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    return (
        <motion.div variants={item} className={className}>
            {children}
        </motion.div>
    );
};

export default AnimatedSection;
