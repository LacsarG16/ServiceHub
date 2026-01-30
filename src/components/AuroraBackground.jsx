import React from 'react';

const AuroraBackground = () => {
    return (
        <div style={{ position: 'fixed', inset: 0, zIndex: -1, overflow: 'hidden' }}>
            <div className="aurora-blob blob-1"></div>
            <div className="aurora-blob blob-2"></div>
            <div className="aurora-blob blob-3"></div>

            {/* Noise texture overlay for more organic feel */}
            <div style={{
                position: 'absolute',
                inset: 0,
                opacity: 0.05,
                backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")',
                pointerEvents: 'none'
            }}></div>
        </div>
    );
};

export default AuroraBackground;
