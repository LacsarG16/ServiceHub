import React, { createContext, useState, useContext, useEffect } from 'react';
import { api } from '../services/api';
import toast from 'react-hot-toast';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const initAuth = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const userData = await api.getMe();
                    setUser(userData);
                } catch (error) {
                    console.error('Session restoration failed:', error);
                    localStorage.removeItem('token');
                }
            }
            setLoading(false);
        };
        initAuth();
    }, []);

    const login = async (email, password) => {
        try {
            const data = await api.login(email, password);
            setUser(data);
            localStorage.setItem('token', data.token);
            toast.success('Successfully logged in!');
            return data;
        } catch (error) {
            toast.error(error.message);
            throw error;
        }
    };

    const signup = async (userData) => {
        try {
            const data = await api.register(userData);
            setUser(data);
            localStorage.setItem('token', data.token);
            toast.success('Account created successfully!');
            return data;
        } catch (error) {
            toast.error(error.message);
            throw error;
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');
        toast.success('Logged out');
    };

    const value = {
        user,
        userType: user?.role?.toLowerCase(),
        login,
        signup,
        logout,
        isAuthenticated: !!user,
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
