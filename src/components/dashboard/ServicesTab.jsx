import React from 'react';
import { Plus, MoreVertical, Star, Edit2, Trash2 } from 'lucide-react';

const ServicesTab = ({ onAddService, onEditService }) => {
    const services = [
        { id: 1, name: "Elite Cleaning", category: "Cleaning", price: "$45/hr", rating: 4.8, bookings: 124, status: "Active" },
        { id: 2, name: "Deep Carpet Clean", category: "Cleaning", price: "$80/room", rating: 4.9, bookings: 56, status: "Active" },
        { id: 3, name: "Move-out Special", category: "Cleaning", price: "$250+", rating: 4.7, bookings: 89, status: "Paused" }
    ];

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem' }}>My Services</h2>
                <button onClick={onAddService} className="btn-primary" style={{ padding: '0.65rem 1.25rem' }}>
                    <Plus size={18} /> Create New Service
                </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {services.map((service) => (
                    <div key={service.id} className="glass" style={{ padding: '1.5rem', borderRadius: 'var(--radius-lg)', background: 'white', position: 'relative' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                            <div>
                                <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{service.category}</span>
                                <h3 style={{ fontSize: '1.15rem', marginTop: '0.25rem' }}>{service.name}</h3>
                            </div>
                            <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}><MoreVertical size={20} /></button>
                        </div>

                        <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem' }}>
                            <div>
                                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Price</p>
                                <p style={{ fontWeight: '700' }}>{service.price}</p>
                            </div>
                            <div>
                                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Rating</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                    <Star size={14} fill="var(--accent)" color="var(--accent)" />
                                    <span style={{ fontWeight: '700' }}>{service.rating}</span>
                                </div>
                            </div>
                            <div>
                                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Bookings</p>
                                <p style={{ fontWeight: '700' }}>{service.bookings}</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid #f1f5f9' }}>
                            <span style={{
                                padding: '0.25rem 0.75rem',
                                borderRadius: 'var(--radius-full)',
                                fontSize: '0.75rem',
                                fontWeight: '700',
                                backgroundColor: service.status === 'Active' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(100, 116, 139, 0.1)',
                                color: service.status === 'Active' ? '#10b981' : 'var(--text-muted)'
                            }}>
                                {service.status}
                            </span>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <button onClick={() => onEditService(service)} style={{ padding: '0.5rem', borderRadius: '8px', background: '#f8fafc', color: 'var(--text-muted)', border: 'none', cursor: 'pointer' }}><Edit2 size={16} /></button>
                                <button style={{ padding: '0.5rem', borderRadius: '8px', background: '#f8fafc', color: '#ef4444', border: 'none', cursor: 'pointer' }}><Trash2 size={16} /></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesTab;
