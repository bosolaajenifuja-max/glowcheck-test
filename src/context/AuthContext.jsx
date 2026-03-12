import { createContext, useContext, useState, useEffect } from 'react';

// Mock user data for prototype
const MOCK_USER = {
  id: 'user_001',
  email: 'demo@glowcheck.app',
  name: 'Demo User',
  avatar: null,
  joinedAt: '2026-03-01',
  savedProducts: ['123456789', '234567890'],
  submittedProducts: []
};

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('glowcheck_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    // Mock login for prototype
    // Replace with Firebase auth in production
    const mockUser = { ...MOCK_USER, email };
    setUser(mockUser);
    localStorage.setItem('glowcheck_user', JSON.stringify(mockUser));
    return mockUser;
  };

  const signup = async (email, password, name) => {
    // Mock signup for prototype
    const newUser = {
      id: 'user_' + Date.now(),
      email,
      name,
      avatar: null,
      joinedAt: new Date().toISOString().split('T')[0],
      savedProducts: [],
      submittedProducts: []
    };
    setUser(newUser);
    localStorage.setItem('glowcheck_user', JSON.stringify(newUser));
    return newUser;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('glowcheck_user');
  };

  const updateProfile = (updates) => {
    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    localStorage.setItem('glowcheck_user', JSON.stringify(updatedUser));
  };

  const toggleSavedProduct = (barcode) => {
    if (!user) return;
    
    const saved = user.savedProducts || [];
    const newSaved = saved.includes(barcode)
      ? saved.filter(p => p !== barcode)
      : [...saved, barcode];
    
    updateProfile({ savedProducts: newSaved });
  };

  const isProductSaved = (barcode) => {
    return user?.savedProducts?.includes(barcode) || false;
  };

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      login,
      signup,
      logout,
      updateProfile,
      toggleSavedProduct,
      isProductSaved,
      isAuthenticated: !!user
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
