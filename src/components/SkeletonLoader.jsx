import React from 'react';

const SkeletonLoader = ({ type = 'card', count = 1 }) => {
    const shimmerStyle = {
        background: 'linear-gradient(90deg, var(--glass-bg) 0%, rgba(255,255,255,0.4) 50%, var(--glass-bg) 100%)',
        backgroundSize: '200% 100%',
        animation: 'shimmer 1.5s infinite'
    };

    const CardSkeleton = () => (
        <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '1rem' }}>
            <div style={{
                ...shimmerStyle,
                height: '200px',
                borderRadius: 'var(--radius-md)',
                marginBottom: '1rem'
            }} />
            <div style={{
                ...shimmerStyle,
                height: '24px',
                width: '70%',
                borderRadius: '4px',
                marginBottom: '0.5rem'
            }} />
            <div style={{
                ...shimmerStyle,
                height: '16px',
                width: '90%',
                borderRadius: '4px',
                marginBottom: '0.5rem'
            }} />
            <div style={{
                ...shimmerStyle,
                height: '16px',
                width: '60%',
                borderRadius: '4px'
            }} />
        </div>
    );

    const TextSkeleton = () => (
        <div style={{ marginBottom: '1rem' }}>
            <div style={{
                ...shimmerStyle,
                height: '20px',
                width: '100%',
                borderRadius: '4px',
                marginBottom: '0.5rem'
            }} />
            <div style={{
                ...shimmerStyle,
                height: '20px',
                width: '95%',
                borderRadius: '4px',
                marginBottom: '0.5rem'
            }} />
            <div style={{
                ...shimmerStyle,
                height: '20px',
                width: '80%',
                borderRadius: '4px'
            }} />
        </div>
    );

    const renderSkeleton = () => {
        switch (type) {
            case 'card':
                return <CardSkeleton />;
            case 'text':
                return <TextSkeleton />;
            default:
                return <CardSkeleton />;
        }
    };

    return (
        <>
            <style>
                {`
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
        `}
            </style>
            {Array.from({ length: count }).map((_, index) => (
                <div key={index}>{renderSkeleton()}</div>
            ))}
        </>
    );
};

export default SkeletonLoader;
