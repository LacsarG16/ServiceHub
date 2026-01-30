import React from 'react';
import { User, Calendar, Clock, MapPin, Phone, MessageSquare, CheckCircle2 } from 'lucide-react';

const BookingDetailsModal = ({ booking, onAction }) => {
    if (!booking) return null;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'var(--background)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <User size={28} color="var(--primary)" />
                    </div>
                    <div>
                        <h4 style={{ fontSize: '1.25rem', fontWeight: '700' }}>{booking.customer}</h4>
                        <span style={{
                            fontSize: '0.8rem',
                            fontWeight: '700',
                            color: booking.status === 'Completed' ? '#10b981' : booking.status === 'Cancelled' ? '#ef4444' : 'var(--primary)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.3rem'
                        }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: booking.status === 'Completed' ? '#10b981' : booking.status === 'Cancelled' ? '#ef4444' : 'var(--primary)' }}></div>
                            {booking.status}
                        </span>
                    </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                    <p style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-main)' }}>{booking.amount || "$120"}</p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Payment: Visa •••• 4242</p>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid #f1f5f9' }}>
                    <p style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Service Details</p>
                    <h5 style={{ fontWeight: '700', marginBottom: '0.5rem' }}>{booking.service}</h5>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.9rem' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Calendar size={14} /> Feb 25, 2026</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Clock size={14} /> {booking.time} (2 Hours)</span>
                    </div>
                </div>
                <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid #f1f5f9' }}>
                    <p style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Location</p>
                    <span style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem' }}>
                        <MapPin size={16} style={{ marginTop: '3px' }} />
                        123 Ocean View Drive,<br />Capetown, 8001
                    </span>
                </div>
            </div>

            <div>
                <p style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '1rem' }}>Notes from Customer</p>
                <div style={{ background: '#fffbeb', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid #fef3c7', fontSize: '0.9rem', fontStyle: 'italic' }}>
                    "Please pay extra attention to the kitchen area. I have two cats, so pet-safe products are preferred."
                </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid #f1f5f9' }}>
                <button className="btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
                    <MessageSquare size={18} /> Chat with Customer
                </button>
                <button
                    style={{
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        background: '#10b981',
                        color: 'white',
                        fontWeight: '600'
                    }}
                >
                    <CheckCircle2 size={18} /> Mark as Complete
                </button>
            </div>
        </div>
    );
};

export default BookingDetailsModal;
