import React from 'react';

const Marker = ({ id }) => (
    <span style={{
        position: 'absolute',
        top: '4px',
        left: '4px',
        background: '#ff00ff',
        color: 'white',
        padding: '2px 6px',
        fontSize: '10px',
        fontWeight: '900',
        borderRadius: '4px',
        zIndex: 10000, // Higher than everything
        pointerEvents: 'none',
        boxShadow: '0 0 10px rgba(255, 0, 255, 0.8)',
        border: '1px solid white',
        fontFamily: 'monospace',
        lineHeight: '1'
    }}>
        {id}
    </span>
);

export default Marker;
