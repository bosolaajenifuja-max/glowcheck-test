// Expanded product database for GlowCheck MVP
// Target: 50+ products across hair care categories

export const products = [
  // === HAIR CARE - SHAMPOOS ===
  {
    barcode: "123456789",
    name: "Cantu Shea Butter Cream Shampoo",
    brand: "Cantu",
    category: "Shampoo",
    type: "hair",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=100&h=100&fit=crop",
    ingredients: ["Aqua (Water)", "Sodium C14-16 Olefin Sulfonate", "Cocamidopropyl Betaine", "Cocamide DIPA", "Glycerin", "Acrylates Copolymer", "Phenoxyethanol", "Parfum (Fragrance)", "Glycol Distearate", "Steareth-4", "Panthenol", "Butyrospermum Parkii (Shea) Butter", "Polyquaternium-39", "Polyester-37", "Guar Hydroxypropyltrimonium Chloride", "Sodium Hydroxide", "Sodium Chloride", "Citric Acid", "Disodium EDTA", "Benzyl Benzoate"],
    ratings: {
      ingredientSafety: 3,
      curlFriendly: 4,
      skinFriendly: 4,
      vegan: false,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true,
      scalpIrritants: true,
      waxCoatings: false,
      dryingAlcohols: false
    },
    overallScore: 58
  },
  {
    barcode: "234567890",
    name: "Mielle Rosemary Mint Shampoo",
    brand: "Mielle",
    category: "Shampoo",
    type: "hair",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=100&h=100&fit=crop",
    ingredients: ["Aqua (Water)", "Sodium C14-16 Olefin Sulfonate", "Cocamidopropyl Betaine", "Polyquaternium-7", "Cocamide MIPA", "Glycol Stearate", "Polyquaternium-10", "Biotin", "Hydrolyzed Soy Protein", "Cocos Nucifera (Coconut) Oil", "Orbignya Oleifera (Babassu) Seed Oil", "Ricinus Communis (Castor) Seed Oil", "Rosmarinus Officinalis (Rosemary) Leaf Oil", "Mentha Piperita (Peppermint) Oil", "Zingiber Officinale (Ginger) Root Oil", "Equisetum Arvense (Horsetail) Extract", "Lawsonia Inermis (Henna) Extract", "Anthemis Nobilis (Chamomile) Flower Extract", "Symphytum Officinale (Comfrey) Extract", "Humulus Lupulus (Hops) Extract", "Urtica Dioica (Nettle) Extract", "Panthenol", "Glycerin", "Fragrance", "Benzyl Benzoate", "Linalool", "Limonene"],
    ratings: {
      ingredientSafety: 5,
      curlFriendly: 5,
      skinFriendly: 4,
      vegan: true,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true,
      scalpIrritants: false,
      waxCoatings: false,
      dryingAlcohols: false
    },
    overallScore: 88
  },
  {
    barcode: "345678901",
    name: "Pattern Shampoo",
    brand: "Pattern",
    category: "Shampoo",
    type: "hair",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=100&h=100&fit=crop",
    ingredients: ["Aqua (Water)", "Sodium C14-16 Olefin Sulfonate", "Cocamidopropyl Betaine", "Propanediol", "Glycerin", "Butyrospermum Parkii (Shea) Butter", "Cocos Nucifera (Coconut) Oil", "Mel (Honey)", "Argania Spinosa Kernel Oil", "Persea Gratissima (Avocado) Oil", "Simmondsia Chinensis (Jojoba) Seed Oil", "Melaleuca Alternifolia (Tea Tree) Leaf Oil", "Biotin", "Panthenol", "Tocopherol", "Phenoxyethanol", "Ethylhexylglycerin", "Fragrance"],
    ratings: {
      ingredientSafety: 4,
      curlFriendly: 5,
      skinFriendly: 4,
      vegan: true,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true,
      scalpIrritants: false,
      waxCoatings: false
    },
    overallScore: 78
  },
  {
    barcode: "456789012",
    name: "Aunt Jackie's Buttermilk Shampoo",
    brand: "Aunt Jackie's",
    category: "Shampoo",
    type: "hair",
    image: null,
    ingredients: ["Aqua (Water)", "Sodium C14-16 Olefin Sulfonate", "Cocamidopropyl Betaine", "Cocamide MIPA", "Glycerin", "Butyrospermum Parkii (Shea) Butter", "Cocos Nucifera (Coconut) Oil", "Buttermilk", "Mel (Honey)", "Polyquaternium-10", "Polyquaternium-7", "Panthenol", "Tocopherol", "Phenoxyethanol", "Ethylhexylglycerin", "Fragrance", "Benzyl Benzoate", "Linalool", "Limonene"],
    ratings: {
      ingredientSafety: 4,
      curlFriendly: 4,
      skinFriendly: 4,
      vegan: false,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true,
      waxCoatings: false
    },
    overallScore: 68
  },
  {
    barcode: "567890123",
    name: "SheaMoisture Coconut Shampoo",
    brand: "SheaMoisture",
    category: "Shampoo",
    type: "hair",
    image: "https://images.unsplash.com/photo-1571781565023-4d619426f83c?w=100&h=100&fit=crop",
    ingredients: ["Aqua (Water)", "Sodium Lauryl Sulfate", "Cocamidopropyl Betaine", "Cocamide MIPA", "Glycerin", "Cocos Nucifera (Coconut) Oil", "Butyrospermum Parkii (Shea) Butter", "Hydrolyzed Keratin", "Argania Spinosa Kernel Oil", "Eucheuma Denticulatum (Sea Moss) Extract", "Sorbitan Olivate", "Guar Hydroxypropyltrimonium Chloride", "Panthenol", "Tocopherol", "Phenoxyethanol", "Ethylhexylglycerin", "Fragrance", "Benzyl Benzoate", "Linalool"],
    ratings: {
      ingredientSafety: 3,
      curlFriendly: 4,
      skinFriendly: 4,
      vegan: true,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true,
      waxCoatings: false,
      sulfates: true
    },
    overallScore: 62
  },

  // === HAIR CARE - CONDITIONERS ===
  {
    barcode: "678901234",
    name: "Cantu Deep Conditioner",
    brand: "Cantu",
    category: "Deep Conditioner",
    type: "hair",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=100&h=100&fit=crop",
    ingredients: ["Aqua (Water)", "Canola Oil", "Glycerin", "Cetearyl Alcohol", "Beeswax", "Parfum (Fragrance)", "Cetyl Alcohol", "Butyrospermum Parkii (Shea) Butter", "Ceteareth-20", "Glycol Stearate", "Glyceryl Stearate", "PEG-100 Stearate", "Phenoxyethanol", "Ethylhexylglycerin", "Limonene", "Linalool", "Hexyl Cinnamal", "Benzyl Benzoate", "Coumarin"],
    ratings: {
      ingredientSafety: 4,
      curlFriendly: 4,
      skinFriendly: 4,
      vegan: false,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true,
      waxCoatings: true,
      scalpIrritants: false
    },
    overallScore: 65
  },
  {
    barcode: "789012345",
    name: "Mielle Honey Hydration Conditioner",
    brand: "Mielle",
    category: "Conditioner",
    type: "hair",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=100&h=100&fit=crop",
    ingredients: ["Aqua (Water)", "Cetyl Alcohol", "Glycerin", "Honey", "Punica Granatum (Pomegranate) Seed Oil", "Orbignya Oleifera (Babassu) Seed Oil", "Astrocaryum Murumuru Seed Butter", "Prunus Amygdalus Dulcis (Sweet Almond) Oil", "Euterpe Oleracea (Acai) Fruit Extract", "Panthenol", "Polyquaternium-37", "Propylene Glycol Dicaprylate/Dicaprate", "Phenoxyethanol", "Ethylhexylglycerin", "Fragrance", "Benzyl Benzoate", "Linalool", "Limonene"],
    ratings: {
      ingredientSafety: 5,
      curlFriendly: 5,
      skinFriendly: 5,
      vegan: true,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true,
      waxCoatings: false,
      scalpIrritants: false
    },
    overallScore: 90
  },
  {
    barcode: "890123456",
    name: "Pattern Heavy Conditioner",
    brand: "Pattern",
    category: "Conditioner",
    type: "hair",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=100&h=100&fit=crop",
    ingredients: ["Aqua (Water)", "Cetearyl Alcohol", "Behentrimonium Methosulfate", "Glycerin", "Butyrospermum Parkii (Shea) Butter", "Cocos Nucifera (Coconut) Oil", "Aloe Barbadensis Leaf Juice", "Argania Spinosa Kernel Oil", "Simmondsia Chinensis (Jojoba) Seed Oil", "Squalane", "Panthenol", "Hydrolyzed Keratin", "Biotin", "Tocopherol", "Phenoxyethanol", "Ethylhexylglycerin", "Fragrance", "Benzyl Benzoate", "Linalool"],
    ratings: {
      ingredientSafety: 5,
      curlFriendly: 5,
      skinFriendly: 5,
      vegan: true,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true,
      waxCoatings: false
    },
    overallScore: 88
  },

  // === HAIR CARE - OILS & TREATMENTS ===
  {
    barcode: "901234567",
    name: "Mielle Rosemary Mint Scalp & Hair Oil",
    brand: "Mielle",
    category: "Hair Oil",
    type: "hair",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=100&h=100&fit=crop",
    ingredients: ["Glycine Soja (Soybean) Oil", "Ricinus Communis (Castor) Seed Oil", "Rosmarinus Officinalis (Rosemary) Leaf Oil", "Simmondsia Chinensis (Jojoba) Seed Oil", "Mentha Piperita (Peppermint) Oil", "Melaleuca Alternifolia (Tea Tree) Leaf Oil", "Cocos Nucifera (Coconut) Oil", "Aloe Barbadensis Leaf Extract", "Biotin", "Menthol", "Lavandula Angustifolia (Lavender) Oil", "Triticum Vulgare (Wheat) Germ Oil", "Carthamus Tinctorius (Safflower) Seed Oil", "Oenothera Biennis (Evening Primrose) Oil", "Vitis Vinifera (Grape) Seed Oil", "Benzyl Nicotinate", "Arctium Lappa (Burdock) Root Extract", "Equisetum Arvense (Horsetail) Extract", "Urtica Dioica (Nettle) Extract", "Panthenol", "Tocopherol", "Fragrance", "Benzyl Benzoate", "Linalool", "Limonene", "Coumarin"],
    ratings: {
      ingredientSafety: 5,
      curlFriendly: 5,
      skinFriendly: 4,
      vegan: true,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true,
      scalpIrritants: false,
      waxCoatings: false
    },
    overallScore: 85
  },
  {
    barcode: "012345678",
    name: "Cantu Jamaican Black Castor Oil Styling Gel",
    brand: "Cantu",
    category: "Styling Gel",
    type: "hair",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=100&h=100&fit=crop",
    ingredients: ["Aqua (Water)", "Glycerin", "PEG-40 Hydrogenated Castor Oil", "Carbomer", "Phenoxyethanol", "Aminomethyl Propanol", "Parfum (Fragrance)", "Butyrospermum Parkii (Shea) Butter", "Ricinus Communis (Castor) Seed Oil", "Olea Europaea (Olive) Fruit Oil", "CocOS Nucifera (Coconut) Oil", "Benzyl Benzoate", "Linalool", "Hexyl Cinnamal", "Limonene"],
    ratings: {
      ingredientSafety: 3,
      curlFriendly: 4,
      skinFriendly: 3,
      vegan: false,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true,
      waxCoatings: false,
      dryingAlcohols: false
    },
    overallScore: 62
  },
  {
    barcode: "112233445",
    name: "Blue Magic Jamaican Black Castor Oil",
    brand: "Blue Magic",
    category: "Hair Oil",
    type: "hair",
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?w=100&h=100&fit=crop",
    ingredients: ["Petrolatum", "Ricinus Communis (Castor) Seed Oil", "Lanolin", "Beeswax/Cera Alba", "Butyrospermum Parkii (Shea) Butter", "Carthamus Tinctorius (Safflower) Seed Oil", "Cocos Nucifera (Coconut) Extract", "Aloe Barbadensis Leaf Extract", "Lawsonia Inermis (Henna) Extract", "Fragrance", "Linalool", "Benzyl Benzoate", "Coumarin"],
    ratings: {
      ingredientSafety: 2,
      curlFriendly: 3,
      skinFriendly: 2,
      vegan: false,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true,
      waxCoatings: true,
      scalpIrritants: false,
      heavyPetrolatum: true
    },
    overallScore: 38
  },

  // === HAIR CARE - STYLING PRODUCTS ===
  {
    barcode: "223344556",
    name: "Cantu Shea Butter Holding Spritz",
    brand: "Cantu",
    category: "Styling Spray",
    type: "hair",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=100&h=100&fit=crop",
    ingredients: ["Aqua (Water)", "Glycerin", "Parfum (Fragrance)", "PEG-40 Hydrogenated Castor Oil", "Butyrospermum Parkii (Shea) Butter", "Cocos Nucifera (Coconut) Oil", "Glycine Soja (Soybean) Oil", "Polysorbate 20", "Phenoxyethanol", "Ethylhexylglycerin", "Aminomethyl Propanol", "Carbomer", "Benzyl Benzoate", "Linalool", "Hexyl Cinnamal", "Limonene"],
    ratings: {
      ingredientSafety: 3,
      curlFriendly: 4,
      skinFriendly: 3,
      vegan: false,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true,
      waxCoatings: false,
      dryingAlcohols: false
    },
    overallScore: 55
  },
  {
    barcode: "334455667",
    name: "Mousse Foam",
    brand: "Eco Style",
    category: "Styling Mousse",
    type: "hair",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=100&h=100&fit=crop",
    ingredients: ["Aqua (Water)", "Polyurethane-14", "AMP-Acrylates Copolymer", "Glycerin", "Butane", "Propane", "Isobutane", "Panthenol", "Tocopherol", "Phenoxyethanol", "Ethylhexylglycerin", "Parfum (Fragrance)", "Benzyl Benzoate", "Linalool", "Limonene"],
    ratings: {
      ingredientSafety: 3,
      curlFriendly: 4,
      skinFriendly: 3,
      vegan: true,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true,
      dryingAlcohols: false,
      propellants: true
    },
    overallScore: 58
  },
  {
    barcode: "445566778",
    name: "Eco Style Argan Oil Gel",
    brand: "Eco Style",
    category: "Styling Gel",
    type: "hair",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=100&h=100&fit=crop",
    ingredients: ["Aqua (Water)", "Carbomer", "Triethanolamine", "Argania Spinosa Kernel Oil (Argan Oil)", "Glycerin", "VP/VA Copolymer", "Polysorbate 20", "Panthenol", "Tocopherol", "Phenoxyethanol", "Ethylhexylglycerin", "Fragrance", "Benzyl Benzoate", "Linalool", "Limonene", "Citric Acid", "Disodium EDTA"],
    ratings: {
      ingredientSafety: 4,
      curlFriendly: 4,
      skinFriendly: 4,
      vegan: true,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true,
      waxCoatings: false
    },
    overallScore: 72
  },

  // === HAIR CARE - CREAMS & LOTIONS ===
  {
    barcode: "556677889",
    name: "Cantu Shea Butter Cream",
    brand: "Cantu",
    category: "Hair Cream",
    type: "hair",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=100&h=100&fit=crop",
    ingredients: ["Aqua (Water)", "Canola Oil", "Glycerin", "Cetearyl Alcohol", "Ceteareth-20", "Parfum (Fragrance)", "Butyrospermum Parkii (Shea) Butter", "Petrolatum", "Cetyl Alcohol", "Phenoxyethanol", "Ethylhexylglycerin", "Stearyl Alcohol", "Stearamidopropyl Dimethylamine", "Glyceryl Stearate", "PEG-100 Stearate", "Mangifera Indica (Mango) Seed Butter", "Olea Europaea (Olive) Fruit Oil", "Persea Gratissima (Avocado) Oil", "Prunus Amygdalus Dulcis (Sweet Almond) Oil", "Simmondsia Chinensis (Jojoba) Seed Oil", "Argania Spinosa Kernel Oil", "Benzyl Benzoate", "Linalool", "Hexyl Cinnamal", "Coumarin", "Limonene"],
    ratings: {
      ingredientSafety: 3,
      curlFriendly: 4,
      skinFriendly: 3,
      vegan: false,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true,
      waxCoatings: true,
      scalpIrritants: false
    },
    overallScore: 52
  },
  {
    barcode: "667788990",
    name: "Mielle Organics Hair Milk",
    brand: "Mielle",
    category: "Hair Milk",
    type: "hair",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=100&h=100&fit=crop",
    ingredients: ["Aqua (Water)", "Aloe Barbadensis Leaf Juice", "Glycerin", "Persea Gratissima (Organic Avocado) Oil", "Behentrimonium Methosulfate", "Cetyl Alcohol", "Cetearyl Alcohol", "Butyrospermum Parkii (Shea) Butter", "Cocos Nucifera (Coconut) Oil", "Hydrolyzed Wheat Protein", "Achillea Millefolium (Yarrow) Extract", "Urtica Dioica (Nettle) Extract", "Salvia Officinalis (Sage) Extract", "Equisetum Arvense (Horsetail) Extract", "Lavandula Angustifolia (Lavender) Extract", "Panthenol", "Tocopherol", "Phenoxyethanol", "Ethylhexylglycerin", "Fragrance", "Benzyl Benzoate", "Linalool", "Limonene", "Citric Acid"],
    ratings: {
      ingredientSafety: 5,
      curlFriendly: 5,
      skinFriendly: 5,
      vegan: true,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true,
      waxCoatings: false
    },
    overallScore: 92
  },
  {
    barcode: "778899001",
    name: "Pattern Heavy Cream",
    brand: "Pattern",
    category: "Hair Cream",
    type: "hair",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=100&h=100&fit=crop",
    ingredients: ["Aqua (Water)", "Cetearyl Alcohol", "Ceteareth-20", "Glycerin", "Butyrospermum Parkii (Shea) Butter", "Cocos Nucifera (Coconut) Oil", "Aloe Barbadensis Leaf Juice", "Argania Spinosa Kernel Oil", "Simmondsia Chinensis (Jojoba) Seed Oil", "Squalane", "Panthenol", "Hydrolyzed Silk Protein", "Biotin", "Tocopherol", "Phenoxyethanol", "Ethylhexylglycerin", "Fragrance", "Benzyl Benzoate", "Linalool", "Limonene"],
    ratings: {
      ingredientSafety: 5,
      curlFriendly: 5,
      skinFriendly: 5,
      vegan: true,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true,
      waxCoatings: false
    },
    overallScore: 86
  },
  {
    barcode: "889900112",
    name: "SheaMoisture Curl Enhancing Smoothie",
    brand: "SheaMoisture",
    category: "Hair Cream",
    type: "hair",
    image: "https://images.unsplash.com/photo-1571781565023-4d619426f83c?w=100&h=100&fit=crop",
    ingredients: ["Aqua (Water)", "Ceteareth-20", "Cetearyl Alcohol", "Glycerin", "Cocos Nucifera (Coconut) Oil", "Butyrospermum Parkii (Shea) Butter", "Linum Usitatissimum (Flaxseed) Seed Extract", "Astrocaryum Murumuru Seed Butter", "Theobroma Grandiflorum (Cupuaçu) Butter", "Aloe Barbadensis Leaf Juice", "Argania Spinosa Kernel Oil", "Glycine Soja (Soybean) Oil", "Panthenol", "Tocopherol", "Phenoxyethanol", "Ethylhexylglycerin", "Fragrance", "Benzyl Benzoate", "Linalool", "Limonene"],
    ratings: {
      ingredientSafety: 4,
      curlFriendly: 5,
      skinFriendly: 5,
      vegan: true,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true,
      waxCoatings: true
    },
    overallScore: 75
  },
  {
    barcode: "990011223",
    name: "Aunt Jackie's Whipped Pudding",
    brand: "Aunt Jackie's",
    category: "Hair Cream",
    type: "hair",
    image: null,
    ingredients: ["Aqua (Water)", "Butyrospermum Parkii (Shea) Butter", "Cocos Nucifera (Coconut) Oil", "Glycerin", "Buttermilk", "Linum Usitatissimum (Flaxseed) Seed Extract", "Chenopodium Quinoa Seed Extract", "Mel (Honey)", "Aloe Barbadensis Leaf Juice", "Panthenol", "Tocopherol", "Cetearyl Alcohol", "Ceteareth-20", "Phenoxyethanol", "Ethylhexylglycerin", "Fragrance", "Benzyl Benzoate", "Linalool", "Limonene"],
    ratings: {
      ingredientSafety: 5,
      curlFriendly: 5,
      skinFriendly: 5,
      vegan: true,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true,
      waxCoatings: true
    },
    overallScore: 78
  },

  // === SKINCARE ===
  {
    barcode: "101112233",
    name: "Cantu Shea Body Lotion",
    brand: "Cantu",
    category: "Body Lotion",
    type: "skincare",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=100&h=100&fit=crop",
    ingredients: ["Aqua (Water)", "Cetearyl Alcohol", "Glycerin", "Butyrospermum Parkii (Shea) Butter", "Cocos Nucifera (Coconut) Oil", "Helianthus Annuus (Sunflower) Seed Oil", "Caprylic/Capric Triglyceride", "Glyceryl Stearate", "PEG-100 Stearate", "Phenoxyethanol", "Ethylhexylglycerin", "Parfum (Fragrance)", "Carbomer", "Sodium Stearoyl Glutamate", "Tocopherol (Vitamin E)", "Benzyl Benzoate", "Linalool", "Hexyl Cinnamal", "Limonene"],
    ratings: {
      ingredientSafety: 4,
      skinFriendly: 4,
      vegan: false,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true,
      skinLightening: false
    },
    overallScore: 68
  },
  {
    barcode: "211223344",
    name: "Palmers Cocoa Butter Formula Lotion",
    brand: "Palmer's",
    category: "Body Lotion",
    type: "skincare",
    image: null,
    ingredients: ["Aqua (Water)", "Theobroma Cacao (Cocoa) Seed Butter", "Glycerin", "Cetearyl Alcohol", "Ceteareth-20", "Butyrospermum Parkii (Shea) Butter", "Tocopherol (Vitamin E)", "Simmondsia Chinensis (Jojoba) Seed Oil", "Cocos Nucifera (Coconut) Oil", "Elaeis Guineensis (Palm) Oil", "Carbomer", "Triethanolamine", "Phenoxyethanol", "Ethylhexylglycerin", "Methylparaben", "Propylparaben", "Fragrance", "Benzyl Alcohol", "Benzyl Benzoate", "Linalool", "Limonene", "Coumarin"],
    ratings: {
      ingredientSafety: 4,
      skinFriendly: 4,
      vegan: true,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true,
      parabens: true
    },
    overallScore: 65
  },
  {
    barcode: "311223344",
    name: "Ambi Fade Milk",
    brand: "Ambi",
    category: "Body Lotion",
    type: "skincare",
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=100&h=100&fit=crop",
    ingredients: ["Aqua (Water)", "Glycolic Acid", "Kojic Acid Dipalmitate", "Ascorbyl Glucoside (Vitamin C)", "Tocopherol (Vitamin E)", "Butyrospermum Parkii (Shea) Butter", "Glycerin", "Cetyl Alcohol", "Glyceryl Stearate", "PEG-100 Stearate", "Sodium Hydroxide", "Phenoxyethanol", "Methylparaben", "Propylparaben", "Fragrance", "Benzyl Benzoate", "Linalool", "Limonene"],
    ratings: {
      ingredientSafety: 2,
      skinFriendly: 2,
      vegan: true,
      crueltyFree: true,
      pregnancySafe: false
    },
    hazards: {
      allergens: true,
      skinLightening: true,
      pregnancyUnsafe: true,
      AHA: true,
      parabens: true
    },
    overallScore: 28
  },
  {
    barcode: "411223344",
    name: "Nivea Cocoa Butter Body Lotion",
    brand: "Nivea",
    category: "Body Lotion",
    type: "skincare",
    image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=100&h=100&fit=crop",
    ingredients: ["Aqua (Water)", "Glycerin", "Paraffinum Liquidum (Mineral Oil)", "Cetearyl Alcohol", "Butyrospermum Parkii (Shea) Butter", "Theobroma Cacao (Cocoa) Seed Butter", "Glyceryl Stearate", "PEG-40 Stearate", "Tocopheryl Acetate (Vitamin E)", "Panthenol", "Sodium Cetearyl Sulfate", "Methylparaben", "Propylparaben", "Fragrance", "Benzyl Alcohol", "Limonene", "Coumarin", "Benzyl Benzoate"],
    ratings: {
      ingredientSafety: 3,
      skinFriendly: 4,
      vegan: true,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true,
      parabens: true,
      mineralOil: true
    },
    overallScore: 58
  },
  {
    barcode: "511223344",
    name: "Dove Cream Deep Moisture",
    brand: "Dove",
    category: "Body Lotion",
    type: "skincare",
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=100&h=100&fit=crop",
    ingredients: ["Aqua (Water)", "Glycerin", "Stearic Acid", "Paraffinum Liquidum (Mineral Oil)", "Cetearyl Alcohol", "Butyrospermum Parkii (Shea) Butter", "Caprylic/Capric Triglyceride", "Dimethicone", "Glyceryl Stearate", "PEG-100 Stearate", "Tocopheryl Acetate (Vitamin E)", "Petrolatum", "Aluminum Starch Octenylsuccinate", "Sodium Lauroyl Sarcosinate", "Carbomer", "Phenoxyethanol", "Methylparaben", "Ethylparaben", "Fragrance", "Benzyl Alcohol", "Limonene", "Linalool", "Hexyl Cinnamal"],
    ratings: {
      ingredientSafety: 3,
      skinFriendly: 4,
      vegan: false,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true,
      parabens: true,
      mineralOil: true
    },
    overallScore: 55
  },
  {
    barcode: "611223344",
    name: "Olay Complete Moisturizer",
    brand: "Olay",
    category: "Face Moisturizer",
    type: "skincare",
    image: "https://images.unsplash.com/photo-1556229010-6c3e2b2e9f7c?w=100&h=100&fit=crop",
    ingredients: ["Aqua (Water)", "Glycerin", "Niacinamide (Vitamin B3)", "Cetearyl Alcohol", "C12-15 Alkyl Benzoate", "Caprylic/Capric Triglyceride", "Dimethicone", "Tocopheryl Acetate (Vitamin E)", "Panthenol", "Palmitoyl Pentapeptide-4 (Matrixyl)", "Sodium Ascorbyl Phosphate (Vitamin C)", "Camellia Sinensis Leaf Extract", "Aloe Barbadensis Leaf Juice", "Allantoin", "Carbomer", "Triethanolamine", "Phenoxyethanol", "Methylparaben", "Propylparaben", "Disodium EDTA", "Fragrance", "Benzyl Salicylate", "Linalool", "Hexyl Cinnamal"],
    ratings: {
      ingredientSafety: 4,
      skinFriendly: 5,
      vegan: false,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true,
      parabens: true,
      silicones: true
    },
    overallScore: 72
  },
  {
    barcode: "711223344",
    name: "CeraVe Daily Moisturizing Lotion",
    brand: "CeraVe",
    category: "Face Moisturizer",
    type: "skincare",
    image: "https://images.unsplash.com/photo-1556228841-a45e6e33473b?w=100&h=100&fit=crop",
    ingredients: ["Aqua (Water)", "Glycerin", "Cetearyl Alcohol", "Caprylic/Capric Triglyceride", "Ceteareth-20", "Ceramide NP", "Ceramide AP", "Ceramide EOP", "Hyaluronic Acid", "Sodium Hyaluronate", "Niacinamide", "Cholesterol", "Phenoxyethanol", "Carbomer", "Dimethicone", "Sodium Lauroyl Lactylate", "Propanediol", "Tocopherol (Vitamin E)"],
    ratings: {
      ingredientSafety: 5,
      skinFriendly: 5,
      vegan: false,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: false
    },
    overallScore: 92
  },
  {
    barcode: "811223344",
    name: "The Ordinary Natural Moisturizing Factors",
    brand: "The Ordinary",
    category: "Face Moisturizer",
    type: "skincare",
    image: "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?w=100&h=100&fit=crop",
    ingredients: ["Aqua (Water)", "Glycerin", "Cetyl Alcohol", "Caprylic/Capric Triglyceride", "Squalane", "Sodium Hyaluronate", "Ceramide NP", "Ceramide AP", "Ceramide EOP", "Cholesterol", "Tocopherol", "Carbomer", "Sodium Lauroyl Lactylate", "Xanthan Gum", "Phenoxyethanol", "Chlorphenesin"],
    ratings: {
      ingredientSafety: 5,
      skinFriendly: 5,
      vegan: true,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: false
    },
    overallScore: 94
  },

  // === MAINSTREAM HAIR CARE - SHAMPOOS ===
  {
    barcode: "901234561",
    name: "Pantene Pro-V Shampoo",
    brand: "Pantene",
    category: "Shampoo",
    type: "hair",
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=100&h=100&fit=crop",
    ingredients: ["Aqua (Water)", "Sodium Laureth Sulfate", "Sodium Lauryl Sulfate", "Cocamide MEA", "Glycerin", "Panthenol (Pro-Vitamin B5)", "Tocopheryl Acetate (Vitamin E)", "Sodium Chloride", "Citric Acid", "Disodium EDTA", "Sodium Benzoate", "Phenoxyethanol", "Fragrance", "Benzyl Salicylate", "Linalool", "Hexyl Cinnamal"],
    ratings: {
      ingredientSafety: 2,
      curlFriendly: 3,
      skinFriendly: 2,
      vegan: false,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true,
      scalpIrritants: true,
      sulfates: true,
      dryingAlcohols: false
    },
    overallScore: 38
  },
  {
    barcode: "901234562",
    name: "Head & Shoulders Classic Clean",
    brand: "Head & Shoulders",
    category: "Shampoo",
    type: "hair",
    image: "https://images.unsplash.com/photo-1571781535014-53bd94aa31d7?w=100&h=100&fit=crop",
    ingredients: ["Aqua (Water)", "Sodium Laureth Sulfate", "Zinc Pyrithione", "Cocamidopropyl Betaine", "Cocamide MEA", "Sodium Chloride", "Dimethicone", "Glycerin", "Panthenol", "Tocopheryl Acetate", "Fragrance", "Benzyl Salicylate", "Linalool", "Hexyl Cinnamal", "Citric Acid", "Sodium Hydroxide", "Disodium EDTA", "Methylchloroisothiazolinone", "Methylisothiazolinone"],
    ratings: {
      ingredientSafety: 3,
      curlFriendly: 3,
      skinFriendly: 3,
      vegan: false,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true,
      scalpIrritants: true,
      sulfates: true,
      silicones: true
    },
    overallScore: 48
  },
  {
    barcode: "901234563",
    name: "Tresemmé Moisture Rich",
    brand: "Tresemmé",
    category: "Shampoo",
    type: "hair",
    image: null,
    ingredients: ["Aqua (Water)", "Sodium Laureth Sulfate", "Cocamidopropyl Betaine", "Glycerin", "Dimethicone", "Argania Spinosa Kernel Oil", "Tocopheryl Acetate (Vitamin E)", "Panthenol", "Polyquaternium-10", "Sodium Chloride", "Citric Acid", "Disodium EDTA", "Sodium Benzoate", "Phenoxyethanol", "Fragrance", "Benzyl Salicylate", "Linalool", "Hexyl Cinnamal"],
    ratings: {
      ingredientSafety: 2,
      curlFriendly: 3,
      skinFriendly: 3,
      vegan: false,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true,
      scalpIrritants: true,
      sulfates: true,
      silicones: true
    },
    overallScore: 42
  },
  {
    barcode: "901234564",
    name: "Garnier Fructis Shampoo",
    brand: "Garnier",
    category: "Shampoo",
    type: "hair",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=100&h=100&fit=crop",
    ingredients: ["Aqua (Water)", "Sodium Laureth Sulfate", "Coco-Betaine", "Cocamide MIPA", "Glycerin", "Sodium Chloride", "Polyquaternium-10", "Panthenol", "Niacinamide", "Tocopherol", "Fragrance", "Benzyl Salicylate", "Linalool", "Limonene", "Citric Acid", "Sodium Hydroxide", "Methylchloroisothiazolinone", "Methylisothiazolinone"],
    ratings: {
      ingredientSafety: 2,
      curlFriendly: 3,
      skinFriendly: 3,
      vegan: true,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true,
      scalpIrritants: true,
      sulfates: true
    },
    overallScore: 45
  },
  {
    barcode: "901234565",
    name: "Herbal Essences Bio:Renew",
    brand: "Herbal Essences",
    category: "Shampoo",
    type: "hair",
    image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=100&h=100&fit=crop",
    ingredients: ["Aqua (Water)", "Sodium Laureth Sulfate", "Sodium Lauryl Sulfate", "Cocamidopropyl Betaine", "Glycerin", "Aloe Barbadensis Leaf Juice", "Mangifera Indica (Mango) Fruit Extract", "Passiflora Edulis Fruit Extract", "Pyrus Malus (Apple) Fruit Extract", "Camellia Sinensis Leaf Extract", "Panthenol", "Tocopherol", "Polyquaternium-10", "Sodium Chloride", "Citric Acid", "Disodium EDTA", "Sodium Benzoate", "Phenoxyethanol", "Methylparaben", "Propylparaben", "Fragrance", "Benzyl Salicylate", "Linalool", "Limonene", "Hexyl Cinnamal"],
    ratings: {
      ingredientSafety: 2,
      curlFriendly: 3,
      skinFriendly: 3,
      vegan: true,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true,
      scalpIrritants: true,
      sulfates: true,
      parabens: true
    },
    overallScore: 38
  },
  {
    barcode: "901234566",
    name: "Aussie Mega Shampoo",
    brand: "Aussie",
    category: "Shampoo",
    type: "hair",
    image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=100&h=100&fit=crop",
    ingredients: ["Aqua (Water)", "Sodium Laureth Sulfate", "Cocamidopropyl Betaine", "Cocamide MEA", "Glycerin", "Aloe Barbadensis Leaf Juice", "Simmondsia Chinensis (Jojoba) Seed Oil", "Mel (Honey)", "Panthenol", "Tocopherol", "Polyquaternium-10", "Sodium Chloride", "Citric Acid", "Disodium EDTA", "Sodium Benzoate", "Phenoxyethanol", "Methylparaben", "Propylparaben", "Fragrance", "Benzyl Salicylate", "Linalool", "Limonene", "Hexyl Cinnamal"],
    ratings: {
      ingredientSafety: 2,
      curlFriendly: 3,
      skinFriendly: 3,
      vegan: true,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true,
      scalpIrritants: true,
      sulfates: true,
      parabens: true
    },
    overallScore: 38
  },
  {
    barcode: "901234567",
    name: "John Frieda Frizz Ease",
    brand: "John Frieda",
    category: "Shampoo",
    type: "hair",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=100&h=100&fit=crop",
    ingredients: ["Aqua (Water)", "Sodium Laureth Sulfate", "Sodium Lauryl Sulfate", "Cocamidopropyl Betaine", "Glycerin", "Dimethicone", "Amodimethicone", "Polyquaternium-10", "Panthenol", "Tocopheryl Acetate", "Hydrolyzed Keratin", "Sodium Chloride", "Citric Acid", "Disodium EDTA", "Sodium Benzoate", "Phenoxyethanol", "Methylparaben", "Propylparaben", "Fragrance", "Benzyl Salicylate", "Linalool", "Limonene", "Hexyl Cinnamal", "Alpha-Isomethyl Ionone"],
    ratings: {
      ingredientSafety: 2,
      curlFriendly: 3,
      skinFriendly: 3,
      vegan: false,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true,
      sulfates: true,
      silicones: true,
      parabens: true
    },
    overallScore: 35
  },

  // === MAINSTREAM CONDITIONERS ===
  {
    barcode: "901234571",
    name: "Pantene Pro-V Conditioner",
    brand: "Pantene",
    category: "Conditioner",
    type: "hair",
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=100&h=100&fit=crop",
    ingredients: ["Aqua (Water)", "Cetearyl Alcohol", "Stearyl Alcohol", "Cetyl Alcohol", "Behentrimonium Methosulfate", "Glycerin", "Panthenol (Pro-Vitamin B5)", "Tocopheryl Acetate", "Sodium Chloride", "Citric Acid", "Disodium EDTA", "Phenoxyethanol", "Methylparaben", "Propylparaben", "Fragrance", "Benzyl Salicylate", "Linalool", "Hexyl Cinnamal"],
    ratings: {
      ingredientSafety: 3,
      curlFriendly: 3,
      skinFriendly: 3,
      vegan: false,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true,
      waxCoatings: false,
      parabens: true
    },
    overallScore: 48
  },
  {
    barcode: "901234572",
    name: "Head & Shoulders Conditioner",
    brand: "Head & Shoulders",
    category: "Conditioner",
    type: "hair",
    image: "https://images.unsplash.com/photo-1571781535014-53bd94aa31d7?w=100&h=100&fit=crop",
    ingredients: ["Aqua (Water)", "Cetearyl Alcohol", "Stearyl Alcohol", "Cetyl Alcohol", "Zinc Pyrithione", "Behentrimonium Chloride", "Glycerin", "Panthenol", "Dimethicone", "Sodium Chloride", "Citric Acid", "Disodium EDTA", "Methylchloroisothiazolinone", "Methylisothiazolinone", "Fragrance", "Benzyl Salicylate", "Linalool"],
    ratings: {
      ingredientSafety: 3,
      curlFriendly: 3,
      skinFriendly: 3,
      vegan: false,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true,
      scalpIrritants: true
    },
    overallScore: 45
  },
  {
    barcode: "901234573",
    name: "Tresemmé Conditioner",
    brand: "Tresemmé",
    category: "Conditioner",
    type: "hair",
    image: null,
    ingredients: ["Aqua (Water)", "Cetearyl Alcohol", "Behentrimonium Chloride", "Glycerin", "Argania Spinosa Kernel Oil", "Tocopheryl Acetate (Vitamin E)", "Panthenol", "Sodium Chloride", "Citric Acid", "Disodium EDTA", "Phenoxyethanol", "Methylparaben", "Propylparaben", "Fragrance", "Benzyl Salicylate", "Linalool", "Hexyl Cinnamal"],
    ratings: {
      ingredientSafety: 3,
      curlFriendly: 4,
      skinFriendly: 4,
      vegan: false,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true,
      parabens: true
    },
    overallScore: 52
  },

  // === MAINSTREAM STYLING ===
  {
    barcode: "901234581",
    name: "TRESemmé Hair Spray",
    brand: "Tresemmé",
    category: "Hairspray",
    type: "hair",
    image: null,
    ingredients: ["Alcohol Denat.", "Aqua (Water)", "VA/Crotonates/Vinyl Neodecanoate Copolymer", "Aminomethyl Propanol", "Glycerin", "Panthenol", "Tocopheryl Acetate", "Phenyl Trimethicone", "Fragrance", "Benzyl Salicylate", "Linalool", "Hexyl Cinnamal"],
    ratings: {
      ingredientSafety: 3,
      curlFriendly: 3,
      skinFriendly: 3,
      vegan: false,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true,
      dryingAlcohols: true
    },
    overallScore: 48
  },
  {
    barcode: "901234582",
    name: "Pantene Silkening Cream",
    brand: "Pantene",
    category: "Styling Cream",
    type: "hair",
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=100&h=100&fit=crop",
    ingredients: ["Aqua (Water)", "Cyclopentasiloxane", "Glycerin", "Phenyl Trimethicone", "Panthenol (Pro-Vitamin B5)", "Tocopheryl Acetate", "Amodimethicone", "Trimethylsiloxysilicate", "Polyquaternium-37", "Propylene Glycol Dicaprylate/Dicaprate", "PPG-1 Trideceth-6", "Fragrance", "Benzyl Salicylate", "Linalool", "Hexyl Cinnamal", "Citric Acid", "Disodium EDTA", "Phenoxyethanol", "Methylparaben", "Propylparaben"],
    ratings: {
      ingredientSafety: 3,
      curlFriendly: 4,
      skinFriendly: 4,
      vegan: false,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true,
      silicones: true,
      parabens: true
    },
    overallScore: 52
  },
  {
    barcode: "901234583",
    name: "Aussie Sprunch Spray",
    brand: "Aussie",
    category: "Styling Spray",
    type: "hair",
    image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=100&h=100&fit=crop",
    ingredients: ["Aqua (Water)", "Polyurethane-14", "AMP-Acrylates Copolymer", "Glycerin", "Mangifera Indica (Mango) Fruit Extract", "Aloe Barbadensis Leaf Juice", "Panthenol", "Tocopherol", "Phenoxyethanol", "Ethylhexylglycerin", "Fragrance", "Benzyl Salicylate", "Linalool", "Limonene", "Hexyl Cinnamal"],
    ratings: {
      ingredientSafety: 3,
      curlFriendly: 4,
      skinFriendly: 3,
      vegan: true,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true,
      dryingAlcohols: false
    },
    overallScore: 55
  },

  // === MAINSTREAM SKINCARE ===
  {
    barcode: "901234591",
    name: "CeraVe Foaming Facial Cleanser",
    brand: "CeraVe",
    category: "Face Cleanser",
    type: "skincare",
    image: "https://images.unsplash.com/photo-1556228841-a45e6e33473b?w=100&h=100&fit=crop",
    ingredients: ["Aqua (Water)", "Cocamidopropyl Hydroxysultaine", "Glycerin", "Sodium Lauroyl Sarcosinate", "PEG-150 Pentaerythrityl Tetrastearate", "Niacinamide", "Ceramide NP", "Ceramide AP", "Ceramide EOP", "Hyaluronic Acid", "Sodium Hyaluronate", "Cholesterol", "Phenoxyethanol", "Methylparaben", "Propylparaben", "Sodium Chloride", "Citric Acid", "Disodium EDTA"],
    ratings: {
      ingredientSafety: 4,
      skinFriendly: 4,
      vegan: false,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: false,
      parabens: true
    },
    overallScore: 78
  },
  {
    barcode: "901234592",
    name: "The Ordinary Glycolic Acid",
    brand: "The Ordinary",
    category: "Face Serum",
    type: "skincare",
    image: "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?w=100&h=100&fit=crop",
    ingredients: ["Aqua (Water)", "Glycolic Acid", "Rosa Canina Fruit Extract", "Aloe Barbadensis Leaf Juice", "Tocopherol (Vitamin E)", "Sodium Hydroxide", "Phenoxyethanol", "Chlorphenesin"],
    ratings: {
      ingredientSafety: 4,
      skinFriendly: 3,
      vegan: true,
      crueltyFree: true,
      pregnancySafe: false
    },
    hazards: {
      irritants: true,
      pregnancyUnsafe: true,
      AHA: true
    },
    overallScore: 58
  },
  {
    barcode: "901234593",
    name: "Olay Regenerist Serum",
    brand: "Olay",
    category: "Face Serum",
    type: "skincare",
    image: "https://images.unsplash.com/photo-1556229010-6c3e2b2e9f7c?w=100&h=100&fit=crop",
    ingredients: ["Aqua (Water)", "Glycerin", "Niacinamide (Vitamin B3)", "Palmitoyl Pentapeptide-4 (Matrixyl)", "Panthenol", "Tocopheryl Acetate (Vitamin E)", "Sodium Hyaluronate", "Camellia Sinensis Leaf Extract", "Aloe Barbadensis Leaf Juice", "Allantoin", "Carbomer", "Triethanolamine", "Phenoxyethanol", "Ethylhexylglycerin", "Methylparaben", "Propylparaben", "Fragrance", "Benzyl Salicylate", "Linalool", "Hexyl Cinnamal"],
    ratings: {
      ingredientSafety: 4,
      skinFriendly: 5,
      vegan: false,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true,
      parabens: true
    },
    overallScore: 72
  },
  {
    barcode: "901234594",
    name: "Neutrogena Hydro Boost",
    brand: "Neutrogena",
    category: "Face Moisturizer",
    type: "skincare",
    image: "https://images.unsplash.com/photo-1556227848-4f87c323962e?w=100&h=100&fit=crop",
    ingredients: ["Aqua (Water)", "Glycerin", "Cetearyl Olivate", "Sorbitan Olivate", "Sodium Hyaluronate", "Hyaluronic Acid", "Cyclopentasiloxane", "Dimethicone", "Cetyl Alcohol", "Cetearyl Alcohol", "PEG-40 Stearate", "Saccharide Isomerate", "Panthenol", "Tocopherol", "Sodium Ascorbyl Phosphate (Vitamin C)", "Phenoxyethanol", "Methylparaben", "Propylparaben", "Disodium EDTA", "Sodium Hydroxide", "Citric Acid", "Sodium Citrate"],
    ratings: {
      ingredientSafety: 4,
      skinFriendly: 5,
      vegan: false,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: false,
      parabens: true,
      silicones: true
    },
    overallScore: 72
  },
  {
    barcode: "901234595",
    name: "Garnier Skin Active Micellar Water",
    brand: "Garnier",
    category: "Face Cleanser",
    type: "skincare",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=100&h=100&fit=crop",
    ingredients: ["Aqua (Water)", "Hexylene Glycol", "Glycerin", "Poloxamer 184", "Disodium EDTA", "Niacinamide", "Panthenol", "Tocopherol", "Phenoxyethanol", "Methylparaben", "Propylparaben", "Benzophenone-4", "CI 42090 (Blue 1)", "CI 19140 (Yellow 5)"],
    ratings: {
      ingredientSafety: 4,
      skinFriendly: 5,
      vegan: true,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: false,
      parabens: true
    },
    overallScore: 78
  },
  {
    barcode: "901234596",
    name: "Simple Kind to Skin Moisturizer",
    brand: "Simple",
    category: "Face Moisturizer",
    type: "skincare",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=100&h=100&fit=crop",
    ingredients: ["Aqua (Water)", "Glycerin", "Cetearyl Alcohol", "Stearyl Heptanoate", "C12-15 Alkyl Benzoate", "Niacinamide (Vitamin B3)", "Allantoin", "Chamomilla Recutita (Matricaria) Flower Extract", "Panthenol", "Tocopherol", "Sodium Hyaluronate", "Glyceryl Stearate", "PEG-100 Stearate", "Ceteareth-20", "Phenoxyethanol", "Ethylhexylglycerin", "Disodium EDTA", "Sodium Hydroxide", "Citric Acid", "Linalool", "Limonene"],
    ratings: {
      ingredientSafety: 5,
      skinFriendly: 5,
      vegan: false,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true
    },
    overallScore: 85
  },
  {
    barcode: "901234597",
    name: "La Roche-Posay Effaclar Gel",
    brand: "La Roche-Posay",
    category: "Face Cleanser",
    type: "skincare",
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=100&h=100&fit=crop",
    ingredients: ["Aqua (Water)", "Zinc PCA", "Glycerin", "Coco-Betaine", "Lauric Acid", "Niacinamide", "Sodium Lauroyl Sarcosinate", "PEG-150 Pentaerythrityl Tetrastearate", "PEG-6 Caprylic/Capric Glycerides", "Panthenol", "Tocopherol", "Sodium Chloride", "Citric Acid", "Disodium EDTA", "Phenoxyethanol", "Methylparaben", "Propylparaben", "Benzophenone-4"],
    ratings: {
      ingredientSafety: 4,
      skinFriendly: 5,
      vegan: false,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: false,
      parabens: true
    },
    overallScore: 78
  },

  // === CECRED ===
  {
    barcode: "CEC001",
    name: "Cecred Hair Oil",
    brand: "Cecred",
    category: "Hair Oil",
    type: "hair",
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?w=100&h=100&fit=crop",
    ingredients: ["C12-15 Alkyl Benzoate", "Squalane", "Cocos Nucifera (Coconut) Oil", "Ricinus Communis (Castor) Seed Oil", "Argania Spinosa Kernel Oil", "Simmondsia Chinensis (Jojoba) Seed Oil", "Vitis Vinifera (Grape) Seed Oil", "Tocopherol", "Rosmarinus Officinalis (Rosemary) Leaf Oil", "Mentha Piperita (Peppermint) Oil", "Melaleuca Alternifolia (Tea Tree) Leaf Oil", "Nigella Sativa (Black Seed) Oil", "Algae Extract", "Benzyl Benzoate", "Linalool", "Limonene"],
    ratings: {
      ingredientSafety: 5,
      curlFriendly: 5,
      skinFriendly: 5,
      vegan: true,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true,
      waxCoatings: false,
      scalpIrritants: false
    },
    overallScore: 85
  },
  {
    barcode: "CEC002",
    name: "Cecred Scalp Tonic",
    brand: "Cecred",
    category: "Scalp Treatment",
    type: "hair",
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?w=100&h=100&fit=crop",
    ingredients: ["Aqua (Water)", "Alcohol Denat.", "Glycerin", "Aloe Barbadensis Leaf Juice", "Rosmarinus Officinalis (Rosemary) Leaf Oil", "Mentha Piperita (Peppermint) Oil", "Melaleuca Alternifolia (Tea Tree) Leaf Oil", "Zingiber Officinale (Ginger) Root Extract", "Panax Ginseng Root Extract", "Tocopherol", "Caffeine", "Biotin", "Niacinamide", "Phenoxyethanol", "Ethylhexylglycerin", "Linalool", "Limonene"],
    ratings: {
      ingredientSafety: 5,
      curlFriendly: 5,
      skinFriendly: 5,
      vegan: true,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true,
      scalpIrritants: false,
      dryingAlcohols: true
    },
    overallScore: 82
  },
  {
    barcode: "CEC003",
    name: "Cecred Hair Serum",
    brand: "Cecred",
    category: "Hair Serum",
    type: "hair",
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?w=100&h=100&fit=crop",
    ingredients: ["Cyclopentasiloxane", "Dimethiconol", "C12-15 Alkyl Benzoate", "Argania Spinosa Kernel Oil", "Simmondsia Chinensis (Jojoba) Seed Oil", "Tocopherol", "Hydrolyzed Keratin", "Biotin", "Rosmarinus Officinalis (Rosemary) Leaf Extract", "Panthenol", "Fragrance", "Benzyl Benzoate", "Linalool", "Limonene"],
    ratings: {
      ingredientSafety: 4,
      curlFriendly: 4,
      skinFriendly: 4,
      vegan: true,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true,
      waxCoatings: true,
      silicones: true
    },
    overallScore: 68
  },

  // === TOPICALS ===
  {
    barcode: "TOP001",
    name: "Topicals Faded Serum",
    brand: "Topicals",
    category: "Face Serum",
    type: "skincare",
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=100&h=100&fit=crop",
    ingredients: ["Aqua (Water)", "Niacinamide", "Alpha Arbutin", "Kojic Acid Dipalmitate", "Turmeric Root Extract", "Ascorbyl Glucoside (Vitamin C)", "Glycolic Acid", "Snail Secretion Filtrate", "Glycerin", "Panthenol", "Allantoin", "Sodium Hyaluronate", "Phenoxyethanol", "Ethylhexylglycerin", "Disodium EDTA"],
    ratings: {
      ingredientSafety: 4,
      skinFriendly: 4,
      vegan: true,
      crueltyFree: true,
      pregnancySafe: false
    },
    hazards: {
      allergens: false,
      skinLightening: true,
      pregnancyUnsafe: true,
      irritants: true,
      AHAs: true
    },
    overallScore: 55
  },
  {
    barcode: "TOP002",
    name: "Topicals Like Butter Mask",
    brand: "Topicals",
    category: "Face Mask",
    type: "skincare",
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=100&h=100&fit=crop",
    ingredients: ["Aqua (Water)", "Glycerin", "Butyrospermum Parkii (Shea) Butter", "Cetyl Alcohol", "Ceramide NP", "Ceramide AP", "Ceramide EOP", "Cholesterol", "Hyaluronic Acid", "Centella Asiatica Extract", "Tocopherol (Vitamin E)", "Panthenol", "Allantoin", "Sodium Hyaluronate", "Phenoxyethanol", "Ethylhexylglycerin", "Carbomer", "Triethanolamine"],
    ratings: {
      ingredientSafety: 5,
      skinFriendly: 5,
      vegan: true,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true
    },
    overallScore: 90
  },
  {
    barcode: "TOP003",
    name: "Topicals Undercover Agent",
    brand: "Topicals",
    category: "Body Butter",
    type: "skincare",
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=100&h=100&fit=crop",
    ingredients: ["Aqua (Water)", "Butyrospermum Parkii (Shea) Butter", "Cocos Nucifera (Coconut) Oil", "Glycerin", "Niacinamide", "Cetyl Alcohol", "Centella Asiatica Extract", "Tocopherol (Vitamin E)", "Panthenol", "Allantoin", "Sodium Hyaluronate", "Phenoxyethanol", "Ethylhexylglycerin", "Carbomer", "Triethanolamine", "Fragrance"],
    ratings: {
      ingredientSafety: 4,
      skinFriendly: 5,
      vegan: true,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true
    },
    overallScore: 82
  },

  // === PLANTMADE ===
  {
    barcode: "PLM001",
    name: "Plantmade Drizzle",
    brand: "Plantmade",
    category: "Hydrating Mist",
    type: "hair",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=100&h=100&fit=crop",
    ingredients: ["Aqua (Distilled Water)", "Aloe Barbadensis Leaf (Aloe Juice)", "Rosa Damascena (Rose Water)", "Glycerin", "Phenoxyethanol", "Symbiosolv Clear Plus", "Lavandula Angustifolia (Lavender Essential Oil)", "Rosmarinus Officinalis (Rosemary Essential Oil)"],
    ratings: {
      ingredientSafety: 5,
      curlFriendly: 5,
      skinFriendly: 5,
      vegan: true,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true,
      waxCoatings: false,
      dryingAlcohols: false
    },
    overallScore: 92
  },
  {
    barcode: "PLM002",
    name: "Plantmade Inches",
    brand: "Plantmade",
    category: "Hair Growth",
    type: "hair",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=100&h=100&fit=crop",
    ingredients: ["Ricinus Communis Seed (Castor Oil)", "Cucurbita Pepo (Pumpkin Seed Oil)", "Prunus Armeniaca (Apricot Kernel Oil)", "Vitis Vinifera (Grapeseed Oil)", "Persea Gratissima (Avocado Oil)", "Olea Europaea Fruit (Olive Oil)", "Emblica Officinalis Fruit (Amla)", "Sapindus Laurifoli (Aritha)", "Aloe Barbadensis (Aloe Vera)", "Bacopa Monnieri Leaf Extract (Brahmi)", "Acacia Concinna Fruit (Shikaikai)", "Lawsonia Inermis Extract (Henna)", "Trigonella Foenum Graecum Seed (Fenugreek)", "Nigella Sativa Seed (Blackseed)", "Mentha Arvensis Leaf (Peppermint)", "Rosmarinus Officinalis (Lavender)", "Lavandula Angustifolia (Rosemary)"],
    ratings: {
      ingredientSafety: 5,
      curlFriendly: 5,
      skinFriendly: 5,
      vegan: true,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: false,
      waxCoatings: false,
      dryingAlcohols: false
    },
    overallScore: 95
  },
  {
    barcode: "PLM003",
    name: "Plantmade Soil",
    brand: "Plantmade",
    category: "Hair Butter",
    type: "hair",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=100&h=100&fit=crop",
    ingredients: ["Butyrospermum Parkii (Shea Butter)", "Mangifera Indica (Mango Butter)", "Garcinia Indica (Kokum Butter)", "Cocos Nucifera (Coconut Oil)", "Tocopherol (Vitamin E Oil)", "Rosa Canina (Rosehip Oil)", "Ceteryl Alcohol", "Indigofera Tinctoria Leaf (Indigo)", "Equisetum Arvense Extract (Horsetail)", "Lav Croton (Chebe)", "Centella Asiatica Extract (Gotu Kola)", "Panax Ginseng Root Extract (Ginseng)", "Nardostachys Jatamansi (Jatamansi)"],
    ratings: {
      ingredientSafety: 5,
      curlFriendly: 5,
      skinFriendly: 5,
      vegan: true,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: false,
      waxCoatings: true,
      dryingAlcohols: false
    },
    overallScore: 82
  },
  {
    barcode: "PLM004",
    name: "Plantmade Roots",
    brand: "Plantmade",
    category: "Scalp Serum",
    type: "hair",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=100&h=100&fit=crop",
    ingredients: ["Prunus Armeniaca (Apricot Oil)", "Vitis Vinifera (Grapeseed Oil)", "Prunus Amygdalus Dulcis (Sweet Almond Oil)", "Adansonia Digitata (Baobab Oil)", "Melia Azadirachta Seed (Neem Oil)", "Helianthus Annuus (Sunflower Oil)", "Emblica Officinalis Fruit (Amla)", "Moringa Oleifera Seed (Moringa)", "Hibiscus Sabdariffa Flower (Hibiscus)", "Acacia Concinna Fruit (Shikaikai)", "Withania Somnifera Extract (Ashwagandha)", "Eucalyptus Globulus (Eucalyptus Essential Oil)", "Cymbopogon Flexuosus (Lemongrass Essential Oil)", "Santalum Album (Sandalwood Essential Oil)", "Melaleuca Alternifolia Leaf (Tea Tree Essential Oil)"],
    ratings: {
      ingredientSafety: 5,
      curlFriendly: 5,
      skinFriendly: 5,
      vegan: true,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true,
      waxCoatings: false,
      dryingAlcohols: false
    },
    overallScore: 90
  },

  // === PLANTMADE - ADDITIONAL PRODUCTS ===
  {
    barcode: "PLM005",
    name: "Plantmade Rain",
    brand: "Plantmade",
    category: "Shampoo Bar",
    type: "hair",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=100&h=100&fit=crop",
    ingredients: ["Sodium Cocoyl Isethionate (SCI)", "Cocoamidopropyl Betaine", "Argania Spinosa (Argan) Kernel Oil", "Vegan DL-Panthenol (Pro-Vitamin B5)", "Moringa Oleifera Seed Extract", "Camellia Sinensis (Matcha Green Tea)", "Moroccan Lava (Rhassoul) Clay", "Citrus Aurantium Bergamia (Bergamot) Fruit Oil", "Rose Powder", "Coconut Oil", "Camellia Oil", "Rosemary Essential Oil", "Vegetable Glycerin", "Phenoxyethanol"],
    ratings: {
      ingredientSafety: 5,
      curlFriendly: 5,
      skinFriendly: 5,
      vegan: true,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true,
      waxCoatings: false,
      dryingAlcohols: false
    },
    overallScore: 95
  },
  {
    barcode: "PLM006",
    name: "Plantmade Dew",
    brand: "Plantmade",
    category: "Deep Conditioner",
    type: "hair",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=100&h=100&fit=crop",
    ingredients: ["Butyrospermum Parkii (Shea Butter)", "Cocos Nucifera (Coconut) Oil", "Mangifera Indica (Mango) Butter", "Garcinia Indica (Kokum) Butter", "Aloe Barbadensis Leaf Juice", "Propanediol", "Cetearyl Alcohol", "Behentrimonium Methosulfate", "Glyceryl Stearate", "PEG-100 Stearate", "Panthenol", "Tocopherol", "Phenoxyethanol", "Ethylhexylglycerin", "Lavandula Angustifolia (Lavender) Oil", "Rosmarinus Officinalis (Rosemary) Oil"],
    ratings: {
      ingredientSafety: 5,
      curlFriendly: 5,
      skinFriendly: 5,
      vegan: true,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true,
      waxCoatings: true,
      dryingAlcohols: false
    },
    overallScore: 85
  },
  {
    barcode: "PLM007",
    name: "Plantmade Storm",
    brand: "Plantmade",
    category: "Styling Mist",
    type: "hair",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=100&h=100&fit=crop",
    ingredients: ["Aqua (Water)", "Aloe Barbadensis Leaf Juice", "Glycerin", "Phenoxyethanol", "Ethylhexylglycerin", "Panthenol", "Tocopherol", "Lavandula Angustifolia (Lavender) Oil", "Rosmarinus Officinalis (Rosemary) Oil", "Citrus Aurantium Bergamia (Bergamot) Oil", "Simmondsia Chinensis (Jojoba) Seed Oil", "Argania Spinosa Kernel Oil"],
    ratings: {
      ingredientSafety: 5,
      curlFriendly: 5,
      skinFriendly: 5,
      vegan: true,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true,
      waxCoatings: false,
      dryingAlcohols: false
    },
    overallScore: 92
  },

  // === BLUE MAGIC ===
  {
    barcode: "blue001",
    name: "Blue Magic Shampoo",
    brand: "Blue Magic",
    category: "Shampoo",
    type: "hair",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=100&h=100&fit=crop",
    ingredients: ["Aqua (Water)", "Sodium Laureth Sulfate", "Cocamide DIPA", "Glycerin", "Sodium Chloride", "Parfum (Fragrance)", "Cocamidopropyl Betaine", "Polyquaternium-7", "Phenoxyethanol", "Ethylhexylglycerin", "Citric Acid", "Disodium EDTA", "Benzyl Benzoate", "Linalool", "Limonene", "Hexyl Cinnamal"],
    ratings: {
      ingredientSafety: 2,
      curlFriendly: 2,
      skinFriendly: 2,
      vegan: false,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true,
      scalpIrritants: true,
      waxCoatings: false,
      dryingAlcohols: false
    },
    overallScore: 45
  },
  {
    barcode: "blue002",
    name: "Blue Magic Conditioner",
    brand: "Blue Magic",
    category: "Conditioner",
    type: "hair",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=100&h=100&fit=crop",
    ingredients: ["Petrolatum", "Ricinus Communis (Castor) Seed Oil", "Lanolin", "Beeswax/Cera Alba", "Butyrospermum Parkii (Shea) Butter", "Carthamus Tinctorius (Safflower) Seed Oil", "Cocos Nucifera (Coconut) Oil", "Simmondsia Chinensis (Jojoba) Seed Oil", "Camellia Sinensis (Green Tea) Leaf Extract", "Aloe Barbadensis Leaf Extract", "Lawsonia Inermis (Henna) Extract", "Parfum (Fragrance)", "Benzyl Benzoate", "Linalool", "Limonene", "Coumarin"],
    ratings: {
      ingredientSafety: 2,
      curlFriendly: 4,
      skinFriendly: 3,
      vegan: false,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true,
      scalpIrritants: false,
      waxCoatings: true,
      dryingAlcohols: false,
      heavyPetrolatum: true
    },
    overallScore: 42
  },
  {
    barcode: "blue003",
    name: "Blue Magic Hair Grease",
    brand: "Blue Magic",
    category: "Hair Cream",
    type: "hair",
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=100&h=100&fit=crop",
    ingredients: ["Petrolatum", "Mineral Oil", "Lanolin", "Beeswax", "Ceresin", "Microcrystalline Wax", "Paraffin", "Butyrospermum Parkii (Shea) Butter", "Cocos Nucifera (Coconut) Oil", "Simmondsia Chinensis (Jojoba) Seed Oil", "Fragrance", "Benzyl Benzoate", "Linalool", "Limonene", "Coumarin"],
    ratings: {
      ingredientSafety: 1,
      curlFriendly: 2,
      skinFriendly: 2,
      vegan: false,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true,
      scalpIrritants: false,
      waxCoatings: true,
      dryingAlcohols: false,
      heavyPetrolatum: true
    },
    overallScore: 25
  },
  {
    barcode: "blue004",
    name: "Blue Magic Styling Gel",
    brand: "Blue Magic",
    category: "Styling Gel",
    type: "hair",
    image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=100&h=100&fit=crop",
    ingredients: ["Aqua (Water)", "Carbomer", "Triethanolamine", "Glycerin", "Parfum (Fragrance)", "VP/VA Copolymer", "Polysorbate 20", "Aloe Barbadensis Leaf Juice", "PEG-7 Glyceryl Cocoate", "Phenoxyethanol", "Ethylhexylglycerin", "Benzyl Benzoate", "Linalool", "Limonene"],
    ratings: {
      ingredientSafety: 3,
      curlFriendly: 3,
      skinFriendly: 3,
      vegan: true,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true,
      scalpIrritants: false,
      waxCoatings: false,
      dryingAlcohols: false
    },
    overallScore: 60
  },
  {
    barcode: "blue005",
    name: "Blue Magic Coconut Oil",
    brand: "Blue Magic",
    category: "Hair Oil",
    type: "hair",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=100&h=100&fit=crop",
    ingredients: ["Petrolatum", "Cocos Nucifera (Coconut) Oil", "Mineral Oil", "Fragrance", "Tocopheryl Acetate (Vitamin E)", "Butyrospermum Parkii (Shea) Butter", "Linalool", "Benzyl Benzoate", "Limonene", "Coumarin"],
    ratings: {
      ingredientSafety: 2,
      curlFriendly: 4,
      skinFriendly: 3,
      vegan: false,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true,
      scalpIrritants: false,
      waxCoatings: true,
      dryingAlcohols: false,
      heavyPetrolatum: true
    },
    overallScore: 42
  },

  // === NALA'S BABY ===
  {
    barcode: "NALA001",
    name: "Original Body Lotion",
    brand: "Nala's Baby",
    category: "Body Lotion",
    type: "baby",
    image: "https://images.unsplash.com/photo-1619974599828-1e4a7abc9a2f?w=100&h=100&fit=crop",
    ingredients: ["Aqua", "Glycerin", "Butyrospermum Parkii (Shea) Butter", "C15-19 Alkane", "Cetearyl Olivate", "Distarch Phosphate", "Prunus Armeniaca (Apricot) Kernel Oil", "Cocos Nucifera (Coconut) Oil", "Hibiscus Flower Extract", "Avena Sativa (Oat) Kernel Extract", "Olea Europaea (Olive) Fruit Oil", "Simmondsia Chinensis (Jojoba) Seed Oil", "Vitis Vinifera (Grape) Seed Oil", "Helianthus Annuus (Sunflower) Seed Oil", "Tocopherol"],
    ratings: {
      ingredientSafety: 5,
      babySafe: 5,
      vegan: true,
      crueltyFree: true
    },
    hazards: {
      allergens: true,
      harshChemicals: false,
      sulfates: false,
      parabens: false
    },
    overallScore: 95
  },
  {
    barcode: "NALA002",
    name: "Body Lotion Fragrance-Free",
    brand: "Nala's Baby",
    category: "Body Lotion",
    type: "baby",
    image: "https://images.unsplash.com/photo-1619974599828-1e4a7abc9a2f?w=100&h=100&fit=crop",
    ingredients: ["Aqua", "Glycerin", "Butyrospermum Parkii (Shea) Butter", "C15-19 Alkane", "Cetearyl Olivate", "Distarch Phosphate", "Prunus Armeniaca (Apricot) Kernel Oil", "Cocos Nucifera (Coconut) Oil", "Hibiscus Flower Extract", "Avena Sativa (Oat) Kernel Extract", "Olea Europaea (Olive) Fruit Oil", "Simmondsia Chinensis (Jojoba) Seed Oil", "Vitis Vinifera (Grape) Seed Oil", "Helianthus Annuus (Sunflower) Seed Oil", "Tocopherol"],
    ratings: {
      ingredientSafety: 5,
      babySafe: 5,
      vegan: true,
      crueltyFree: true
    },
    hazards: {
      allergens: true,
      harshChemicals: false,
      sulfates: false,
      parabens: false,
      fragrances: false
    },
    overallScore: 96
  },
  {
    barcode: "NALA003",
    name: "Body Wash & Shampoo",
    brand: "Nala's Baby",
    category: "Body Wash",
    type: "baby",
    image: "https://images.unsplash.com/photo-1619974599828-1e4a7abc9a2f?w=100&h=100&fit=crop",
    ingredients: ["Aqua", "Coco-Glucoside", "Glycerin", "Chamomilla Recutita (Matricaria) Flower Extract", "Avena Sativa (Oat) Kernel Extract", "Cocos Nucifera (Coconut) Oil", "Butyrospermum Parkii (Shea) Butter", "Hydrolyzed Wheat Protein", "Panthenol", "Tocopherol", "Sodium Benzoate", "Potassium Sorbate", "Citric Acid"],
    ratings: {
      ingredientSafety: 5,
      babySafe: 5,
      vegan: true,
      crueltyFree: true
    },
    hazards: {
      allergens: true,
      harshChemicals: false,
      sulfates: false,
      parabens: false,
      tearFree: true
    },
    overallScore: 94
  },
  {
    barcode: "NALA004",
    name: "Original Body Butter",
    brand: "Nala's Baby",
    category: "Body Butter",
    type: "baby",
    image: "https://images.unsplash.com/photo-1619974599828-1e4a7abc9a2f?w=100&h=100&fit=crop",
    ingredients: ["Butyrospermum Parkii (Shea) Butter", "Theobroma Cacao (Cocoa) Seed Butter", "Vitis Vinifera (Grape) Seed Oil", "Chamomilla Recutita (Matricaria) Flower Extract", "Cocos Nucifera (Coconut) Oil", "Aloe Barbadensis Leaf Juice", "Tocopherol", "Glycerin"],
    ratings: {
      ingredientSafety: 5,
      babySafe: 5,
      vegan: true,
      crueltyFree: true
    },
    hazards: {
      allergens: true,
      harshChemicals: false,
      sulfates: false,
      parabens: false
    },
    overallScore: 92
  },
  {
    barcode: "NALA005",
    name: "Original Nighttime Oil",
    brand: "Nala's Baby",
    category: "Baby Oil",
    type: "baby",
    image: "https://images.unsplash.com/photo-1619974599828-1e4a7abc9a2f?w=100&h=100&fit=crop",
    ingredients: ["Prunus Armeniaca (Apricot) Kernel Oil", "Ricinus Communis (Castor) Seed Oil", "Lavandula Angustifolia (Lavender) Oil", "Chamomilla Recutita (Matricaria) Flower Extract", "Cocos Nucifera (Coconut) Oil", "Tocopherol", "Helianthus Annuus (Sunflower) Seed Oil"],
    ratings: {
      ingredientSafety: 4,
      babySafe: 4,
      vegan: true,
      crueltyFree: true
    },
    hazards: {
      allergens: true,
      harshChemicals: false,
      sulfates: false,
      parabens: false,
      essentialOilsNote: "Contains lavender - check with pediatrician for newborns"
    },
    overallScore: 82
  },
  {
    barcode: "NALA006",
    name: "Vanilla Cloud Body Lotion",
    brand: "Nala's Baby",
    category: "Body Lotion",
    type: "baby",
    image: "https://images.unsplash.com/photo-1619974599828-1e4a7abc9a2f?w=100&h=100&fit=crop",
    ingredients: ["Aqua", "Glycerin", "Butyrospermum Parkii (Shea) Butter", "C15-19 Alkane", "Cetearyl Olivate", "Distarch Phosphate", "Prunus Armeniaca (Apricot) Kernel Oil", "Cocos Nucifera (Coconut) Oil", "Hibiscus Flower Extract", "Avena Sativa (Oat) Kernel Extract", "Olea Europaea (Olive) Fruit Oil", "Simmondsia Chinensis (Jojoba) Seed Oil", "Vanilla Planifolia Fruit Extract", "Tocopherol"],
    ratings: {
      ingredientSafety: 5,
      babySafe: 5,
      vegan: true,
      crueltyFree: true
    },
    hazards: {
      allergens: true,
      harshChemicals: false,
      sulfates: false,
      parabens: false
    },
    overallScore: 93
  },

  // === RUKA'S HAIR ===
  {
    barcode: "RUKA001",
    name: "Dakar Night S/cent Hair Perfume",
    brand: "Ruka's",
    category: "Hair Perfume",
    type: "hair",
    image: null,
    ingredients: ["Aqua/Water", "Alcohol Denat.", "PEG-40 Hydrogenated Castor Oil", "Parfum (Fragrance)", "Glycerin", "Schinziophyton Rautanenii (Mongongo) Kernel Oil", "Aloe Barbadensis (Aloe Vera) Leaf Powder", "Steardimonium Hydroxypropyl Panthenyl PEG-7 Dimethicone Phosphate Chloride", "Linalool", "Eugenol"],
    ratings: {
      ingredientSafety: 4,
      curlFriendly: 4,
      skinFriendly: 4,
      vegan: true,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true,
      scalpIrritants: false,
      waxCoatings: false,
      dryingAlcohols: true
    },
    overallScore: 72
  },
  {
    barcode: "RUKA002",
    name: "Hold Me Down Edge Gel",
    brand: "Ruka's",
    category: "Edge Gel",
    type: "hair",
    image: null,
    ingredients: ["Aqua/Water", "Polyquaternium-69", "PEG-40 Hydrogenated Castor Oil", "Alcohol Denat.", "Glycerin", "Acrylic Acid/VP Crosspolymer", "Aloe Barbadensis (Aloe Vera) Leaf Powder", "Schinziophyton Rautanenii (Mongongo) Kernel Oil", "Kappaphycus Alvarezii Extract", "Caesalpinia Spinosa Fruit Extract", "Parfum (Fragrance)", "Caprylyl Glycol", "Phenoxyethanol", "Aminomethyl Propanol", "Linalool", "Eugenol"],
    ratings: {
      ingredientSafety: 4,
      curlFriendly: 4,
      skinFriendly: 4,
      vegan: true,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true,
      scalpIrritants: false,
      waxCoatings: false,
      dryingAlcohols: true
    },
    overallScore: 74
  },
  {
    barcode: "RUKA003",
    name: "Do-It-All Gel",
    brand: "Ruka's",
    category: "Styling Gel",
    type: "hair",
    image: null,
    ingredients: ["Aqua/Water", "PEG-40 Hydrogenated Castor Oil", "Polyquaternium-69", "Glycerin", "Acrylic Acid/VP Crosspolymer", "Alcohol Denat.", "Schinziophyton Rautanenii (Mongongo) Kernel Oil", "Aloe Barbadensis (Aloe Vera) Leaf Powder", "Parfum (Fragrance)", "Caprylyl Glycol", "Phenoxyethanol", "Aminomethyl Propanol", "Linalool", "Eugenol"],
    ratings: {
      ingredientSafety: 4,
      curlFriendly: 4,
      skinFriendly: 4,
      vegan: true,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true,
      scalpIrritants: false,
      waxCoatings: false,
      dryingAlcohols: true
    },
    overallScore: 74
  },
  {
    barcode: "RUKA004",
    name: "Save Me Serum",
    brand: "Ruka's",
    category: "Hair Serum",
    type: "hair",
    image: null,
    ingredients: ["Dimethicone", "Isododecane", "Phenyl Trimethicone", "C12-15 Alkyl Benzoate", "Shea Butter Ethyl Esters", "Dimethiconol", "Bis-aminopropyl Dimethicone", "Ethylhexyl Methoxycinnamate", "Trimethylsiloxysilicate", "Bis-diisopropanolamino-pg-propyl Disiloxane/Bis-vinyl Dimethicone Copolymer", "Schinziophyton Rautanenii Kernel Oil", "Parfum (Fragrance)", "Helianthus Annuus (Sunflower) Seed Oil", "Tocopherol", "Rosmarinus Officinalis (Rosemary) Leaf Extract", "Aloe Barbadensis (Aloe Vera) Leaf Extract", "Linalool", "Eugenol"],
    ratings: {
      ingredientSafety: 4,
      curlFriendly: 4,
      skinFriendly: 4,
      vegan: true,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true,
      scalpIrritants: false,
      waxCoatings: true,
      dryingAlcohols: false
    },
    overallScore: 68
  }
];

