import { useState, useEffect, useRef } from 'react';
import { Html5QrcodeScanner, Html5Qrcode } from 'html5-qrcode';
import { products, hazardCategories, getRatingColor, getRatingLabel } from './data/products';
import { AuthProvider, useAuth } from './context/AuthContext';
import AuthScreen from './screens/AuthScreen';
import ProfileScreen from './screens/ProfileScreen';
import './App.css';

function App() {
  const [scannedProduct, setScannedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('scan');
  const [scannerActive, setScannerActive] = useState(false);
  const [showSubmitForm, setShowSubmitForm] = useState(false);
  const [submittedProducts, setSubmittedProducts] = useState([]);
  const [showLegalModal, setShowLegalModal] = useState(false);
  const [legalSection, setLegalSection] = useState('terms');
  const scannerRef = useRef(null);
  const html5QrCodeRef = useRef(null);
  
  const { user, isAuthenticated, toggleSavedProduct, isProductSaved } = useAuth();

  useEffect(() => {
    return () => {
      if (html5QrCodeRef.current) {
        html5QrCodeRef.current.stop().catch(() => {});
      }
    };
  }, []);

  const startScanner = async () => {
    try {
      // First check if camera is available
      const devices = await navigator.mediaDevices.enumerateDevices();
      const videoDevices = devices.filter(device => device.kind === 'videoinput');
      
      if (videoDevices.length === 0) {
        throw new Error("No camera found");
      }
      
      // Request camera permission explicitly
      await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
      
      setScannerActive(true);
      
      html5QrCodeRef.current = new Html5Qrcode("scanner-container");
      
      await html5QrCodeRef.current.start(
        { facingMode: "environment" },
        {
          fps: 10,
          qrbox: { width: 250, height: 150 },
          aspectRatio: 1.777
        },
        (decodedText) => {
          // Product found!
          const product = products.find(p => p.barcode === decodedText);
          if (product) {
            setScannedProduct(product);
            stopScanner();
          } else {
            // Product not found - go to submit form
            stopScanner();
            setActiveTab('submit');
            alert(`Product not found in database! Please submit details to help build our community database.`);
          }
        },
        (errorMessage) => {
          // Ignore scan errors (no QR code in frame)
        }
      );
    } catch (err) {
      console.error("Scanner error:", err);
      setScannerActive(false);
      // More helpful error message
      if (err.name === 'NotAllowedError' || err.message.includes('Permission denied')) {
        alert("Camera access denied. Please allow camera access in your browser settings and try again.");
      } else if (err.name === 'NotFoundError' || err.message.includes('No camera found')) {
        alert("No camera found on this device.");
      } else {
        alert("Camera not available. Try using the sample products below instead.");
      }
    }
  };

  const stopScanner = async () => {
    if (html5QrCodeRef.current) {
      try {
        await html5QrCodeRef.current.stop();
      } catch (e) {}
    }
    setScannerActive(false);
  };

  const handleBarcodeScan = (result) => {
    if (result) {
      const product = products.find(p => p.barcode === result);
      if (product) {
        const calculatedScore = calculateScore(product);
        setScannedProduct({ ...product, overallScore: calculatedScore });
      } else {
        // Product not found - go to submit form
        setActiveTab('submit');
        alert('Product not found in database! Please submit details to help build our community database.');
      }
    }
  };

  // Calculate overall score based on criteria
  const calculateScore = (product) => {
    const r = product.ratings;
    let score = 0;
    let factors = 0;

    // Ingredient Safety (most important) - 30%
    if (r.ingredientSafety) {
      score += r.ingredientSafety * 6;
      factors += 6;
    }

    // Skin/Hair Friendly - 25%
    if (product.type === 'hair' && r.curlFriendly) {
      score += r.curlFriendly * 5;
      factors += 5;
    } else if (product.type === 'skincare' && r.skinFriendly) {
      score += r.skinFriendly * 5;
      factors += 5;
    }

    // Pregnancy Safe - 20%
    if (r.pregnancySafe !== undefined) {
      score += (r.pregnancySafe ? 5 : 1) * 4;
      factors += 4;
    }

    // Vegan - 10%
    if (r.vegan !== undefined) {
      score += (r.vegan ? 5 : 2) * 2;
      factors += 2;
    }

    // Cruelty Free - 15%
    if (r.crueltyFree !== undefined) {
      score += (r.crueltyFree ? 5 : 2) * 3;
      factors += 3;
    }

    // Deduct points for hazards
    const hazardPenalty = product.hazards ? 
      Object.values(product.hazards).filter(v => v).length * 5 : 0;

    const rawScore = Math.round((score / factors) * 20);
    return Math.max(0, Math.min(100, rawScore - hazardPenalty));
  };

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.brand.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const categories = [
    { id: 'shampoo', name: 'Shampoo', icon: '🧴', type: 'hair' },
    { id: 'conditioner', name: 'Conditioner', icon: '💧', type: 'hair' },
    { id: 'deep-conditioner', name: 'Deep Conditioner', icon: '✨', type: 'hair' },
    { id: 'hair-oil', name: 'Hair Oil', icon: '🫒', type: 'hair' },
    { id: 'hair-cream', name: 'Hair Cream', icon: '🧈', type: 'hair' },
    { id: 'hair-milk', name: 'Hair Milk', icon: '🥛', type: 'hair' },
    { id: 'styling-cream', name: 'Styling Cream', icon: '🎨', type: 'hair' },
    { id: 'styling-gel', name: 'Styling Gel', icon: '🧪', type: 'hair' },
    { id: 'styling-mousse', name: 'Styling Mousse', icon: '☁️', type: 'hair' },
    { id: 'styling-spray', name: 'Styling Spray', icon: '喷雾', type: 'hair' },
    { id: 'scalp-treatment', name: 'Scalp Treatment', icon: '头皮', type: 'hair' },
    { id: 'face-cleanser', name: 'Face Cleanser', icon: '🧼', type: 'skincare' },
    { id: 'face-moisturizer', name: 'Face Moisturizer', icon: '💦', type: 'skincare' },
    { id: 'face-serum', name: 'Face Serum', icon: '💧', type: 'skincare' },
    { id: 'face-mask', name: 'Face Mask', icon: '面膜', type: 'skincare' },
    { id: 'body-lotion', name: 'Body Lotion', icon: '🧴', type: 'skincare' },
    { id: 'body-butter', name: 'Body Butter', icon: '🧈', type: 'skincare' },
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showCategoryPage, setShowCategoryPage] = useState(false);

  const categoryProducts = selectedCategory 
    ? products.filter(p => p.category.toLowerCase().replace(/ /g, '-') === selectedCategory)
    : [];

  const CategoryButtons = () => (
    <div className="category-section">
      <p>Browse by Category:</p>
      <div className="category-grid">
        {categories.map(cat => (
          <button 
            key={cat.id} 
            className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
            onClick={() => {
              setSelectedCategory(cat.id);
              setShowCategoryPage(true);
            }}
          >
            <span className="cat-icon">{cat.icon}</span>
            <span className="cat-name">{cat.name}</span>
          </button>
        ))}
      </div>
    </div>
  );

  const SampleBarcodes = () => (
    <div className="sample-barcodes">
      <p>📷 Scan a barcode or try these sample products:</p>
      <div className="barcode-buttons">
        {products.map(p => (
          <button key={p.barcode} onClick={() => handleBarcodeScan(p.barcode)}>
            {p.type === 'skincare' ? '🧴' : '💇‍♀️'} {p.brand} {p.name.slice(0, 15)}...
          </button>
        ))}
      </div>
    </div>
  );

  const SubmitForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      brand: '',
      category: '',
      type: 'hair',
      ingredients: '',
      notes: ''
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      const newSubmission = {
        ...formData,
        ingredients: formData.ingredients.split(',').map(i => i.trim()),
        submittedAt: new Date().toISOString()
      };
      setSubmittedProducts([...submittedProducts, newSubmission]);
      alert('✅ Product submitted! Thanks for contributing to the GlowCheck community.');
      setFormData({ name: '', brand: '', category: '', type: 'hair', ingredients: '', notes: '' });
      setShowSubmitForm(false);
    };

    if (showSubmitForm) {
      return (
        <div className="submit-form">
          <h3>📝 Submit a Product</h3>
          <p className="hint">Help grow our community database!</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Product Name *"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
            <input
              type="text"
              placeholder="Brand *"
              value={formData.brand}
              onChange={(e) => setFormData({...formData, brand: e.target.value})}
              required
            />
            <select
              value={formData.type}
              onChange={(e) => setFormData({...formData, type: e.target.value})}
            >
              <option value="hair">💇‍♀️ Hair Care</option>
              <option value="skincare">🧴 Skincare</option>
            </select>
            <input
              type="text"
              placeholder="Category (e.g., Shampoo, Lotion)"
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
            />
            <textarea
              placeholder="Ingredients (comma separated) *"
              value={formData.ingredients}
              onChange={(e) => setFormData({...formData, ingredients: e.target.value})}
              required
              rows={3}
            />
            <textarea
              placeholder="Notes (optional) - Any concerns, reviews, etc."
              value={formData.notes}
              onChange={(e) => setFormData({...formData, notes: e.target.value})}
              rows={2}
            />
            <button type="submit" className="submit-btn">✅ Submit Product</button>
          </form>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="app">
      {!isAuthenticated ? (
        <AuthScreen />
      ) : (
        <>
          <header className="header">
            <div className="header-content">
              <div>
                <h1>✨ GlowCheck</h1>
                <p>Check any product for hair & skin health</p>
              </div>
              <button className="profile-btn" onClick={() => setActiveTab('profile')}>
                {user?.name?.charAt(0) || '?'}
              </button>
            </div>
          </header>

          <nav className="tabs">
        <button 
          className={activeTab === 'scan' ? 'active' : ''} 
          onClick={() => setActiveTab('scan')}
        >
          📷 Scan
        </button>
        <button 
          className={activeTab === 'search' ? 'active' : ''} 
          onClick={() => setActiveTab('search')}
        >
          🔍 Search
        </button>
        <button 
          className={activeTab === 'browse' ? 'active' : ''} 
          onClick={() => setActiveTab('browse')}
        >
          📂 Browse
        </button>
        <button 
          className={activeTab === 'submit' ? 'active' : ''} 
          onClick={() => setActiveTab('submit')}
        >
          📝 Submit
        </button>
        <button 
          className={activeTab === 'legal' ? 'active' : ''} 
          onClick={() => setActiveTab('legal')}
        >
          ℹ️ Info
        </button>
        <button 
          className={activeTab === 'profile' ? 'active' : ''} 
          onClick={() => setActiveTab('profile')}
        >
          👤 Profile
        </button>
      </nav>

      <main className="content">
        {activeTab === 'scan' && (
          <div className="scan-section">
            {!scannerActive ? (
              <>
                <div className="scanner-placeholder" onClick={startScanner}>
                  <div className="scanner-icon">📷</div>
                  <p>Tap to open camera scanner</p>
                  <p className="hint">Point at a product barcode</p>
                </div>
                <button className="start-scan-btn" onClick={startScanner}>
                  📷 Start Barcode Scanner
                </button>
              </>
            ) : (
              <div className="scanner-active">
                <div id="scanner-container"></div>
                <button className="stop-scan-btn" onClick={stopScanner}>
                  ✕ Close Scanner
                </button>
              </div>
            )}
            {!showCategoryPage && <CategoryButtons />}
          </div>
        )}

        {showCategoryPage && selectedCategory && (
          <div className="category-page">
            <div className="category-page-header">
              <button className="back-btn" onClick={() => setShowCategoryPage(false)}>
                ← Back
              </button>
              <h2>{categories.find(c => c.id === selectedCategory)?.icon} {categories.find(c => c.id === selectedCategory)?.name}</h2>
            </div>
            <div className="category-page-products">
              {categoryProducts.map(p => (
                <button key={p.barcode} onClick={() => handleBarcodeScan(p.barcode)} className="product-btn-with-image">
                  {p.image && <img src={p.image} alt={p.name} className="product-thumb" />}
                  <span className="product-info">
                    <span className="product-brand">{p.brand}</span>
                    <span className="product-name">{p.name}</span>
                  </span>
                </button>
              ))}
              {categoryProducts.length === 0 && <p className="empty">No products in this category yet.</p>}
            </div>
          </div>
        )}

        {activeTab === 'submit' && (
          <div className="submit-section">
            <SubmitForm />
            {submittedProducts.length > 0 && (
              <div className="submitted-list">
                <h3>Your Submitted Products</h3>
                {submittedProducts.map((p, i) => (
                  <div key={i} className="submitted-item">
                    <strong>{p.brand} - {p.name}</strong>
                    <p>{p.type === 'hair' ? '💇‍♀️' : '🧴'} {p.category}</p>
                    <p className="ingredients-preview">{p.ingredients.join(', ')}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'search' && (
          <div className="search-section">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <div className="results">
              {filteredProducts.map(product => {
                const score = calculateScore(product);
                return (
                  <div 
                    key={product.barcode} 
                    className="product-card"
                    onClick={() => setScannedProduct({ ...product, overallScore: score })}
                  >
                    <div className="product-info">
                      <h3>{product.name}</h3>
                      <p>{product.brand} • {product.category}</p>
                    </div>
                    <div 
                      className="score-badge"
                      style={{ backgroundColor: getRatingColor(score) }}
                    >
                      {score}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === 'browse' && (
          <div className="browse-section">
            <CategoryButtons />
          </div>
        )}

        {scannedProduct && (
          <div className="product-result">
            <div className="result-actions">
              <button className="close-btn" onClick={() => setScannedProduct(null)}>✕</button>
              {isAuthenticated && (
                <button 
                  className={`save-btn ${isProductSaved(scannedProduct.barcode) ? 'saved' : ''}`}
                  onClick={() => toggleSavedProduct(scannedProduct.barcode)}
                >
                  {isProductSaved(scannedProduct.barcode) ? '❤️ Saved' : '🤍 Save'}
                </button>
              )}
            </div>
            <div className="result-header">
              <div>
                <h2>{scannedProduct.name}</h2>
                <p>{scannedProduct.brand} • {scannedProduct.category}</p>
              </div>
              <div 
                className="big-score"
                style={{ backgroundColor: getRatingColor(scannedProduct.overallScore) }}
              >
                {scannedProduct.overallScore}
              </div>
            </div>
            
            <p className="rating-label">{getRatingLabel(scannedProduct.overallScore)}</p>

            <div className="ratings-grid">
              <div className="rating-item">
                <span className="rating-label-small">Ingredient Safety</span>
                <div className="rating-bar">
                  <div 
                    className="rating-fill" 
                    style={{ width: `${scannedProduct.ratings.ingredientSafety * 20}%` }}
                  ></div>
                </div>
                <span className="rating-value">{scannedProduct.ratings.ingredientSafety}/5</span>
              </div>
              {scannedProduct.type === 'hair' && (
                <div className="rating-item">
                  <span className="rating-label-small">Hair Health</span>
                  <div className="rating-bar">
                    <div 
                      className="rating-fill" 
                      style={{ width: `${scannedProduct.ratings.curlFriendly * 20}%` }}
                    ></div>
                  </div>
                  <span className="rating-value">{scannedProduct.ratings.curlFriendly}/5</span>
                </div>
              )}
              {scannedProduct.type === 'skincare' && (
                <div className="rating-item">
                  <span className="rating-label-small">Skin Friendly</span>
                  <div className="rating-bar">
                    <div 
                      className="rating-fill" 
                      style={{ width: `${scannedProduct.ratings.skinFriendly * 20}%` }}
                    ></div>
                  </div>
                  <span className="rating-value">{scannedProduct.ratings.skinFriendly}/5</span>
                </div>
              )}
              <div className="rating-item badges">
                <span className={`badge ${scannedProduct.ratings.vegan ? 'good' : 'bad'}`}>
                  {scannedProduct.ratings.vegan ? '✓ Vegan' : '✗ Not Vegan'}
                </span>
                <span className={`badge ${scannedProduct.ratings.crueltyFree ? 'good' : 'bad'}`}>
                  {scannedProduct.ratings.crueltyFree ? '✓ Cruelty Free' : '✗ Not CF'}
                </span>
                <span className={`badge ${scannedProduct.ratings.pregnancySafe ? 'good' : 'bad'}`}>
                  {scannedProduct.ratings.pregnancySafe ? '✓ Pregnancy Safe' : '✗ Not Safe'}
                </span>
              </div>
            </div>

            <div className="ingredients-section">
              <h3>Ingredients</h3>
              <p className="ingredients-list">{scannedProduct.ingredients.join(', ')}</p>
            </div>

            {scannedProduct.hazards && (
              <div className="hazards-section">
                <h3>⚠️ Hazard Analysis</h3>
                <div className="hazards-grid">
                  {hazardCategories.map(hazard => {
                    const hasHazard = scannedProduct.hazards[hazard.key];
                    return (
                      <div 
                        key={hazard.key} 
                        className={`hazard-item ${hasHazard ? 'hazard-bad' : 'hazard-good'}`}
                      >
                        <span className="hazard-icon">{hazard.icon}</span>
                        <span className="hazard-label">{hazard.label}</span>
                        <span className="hazard-status">
                          {hasHazard ? '⚠️ Found' : '✅ Clear'}
                        </span>
                        {hasHazard && hazard.sources && (
                          <span className="hazard-sources">
                            Sources: {hazard.sources.join(', ')}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'legal' && (
          <div className="legal-section">
            <h2>ℹ️ Information & Legal</h2>
            
            <div className="legal-tabs">
              <button 
                className={legalSection === 'terms' ? 'active' : ''}
                onClick={() => setLegalSection('terms')}
              >
                📜 Terms of Service
              </button>
              <button 
                className={legalSection === 'privacy' ? 'active' : ''}
                onClick={() => setLegalSection('privacy')}
              >
                🔒 Privacy Policy
              </button>
            </div>

            {legalSection === 'terms' && (
              <div className="legal-content">
                <h3>Terms of Service</h3>
                <p className="legal-updated">Last updated: March 2026</p>
                
                <h4>1. Acceptance of Terms</h4>
                <p>By downloading or using GlowCheck, you agree to be bound by these Terms of Service.</p>

                <h4>2. Purpose of the App</h4>
                <p>GlowCheck is an informational tool that provides ingredient analysis and safety ratings for beauty and hair care products. It is NOT a medical device. We do not diagnose, treat, or prevent any health condition.</p>

                <h4>3. Not Medical Advice</h4>
                <p>The information provided by GlowCheck is for informational purposes only. It is not a substitute for professional medical advice. Always seek the advice of a qualified healthcare provider.</p>

                <h4>4. Accuracy of Information</h4>
                <p>We strive to provide accurate data but rely on third-party databases. We do not guarantee the accuracy, completeness, or reliability of any information in the app.</p>

                <h4>5. Limitation of Liability</h4>
                <p>To the maximum extent permitted by law, GlowCheck shall not be liable for any damages arising from use of the app or reliance on any information provided.</p>

                <h4>6. Indemnification</h4>
                <p>You agree to indemnify GlowCheck from any claims arising from your use of the app.</p>

                <h4>7. Intellectual Property</h4>
                <p>All content, design, logos, and algorithms in GlowCheck are owned by the developer.</p>

                <h4>8. Contact</h4>
                <p>For questions about these Terms, contact: [Your Email]</p>
              </div>
            )}

            {legalSection === 'privacy' && (
              <div className="legal-content">
                <h3>Privacy Policy</h3>
                <p className="legal-updated">Last updated: March 2026</p>
                
                <h4>1. Introduction</h4>
                <p>GlowCheck respects your privacy. This policy explains how we collect, use, and safeguard your information.</p>

                <h4>2. Information We Collect</h4>
                <p><strong>Data you provide:</strong> Account data, product submissions, feedback.<br/>
                <strong>Automatic data:</strong> Device type, usage data, crash logs.<br/>
                <strong>Third-party data:</strong> Ingredient data from external databases.</p>

                <h4>3. How We Use Your Information</h4>
                <p>We use your data to provide and improve GlowCheck, analyze products, and communicate with you.</p>

                <h4>4. Data Sharing</h4>
                <p>We do NOT sell your personal data. We may share data with service providers and if required by law.</p>

                <h4>5. Your Rights (GDPR)</h4>
                <p>Under UK GDPR, you have rights to access, rectification, erasure, and portability of your data.</p>

                <h4>6. Children</h4>
                <p>GlowCheck is not intended for children under 13.</p>

                <h4>7. Contact</h4>
                <p>For questions about this policy, contact: [Your Email]</p>
              </div>
            )}

            <div className="legal-footer">
              <p>⚠️ Disclaimer: GlowCheck provides information for educational purposes only. Not medical advice. Consult professionals for health concerns.</p>
            </div>
          </div>
        )}

        {activeTab === 'profile' && (
          <ProfileScreen />)}
      </main>
        </>
      )}
    </div>
  );
}

export default App;
