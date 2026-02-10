import React from 'react';
import { STATUS_CONFIG } from '../../context/BookingContext';

const StatusBadge = ({ status, size = 'md', showIcon = true }) => {
    const config = STATUS_CONFIG[status];

    if (!config) {
        return null;
    }

    const sizeStyles = {
        sm: {
            padding: '0.25rem 0.65rem',
            fontSize: '0.75rem',
            borderRadius: '8px'
        },
        md: {
            padding: '0.4rem 0.85rem',
            fontSize: '0.85rem',
            borderRadius: '10px'
        },
        lg: {
            padding: '0.5rem 1rem',
            fontSize: '0.95rem',
            borderRadius: '12px'
        }
    };

    return (
        <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            backgroundColor: config.bgColor,
            color: config.color,
            border: `1px solid ${config.borderColor}`,
            fontWeight: '700',
            ...sizeStyles[size],
            transition: 'all 0.2s'
        }}>
            {showIcon && <span>{config.icon}</span>}
            {config.label}
        </span>
    );
};

export default StatusBadge;
