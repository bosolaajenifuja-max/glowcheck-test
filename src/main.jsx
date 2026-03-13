import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext'

// Error boundary to catch rendering errors
window.onerror = function(msg, url, line, col, error) {
  console.error('Global error:', msg, url, line, col, error);
};

window.onunhandledrejection = function(event) {
  console.error('Unhandled promise rejection:', event.reason);
};

try {
  createRoot(document.getElementById('root')).render(
    <AuthProvider>
      <App />
    </AuthProvider>
  );
} catch (e) {
  console.error('Render error:', e);
}
