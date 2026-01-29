import React from 'react';
import { Camera, Plus } from 'lucide-react';

const ServiceFormModal = ({ service, onSave }) => {
    return (
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-muted)' }}>Service Name</label>
                <input
                    type="text"
                    placeholder="e.g. Premium Home Deep Clean"
                    defaultValue={service?.name}
                    style={{ padding: '0.85rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0', outline: 'none', fontSize: '1rem' }}
                />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-muted)' }}>Category</label>
                    <select
                        defaultValue={service?.category || "Cleaning"}
                        style={{ padding: '0.85rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0', outline: 'none', background: 'white' }}
                    >
                        <option>Cleaning</option>
                        <option>Plumbing</option>
                        <option>Electrical</option>
                        <option>Landscaping</option>
                    </select>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-muted)' }}>Price per Hour / Unit</label>
                    <input
                        type="text"
                        placeholder="e.g. $45"
                        defaultValue={service?.price}
                        style={{ padding: '0.85rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0', outline: 'none' }}
                    />
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-muted)' }}>Description</label>
                <textarea
                    placeholder="Describe what's included in this service..."
                    rows="4"
                    style={{ padding: '0.85rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0', outline: 'none', resize: 'none' }}
                ></textarea>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-muted)' }}>Service Image</label>
                <div style={{
                    height: '140px',
                    border: '2px dashed #e2e8f0',
                    borderRadius: 'var(--radius-lg)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    color: 'var(--text-muted)',
                    cursor: 'pointer'
                }}>
                    <Camera size={24} />
                    <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>Upload image or drag & drop</span>
                    <span style={{ fontSize: '0.75rem', opacity: 0.7 }}>PNG, JPG up to 5MB</span>
                </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <button
                    type="button"
                    className="btn-primary"
                    style={{ flex: 1, justifyContent: 'center', padding: '1rem' }}
                    onClick={onSave}
                >
                    {service ? 'Update Service' : 'Create Service'}
                </button>
            </div>
        </form>
    );
};

export default ServiceFormModal;
