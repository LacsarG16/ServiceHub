import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [userType, setUserType] = useState(null); // 'provider' | 'customer' | null
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check local storage for existing session
        const storedUserType = localStorage.getItem('userType');
        if (storedUserType) {
            setUserType(storedUserType);
        }
        setLoading(false);
    }, []);

    const login = (type) => {
        setUserType(type);
        localStorage.setItem('userType', type);
    };

    const logout = () => {
        setUserType(null);
        localStorage.removeItem('userType');
    };

    const value = {
        userType,
        login,
        logout,
        isAuthenticated: !!userType,
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