export const hazardCategories = [
  { key: 'carcinogens', label: 'Carcinogens', icon: '☢️', sources: ['IARC', 'FDA'] },
  { key: 'endocrineDisruptors', label: 'Endocrine Disruptors', icon: '⚖️', sources: ['WHO', 'EWG'] },
  { key: 'allergens', label: 'Allergens', icon: '🤧', sources: ['FDA', 'EWG'] },
  { key: 'irritants', label: 'Irritants', icon: '⚠️', sources: ['EWG', 'Dermatology'] },
  { key: 'scalpIrritants', label: 'Scalp Irritants', icon: '🔥', sources: ['Trichology'] },
  { key: 'hairBuildup', label: 'Hair Buildup', icon: '🧱', sources: ['Cosmetic Chemist'] },
  { key: 'skinLightening', label: 'Skin Lightening', icon: '⚪', sources: ['FDA', 'WHO'] },
  { key: 'heavyMetals', label: 'Heavy Metals', icon: '⚙️', sources: ['FDA', 'EPA'] },
  { key: 'pregnancyUnsafe', label: 'Pregnancy Unsafe', icon: '🤰', sources: ['ACOG'] },
  { key: 'dryingAlcohols', label: 'Drying Alcohols', icon: '🥃', sources: ['Trichology'] },
  { key: 'proteinOverload', label: 'Protein Overload', icon: '🥚', sources: ['Hair Analysis'] },
  { key: 'waxCoatings', label: 'Wax Coatings', icon: '🕯️', sources: ['Ingredient Analysis'] },
  { key: 'naturalToxins', label: 'Natural Toxins', icon: '🌿', sources: ['FDA', 'Research'] }
];

export function getRatingColor(score) {
  if (score >= 80) return '#30d158'; // Green
  if (score >= 60) return '#ffd60a'; // Yellow
  if (score >= 40) return '#ff9f0a'; // Orange
  return '#ff453a'; // Red
}

export function getRatingLabel(score) {
  if (score >= 80) return '🌟 Excellent';
  if (score >= 60) return '✅ Good';
  if (score >= 40) return '⚠️ Caution';
  return '❌ Poor';
}
