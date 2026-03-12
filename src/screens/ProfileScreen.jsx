import { useAuth } from '../context/AuthContext';
import { products } from '../data/products';

export default function ProfileScreen() {
  const { user, logout, savedProducts, toggleSavedProduct } = useAuth();

  if (!user) {
    return (
      <div className="profile-screen">
        <p>Please log in to view your profile</p>
      </div>
    );
  }

  const savedProductData = products.filter(p => 
    user.savedProducts?.includes(p.barcode)
  );

  return (
    <div className="profile-screen">
      <div className="profile-header">
        <div className="profile-avatar">
          {user.name?.charAt(0) || user.email?.charAt(0) || '?'}
        </div>
        <h2>{user.name || 'User'}</h2>
        <p className="profile-email">{user.email}</p>
        <p className="profile-joined">Member since {user.joinedAt || 'March 2026'}</p>
      </div>

      <div className="profile-stats">
        <div className="stat-item">
          <span className="stat-number">{savedProductData.length}</span>
          <span className="stat-label">Saved Products</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{user.submittedProducts?.length || 0}</span>
          <span className="stat-label">Submitted</span>
        </div>
      </div>

      <div className="profile-section">
        <h3>💚 Saved Products</h3>
        {savedProductData.length === 0 ? (
          <p className="empty-state">No saved products yet. Scan some products to save them here!</p>
        ) : (
          <div className="saved-list">
            {savedProductData.map(product => (
              <div key={product.barcode} className="saved-item">
                <div className="saved-info">
                  <h4>{product.name}</h4>
                  <p>{product.brand} • {product.category}</p>
                </div>
                <button 
                  className="unsave-btn"
                  onClick={() => toggleSavedProduct(product.barcode)}
                >
                  ❤️ Saved
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="profile-section">
        <h3>⚙️ Settings</h3>
        <div className="settings-list">
          <button className="settings-btn">
            <span>🔔 Notifications</span>
            <span className="settings-value">On</span>
          </button>
          <button className="settings-btn">
            <span>🔒 Privacy</span>
            <span>→</span>
          </button>
          <button className="settings-btn">
            <span>📜 Terms & Privacy</span>
            <span>→</span>
          </button>
          <button className="settings-btn">
            <span>❓ Help & Support</span>
            <span>→</span>
          </button>
        </div>
      </div>

      <button onClick={logout} className="logout-btn">
        Sign Out
      </button>
    </div>
  );
}
