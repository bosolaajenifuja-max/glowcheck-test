import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function AuthScreen({ onComplete }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login, loginAsGuest, signup } = useAuth();

  const handleGuestLogin = async () => {
    try {
      await loginAsGuest();
      onComplete?.();
    } catch (err) {
      setError(err.message || 'Something went wrong');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isLogin) {
        await login(email, password);
      } else {
        await signup(email, password, name);
      }
      onComplete?.();
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-screen">
      <div className="auth-header">
        <h1>✨ GlowCheck</h1>
        <p>{isLogin ? 'Welcome back!' : 'Create your account'}</p>
      </div>

      <form onSubmit={handleSubmit} className="auth-form">
        {!isLogin && (
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required={!isLogin}
            className="auth-input"
          />
        )}
        
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="auth-input"
        />
        
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
          className="auth-input"
        />

        {error && <div className="auth-error">{error}</div>}

        <button type="submit" disabled={loading} className="auth-submit">
          {loading ? 'Loading...' : isLogin ? 'Sign In' : 'Create Account'}
        </button>
      </form>

      <div className="auth-toggle">
        <p>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button onClick={() => setIsLogin(!isLogin)} className="auth-link">
            {isLogin ? 'Sign Up' : 'Sign In'}
          </button>
        </p>
      </div>

      <div className="auth-demo">
        <p>Demo mode — use any email/password</p>
      </div>

      <div className="auth-guest">
        <button onClick={handleGuestLogin} className="auth-guest-btn">
          Continue as Guest →
        </button>
        <p className="auth-guest-hint">Browse and scan without an account</p>
      </div>
    </div>
  );
}
