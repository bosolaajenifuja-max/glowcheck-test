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
    ingredients: ["Water", "Shea Butter", "Coconut Oil", "Glycerin", "Beeswax", "Fragrance", "Sodium Lauryl Sulfate"],
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
      scalpIrritants: false,
      waxCoatings: true,
      dryingAlcohols: false
    },
    overallScore: 68
  },
  {
    barcode: "234567890",
    name: "Mielle Rosemary Mint Shampoo",
    brand: "Mielle",
    category: "Shampoo",
    type: "hair",
    ingredients: ["Water", "Rosemary Extract", "Peppermint", "Castor Oil", "Coconut Oil", "Vitamin E", "Aloe Vera"],
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
      scalpIrritants: false,
      waxCoatings: false,
      dryingAlcohols: false
    },
    overallScore: 95
  },
  {
    barcode: "345678901",
    name: "Pattern Shampoo",
    brand: "Pattern",
    category: "Shampoo",
    type: "hair",
    ingredients: ["Water", "Aloe Vera", "Shea Butter", "Jojoba Oil", "Argan Oil", "Fragrance", "Cocamidopropyl Betaine"],
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
    overallScore: 82
  },
  {
    barcode: "456789012",
    name: "Aunt Jackie's Buttermilk Shampoo",
    brand: "Aunt Jackie's",
    category: "Shampoo",
    type: "hair",
    ingredients: ["Water", "Buttermilk", "Shea Butter", "Coconut Oil", "Glycerin", "Beeswax", "Fragrance"],
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
      waxCoatings: true
    },
    overallScore: 72
  },
  {
    barcode: "567890123",
    name: "SheaMoisture Coconut Shampoo",
    brand: "SheaMoisture",
    category: "Shampoo",
    type: "hair",
    ingredients: ["Water", "Coconut Oil", "Shea Butter", "Sea Moss", "Keratin", "Argan Oil", "Fragrance"],
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
      waxCoatings: false
    },
    overallScore: 80
  },

  // === HAIR CARE - CONDITIONERS ===
  {
    barcode: "678901234",
    name: "Cantu Deep Conditioner",
    brand: "Cantu",
    category: "Deep Conditioner",
    type: "hair",
    ingredients: ["Water", "Shea Butter", "Coconut Oil", "Beeswax", "Glycerin", "Mineral Oil", "Fragrance"],
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
    overallScore: 62
  },
  {
    barcode: "789012345",
    name: "Mielle Honey Hydration Conditioner",
    brand: "Mielle",
    category: "Conditioner",
    type: "hair",
    ingredients: ["Water", "Honey", "Babassu Oil", "Sea Moss", "Ginger", "Turmeric", "Vitamin E"],
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
      scalpIrritants: false
    },
    overallScore: 98
  },
  {
    barcode: "890123456",
    name: "Pattern Heavy Conditioner",
    brand: "Pattern",
    category: "Conditioner",
    type: "hair",
    ingredients: ["Water", "Aloe Vera", "Shea Butter", "Jojoba Oil", "Argan Oil", "Squalane", "Fragrance"],
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
      waxCoatings: false
    },
    overallScore: 85
  },

  // === HAIR CARE - OILS & TREATMENTS ===
  {
    barcode: "901234567",
    name: "Mielle Rosemary Mint Scalp & Hair Oil",
    brand: "Mielle",
    category: "Hair Oil",
    type: "hair",
    ingredients: ["Water", "Rosemary Extract", "Peppermint", "Castor Oil", "Coconut Oil", "Vitamin E", "Biotin"],
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
      scalpIrritants: false,
      waxCoatings: false
    },
    overallScore: 96
  },
  {
    barcode: "012345678",
    name: "Cantu Jamaican Black Castor Oil",
    brand: "Cantu",
    category: "Hair Oil",
    type: "hair",
    ingredients: ["Jamaican Black Castor Oil", "Shea Butter", "Coconut Oil", "Vitamin E", "Fragrance"],
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
      waxCoatings: false
    },
    overallScore: 80
  },
  {
    barcode: "112233445",
    name: "Blue Magic Jamaican Black Castor Oil",
    brand: "Blue Magic",
    category: "Hair Oil",
    type: "hair",
    ingredients: ["Jamaican Black Castor Oil", "Beeswax", "Mineral Oil", "Lanolin", "Vitamin E"],
    ratings: {
      ingredientSafety: 2,
      curlFriendly: 4,
      skinFriendly: 2,
      vegan: false,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: false,
      waxCoatings: true,
      scalpIrritants: false
    },
    overallScore: 55
  },

  // === HAIR CARE - STYLING PRODUCTS ===
  {
    barcode: "223344556",
    name: "Cantu Shea Butter Holding Spritz",
    brand: "Cantu",
    category: "Styling Spray",
    type: "hair",
    ingredients: ["Water", "Shea Butter", "Beeswax", "Glycerin", "Alcohol", "Fragrance", "VP/VA Copolymer"],
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
      waxCoatings: true,
      dryingAlcohols: true
    },
    overallScore: 48
  },
  {
    barcode: "334455667",
    name: "Mousse Foam",
    brand: "Eco Style",
    category: "Styling Mousse",
    type: "hair",
    ingredients: ["Water", "Polyurethane-14", "AMP-Acrylates Copolymer", "Glycerin", "Fragrance"],
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
    overallScore: 65
  },
  {
    barcode: "445566778",
    name: "Eco Style Argan Oil Gel",
    brand: "Eco Style",
    category: "Styling Gel",
    type: "hair",
    ingredients: ["Water", "Carbomer", "Triethanolamine", "Argan Oil", "Glycerin", "Fragrance", "VP/VA Copolymer"],
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
    overallScore: 75
  },

  // === HAIR CARE - CREAMS & LOTIONS ===
  {
    barcode: "556677889",
    name: "Cantu Shea Butter Cream",
    brand: "Cantu",
    category: "Hair Cream",
    type: "hair",
    ingredients: ["Water", "Shea Butter", "Coconut Oil", "Glycerin", "Beeswax", "Mineral Oil", "Fragrance"],
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
    overallScore: 60
  },
  {
    barcode: "667788990",
    name: "Mielle Organics Hair Milk",
    brand: "Mielle",
    category: "Hair Milk",
    type: "hair",
    ingredients: ["Water", "Coconut Oil", "Babassu Oil", "Turmeric", "Ginger", "Sea Moss", "Vitamin E"],
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
      waxCoatings: false
    },
    overallScore: 97
  },
  {
    barcode: "778899001",
    name: "Pattern Heavy Cream",
    brand: "Pattern",
    category: "Hair Cream",
    type: "hair",
    ingredients: ["Water", "Aloe Vera", "Shea Butter", "Jojoba Oil", "Argan Oil", "Squalane", "Fragrance"],
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
      waxCoatings: false
    },
    overallScore: 84
  },
  {
    barcode: "889900112",
    name: "SheaMoisture Curl Enhancing Smoothie",
    brand: "SheaMoisture",
    category: "Hair Cream",
    type: "hair",
    ingredients: ["Water", "Coconut Oil", "Shea Butter", "Flaxseed", "Kenya Highland", "Murumuru Butter", "Vitamin E"],
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
      waxCoatings: false
    },
    overallScore: 92
  },
  {
    barcode: "990011223",
    name: "Aunt Jackie's Whipped Pudding",
    brand: "Aunt Jackie's",
    category: "Hair Cream",
    type: "hair",
    ingredients: ["Water", "Buttermilk", "Shea Butter", "Coconut Oil", "Flaxseed", "Quinoa", "Fragrance"],
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
      waxCoatings: false
    },
    overallScore: 81
  },

  // === SKINCARE ===
  {
    barcode: "101112233",
    name: "Cantu Shea Body Lotion",
    brand: "Cantu",
    category: "Body Lotion",
    type: "skincare",
    ingredients: ["Water", "Shea Butter", "Coconut Oil", "Glycerin", "Mineral Oil", "Fragrance"],
    ratings: {
      ingredientSafety: 3,
      skinFriendly: 4,
      vegan: false,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true,
      skinLightening: false
    },
    overallScore: 65
  },
  {
    barcode: "211223344",
    name: "Palmers Cocoa Butter Formula Lotion",
    brand: "Palmer's",
    category: "Body Lotion",
    type: "skincare",
    ingredients: ["Water", "Cocoa Butter", "Vitamin E", "Shea Butter", "Jojoba Oil", "Fragrance"],
    ratings: {
      ingredientSafety: 4,
      skinFriendly: 4,
      vegan: true,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true
    },
    overallScore: 75
  },
  {
    barcode: "311223344",
    name: "Ambi Fade Milk",
    brand: "Ambi",
    category: "Body Lotion",
    type: "skincare",
    ingredients: ["Water", "Glycolic Acid", "Kojic Acid", "Vitamin E", "Shea Butter", "Fragrance"],
    ratings: {
      ingredientSafety: 2,
      skinFriendly: 2,
      vegan: true,
      crueltyFree: true,
      pregnancySafe: false
    },
    hazards: {
      allergens: true,
      skinLightening: true
    },
    overallScore: 35
  },
  {
    barcode: "411223344",
    name: "Nivea Cocoa Butter Body Lotion",
    brand: "Nivea",
    category: "Body Lotion",
    type: "skincare",
    ingredients: ["Water", "Cocoa Butter", "Glycerin", "Mineral Oil", "Fragrance", "Vitamin E"],
    ratings: {
      ingredientSafety: 4,
      skinFriendly: 4,
      vegan: true,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true
    },
    overallScore: 72
  },
  {
    barcode: "511223344",
    name: "Dove Cream Deep Moisture",
    brand: "Dove",
    category: "Body Lotion",
    type: "skincare",
    ingredients: ["Water", "Glycerin", "Stearic Acid", "Mineral Oil", "Vitamin E", "Fragrance"],
    ratings: {
      ingredientSafety: 4,
      skinFriendly: 5,
      vegan: false,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true
    },
    overallScore: 70
  },
  {
    barcode: "611223344",
    name: "Olay Complete Moisturizer",
    brand: "Olay",
    category: "Face Moisturizer",
    type: "skincare",
    ingredients: ["Water", "Glycerin", "Niacinamide", "Vitamin B3", "Peptides", "Fragrance"],
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
    overallScore: 88
  },
  {
    barcode: "711223344",
    name: "CeraVe Daily Moisturizing Lotion",
    brand: "CeraVe",
    category: "Face Moisturizer",
    type: "skincare",
    ingredients: ["Water", "Ceramides", "Hyaluronic Acid", "Glycerin", "Niacinamide"],
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
    overallScore: 95
  },
  {
    barcode: "811223344",
    name: "The Ordinary Natural Moisturizing Factors",
    brand: "The Ordinary",
    category: "Face Moisturizer",
    type: "skincare",
    ingredients: ["Water", "Glycerin", "Ceramides", "Squalane", "Sodium Hyaluronate", "Tocopherol"],
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
    overallScore: 98
  },

  // === MAINSTREAM HAIR CARE - SHAMPOOS ===
  {
    barcode: "901234561",
    name: "Pantene Pro-V Shampoo",
    brand: "Pantene",
    category: "Shampoo",
    type: "hair",
    ingredients: ["Water", "Sodium Lauryl Sulfate", "Sodium Laureth Sulfate", "Cocamide MEA", "Glycerin", "Panthenol", "Fragrance"],
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
      dryingAlcohols: true
    },
    overallScore: 42
  },
  {
    barcode: "901234562",
    name: "Head & Shoulders Classic Clean",
    brand: "Head & Shoulders",
    category: "Shampoo",
    type: "hair",
    ingredients: ["Water", "Sodium Lauryl Sulfate", "Zinc Pyrithione", "Sodium Laureth Sulfate", "Cocamide MEA", "Fragrance", "Sodium Chloride"],
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
    overallScore: 50
  },
  {
    barcode: "901234563",
    name: "Tresemmé Moisture Rich",
    brand: "Tresemmé",
    category: "Shampoo",
    type: "hair",
    ingredients: ["Water", "Sodium Lauryl Sulfate", "Cocamidopropyl Betaine", "Glycerin", "Vitamin E", "Argan Oil", "Fragrance"],
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
      scalpIrritants: false
    },
    overallScore: 58
  },
  {
    barcode: "901234564",
    name: "Garnier Fructis Shampoo",
    brand: "Garnier",
    category: "Shampoo",
    type: "hair",
    ingredients: ["Water", "Sodium Laureth Sulfate", "Coco-Betaine", "Glycerin", "Fruit Extracts", "Fragrance"],
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
      scalpIrritants: false
    },
    overallScore: 62
  },
  {
    barcode: "901234565",
    name: "Herbal Essences Bio:Renew",
    brand: "Herbal Essences",
    category: "Shampoo",
    type: "hair",
    ingredients: ["Water", "Sodium Lauryl Sulfate", "Sodium Laureth Sulfate", "Cocamidopropyl Betaine", "Aloe", "Mango", "Passion Fruit", "Fragrance"],
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
      scalpIrritants: false
    },
    overallScore: 60
  },
  {
    barcode: "901234566",
    name: "Aussie Mega Shampoo",
    brand: "Aussie",
    category: "Shampoo",
    type: "hair",
    ingredients: ["Water", "Sodium Lauryl Sulfate", "Cocamidopropyl Betaine", "Aloe Vera", "Jojoba Oil", "Fragrance"],
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
      scalpIrritants: false
    },
    overallScore: 62
  },
  {
    barcode: "901234567",
    name: "John Frieda Frizz Ease",
    brand: "John Frieda",
    category: "Shampoo",
    type: "hair",
    ingredients: ["Water", "Sodium Lauryl Sulfate", "Cocamidopropyl Betaine", "Silicones", "Glycerin", "Fragrance"],
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
      waxCoatings: true
    },
    overallScore: 55
  },

  // === MAINSTREAM CONDITIONERS ===
  {
    barcode: "901234571",
    name: "Pantene Pro-V Conditioner",
    brand: "Pantene",
    category: "Conditioner",
    type: "hair",
    ingredients: ["Water", "Cetearyl Alcohol", "Stearyl Alcohol", "Cetyl Alcohol", "Panthenol", "Glycerin", "Fragrance"],
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
      waxCoatings: false
    },
    overallScore: 58
  },
  {
    barcode: "901234572",
    name: "Head & Shoulders Conditioner",
    brand: "Head & Shoulders",
    category: "Conditioner",
    type: "hair",
    ingredients: ["Water", "Cetearyl Alcohol", "Zinc Pyrithione", "Stearyl Alcohol", "Cetyl Alcohol", "Fragrance"],
    ratings: {
      ingredientSafety: 3,
      curlFriendly: 4,
      skinFriendly: 4,
      vegan: false,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true
    },
    overallScore: 56
  },
  {
    barcode: "901234573",
    name: "Tresemmé Conditioner",
    brand: "Tresemmé",
    category: "Conditioner",
    type: "hair",
    ingredients: ["Water", "Cetearyl Alcohol", "Behentrimonium Chloride", "Argan Oil", "Vitamin E", "Fragrance"],
    ratings: {
      ingredientSafety: 4,
      curlFriendly: 4,
      skinFriendly: 4,
      vegan: false,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true
    },
    overallScore: 65
  },

  // === MAINSTREAM STYLING ===
  {
    barcode: "901234581",
    name: "TRESemmé Hair Spray",
    brand: "Tresemmé",
    category: "Hairspray",
    type: "hair",
    ingredients: ["Alcohol Denat.", "Water", "VA/Crotonates/Vinyl Neodecanoate Copolymer", "Aminomethyl Propanol", "Fragrance"],
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
    ingredients: ["Water", "Cyclopentasiloxane", "Glycerin", "Phenyl Trimethicone", "Panthenol", "Fragrance"],
    ratings: {
      ingredientSafety: 4,
      curlFriendly: 4,
      skinFriendly: 4,
      vegan: false,
      crueltyFree: true,
      pregnancySafe: true
    },
    hazards: {
      allergens: true
    },
    overallScore: 68
  },
  {
    barcode: "901234583",
    name: "Aussie Sprunch Spray",
    brand: "Aussie",
    category: "Styling Spray",
    type: "hair",
    ingredients: ["Water", "Polyurethane-14", "AMP-Acrylates Copolymer", "Mango Extract", "Fragrance"],
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
    overallScore: 58
  },

  // === MAINSTREAM SKINCARE ===
  {
    barcode: "901234591",
    name: "CeraVe Foaming Facial Cleanser",
    brand: "CeraVe",
    category: "Face Cleanser",
    type: "skincare",
    ingredients: ["Water", "Ceramides", "Niacinamide", "Hyaluronic Acid", "Sodium Lauroyl Sarcosinate"],
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
    overallScore: 96
  },
  {
    barcode: "901234592",
    name: "The Ordinary Glycolic Acid",
    brand: "The Ordinary",
    category: "Face Serum",
    type: "skincare",
    ingredients: ["Water", "Glycolic Acid", "Rosa Canina Fruit", "Aloe Barbadensis", "Tocopherol"],
    ratings: {
      ingredientSafety: 4,
      skinFriendly: 3,
      vegan: true,
      crueltyFree: true,
      pregnancySafe: false
    },
    hazards: {
      irritants: true,
      pregnancyUnsafe: true
    },
    overallScore: 55
  },
  {
    barcode: "901234593",
    name: "Olay Regenerist Serum",
    brand: "Olay",
    category: "Face Serum",
    type: "skincare",
    ingredients: ["Water", "Glycerin", "Niacinamide", "Peptides", "Vitamin B3", "Fragrance"],
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
    barcode: "901234594",
    name: "Neutrogena Hydro Boost",
    brand: "Neutrogena",
    category: "Face Moisturizer",
    type: "skincare",
    ingredients: ["Water", "Glycerin", "Hyaluronic Acid", "Cetearyl Olivate", "Sorbitan Olivate"],
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
    barcode: "901234595",
    name: "Garnier Skin Active Micellar Water",
    brand: "Garnier",
    category: "Face Cleanser",
    type: "skincare",
    ingredients: ["Water", "Hexylene Glycol", "Glycerin", "Poloxamer 184", "Disodium EDTA"],
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
  {
    barcode: "901234596",
    name: "Simple Kind to Skin Moisturizer",
    brand: "Simple",
    category: "Face Moisturizer",
    type: "skincare",
    ingredients: ["Water", "Glycerin", "Vitamin B3", "Allantoin", "Chamomile Extract", "Linalool"],
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
    overallScore: 82
  },
  {
    barcode: "901234597",
    name: "La Roche-Posay Effaclar Gel",
    brand: "La Roche-Posay",
    category: "Face Cleanser",
    type: "skincare",
    ingredients: ["Water", "Zinc PCA", "Glycerin", "Coco-Betaine", "Lauric Acid", "Niacinamide"],
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
    overallScore: 90
  },

  // === CECRED ===
  {
    barcode: "CEC001",
    name: "Cecred Hair Oil",
    brand: "Cecred",
    category: "Hair Oil",
    type: "hair",
    ingredients: ["Water", "Rosemary Extract", "Peppermint", "Castor Oil", "Coconut Oil", "Vitamin E", "Black Seed Oil", "Algae Extract"],
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
      scalpIrritants: false
    },
    overallScore: 98
  },
  {
    barcode: "CEC002",
    name: "Cecred Scalp Tonic",
    brand: "Cecred",
    category: "Scalp Treatment",
    type: "hair",
    ingredients: ["Water", "Rosemary", "Peppermint", "Tea Tree Oil", "Aloe Vera", "Vitamin E", "Ginger", "Ginseng"],
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
      scalpIrritants: false
    },
    overallScore: 96
  },
  {
    barcode: "CEC003",
    name: "Cecred Hair Serum",
    brand: "Cecred",
    category: "Hair Serum",
    type: "hair",
    ingredients: ["Water", "Argan Oil", "Jojoba Oil", "Vitamin E", "Rosemary Extract", "Biotin", "Keratin"],
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
      waxCoatings: false
    },
    overallScore: 97
  },

  // === TOPICALS ===
  {
    barcode: "TOP001",
    name: "Topicals Faded Serum",
    brand: "Topicals",
    category: "Face Serum",
    type: "skincare",
    ingredients: ["Water", "Niacinamide", "Turmeric", "Alpha Arbutin", "Kojic Acid", "Vitamin C", "Glycolic Acid", "Snail Mucin"],
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
      irritants: true
    },
    overallScore: 52
  },
  {
    barcode: "TOP002",
    name: "Topicals Like Butter Mask",
    brand: "Topicals",
    category: "Face Mask",
    type: "skincare",
    ingredients: ["Water", "Glycerin", "Shea Butter", "Ceramides", "Hyaluronic Acid", "Centella Asiatica", "Vitamin E"],
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
  {
    barcode: "TOP003",
    name: "Topicals Undercover Agent",
    brand: "Topicals",
    category: "Body Butter",
    type: "skincare",
    ingredients: ["Water", "Shea Butter", "Coconut Oil", "Vitamin E", "Niacinamide", "Centella Asiatica", "Glycerin"],
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
    overallScore: 93
  },

  // === PLANTMADE ===
  {
    barcode: "PLM001",
    name: "Plantmade Multi-Grain Spray",
    brand: "Plantmade",
    category: "Styling Spray",
    type: "hair",
    ingredients: ["Water", "Flaxseed", "Rice Bran", "Oat Extract", "Glycerin", "Aloe Vera", "Vitamin E", "Fragrance"],
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
    overallScore: 88
  },
  {
    barcode: "PLM002",
    name: "Plantmade Texture Spray",
    brand: "Plantmade",
    category: "Texture Spray",
    type: "hair",
    ingredients: ["Water", "Flaxseed Gel", "Oat Protein", "Rice Starch", "Glycerin", "Aloe Vera", "Fragrance"],
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
    barcode: "PLM003",
    name: "Plantmade Setting Foam",
    brand: "Plantmade",
    category: "Styling Foam",
    type: "hair",
    ingredients: ["Water", "Flaxseed", "Rice Bran", "Coconut Oil", "Glycerin", "Aloe Vera", "Vitamin E"],
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
      waxCoatings: false
    },
    overallScore: 92
  },
  {
    barcode: "PLM004",
    name: "Plantmade Hair Smoothie",
    brand: "Plantmade",
    category: "Hair Cream",
    type: "hair",
    ingredients: ["Water", "Shea Butter", "Coconut Oil", "Flaxseed", "Glycerin", "Aloe Vera", "Vitamin E", "Fragrance"],
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
      waxCoatings: false
    },
    overallScore: 84
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
