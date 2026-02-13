const API_URL = 'http://localhost:5000/api';

const getHeaders = () => {
    const token = localStorage.getItem('token');
    return {
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {})
    };
};

export const api = {
    // Auth
    async login(email, password) {
        const res = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        if (!res.ok) {
            const error = await res.json();
            throw new Error(error.message || 'Login failed');
        }
        return res.json();
    },

    async register(userData) {
        const res = await fetch(`${API_URL}/auth/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        });
        if (!res.ok) {
            const error = await res.json();
            throw new Error(error.message || 'Registration failed');
        }
        return res.json();
    },

    async getMe() {
        const res = await fetch(`${API_URL}/auth/me`, {
            headers: getHeaders()
        });
        if (!res.ok) throw new Error('Failed to fetch user');
        return res.json();
    },

    // Services
    async getServices() {
        const res = await fetch(`${API_URL}/services`, {
            headers: getHeaders()
        });
        if (!res.ok) throw new Error('Failed to fetch services');
        return res.json();
    },

    // Bookings
    async createBooking(bookingData) {
        const res = await fetch(`${API_URL}/bookings`, {
            method: 'POST',
            headers: getHeaders(),
            body: JSON.stringify(bookingData)
        });
        if (!res.ok) {
            const error = await res.json();
            throw new Error(error.message || 'Failed to create booking');
        }
        return res.json();
    },

    async getMyBookings() {
        const res = await fetch(`${API_URL}/bookings`, {
            headers: getHeaders()
        });
        if (!res.ok) throw new Error('Failed to fetch bookings');
        return res.json();
    },

    async updateBookingStatus(id, status) {
        const res = await fetch(`${API_URL}/bookings/${id}/status`, {
            method: 'PATCH',
            headers: getHeaders(),
            body: JSON.stringify({ status })
        });
        if (!res.ok) throw new Error('Failed to update booking status');
        return res.json();
    },

    // Additional Services
    async getRecommendedServices() {
        const res = await fetch(`${API_URL}/services/recommended`, {
            headers: getHeaders()
        });
        if (!res.ok) throw new Error('Failed to fetch recommended services');
        return res.json();
    },

    async getServiceById(id) {
        const res = await fetch(`${API_URL}/services/${id}`, {
            headers: getHeaders()
        });
        if (!res.ok) throw new Error('Failed to fetch service details');
        return res.json();
    },

    // Stats & Activity
    async getProviderStats() {
        const res = await fetch(`${API_URL}/stats/provider`, {
            headers: getHeaders()
        });
        if (!res.ok) throw new Error('Failed to fetch provider stats');
        return res.json();
    },

    async getCustomerStats() {
        const res = await fetch(`${API_URL}/stats/customer`, {
            headers: getHeaders()
        });
        if (!res.ok) throw new Error('Failed to fetch customer stats');
        return res.json();
    },

    async getActivity() {
        const res = await fetch(`${API_URL}/stats/activity`, {
            headers: getHeaders()
        });
        if (!res.ok) throw new Error('Failed to fetch activity');
        return res.json();
    }
};
