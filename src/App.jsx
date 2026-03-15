import { useState, useEffect, useRef } from 'react';
import { Html5QrcodeScanner, Html5Qrcode } from 'html5-qrcode';
import Tesseract from 'tesseract.js';
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
  const [pendingBarcode, setPendingBarcode] = useState(null);
  const [ocrProcessing, setOcrProcessing] = useState(false);
  const [ocrProgress, setOcrProgress] = useState(0);
  const [showLegalModal, setShowLegalModal] = useState(false);
  const [legalSection, setLegalSection] = useState('terms');
  const scannerRef = useRef(null);
  const html5QrCodeRef = useRef(null);
  
  // Handle scanner activation with delay to ensure DOM is ready
  useEffect(() => {
    if (scannerActive && !html5QrCodeRef.current) {
      // Small delay to ensure DOM element is rendered
      const timer = setTimeout(async () => {
        try {
          html5QrCodeRef.current = new Html5Qrcode("scanner-container");
          
          await html5QrCodeRef.current.start(
            { facingMode: "environment" },
            {
              fps: 10,
              qrbox: { width: 250, height: 150 },
              aspectRatio: 1.777
            },
            (decodedText) => {
              const product = products.find(p => p.barcode === decodedText);
              if (product) {
                setScannedProduct(product);
                stopScanner();
              } else {
                // Product not found - store barcode and go to submit form
                setPendingBarcode(decodedText);
                stopScanner();
                setActiveTab('submit');
                setShowSubmitForm(true);
              }
            },
            (errorMessage) => {
              // Ignore scan errors
            }
          );
        } catch (err) {
          console.error("Scanner error:", err);
          setScannerActive(false);
          if (err.name === 'NotAllowedError') {
            alert("Camera access denied. Please allow camera access in your browser settings.");
          } else {
            alert("Camera not available. Try using the sample products below instead.");
          }
        }
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [scannerActive]);
  
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
        alert("No camera found on this device.");
        return;
      }
      
      // Request camera permission explicitly
      await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
      
      // Let useEffect handle the actual scanner start
      setScannerActive(true);
    } catch (err) {
      console.error("Scanner error:", err);
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
        // Product not found - store barcode and go to submit form
        setPendingBarcode(result);
        setActiveTab('submit');
        setShowSubmitForm(true);
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

  // Knowledge base for ingredient analysis
  const ingredientDatabase = {
    // Good ingredients (boost score)
    good: [
      'water', 'aqua', 'shea butter', 'coconut oil', 'olive oil', 'argan oil', 'jojoba oil',
      'castor oil', 'aloe vera', 'aloe barbadensis', 'glycerin', 'vitamin e', 'tocopherol',
      'rosemary', 'peppermint', 'lavender', 'tea tree', 'avocado oil', 'sweet almond oil',
      'cocoa butter', 'shea butter', 'mango butter', 'honey', 'propolis', 'biotin',
      'keratin', 'collagen', 'elastin', 'hyaluronic acid', 'panthenol', 'pro-vitamin b5',
      'niacinamide', 'vitamin c', 'ascorbic acid', 'green tea', 'chamomile', 'calendula',
      'neem', 'carrot seed', 'rosehip oil', ' Tamanu oil', 'babassu oil', ' Kukui nut oil',
      'flaxseed', 'chia seed', 'hemp seed', 'moringa', 'baobab', 'marula'
    ],
    // Bad ingredients (reduce score)
    bad: [
      'sodium lauryl sulfate', 'sls', 'sodium laureth sulfate', 'sles', 'paraben', 'parabens',
      'formaldehyde', 'phthalates', 'triclosan', 'synthetic fragrance', 'parfum',
      'alcohol denat', 'denatured alcohol', 'isopropyl alcohol', 'propane', 'butane',
      'mineral oil', 'petrolatum', 'paraffinum liquidum', 'dimethicone', 'cyclomethicone',
      'trimethylsiloxysilicate', 'polyquaternium', 'carbomer', 'triethanolamine', 'tea',
      'sodium hydroxide', 'potassium hydroxide', 'ammonium hydroxide', 'DEA', 'MEA', 'TEA',
      'oxybenzone', 'octinoxate', 'homosalate', 'avobenzone', 'retinyl palmitate',
      'coal tar', 'hydroquinone', 'mercury', 'lead', 'arsenic', 'cadmium', 'chromium',
      ' PEG', 'polyethylene', 'polypropylene', 'polysorbate', 'ceteareth', 'steareth',
      'cetearyl alcohol', 'cetyl alcohol', 'myristyl alcohol', 'stearyl alcohol',
      'BHT', 'BHA', 'synthetic colors', 'FD&C', 'CI 1', 'CI 2'
    ],
    // Hair-specific concerns
    curlUnfriendly: [
      'sodium lauryl sulfate', 'sls', 'sodium laureth sulfate', 'sles', 'alcohol denat',
      'denatured alcohol', 'isopropyl alcohol', 'propyl alcohol', 'SD alcohol',
      'polyquaternium-10', 'polyquaternium-7', 'dimethicone', 'cyclomethicone'
    ],
    // allergens
    allergens: [
      'fragrance', 'parfum', 'linalool', 'limonene', 'citronellol', 'geraniol',
      'eugenol', 'cinnamal', 'cinnamyl alcohol', 'benzyl benzoate', 'benzyl salicylate',
      'farnesol', 'hexyl cinnamal', 'butylphenyl methylpropional', 'amyl cinnamal',
      'amylcinnamyl alcohol', 'benzyl alcohol', 'evernia prunastri', 'evernia furfuracea'
    ]
  };

  // Analyze extracted ingredients and generate ratings
  const analyzeIngredients = (ingredientList) => {
    const lowerIngredients = ingredientList.map(i => i.toLowerCase());
    
    let goodCount = 0;
    let badCount = 0;
    let curlUnfriendlyCount = 0;
    let allergenCount = 0;

    lowerIngredients.forEach(ing => {
      ingredientDatabase.good.forEach(good => {
        if (ing.includes(good) || good.includes(ing)) goodCount++;
      });
      ingredientDatabase.bad.forEach(bad => {
        if (ing.includes(bad) || bad.includes(ing)) badCount++;
      });
      ingredientDatabase.curlUnfriendly.forEach(cu => {
        if (ing.includes(cu) || cu.includes(ing)) curlUnfriendlyCount++;
      });
      ingredientDatabase.allergens.forEach(aller => {
        if (ing.includes(aller) || aller.includes(ing)) allergenCount++;
      });
    });

    // Calculate ratings
    const total = ingredientList.length || 1;
    
    // Ingredient Safety: based on ratio of good to bad
    let ingredientSafety = 1;
    if (goodCount > badCount) ingredientSafety = Math.min(5, 2 + Math.floor(goodCount / 2));
    if (badCount > goodCount) ingredientSafety = Math.max(1, 5 - badCount);
    
    // Curl Friendly (for hair)
    const curlFriendly = Math.max(1, 5 - curlUnfriendlyCount);
    
    // Skin Friendly
    const skinFriendly = allergenCount > 0 ? Math.max(1, 5 - allergenCount) : Math.min(5, 3 + goodCount);
    
    // Pregnancy Safe (simplified - flag if any known harmful ingredients)
    const pregnancySafe = badCount === 0;
    
    // Vegan (simplified - check for animal-derived)
    const vegan = !lowerIngredients.some(i => 
      ['beeswax', 'honey', 'propolis', 'lanolin', 'keratin', 'collagen', 'elastin', 'carmine', 'shellac'].some(a => i.includes(a))
    );
    
    // Cruelty Free (simplified - no animal testing ingredients)
    const crueltyFree = true; // Would need more complex checking
    
    return {
      ingredientSafety,
      curlFriendly,
      skinFriendly,
      pregnancySafe,
      vegan,
      crueltyFree,
      hazards: {
        allergens: allergenCount > 0,
        scalpIrritants: badCount > 0,
        waxCoatings: lowerIngredients.some(i => 
          ['dimethicone', 'cyclomethicone', 'petrolatum', 'mineral oil', 'carnauba wax', 'beeswax'].some(w => i.includes(w))
        ),
        dryingAlcohols: curlUnfriendlyCount > 0
      }
    };
  };

  // Process image with OCR
  const processIngredientImage = async (imageData) => {
    setOcrProcessing(true);
    setOcrProgress(0);
    
    try {
      const result = await Tesseract.recognize(
        imageData,
        'eng',
        {
          logger: m => {
            if (m.status === 'recognizing text') {
              setOcrProgress(Math.round(m.progress * 100));
            }
          }
        }
      );
      
      // Extract text and parse into ingredients
      const rawText = result.data.text;
      
      // Clean up and parse ingredients
      // Look for common ingredient list patterns
      let ingredientsText = rawText;
      
      // Try to find "Ingredients" label and extract list
      const ingredientsMatch = rawText.match(/ingredients[:\s]*(.+)/i);
      if (ingredientsMatch) {
        ingredientsText = ingredientsMatch[1];
      }
      
      // Split by common delimiters and clean up
      const ingredients = ingredientsText
        .split(/[,;\n\(\)]+/)
        .map(i => i.trim())
        .filter(i => i.length > 2 && i.length < 50)
        .map(i => i.replace(/^\d+\.\s*/, '')) // Remove numbered list prefixes
        .slice(0, 50); // Limit to first 50 ingredients
      
      if (ingredients.length === 0) {
        alert('Could not extract ingredients from image. Please enter manually.');
        setOcrProcessing(false);
        return null;
      }
      
      // Analyze ingredients
      const ratings = analyzeIngredients(ingredients);
      
      setOcrProcessing(false);
      return { ingredients, ratings };
      
    } catch (error) {
      console.error('OCR Error:', error);
      alert('Failed to process image. Please enter ingredients manually.');
      setOcrProcessing(false);
      return null;
    }
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

  const SubmitForm = ({ scannedBarcode = null, onProcessImage, ocrProcessing = false, ocrProgress = 0 }) => {
    const [formData, setFormData] = useState({
      name: '',
      brand: '',
      category: '',
      type: 'hair',
      ingredients: '',
      notes: '',
      image: null,
      imagePreview: null,
      analyzedRatings: null
    });
    const fileInputRef = useRef(null);

    const handleImageUpload = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData({ ...formData, image: file, imagePreview: reader.result });
        };
        reader.readAsDataURL(file);
      }
    };

    const removeImage = () => {
      setFormData({ ...formData, image: null, imagePreview: null });
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const newSubmission = {
        ...formData,
        barcode: scannedBarcode,
        ingredients: formData.ingredients.split(',').map(i => i.trim()).filter(i => i),
        submittedAt: new Date().toISOString()
      };
      setSubmittedProducts([...submittedProducts, newSubmission]);
      alert('✅ Product submitted! Thanks for contributing to the GlowCheck community.');
      setFormData({ name: '', brand: '', category: '', type: 'hair', ingredients: '', notes: '', image: null, imagePreview: null });
      setShowSubmitForm(false);
      setPendingBarcode(null);
    };

    if (showSubmitForm) {
      return (
        <div className="submit-form">
          <h3>📝 Submit a Product</h3>
          <p className="hint">Help grow our community database!</p>
          {scannedBarcode && (
            <p className="barcode-info">📷 Scanned: {scannedBarcode}</p>
          )}
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
            
            {/* Image upload section */}
            <div className="image-upload-section">
              <p className="image-upload-label">📸 Take a photo of the ingredients list</p>
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                capture="environment"
                onChange={handleImageUpload}
                style={{ display: 'none' }}
                id="image-upload"
              />
              <label htmlFor="image-upload" className="image-upload-btn">
                {formData.imagePreview ? '📷 Change Photo' : '📷 Take Photo'}
              </label>
              {formData.imagePreview && (
                <div className="image-preview">
                  <img src={formData.imagePreview} alt="Ingredients" />
                  <button type="button" className="remove-image-btn" onClick={removeImage}>✕</button>
                  <button 
                    type="button" 
                    className="analyze-btn"
                    onClick={async () => {
                      const result = await onProcessImage(formData.imagePreview);
                      if (result) {
                        setFormData({
                          ...formData,
                          ingredients: result.ingredients.join(', '),
                          analyzedRatings: result.ratings
                        });
                      }
                    }}
                  >
                    🔍 Analyze Ingredients
                  </button>
                </div>
              )}
            </div>
            
            {ocrProcessing && (
              <div className="ocr-progress">
                <p>🔍 Reading ingredients... {ocrProgress}%</p>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${ocrProgress}%` }}></div>
                </div>
              </div>
            )}
            
            <div className="manual-entry-toggle">
              <p>Or enter ingredients manually:</p>
            </div>
            <textarea
              placeholder="Ingredients (comma separated) - e.g., Water, Shea Butter, Coconut Oil"
              value={formData.ingredients}
              onChange={(e) => setFormData({...formData, ingredients: e.target.value})}
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
            <SubmitForm 
              scannedBarcode={pendingBarcode} 
              onProcessImage={processIngredientImage}
              ocrProcessing={ocrProcessing}
              ocrProgress={ocrProgress}
            />
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
