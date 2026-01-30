import React, { useState } from 'react';
import Modal from '../ui/Modal';
import { User, Calendar as DateIcon, Clock, ChevronDown } from 'lucide-react';

const BookingFormModal = ({ isOpen, onClose, services }) => {
    const [formData, setFormData] = useState({
        customerName: '',
        service: services[0] || 'Select a service',
        date: '',
        time: '',
        status: 'Upcoming'
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Manual booking created:', formData);
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Create Manual Booking">
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <User size={16} /> Customer Name
                    </label>
                    <input
                        type="text"
                        required
                        placeholder="e.g. Alice Johnson"
                        value={formData.customerName}
                        onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                        style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0', outline: 'none' }}
                    />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        Service
                    </label>
                    <div style={{ position: 'relative' }}>
                        <select
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            style={{
                                width: '100%',
                                padding: '0.75rem',
                                borderRadius: 'var(--radius-md)',
                                border: '1px solid #e2e8f0',
                                outline: 'none',
                                appearance: 'none',
                                backgroundColor: 'white'
                            }}
                        >
                            {services.map((s, idx) => (
                                <option key={idx} value={s}>{s}</option>
                            ))}
                        </select>
                        <ChevronDown size={18} style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--text-muted)' }} />
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <DateIcon size={16} /> Date
                        </label>
                        <input
                            type="date"
                            required
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0', outline: 'none' }}
                        />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Clock size={16} /> Time
                        </label>
                        <input
                            type="time"
                            required
                            value={formData.time}
                            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                            style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0', outline: 'none' }}
                        />
                    </div>
                </div>

                <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
                    <button
                        type="button"
                        onClick={onClose}
                        style={{ flex: 1, padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0', background: 'white', fontWeight: '600', cursor: 'pointer' }}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="btn-primary"
                        style={{ flex: 2, padding: '0.75rem', borderRadius: 'var(--radius-md)', fontWeight: '600' }}
                    >
                        Create Booking
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default BookingFormModal;
