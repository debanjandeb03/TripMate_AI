import { DestinationGuide } from '../../src/types/travel.js';

export const DESTINATIONS_DATA: DestinationGuide[] = [
  {
    id: 'goa',
    name: 'Goa',
    state: 'Goa',
    tagline: 'Sun-drenched beaches, Portuguese heritage, and vibrant coastal culture',
    aliases: ['goa', 'panaji', 'north goa', 'south goa', 'calangute', 'baga', 'anjuna', 'palolem'],
    coordinates: { lat: 15.4989, lon: 73.8278 },
    bestSeason: {
      months: 'November to February',
      description: 'Pleasant winter weather (20°C - 30°C) with low humidity and clear skies, ideal for beaches and water sports.',
      peakSeason: 'December to January (high tourist crowds, festive season)',
      monsoonSeason: 'June to September (lush green landscapes, waterfalls, restricted sea swimming)',
      summerSeason: 'March to May (warm and humid, 32°C - 36°C, lower hotel tariffs)'
    },
    majorAttractions: [
      {
        name: 'Aguada Fort & Lighthouse',
        category: 'Heritage & Fortress',
        description: '17th-century Portuguese fortress overlooking Sinquerim Beach and the Arabian Sea.',
        timings: '9:30 AM - 6:00 PM daily',
        entryFee: '₹25 for Indians, ₹300 for foreigners',
        tips: 'Visit in late afternoon to catch panoramic sunset views and avoid mid-day heat.'
      },
      {
        name: 'Basilica of Bom Jesus (Old Goa)',
        category: 'Religious & UNESCO Heritage',
        description: 'UNESCO World Heritage church holding the mortal remains of St. Francis Xavier, stunning Baroque architecture.',
        timings: '9:00 AM - 6:30 PM (Sundays: 10:30 AM - 6:30 PM)',
        entryFee: 'Free entry',
        tips: 'Modest attire covering shoulders and knees is mandatory inside the cathedral.'
      },
      {
        name: 'Palolem & Agonda Beaches (South Goa)',
        category: 'Beaches & Relaxation',
        description: 'Crescent-shaped serene beach framed by coconut groves, known for dolphin spotting and peaceful vibes.',
        timings: 'Open 24 hours (Water sports 9:00 AM - 5:30 PM)',
        entryFee: 'Free entry',
        tips: 'Ideal for travelers seeking quiet shores compared to bustling North Goa party beaches.'
      },
      {
        name: 'Dudhsagar Waterfalls',
        category: 'Nature & Adventure',
        description: 'Four-tiered cascading waterfall on the Mandovi River located in Bhagwan Mahaveer Sanctuary.',
        timings: '6:00 AM - 5:00 PM (Best post-monsoon)',
        entryFee: '₹100 sanctuary entry + ~₹500 shared jeep safari from Kulem',
        tips: 'Life jackets are mandatory for swimming near the natural pool base.'
      },
      {
        name: 'Anjuna Flea Market & Chapora Fort',
        category: 'Culture & Sunset',
        description: 'Iconic hilltop bastion offering sweeping vistas of Vagator Beach, famously featured in Dil Chahta Hai.',
        timings: 'Fort open 9:30 AM - 5:30 PM; Anjuna Flea Market active Wednesdays',
        entryFee: 'Free entry to fort',
        tips: 'Wear comfortable walking shoes for the rocky 10-minute climb up Chapora fort.'
      }
    ],
    localFood: [
      {
        dish: 'Goan Fish Curry with Rice',
        type: 'non-veg',
        description: 'Tangy, spicy curry made with fresh Kingfish or Pomfret simmered in coconut milk and kokum.',
        mustTrySpot: 'Ritz Classic in Panaji or Anand Seafood in Anjuna'
      },
      {
        dish: 'Pork Vindaloo / Chicken Xacuti',
        type: 'non-veg',
        description: 'Classic Portuguese-Goan curry cooked with garlic, vinegar, Kashmiri chilies, or roasted coconut gravy.',
        mustTrySpot: 'Mum’s Kitchen, Panaji'
      },
      {
        dish: 'Bebinca',
        type: 'veg',
        description: 'Traditional multi-layered Goan dessert made with coconut milk, egg yolk, flour, and nutmeg.',
        mustTrySpot: 'Local bakeries in Fontainhas, Panaji'
      },
      {
        dish: 'Poi & Mushroom Xacuti',
        type: 'veg',
        description: 'Crusty local Goan wheat bread (Poi) served with spicy coconut mushroom curry.',
        mustTrySpot: 'Vinayak Family Restaurant, Assagao'
      }
    ],
    sample3DayItinerary: {
      day1: {
        title: 'North Goa Coastal Heritage & Sunset',
        morning: 'Explore historic Fort Aguada and Sinquerim beach. Enjoy a Goan breakfast of Poi and chai.',
        afternoon: 'Drive to Chapora Fort for breathtaking coastal vistas, followed by casual beach hopping at Vagator.',
        evening: 'Stroll around Anjuna sunset point or beach shacks, followed by dinner at a local seaside cafe.',
        estimatedDayCost: '₹1,500 - ₹2,500'
      },
      day2: {
        title: 'Latin Quarter Heritage & Mandovi Cruise',
        morning: 'Visit Old Goa churches: Basilica of Bom Jesus and Se Cathedral. Appreciate Portuguese architectural relics.',
        afternoon: 'Walk through Fontainhas, the colorful Latin Quarter in Panaji; explore heritage houses and art cafes.',
        evening: 'Sunset boat cruise on Mandovi River with traditional folk dance performance; dine in Panaji.',
        estimatedDayCost: '₹1,800 - ₹3,000'
      },
      day3: {
        title: 'South Goa Tranquility & Dudhsagar',
        morning: 'Early morning excursion to Dudhsagar Waterfalls via Kulem jeep safari or relax at Palolem beach.',
        afternoon: 'Enjoy kayaking in the calm waters of Palolem or indulge in a fresh Goan thali meal by the shore.',
        evening: 'Unwind at Cabo de Rama Fort ruins for a serene sunset over the cliffside Arabian Sea.',
        estimatedDayCost: '₹2,000 - ₹3,500'
      }
    },
    dailyBudgets: {
      low: {
        totalPerDay: '₹1,500 - ₹2,200',
        stay: '₹600 - ₹900 (Hostel dorm or basic guesthouse)',
        food: '₹500 - ₹700 (Local beach shacks and street food)',
        localTransport: '₹300 - ₹400 (Rented scooter + fuel)',
        activities: '₹100 - ₹200 (Heritage monuments entry)'
      },
      medium: {
        totalPerDay: '₹3,500 - ₹5,500',
        stay: '₹2,000 - ₹3,200 (3-star boutique hotel or beach cottage)',
        food: '₹1,000 - ₹1,500 (Mid-range cafes and seafood restaurants)',
        localTransport: '₹500 - ₹800 (Rented car or shared auto/taxis)',
        activities: '₹500 - ₹1,000 (Water sports, spice plantation tour)'
      },
      high: {
        totalPerDay: '₹8,000 - ₹15,000+',
        stay: '₹5,500 - ₹11,000+ (5-star beachfront resort or private villa)',
        food: '₹2,500 - ₹4,500 (Fine dining, beach club lounges)',
        localTransport: '₹1,500 - ₹2,500 (Chauffeured private SUV)',
        activities: '₹2,000 - ₹4,000 (Scuba diving, private catamaran charter)'
      }
    },
    safetyAndTravelTips: [
      'Rent a scooter or self-drive car with valid driving license and always wear a helmet.',
      'Respect sea safety flags: red flags indicate dangerous currents; never enter the water under intoxication.',
      'Bargain politely at night markets and check prices at beach shacks beforehand.',
      'Keep your belongings secure at crowded beaches like Calangute and Baga.',
      'Tap water is not potable; drink filtered or packaged water.'
    ],
    howToReach: {
      byAir: 'Dabolim Airport (GOI) in South Goa and Manohar International Airport (MOPA) in North Goa with direct flights across India.',
      byTrain: 'Madgaon (MAO) and Thivim (THVM) railway stations connect to Mumbai, Delhi, Bengaluru, and major cities.',
      byRoad: 'Connected via NH66 from Mumbai and Mangalore, and NH748 from Belagavi.'
    },
    idealTripDuration: '3 to 5 days'
  },
  {
    id: 'jaipur',
    name: 'Jaipur',
    state: 'Rajasthan',
    tagline: 'The Pink City of royal palaces, grand hill forts, and artisan bazaars',
    aliases: ['jaipur', 'pink city', 'amer', 'amber', 'rajasthan capital'],
    coordinates: { lat: 26.9124, lon: 75.7873 },
    bestSeason: {
      months: 'October to March',
      description: 'Crisp winter weather (10°C - 27°C) makes sightseeing in massive stone forts very comfortable.',
      peakSeason: 'December to January (Jaipur Literature Festival, high tourist footfall)',
      monsoonSeason: 'July to September (occasional showers, pleasant evenings, lush Aravalli hills)',
      summerSeason: 'April to June (extreme heat up to 45°C, not recommended for outdoor touring)'
    },
    majorAttractions: [
      {
        name: 'Amer (Amber) Fort & Maota Lake',
        category: 'Fortress & Royal Architecture',
        description: 'Majestic 16th-century hilltop fortress featuring the breathtaking Sheesh Mahal (Mirror Palace).',
        timings: '8:00 AM - 5:30 PM, Light & Sound show 7:00 PM',
        entryFee: '₹100 for Indians (students ₹20), ₹550 for foreigners',
        tips: 'Reach by 8:30 AM to beat tour bus crowds and observe the morning light reflecting in Sheesh Mahal.'
      },
      {
        name: 'Hawa Mahal (Palace of Winds)',
        category: 'Palace & Architecture',
        description: 'Five-story pink sandstone facade with 953 ornate jharokhas (casements) designed for royal women.',
        timings: '9:00 AM - 5:00 PM daily',
        entryFee: '₹50 for Indians, ₹200 for foreigners',
        tips: 'The best exterior photographs are captured from across the street at Wind View Cafe in morning sunlight.'
      },
      {
        name: 'City Palace & Chandra Mahal',
        category: 'Royal Residence & Museum',
        description: 'Seat of the Maharaja of Jaipur, featuring courtyards, Peacock Gate, and museum galleries.',
        timings: '9:30 AM - 5:00 PM',
        entryFee: '₹300 for Indians, ₹1,000 for foreigners (special Chandra Mahal tour extra)',
        tips: 'Buy composite ticket at Amer Fort or City Palace to save on multiple monument entries.'
      },
      {
        name: 'Jantar Mantar',
        category: 'UNESCO World Heritage & Astronomy',
        description: 'World’s largest stone astronomical observatory built by Rajput king Sawai Jai Singh II.',
        timings: '9:00 AM - 5:00 PM',
        entryFee: '₹50 for Indians, ₹200 for foreigners',
        tips: 'Hiring an authorized audio guide or monument guide is essential to understand the astronomical dials.'
      },
      {
        name: 'Nahargarh Fort & Jaigarh Fort',
        category: 'Hilltop Bastions & Sunset Views',
        description: 'Perched on the Aravalli ridge; home to Jaivana (world’s largest wheeled cannon) and scenic city views.',
        timings: '10:00 AM - 5:30 PM',
        entryFee: '₹50 for Indians, ₹200 for foreigners',
        tips: 'Nahargarh Fort restaurant/viewpoint is celebrated for sparkling panoramic views of illuminated Jaipur at dusk.'
      }
    ],
    localFood: [
      {
        dish: 'Dal Baati Churma',
        type: 'veg',
        description: 'Crisp baked wheat dumplings dipped in pure desi ghee, served with spicy mixed lentil dal and sweetened churma.',
        mustTrySpot: 'Laxmi Mishthan Bhandar (LMB) in Johari Bazaar or Chokhi Dhani'
      },
      {
        dish: 'Pyaaz Kachori & Mirchi Vada',
        type: 'veg',
        description: 'Flaky, deep-fried pastry stuffed with spiced onion and potato filling, paired with tamarind chutney.',
        mustTrySpot: 'Rawat Mishthan Bhandar near Sindhi Camp'
      },
      {
        dish: 'Laal Maas',
        type: 'non-veg',
        description: 'Fiery traditional Rajasthani mutton curry braised with Mathania red chilies and yogurt.',
        mustTrySpot: 'Handi Restaurant on MI Road'
      },
      {
        dish: 'Makhaniya Lassi & Ghewar',
        type: 'veg',
        description: 'Thick creamy saffron yogurt lassi in clay kulhads, accompanied by honeycomb sweet disc Ghewar.',
        mustTrySpot: 'Lassiwala (Shop 312, MI Road) - open since 1944'
      }
    ],
    sample3DayItinerary: {
      day1: {
        title: 'Iconic Old City & Bazaars',
        morning: 'Photograph Hawa Mahal at sunrise, then tour City Palace and the UNESCO Jantar Mantar observatory.',
        afternoon: 'Relish Dal Baati Churma for lunch, then stroll and bargain through Johari Bazaar and Bapu Bazaar.',
        evening: 'Sip tea at Albert Hall Museum square while witnessing the monument illuminated against night pigeons.',
        estimatedDayCost: '₹1,200 - ₹2,200'
      },
      day2: {
        title: 'Amer Royalty & Nahargarh Sunset',
        morning: 'Explore Amer Fort and the breathtaking Sheesh Mahal. Visit stepwell Panna Meena Ka Kund nearby.',
        afternoon: 'Visit Jaigarh Fort to see the massive Jaivana cannon and ancient armory.',
        evening: 'Watch the sun dip below Jaipur skyline from Nahargarh Fort ramparts with evening snacks.',
        estimatedDayCost: '₹1,500 - ₹2,500'
      },
      day3: {
        title: 'Art, Textiles & Cultural Evening',
        morning: 'Visit Anokhi Museum of Hand Printing and shop for authentic block-print textiles in Sanganer.',
        afternoon: 'Stop by Jal Mahal (Water Palace viewpoint) and explore the royal cenotaphs at Gaitore.',
        evening: 'Experience cultural folk dance, puppet shows, and traditional Rajasthani feast at Chokhi Dhani.',
        estimatedDayCost: '₹2,000 - ₹3,500'
      }
    },
    dailyBudgets: {
      low: {
        totalPerDay: '₹1,400 - ₹2,000',
        stay: '₹500 - ₹800 (Hostel bunk or budget dharamsala/guesthouse)',
        food: '₹400 - ₹600 (Street kachoris, thalis, local sweet shops)',
        localTransport: '₹300 - ₹400 (Jaipur Metro, e-rickshaws, shared autos)',
        activities: '₹200 - ₹300 (Student monument composite ticket)'
      },
      medium: {
        totalPerDay: '₹3,200 - ₹5,000',
        stay: '₹1,800 - ₹2,800 (Heritage haveli hotel or 3-star property)',
        food: '₹900 - ₹1,400 (Rooftop cafes, LMB, specialty Rajasthani diners)',
        localTransport: '₹500 - ₹800 (Pre-booked auto-rickshaws or app cabs)',
        activities: '₹500 - ₹800 (Audio guides, Chokhi Dhani cultural ticket)'
      },
      high: {
        totalPerDay: '₹7,500 - ₹16,000+',
        stay: '₹5,000 - ₹12,000+ (Luxury heritage palace hotel like Samode or Rambagh)',
        food: '₹2,000 - ₹3,500 (Fine dining royal cuisine, lounge bars)',
        localTransport: '₹1,500 - ₹2,200 (Private air-conditioned car for full day)',
        activities: '₹1,500 - ₹3,000 (Private guide, hot air balloon ride)'
      }
    },
    safetyAndTravelTips: [
      'Purchase the Composite Monument Ticket from the Department of Archaeology to save up to 40% on monument entries.',
      'Politely decline aggressive street touts and gem salesmen claiming government certification.',
      'Carry sunglasses, sunhat, and water even in winter during fort visits.',
      'Use official e-rickshaws with meters or app-based rides (Uber/Ola) to avoid arbitrary fares.'
    ],
    howToReach: {
      byAir: 'Jaipur International Airport (JAI) at Sanganer, 12 km from city center.',
      byTrain: 'Jaipur Junction (JP) connects directly with Delhi (Shatabdi, Vande Bharat), Mumbai, Kolkata, and Chennai.',
      byRoad: 'Delhi-Jaipur Expressway (NH48) takes ~4-5 hours by car or Volvo sleeper bus.'
    },
    idealTripDuration: '2 to 3 days'
  },
  {
    id: 'kerala-backwaters',
    name: 'Kerala Backwaters',
    state: 'Kerala',
    tagline: 'Emerald canals, traditional kettuvallam houseboats, and tranquil lagoons',
    aliases: ['kerala', 'kerala backwaters', 'alleppey', 'alappuzha', 'kumarakom', 'kollam', 'gods own country'],
    coordinates: { lat: 9.4981, lon: 76.3388 },
    bestSeason: {
      months: 'September to March',
      description: 'Pleasant tropical breeze, low humidity, and calm waters (22°C - 31°C).',
      peakSeason: 'December to January & Nehru Trophy Boat Race in August',
      monsoonSeason: 'June to August (Ayurveda wellness season, heavy scenic monsoon rains)',
      summerSeason: 'April to May (warm and humid, 33°C - 35°C, good deals on houseboats)'
    },
    majorAttractions: [
      {
        name: 'Alappuzha (Alleppey) Houseboat Cruise',
        category: 'Canals & Houseboats',
        description: 'Cruising through palm-fringed canals, Vembanad Lake, and paddy fields on a traditional thatch-roof houseboat.',
        timings: 'Day cruise 11:30 AM - 5:30 PM; Overnight cruise checks in at 12:00 PM, checks out 9:00 AM',
        entryFee: 'Day cruise from ₹4,500/couple; Overnight houseboat from ₹8,000 - ₹16,000',
        tips: 'Opt for government DTPC certified houseboats to guarantee safety and waste management standards.'
      },
      {
        name: 'Kumarakom Bird Sanctuary',
        category: 'Wildlife & Nature',
        description: '14-acre sanctuary on the eastern bank of Vembanad Lake, shelter for migratory birds like Siberian cranes.',
        timings: '6:00 AM - 6:00 PM',
        entryFee: '₹50 for Indians, ₹100 for foreigners',
        tips: 'Visit at dawn (6:30 AM) with binoculars to spot the greatest variety of waterfowl and egrets.'
      },
      {
        name: 'Marari Beach (Mararikulam)',
        category: 'Beaches & Relaxation',
        description: 'Pristine, peaceful white sand beach lined with swaying coconut palms, 11 km from Alleppey.',
        timings: 'Open 24 hours',
        entryFee: 'Free entry',
        tips: 'Ideal quiet retreat after a day of canal cruising; renowned for scenic sunsets.'
      },
      {
        name: 'Kuttanad Paddy Fields (Below Sea Level)',
        category: 'Geographical Wonder & Rural Life',
        description: 'The Rice Bowl of Kerala, one of the few places in the world where farming is practiced 1 to 2 meters below sea level.',
        timings: 'Best explored via village canoe trips during daylight hours',
        entryFee: 'Canoe rides ~₹400 - ₹600/hour',
        tips: 'A country canoe takes you into tiny backwater tributaries where large houseboats cannot navigate.'
      }
    ],
    localFood: [
      {
        dish: 'Karimeen Pollichathu',
        type: 'non-veg',
        description: 'Pearl spot fish marinated in shallots, green chilies, curry leaves and coconut paste, baked in fresh banana leaf.',
        mustTrySpot: 'Houseboat cook or Thaff Restaurant in Alleppey'
      },
      {
        dish: 'Kerala Sadya on Banana Leaf',
        type: 'veg',
        description: 'Traditional vegetarian banquet featuring Avial, Thoran, Olan, Kalan, Sambhar, Parippu, and sweet Payasam.',
        mustTrySpot: 'Udupi Veg Restaurant or local homestays'
      },
      {
        dish: 'Appam with Vegetable Stew / Duck Roast',
        type: 'both',
        description: 'Soft-centered fermented rice pancakes with lacy edges, paired with creamy coconut milk vegetable stew.',
        mustTrySpot: 'Chakara Restaurant, Marari'
      }
    ],
    sample3DayItinerary: {
      day1: {
        title: 'Houseboat Arrival & Vembanad Lake Cruise',
        morning: 'Arrive in Alleppey, board your traditional houseboat at Punnamada Jetty with a fresh tender coconut welcome.',
        afternoon: 'Cruise through scenic canals while enjoying freshly prepared hot Kerala lunch onboard.',
        evening: 'Anchor at a quiet village bank; take an evening walk across paddy bunds, followed by dinner onboard.',
        estimatedDayCost: '₹3,500 - ₹6,000 per person'
      },
      day2: {
        title: 'Canoe Village Safari & Alappuzha Beach',
        morning: 'Disembark from houseboat; embark on a narrow canoe boat safari into village interiors of Kuttanad.',
        afternoon: 'Check into a local lakeside homestay; savor traditional Karimeen lunch and take an authentic Ayurvedic oil massage.',
        evening: 'Visit Alappuzha Beach and historic 150-year-old sea pier; watch sunset and eat coastal snacks.',
        estimatedDayCost: '₹1,800 - ₹3,000'
      },
      day3: {
        title: 'Kumarakom Bird Sanctuary & Marari Serenity',
        morning: 'Take a scenic ferry across Vembanad Lake to Kumarakom Bird Sanctuary for early morning birdwatching.',
        afternoon: 'Drive to Marari Beach; enjoy a relaxing seaside seafood meal under coconut palms.',
        evening: 'Stroll on Marari white sands during sunset before departure towards Kochi or airport.',
        estimatedDayCost: '₹1,500 - ₹2,500'
      }
    },
    dailyBudgets: {
      low: {
        totalPerDay: '₹1,600 - ₹2,400',
        stay: '₹700 - ₹1,000 (Budget guesthouse or homestay)',
        food: '₹400 - ₹600 (Local toddy shops, banana leaf diners)',
        localTransport: '₹200 - ₹400 (Government public SWTD water ferries @ ₹10-₹40/ride)',
        activities: '₹300 - ₹500 (Shared village canoe tour)'
      },
      medium: {
        totalPerDay: '₹3,800 - ₹6,500',
        stay: '₹2,200 - ₹3,800 (Lakeside eco-resort or shared deluxe houseboat)',
        food: '₹800 - ₹1,400 (Mid-scale seafood restaurants, fresh catch)',
        localTransport: '₹600 - ₹1,000 (Tuk-tuk or taxi transfers)',
        activities: '₹600 - ₹1,200 (Private shikara boat ride, Ayurvedic massage)'
      },
      high: {
        totalPerDay: '₹9,000 - ₹20,000+',
        stay: '₹6,500 - ₹15,000+ (Private luxury AC houseboat or 5-star backwater resort like Kumarakom Lake Resort)',
        food: '₹1,800 - ₹3,500 (Chef-crafted multicourse seafood dining)',
        localTransport: '₹1,500 - ₹2,500 (Private chauffeur AC car)',
        activities: '₹2,000 - ₹4,000 (Full-body Panchakarma therapy, sunset speed boat)'
      }
    },
    safetyAndTravelTips: [
      'Use government SWTD (State Water Transport Department) public ferries for an ultra-budget authentic commute (under ₹50).',
      'Ensure the houseboat operator provides working life jackets and is registered with Kerala Tourism (DTPC).',
      'Mosquito repellent is strongly advised during evening hours near lake water banks.',
      'Check whether the houseboat air conditioning runs 24 hours or only from 9:00 PM to 6:00 AM (standard practice).'
    ],
    howToReach: {
      byAir: 'Cochin International Airport (COK) is ~75 km (2 hours drive) from Alleppey.',
      byTrain: 'Alappuzha Railway Station (ALLP) is well connected to Kochi, Thiruvananthapuram, and Chennai.',
      byRoad: 'NH66 connects Alleppey smoothly with Kochi (1.5 hours) and Kovalam.'
    },
    idealTripDuration: '2 to 3 days'
  },
  {
    id: 'manali',
    name: 'Manali',
    state: 'Himachal Pradesh',
    tagline: 'Snow-capped Himalayan peaks, cedar forests, and thrilling mountain passes',
    aliases: ['manali', 'old manali', 'solang', 'solang valley', 'atal tunnel', 'kullu manali'],
    coordinates: { lat: 32.2432, lon: 77.1892 },
    bestSeason: {
      months: 'October to June',
      description: 'October to February for winter snow and skiing; March to June for pleasant summer climate (10°C - 25°C).',
      peakSeason: 'May to June (summer escape) and December to January (snowfall seekers)',
      monsoonSeason: 'July to August (heavy rains, risk of landslides along Beas river; exercise caution)',
      summerSeason: 'April to June (blooming apple orchards and river rafting)'
    },
    majorAttractions: [
      {
        name: 'Solang Valley & Rohtang Pass',
        category: 'Snow & Adventure Sports',
        description: 'Hub for paragliding, zorbing, snow scooter rides, and mountain views at 13,058 ft elevation.',
        timings: 'Solang open all day; Rohtang Pass open May-November (closed Tuesdays for maintenance)',
        entryFee: 'Rohtang NGT green permit ~₹550 per vehicle (mandatory advance booking online)',
        tips: 'Book Rohtang Pass permits several days in advance through the official Himachal Tourism portal.'
      },
      {
        name: 'Atal Tunnel & Sissu (Lahaul Valley)',
        category: 'Engineering Marvel & Alpine Landscape',
        description: '9.02 km tunnel connecting Manali to the breathtaking high-altitude desert of Lahaul.',
        timings: 'Open 24 hours (subject to weather/snow clearance)',
        entryFee: 'No toll fee',
        tips: 'Visit Sissu waterfall across the tunnel for stunning contrasts of green willow trees and snow glaciers.'
      },
      {
        name: 'Hadimba Devi Temple & Dhungri Van Vihar',
        category: 'Ancient Wooden Architecture & Spiritual',
        description: '16th-century four-tiered pagoda-style wooden temple nestled inside tall deodar cedar groves.',
        timings: '8:00 AM - 6:00 PM',
        entryFee: 'Free entry',
        tips: 'Visit in the early morning for peaceful photography among the giant cedar trees.'
      },
      {
        name: 'Old Manali & Manu Temple',
        category: 'Bohemian Village & Cafes',
        description: 'Quaint stone-and-wood village with riverside cafes, live acoustic music, and handicraft shops.',
        timings: 'Open all day; cafes lively until 10:30 PM',
        entryFee: 'Free entry',
        tips: 'Stroll on foot through the narrow alleys to enjoy wooden Himachal architecture and cozy bakeries.'
      },
      {
        name: 'Jogini Waterfall Trek',
        category: 'Hiking & Nature',
        description: 'Scenic 3 km trek from Vashisht village through pine woods and apple orchards leading to cascading falls.',
        timings: 'Best undertaken between 8:00 AM and 4:00 PM',
        entryFee: 'Free entry',
        tips: 'Carry water and wear grippy hiking shoes; relax in Vashisht natural hot sulfur springs afterwards.'
      }
    ],
    localFood: [
      {
        dish: 'Siddu with Ghee',
        type: 'veg',
        description: 'Traditional steamed wheat dough bread stuffed with crushed walnuts, poppy seeds, and spices, drenched in hot ghee.',
        mustTrySpot: 'Chawla’s or local street stalls in Old Manali'
      },
      {
        dish: 'Kullu Trout Fish',
        type: 'non-veg',
        description: 'Fresh river trout marinated in lemon, garlic, and herbs, pan-fried in butter.',
        mustTrySpot: 'Johnson’s Cafe & Bar near Circuit House'
      },
      {
        dish: 'Thukpa & Tibetan Momos',
        type: 'both',
        description: 'Hearty steaming noodle soup with shredded mountain vegetables or chicken, served with fiery chili dip.',
        mustTrySpot: 'Chopsticks Restaurant on Mall Road'
      },
      {
        dish: 'Dhaam (Traditional Himachali Feast)',
        type: 'veg',
        description: 'Festive platter of Madra (chickpeas in yogurt gravy), Khatta dal, and sweetened rice (Meetha).',
        mustTrySpot: 'Heritage restaurants in Naggar or Vashisht'
      }
    ],
    sample3DayItinerary: {
      day1: {
        title: 'Old Manali Heritage & Jogini Trek',
        morning: 'Visit Hadimba Temple amidst towering deodars; walk to Manu Temple in Old Manali.',
        afternoon: 'Enjoy riverside lunch at an Old Manali cafe; hike up to the picturesque Jogini Waterfalls.',
        evening: 'Dip feet in Vashisht hot springs, then stroll along the vibrant Mall Road for souvenirs.',
        estimatedDayCost: '₹1,200 - ₹2,000'
      },
      day2: {
        title: 'Atal Tunnel & Sissu Alpine Valley',
        morning: 'Drive early through the magnificent Atal Tunnel to Sissu in Lahaul Valley.',
        afternoon: 'Explore Sissu waterfall and lake; marvel at snow ridges and barren mountains; savor hot Maggi and Thukpa.',
        evening: 'Return to Solang Valley for paragliding or cable car ride before heading back to Manali.',
        estimatedDayCost: '₹1,800 - ₹3,200'
      },
      day3: {
        title: 'Naggar Castle & Beas River Rafting',
        morning: 'Drive 20 km to historic Naggar Castle, a stone-and-timber marvel overlooking the Kullu valley.',
        afternoon: 'Visit the Nicholas Roerich Art Gallery; experience river rafting on the Beas river near Kullu.',
        evening: 'Relish a trout fish dinner at Johnson’s Cafe before evening departure.',
        estimatedDayCost: '₹1,500 - ₹2,800'
      }
    },
    dailyBudgets: {
      low: {
        totalPerDay: '₹1,400 - ₹2,200',
        stay: '₹500 - ₹900 (Hostel bed in Old Manali or budget lodge)',
        food: '₹400 - ₹600 (Tibetan stalls, siddu joints, local dhabas)',
        localTransport: '₹300 - ₹500 (Local buses or rented motorcycle/Scooty)',
        activities: '₹200 - ₹400 (Entry fees, nature walks)'
      },
      medium: {
        totalPerDay: '₹3,500 - ₹5,500',
        stay: '₹2,000 - ₹3,200 (Valley-view 3-star hotel or riverside cottage)',
        food: '₹900 - ₹1,400 (Old Manali cafes, trout specialties, bakeries)',
        localTransport: '₹600 - ₹1,000 (Shared/private local taxi transfers)',
        activities: '₹800 - ₹1,500 (Solang ropeway, Jogini guide, rafting)'
      },
      high: {
        totalPerDay: '₹8,000 - ₹16,000+',
        stay: '₹5,500 - ₹12,000+ (Luxury resort like Span Resort or boutique mountain chalet)',
        food: '₹2,000 - ₹3,500 (Fine dining, multi-course dinners with mountain views)',
        localTransport: '₹1,800 - ₹2,500 (Private 4x4 SUV with driver)',
        activities: '₹2,500 - ₹5,000 (Tandem paragliding, heli-skiing, Rohtang tour)'
      }
    },
    safetyAndTravelTips: [
      'Acclimatize properly if ascending above Atal Tunnel or Rohtang Pass (stay hydrated and carry warm layers).',
      'Avoid visiting high mountain passes during heavy monsoon alerts due to road blockade risks.',
      'Always rent cold-weather snowsuits and boots from government-approved rate shops on the Solang highway.',
      'Check brake pads and tire tread carefully when renting two-wheelers for steep downhill slopes.'
    ],
    howToReach: {
      byAir: 'Kullu-Manali Airport (Bhuntar) is 50 km away; Chandigarh Airport (IXC) is 280 km (8 hours drive).',
      byTrain: 'Nearest broad-gauge railhead is Chandigarh or Una; Joginder Nagar is narrow gauge.',
      byRoad: 'Overnight luxury Volvo buses connect Delhi (ISBT Kashmere Gate) and Chandigarh directly to Manali.'
    },
    idealTripDuration: '3 to 5 days'
  },
  {
    id: 'varanasi',
    name: 'Varanasi',
    state: 'Uttar Pradesh',
    tagline: 'The timeless spiritual capital of India on the sacred banks of the Ganges',
    aliases: ['varanasi', 'banaras', 'benares', 'kashi', 'ganges', 'ganga ghats'],
    coordinates: { lat: 25.3176, lon: 82.9739 },
    bestSeason: {
      months: 'October to March',
      description: 'Pleasant and cool temperatures (12°C - 26°C), ideal for exploring the narrow winding lanes and taking early sunrise boat rides.',
      peakSeason: 'November (Dev Deepawali - ghats lit with a million clay lamps) and Mahashivratri',
      monsoonSeason: 'July to September (river level rises, submerging lower ghat steps, boat rides restricted)',
      summerSeason: 'April to June (scorching dry heat up to 44°C, midday walking is harsh)'
    },
    majorAttractions: [
      {
        name: 'Dashashwamedh Ghat & Evening Ganga Aarti',
        category: 'Spiritual Ritual & Heritage',
        description: 'Varanasi’s most vibrant ghat, famous for the magnificent choreographed twilight Aarti with brass lamps and chants.',
        timings: 'Ganga Aarti starts around 6:45 PM (summer) / 6:00 PM (winter) daily',
        entryFee: 'Free to watch from steps; boat seat costs ~₹100 - ₹300',
        tips: 'Arrive by 5:30 PM to secure a front-row boat seat on the river for the best view.'
      },
      {
        name: 'Sunrise Boat Ride (Assi to Manikarnika Ghat)',
        category: 'River Life & Culture',
        description: 'Rowboat or motorboat cruise along 84 ghats as pilgrims perform morning rituals and rays illuminate ancient palaces.',
        timings: '5:30 AM - 7:30 AM',
        entryFee: 'Hand-rowed boat ~₹200 - ₹400/person; private boat ~₹800 - ₹1,500',
        tips: 'Always agree on the total price and duration clearly before stepping into the boat.'
      },
      {
        name: 'Kashi Vishwanath Temple & Corridor',
        category: 'Spiritual & Hindu Pilgrimage',
        description: 'One of the twelve revered Jyotirlingas, newly renovated with a grand corridor directly linking to the Ganges.',
        timings: '3:00 AM - 11:00 PM (Mangala Aarti at 3:00 AM)',
        entryFee: 'General darshan free; Sugam Darshan ticket ~₹300 - ₹500',
        tips: 'Electronics, leather items, and mobile phones are strictly prohibited; deposit them in secure locker counters.'
      },
      {
        name: 'Sarnath (Deer Park & Dhamek Stupa)',
        category: 'Buddhist Heritage & Archaeology',
        description: '10 km from Varanasi where Lord Buddha preached his first sermon; site of Ashoka Pillar and magnificent stupas.',
        timings: '9:00 AM - 5:00 PM (Museum closed Fridays)',
        entryFee: '₹25 for Indians, ₹300 for foreigners',
        tips: 'Do not miss the Sarnath Archaeological Museum housing India’s national emblem (Lion Capital of Ashoka).'
      },
      {
        name: 'Manikarnika & Harishchandra Ghats',
        category: 'Cultural & Sacred Cremation Ghats',
        description: 'Sacred cremation ghats operating continuously for thousands of years, representing the Hindu philosophy of Moksha.',
        timings: 'Open 24 hours',
        entryFee: 'Free',
        tips: 'Maintain solemn dignity; photography is strictly disrespectful and prohibited here.'
      }
    ],
    localFood: [
      {
        dish: 'Banarasi Kachori Sabzi & Jalebi',
        type: 'veg',
        description: 'Crisp puris stuffed with spiced urad dal served with tangy potato-chickpea curry and crispy hot jalebis.',
        mustTrySpot: 'Ram Bhandar in Thatheri Bazaar (6:00 AM - 10:00 AM only)'
      },
      {
        dish: 'Malaiyo (Winter Special)',
        type: 'veg',
        description: 'Fluffy, cloud-like saffron milk foam flavored with cardamom, pistachios, and served in clay kulhad.',
        mustTrySpot: 'Neelkanth or Markandey in Chowk (available November - February)'
      },
      {
        dish: 'Tamatar Chaat & Palak Chaat',
        type: 'veg',
        description: 'Spiced tomato mash served with hing-infused water, namkeen, and cashews in earthen bowls.',
        mustTrySpot: 'Kashi Chaat Bhandar or Deena Chaat Bhandar in Godowlia'
      },
      {
        dish: 'Banarasi Meetha Paan',
        type: 'veg',
        description: 'Betel leaf filled with gulkand, sweet saunf, and aromatic spices; melts in the mouth without tobacco.',
        mustTrySpot: 'Keshav Tambool Bhandar near Assi Ghat'
      }
    ],
    sample3DayItinerary: {
      day1: {
        title: 'Sacred Ghats & Evening Grand Aarti',
        morning: 'Experience early morning sunrise rowboat ride from Assi Ghat to Manikarnika Ghat; watch morning Ganga puja.',
        afternoon: 'Walk through narrow labyrinthine alleys; enjoy Banarasi Kachori-Jalebi; visit ancient Sankat Mochan Temple.',
        evening: 'Reach Dashashwamedh Ghat by 5:30 PM for the world-renowned evening Ganga Aarti ceremony.',
        estimatedDayCost: '₹1,000 - ₹1,800'
      },
      day2: {
        title: 'Kashi Vishwanath & Textile Heritage',
        morning: 'Darshan at Kashi Vishwanath Golden Temple via the new riverside corridor.',
        afternoon: 'Taste famous Tamatar Chaat at Kashi Chaat Bhandar; explore weavers in Madanpura for pure Banarasi silk sarees.',
        evening: 'Subah-e-Banaras music or yoga session at Assi Ghat, followed by clay-cup lemon tea at Pappu Chai Stall.',
        estimatedDayCost: '₹1,200 - ₹2,200'
      },
      day3: {
        title: 'Peaceful Sarnath & Ramnagar Fort',
        morning: 'Drive 10 km to Sarnath; visit Dhamek Stupa, Mulagandha Kuti Vihar, and the Ashoka Lion Capital museum.',
        afternoon: 'Cross the Ganges via pontoon/bridge to explore 18th-century sandstone Ramnagar Fort and its vintage car museum.',
        evening: 'Final sunset quiet walk along Chet Singh Ghat; savor famous Banarasi Paan and rabdi lassi.',
        estimatedDayCost: '₹1,400 - ₹2,400'
      }
    },
    dailyBudgets: {
      low: {
        totalPerDay: '₹1,200 - ₹1,800',
        stay: '₹500 - ₹800 (Riverside ashram, hostel dorm, or guesthouse near Assi)',
        food: '₹350 - ₹500 (Kachori joints, chaat bhandars, lassi corners)',
        localTransport: '₹200 - ₹300 (Walking through alleyways, shared e-rickshaws)',
        activities: '₹200 - ₹300 (Shared morning boat ride, temple entries)'
      },
      medium: {
        totalPerDay: '₹2,800 - ₹4,500',
        stay: '₹1,800 - ₹2,800 (Heritage riverside haveli hotel like Ganpati Guest House or 3-star hotel)',
        food: '₹700 - ₹1,100 (Cafe rooftop diners, authentic thalis, sweets)',
        localTransport: '₹400 - ₹700 (Auto rickshaws and private boat)',
        activities: '₹400 - ₹800 (Special temple darshan pass, Sarnath audio guide)'
      },
      high: {
        totalPerDay: '₹7,000 - ₹15,000+',
        stay: '₹5,000 - ₹12,000+ (5-star heritage palace like BrijRama Palace or Taj Ganges)',
        food: '₹1,800 - ₹3,000 (Fine dining river-view restaurants, private feasts)',
        localTransport: '₹1,200 - ₹2,000 (Chauffeured private AC car for the day)',
        activities: '₹1,500 - ₹3,000 (Private motor bajra cruise for Ganga Aarti, private scholar guide)'
      }
    },
    safetyAndTravelTips: [
      'Ghat alleyways are historic pedestrian mazes; keep Google Maps downloaded offline or navigate using ghat landmarks.',
      'Be cautious of faux priests (pandas) offering expedited rituals for exorbitant fees.',
      'Watch your step on slippery moss-covered ghat stones near the river water edge.',
      'Do not take photos of funeral pyres at Manikarnika Ghat.'
    ],
    howToReach: {
      byAir: 'Lal Bahadur Shastri International Airport (VNS) at Babatpur, 26 km from the ghats.',
      byTrain: 'Varanasi Junction (BSB) and Banaras Railway Station (BSBS) are major junctions with Vande Bharat express routes.',
      byRoad: 'Connected via NH19 (Grand Trunk Road) to Prayagraj (2.5 hrs), Lucknow (5 hrs), and Patna.'
    },
    idealTripDuration: '2 to 3 days'
  },
  {
    id: 'rishikesh',
    name: 'Rishikesh',
    state: 'Uttarakhand',
    tagline: 'Yoga capital of the world, adrenaline river rafting, and Himalayan foothills serenity',
    aliases: ['rishikesh', 'tapovan', 'laxman jhula', 'ram jhula', 'shivpuri', 'yoga capital'],
    coordinates: { lat: 30.0869, lon: 78.2676 },
    bestSeason: {
      months: 'September to April',
      description: 'Pleasant weather (14°C - 28°C) with crystal-clear turquoise Ganges waters ideal for rafting, yoga, and camping.',
      peakSeason: 'March (International Yoga Festival) and October-November',
      monsoonSeason: 'July to August (river swells dangerously; white water rafting is strictly closed)',
      summerSeason: 'May to June (warm, good for rafting, temperatures reach 36°C)'
    },
    majorAttractions: [
      {
        name: 'Ganges White Water Rafting & Cliff Jumping (Shivpuri to NIM Beach)',
        category: 'Adventure Sports',
        description: 'World-class Grade III/IV river rapids like Three Blind Mice, Roller Coaster, and Golf Course.',
        timings: '8:00 AM - 3:30 PM (September to June only)',
        entryFee: '₹600 - ₹1,200 per person depending on distance (12 km, 16 km, or 24 km)',
        tips: 'Book with certified operators licensed by Uttarakhand Tourism; wear provided life jackets and helmets.'
      },
      {
        name: 'Triveni Ghat Evening Maha Aarti',
        category: 'Spiritual Ceremony',
        description: 'Vibrant ritual where butter lamps float down the Ganges accompanied by Vedic chants, conch shells, and bells.',
        timings: '6:00 PM - 7:00 PM daily',
        entryFee: 'Free entry',
        tips: 'Sit by the river bank early to enjoy the calming river breeze and Aarti reflection.'
      },
      {
        name: 'Beatles Ashram (Chaurasi Kutia)',
        category: 'Music History & Art',
        description: 'Historic ashram where The Beatles stayed and composed the White Album in 1968; features graffiti art and meditation domes.',
        timings: '9:00 AM - 4:00 PM',
        entryFee: '₹150 for Indians, ₹600 for foreigners',
        tips: 'Great spot for mindful photography among the abandoned overgrown domed stone meditation caves.'
      },
      {
        name: 'Ram Jhula, Janki Jhula & Parmarth Niketan',
        category: 'Suspension Bridges & Ashrams',
        description: 'Famous iron suspension bridges connecting bustling markets and serene riverside ashrams.',
        timings: 'Open 24 hours',
        entryFee: 'Free',
        tips: 'Watch out for resident monkeys on the bridge railings; avoid carrying open food in hands.'
      },
      {
        name: 'Neer Garh Waterfall Trek',
        category: 'Nature & Hiking',
        description: 'Two-tier natural waterfall located 5 km from Tapovan with refreshing shallow limestone pools.',
        timings: '8:00 AM - 5:00 PM',
        entryFee: '₹30 entry fee',
        tips: 'A short 20-minute uphill hike from the ticket point leads to the upper, clearer swimming pools.'
      }
    ],
    localFood: [
      {
        dish: 'Ayurvedic Thali & Smoothie Bowls',
        type: 'veg',
        description: 'Wholesome organic meals prepared without onion/garlic, with millet breads, fresh greens, and herbal teas.',
        mustTrySpot: 'Beatles Cafe (60s Cafe) or Little Buddha Cafe in Tapovan'
      },
      {
        dish: 'Chotiwala Special Thali',
        type: 'veg',
        description: 'Hearty traditional North Indian vegetarian thali with paneer, dal makhani, raita, and hot rotis.',
        mustTrySpot: 'Chotiwala Restaurant (Original near Ram Jhula since 1958)'
      },
      {
        dish: 'Wood-fired Pizza & Kombucha',
        type: 'veg',
        description: 'Artisan sourdough pizzas baked in wood-fired stone ovens with fresh basil and mozzarella.',
        mustTrySpot: 'Ganga Beach Cafe or Freedom Cafe overlooking the river'
      }
    ],
    sample3DayItinerary: {
      day1: {
        title: 'Spiritual Riverbanks & Beatles Ashram',
        morning: 'Morning yoga or meditation class by the Ganges; walk across Ram Jhula to explore Swarg Ashram.',
        afternoon: 'Visit the peaceful Beatles Ashram (Chaurasi Kutia) and photograph the meditation caverns.',
        evening: 'Attend the divine sunset Ganga Aarti at Triveni Ghat or Parmarth Niketan with floating diyas.',
        estimatedDayCost: '₹900 - ₹1,600'
      },
      day2: {
        title: 'Adrenaline Rapids & Waterfall Trek',
        morning: 'Embark on a thrilling 16 km white water rafting run from Shivpuri to Rishikesh with cliff jumping.',
        afternoon: 'Healthy organic lunch at Little Buddha Cafe in Tapovan overlooking the river.',
        evening: 'Hike up to Neer Garh Waterfall for a refreshing dip; enjoy evening acoustic music at a riverside cafe.',
        estimatedDayCost: '₹1,500 - ₹2,500'
      },
      day3: {
        title: 'Kunjapuri Sunrise & Wellness',
        morning: 'Pre-dawn drive to Kunjapuri Devi Temple (1,665m) for panoramic sunrise over snowcapped Himalayan peaks.',
        afternoon: 'Treat yourself to an authentic Ayurvedic full-body massage or sound healing session.',
        evening: 'Quiet walk along the banks of Sai Ghat; shop for brass singing bowls and wooden handicrafts.',
        estimatedDayCost: '₹1,200 - ₹2,200'
      }
    },
    dailyBudgets: {
      low: {
        totalPerDay: '₹1,200 - ₹1,800',
        stay: '₹500 - ₹800 (Hostel dorm in Tapovan like Zostel or ashram room)',
        food: '₹400 - ₹600 (Pure-veg dhabas, roadside parathas, Ayurvedic cafes)',
        localTransport: '₹200 - ₹300 (Shared Vikram tempo autos or walking)',
        activities: '₹300 - ₹500 (Waterfall entry, Beatles ashram student ticket)'
      },
      medium: {
        totalPerDay: '₹3,000 - ₹5,000',
        stay: '₹1,800 - ₹3,000 (Riverside boutique hotel, yoga retreat guesthouse)',
        food: '₹800 - ₹1,300 (Popular Tapovan cafes, Italian & vegan bakeries)',
        localTransport: '₹500 - ₹800 (Rented scooter @ ₹400/day + fuel)',
        activities: '₹800 - ₹1,500 (16 km river rafting + cliff jump, yoga pass)'
      },
      high: {
        totalPerDay: '₹7,500 - ₹18,000+',
        stay: '₹5,500 - ₹14,000+ (Luxury wellness resort like Ananda in the Himalayas or Aloha on the Ganges)',
        food: '₹1,800 - ₹3,200 (Multi-cuisine luxury resort dining)',
        localTransport: '₹1,500 - ₹2,200 (Private AC car for excursions)',
        activities: '₹2,500 - ₹5,000 (Bungee jumping at Jumpin Heights, private sound bath)'
      }
    },
    safetyAndTravelTips: [
      'Rishikesh is a holy city; non-vegetarian food and alcohol are strictly banned by municipal law.',
      'Check water levels before swimming in the Ganges; currents are deceptively swift even near the banks.',
      'Only undertake adventure activities (bungee, rafting) with authorized operators carrying certified safety equipment.',
      'Beware of assertive rhesus macaque monkeys near suspension bridges; stash food items inside backpacks.'
    ],
    howToReach: {
      byAir: 'Dehradun’s Jolly Grant Airport (DED) is only 21 km (35 mins) away.',
      byTrain: 'Yog Nagari Rishikesh Railway Station (YNRK) and Haridwar Junction (25 km away) have excellent trains.',
      byRoad: 'Delhi to Rishikesh is ~230 km (5 to 6 hours) via the Delhi-Meerut Expressway and NH334.'
    },
    idealTripDuration: '2 to 4 days'
  },
  {
    id: 'udaipur',
    name: 'Udaipur',
    state: 'Rajasthan',
    tagline: 'The romantic City of Lakes, marble palaces, and Rajput chivalry',
    aliases: ['udaipur', 'city of lakes', 'lake pichola', 'fateh sagar', 'venice of the east'],
    coordinates: { lat: 24.5854, lon: 73.7125 },
    bestSeason: {
      months: 'October to March',
      description: 'Pleasant winter sunshine (11°C - 28°C) with full lakes reflecting grand white palaces.',
      peakSeason: 'December to January and Mewar Festival in March/April',
      monsoonSeason: 'July to September (lakes replenish, Aravalli hills turn lush emerald green)',
      summerSeason: 'April to June (hot, reaching 40°C, though early mornings and evenings by the lakes remain breezy)'
    },
    majorAttractions: [
      {
        name: 'City Palace Complex & Museum',
        category: 'Palace & Royal Heritage',
        description: 'Rajasthan’s largest palace complex perched on Lake Pichola, showcasing courtyards, mirror work, and armories.',
        timings: '9:00 AM - 5:30 PM daily',
        entryFee: '₹300 for adults, ₹100 for children',
        tips: 'Take at least 2.5 hours to properly explore the museum and balconies overlooking Lake Pichola.'
      },
      {
        name: 'Lake Pichola Boat Cruise & Jag Mandir',
        category: 'Lakes & Architecture',
        description: 'Picturesque boat ride offering close views of the floating Taj Lake Palace and stopping at island palace Jag Mandir.',
        timings: '10:00 AM - 6:00 PM (Sunset cruise around 5:00 PM)',
        entryFee: 'Regular boat ₹400; Sunset cruise ₹800 - ₹1,000 per person',
        tips: 'Sunset cruise is worth the extra cost for the golden hour glow on the marble palaces.'
      },
      {
        name: 'Saheliyon-ki-Bari (Courtyard of Maidens)',
        category: 'Gardens & Fountains',
        description: 'Historic royal garden built for princesses, with marble elephant fountains, lotus pools, and rose beds.',
        timings: '9:00 AM - 7:00 PM',
        entryFee: '₹20 for Indians, ₹100 for foreigners',
        tips: 'Fountains operate on natural hydraulic gravity without pumps—a 18th-century engineering wonder.'
      },
      {
        name: 'Bagore Ki Haveli & Dharohar Folk Dance',
        category: 'Culture & Performing Arts',
        description: '18th-century waterfront mansion at Gangaur Ghat hosting the nightly Dharohar Rajasthani dance and puppet show.',
        timings: 'Museum 9:30 AM - 5:30 PM; Cultural dance show 7:00 PM - 8:00 PM',
        entryFee: 'Folk show: ₹100 for Indians, ₹150 for foreigners',
        tips: 'Buy tickets at the counter at 6:00 PM as seats fill up very quickly.'
      },
      {
        name: 'Monsoon Palace (Sajjangarh Fort)',
        category: 'Hilltop Bastion & Sunset Point',
        description: 'Palace built atop Bansdara peak in the Aravalli range offering dramatic 360-degree views of lakes and city.',
        timings: '9:00 AM - 6:00 PM',
        entryFee: '₹60 for Indians + ₹100 forest entry for vehicle',
        tips: 'Hire an auto or cab to go up before sunset to watch the twilight illuminate the lake basin.'
      }
    ],
    localFood: [
      {
        dish: 'Khatta & Gatte Ki Sabzi with Missi Roti',
        type: 'veg',
        description: 'Gram flour dumplings cooked in a spiced yogurt-based gravy, paired with roasted gram flour rotis.',
        mustTrySpot: 'Traditional Heritage Restaurant or Jagat Niwas Rooftop'
      },
      {
        dish: 'Rajasthani Laal Maas',
        type: 'non-veg',
        description: 'Slow-cooked tender mutton steeped in spicy Mathania chilies and garlic oil.',
        mustTrySpot: 'Ambrai Restaurant by Lake Pichola'
      },
      {
        dish: 'Mirchi Bada & Poha',
        type: 'veg',
        description: 'Stuffed spicy chili fritters served with hot sweet poha and tea in morning markets.',
        mustTrySpot: 'Sukhadia Circle stalls and Bhole Mishthan Bhandar'
      }
    ],
    sample3DayItinerary: {
      day1: {
        title: 'City Palace Grandeur & Sunset Lake Pichola',
        morning: 'Tour the vast City Palace complex, exploring Zenana Mahal, Sheesh Mahal, and Mor Chowk peacock courtyard.',
        afternoon: 'Lunch at a rooftop cafe overlooking Lake Pichola; visit the ancient Jagdish Temple.',
        evening: 'Take the sunset boat cruise around Lake Pichola; watch the Dharohar cultural dance at Bagore Ki Haveli.',
        estimatedDayCost: '₹1,400 - ₹2,500'
      },
      day2: {
        title: 'Gardens, Vintage Cars & Monsoon Palace',
        morning: 'Stroll through the fountains and marble pavilions of Saheliyon-ki-Bari.',
        afternoon: 'Visit the Vintage & Classic Car Collection of the Maharana of Mewar; walk around Fateh Sagar Lake.',
        evening: 'Ascend to Sajjangarh (Monsoon Palace) for dramatic sunset views across the Aravalli hills.',
        estimatedDayCost: '₹1,500 - ₹2,800'
      },
      day3: {
        title: 'Lakeside Serenity & Shilpgram Craft Village',
        morning: 'Explore Shilpgram, a rural arts and crafts complex displaying traditional regional tribal huts and pottery.',
        afternoon: 'Relax by Fateh Sagar Lake with a cold coffee or Kulhad chai; visit solar observatory viewpoint.',
        evening: 'Dine at Ambrai Ghat with front-row illuminated views of the City Palace reflecting in the water.',
        estimatedDayCost: '₹1,600 - ₹3,000'
      }
    },
    dailyBudgets: {
      low: {
        totalPerDay: '₹1,400 - ₹2,200',
        stay: '₹500 - ₹900 (Hostel dorm near Lal Ghat or budget haveli)',
        food: '₹400 - ₹600 (Street poha, kachoris, thali joints)',
        localTransport: '₹300 - ₹450 (Walking old alleys, shared autos)',
        activities: '₹200 - ₹350 (Palace student ticket, Bagore show)'
      },
      medium: {
        totalPerDay: '₹3,400 - ₹5,500',
        stay: '₹2,000 - ₹3,200 (Heritage lake-view haveli like Jagat Niwas or Amet Haveli)',
        food: '₹900 - ₹1,400 (Rooftop lakeside restaurants, Ambrai)',
        localTransport: '₹500 - ₹800 (Auto rickshaws and app cabs)',
        activities: '₹600 - ₹1,100 (Lake Pichola sunset boat ride, museum entries)'
      },
      high: {
        totalPerDay: '₹8,500 - ₹22,000+',
        stay: '₹6,000 - ₹16,000+ (Luxury palace hotel like Taj Lake Palace, Leela Palace, or Oberoi Udaivilas)',
        food: '₹2,200 - ₹4,000 (Fine dining candlelight royal dining)',
        localTransport: '₹1,500 - ₹2,500 (Private chauffeured luxury car)',
        activities: '₹2,000 - ₹4,000 (Private boat charter, private historian guide)'
      }
    },
    safetyAndTravelTips: [
      'The Old City lanes around Lal Ghat and Jagdish Temple are narrow; auto-rickshaws or walking are better than cars.',
      'Book Lake Pichola sunset cruise tickets in advance during peak winter weekends.',
      'Pre-negotiate auto-rickshaw fares or use online apps whenever feasible.',
      'Dine at Ambrai or rooftop restaurants with reservations to guarantee waterfront tables.'
    ],
    howToReach: {
      byAir: 'Maharana Pratap Airport (UDR) at Dabok is 22 km from the city center.',
      byTrain: 'Udaipur City Railway Station (UDZ) connects directly to Delhi, Mumbai, Jaipur, and Ahmedabad.',
      byRoad: 'Connected via NH48 to Ahmedabad (4.5 hrs) and Jaipur (6.5 hrs).'
    },
    idealTripDuration: '2 to 3 days'
  },
  {
    id: 'hampi',
    name: 'Hampi',
    state: 'Karnataka',
    tagline: 'UNESCO boulder-strewn ruins of the monumental Vijayanagara Empire',
    aliases: ['hampi', 'hosapete', 'hospet', 'vijayanagara', 'hippie island', 'sanapur'],
    coordinates: { lat: 15.3350, lon: 76.4600 },
    bestSeason: {
      months: 'November to February',
      description: 'Pleasant winter climate (16°C - 30°C) suited for cycling and exploring vast open stone ruins under the sun.',
      peakSeason: 'December and January (Hampi Utsav cultural festival)',
      monsoonSeason: 'July to September (rivers and waterfalls swell, boulders become slippery)',
      summerSeason: 'March to May (scorching heat exceeding 40°C, walking on stone rocks becomes difficult)'
    },
    majorAttractions: [
      {
        name: 'Virupaksha Temple',
        category: 'Spiritual & Living Heritage',
        description: '7th-century dedicated temple to Lord Shiva, operating continuously with a 49-meter soaring gopuram.',
        timings: '6:00 AM - 1:00 PM, 5:00 PM - 9:00 PM',
        entryFee: '₹50 entry fee',
        tips: 'See the pinhole camera effect inside the temple sanctum inverted shadow room.'
      },
      {
        name: 'Vijaya Vittala Temple & Stone Chariot',
        category: 'UNESCO Architectural Wonder',
        description: 'Iconic stone chariot shrine featured on the Indian ₹50 currency note, and 56 musical pillar hall.',
        timings: '8:30 AM - 5:30 PM',
        entryFee: '₹40 for Indians (composite for all Hampi ASI monuments), ₹600 for foreigners',
        tips: 'Electric golf carts are available at the parking gate (1 km away) for elderly visitors.'
      },
      {
        name: 'Matanga Hill Sunrise Point',
        category: 'Scenic Viewpoint & Trek',
        description: 'Highest point in Hampi offering an unreal 360-degree panorama of boulder fields and Tungabhadra River.',
        timings: 'Best ascended at 5:30 AM for sunrise or 5:00 PM for sunset',
        entryFee: 'Free',
        tips: 'Carry a torch and wear sneakers for the 25-minute boulder stair climb.'
      },
      {
        name: 'Lotus Mahal & Elephant Stables (Royal Enclosure)',
        category: 'Royal Architecture',
        description: 'Indo-Islamic secular architecture where royal ladies relaxed and state elephants were housed.',
        timings: '8:30 AM - 5:30 PM',
        entryFee: 'Included in ASI composite ticket',
        tips: 'Explore the stepped tank (Pushkarani) nearby featuring precision geometry.'
      },
      {
        name: 'Coracle Ride on Tungabhadra River & Sanapur Lake',
        category: 'Adventure & Nature',
        description: 'Round traditional wicker-and-tarp boats spinning across the rocky Tungabhadra rapids.',
        timings: '7:00 AM - 5:30 PM',
        entryFee: '₹300 - ₹500 per person for a 30-minute ride',
        tips: 'Do not attempt unsupervised swimming near Sanapur lake where rocks are submerged and warning signs exist.'
      }
    ],
    localFood: [
      {
        dish: 'Karnataka Jolada Rotti Oota (Meal)',
        type: 'veg',
        description: 'Nutritious jowar (sorghum) flatbreads served with stuffed brinjal curry (Ennegayi), lentil dal, and spicy peanut chutney.',
        mustTrySpot: 'Mango Tree Restaurant in Hampi Bazaar or local Khanavalis'
      },
      {
        dish: 'Bisi Bele Bath & Filter Coffee',
        type: 'veg',
        description: 'Spiced rice-lentil mash cooked with vegetables and tamarind, paired with piping hot South Indian filter coffee.',
        mustTrySpot: 'Udupi restaurants in Hospet and Kamalapur'
      },
      {
        dish: 'Wood-fired Pizza & Israeli Shakshuka',
        type: 'both',
        description: 'Fusion food popular with international backpackers on the Anegundi side.',
        mustTrySpot: 'Laughing Buddha Cafe or Goan Corner in Anegundi'
      }
    ],
    sample3DayItinerary: {
      day1: {
        title: 'Sacred Centre & Matanga Sunset',
        morning: 'Climb Matanga Hill early for breathtaking sunrise; visit the sacred 7th-century Virupaksha Temple.',
        afternoon: 'Explore Hampi Bazaar, Hemakuta Hill temples, and the monolithic Kadalekalu Ganesha.',
        evening: 'Take a soothing coracle boat ride on Tungabhadra River; watch the sunset over river boulders.',
        estimatedDayCost: '₹900 - ₹1,600'
      },
      day2: {
        title: 'Royal Enclosure & Vittala Stone Chariot',
        morning: 'Tour the Royal Enclosure: Hazara Rama Temple, Lotus Mahal, and the grand Elephant Stables.',
        afternoon: 'Rest during afternoon heat; visit the ASI Archaeological Museum in Kamalapura.',
        evening: 'Witness the iconic Stone Chariot and musical pillars of Vijaya Vittala Temple in late golden afternoon light.',
        estimatedDayCost: '₹1,200 - ₹2,000'
      },
      day3: {
        title: 'Anegundi (Kishkindha) & Sanapur Lake',
        morning: 'Cross over to Anegundi; climb the 575 stone steps to Anjaneya Hill (birthplace of Lord Hanuman).',
        afternoon: 'Explore Sanapur Lake and ancient stone aqueducts; enjoy wood-fired pizza at a bohemian cafe.',
        evening: 'Cycle back through picturesque village banana plantations before catching evening train from Hospet.',
        estimatedDayCost: '₹1,100 - ₹1,900'
      }
    },
    dailyBudgets: {
      low: {
        totalPerDay: '₹1,200 - ₹1,800',
        stay: '₹500 - ₹800 (Backpacker guesthouse in Hampi village or Anegundi)',
        food: '₹350 - ₹500 (Local Khanavalis, South Indian breakfast plates)',
        localTransport: '₹150 - ₹250 (Bicycle rental @ ₹100-₹150/day or walking)',
        activities: '₹150 - ₹300 (ASI monument composite ticket, coracle share)'
      },
      medium: {
        totalPerDay: '₹2,800 - ₹4,800',
        stay: '₹1,600 - ₹2,800 (Comfortable boutique resort in Kamalapur or Hospet)',
        food: '₹700 - ₹1,100 (Mango Tree, multi-cuisine backpacker cafes)',
        localTransport: '₹500 - ₹800 (Rented moped/scooter @ ₹400/day + fuel or auto-rickshaw hire)',
        activities: '₹400 - ₹800 (Private coracle ride, audio guides)'
      },
      high: {
        totalPerDay: '₹7,000 - ₹18,000+',
        stay: '₹5,500 - ₹15,000+ (Luxury heritage palace hotel like Evolve Back Kamalapura Palace or Heritage Resort)',
        food: '₹1,800 - ₹3,000 (Fine resort dining, royal Karnataka thalis)',
        localTransport: '₹1,500 - ₹2,200 (Private chauffeured AC taxi for day)',
        activities: '₹1,200 - ₹2,500 (Government certified archaeologist guide for full day)'
      }
    },
    safetyAndTravelTips: [
      'Carry at least 2 liters of drinking water and a sunhat; stone monuments radiate heat even in winter.',
      'Wear sturdy sneakers with good grip for climbing granite boulders and uneven ancient steps.',
      'Hampi village itself is a religious heritage zone; alcohol and meat are prohibited in the core temple precinct.',
      'Single ASI ticket covers Vittala Temple, Lotus Mahal, and Elephant Stables on the same calendar day.'
    ],
    howToReach: {
      byAir: 'Jindal Vidyanagar Airport (VDY) in Bellary (40 km away) has flights to Bengaluru and Hyderabad.',
      byTrain: 'Hosapete Junction (HPT), 13 km away, is the primary railhead with trains from Bengaluru, Goa, and Hyderabad.',
      byRoad: 'KSRTC overnight sleeper buses connect Bengaluru (340 km, 7 hours) and Goa directly to Hospet.'
    },
    idealTripDuration: '2 to 3 days'
  },
  {
    id: 'darjeeling',
    name: 'Darjeeling',
    state: 'West Bengal',
    tagline: 'The Queen of the Hills, emerald tea gardens, and views of Mt. Kanchenjunga',
    aliases: ['darjeeling', 'queen of hills', 'ghoom', 'tiger hill', 'kanchenjunga view'],
    coordinates: { lat: 27.0410, lon: 88.2663 },
    bestSeason: {
      months: 'March to May & October to December',
      description: 'Clear sunny skies with crisp mountain air (8°C - 18°C) providing unobstructed views of Mt. Kanchenjunga.',
      peakSeason: 'April-May (summer rush) and October-November (autumn clarity)',
      monsoonSeason: 'June to September (torrential rainfall, dense fog, risk of landslides on NH55)',
      summerSeason: 'March to May (pleasant spring blossoms, blooming rhododendrons)'
    },
    majorAttractions: [
      {
        name: 'Tiger Hill Sunrise over Kanchenjunga',
        category: 'Mountain Panorama & Sunrise',
        description: 'Observation ridge at 8,482 ft offering views of the sun illuminating the world’s third-highest peak in golden hues.',
        timings: 'Depart hotel by 4:00 AM; sunrise between 4:45 AM and 5:30 AM',
        entryFee: '₹50 for general deck, ₹100 for top lounge floor',
        tips: 'Leave by 3:45 AM during peak season to avoid massive vehicle queues on the narrow hill road.'
      },
      {
        name: 'Darjeeling Himalayan Railway (Toy Train Joyride)',
        category: 'UNESCO World Heritage Railway',
        description: 'Historic 2-ft narrow gauge steam train built in 1881 chugging from Darjeeling to Ghoom via Batasia Loop.',
        timings: 'Joyrides operate multiple times daily from 9:00 AM to 4:00 PM',
        entryFee: 'Steam engine joyride ~₹1,500; Diesel joyride ~₹1,000 (book via IRCTC in advance)',
        tips: 'Book well in advance on IRCTC; steam engine rides offer the authentic historic vintage experience.'
      },
      {
        name: 'Batasia Loop & War Memorial',
        category: 'Railway Engineering & Memorial',
        description: 'Spiral railway loop where the Toy Train negotiates a steep slope amidst manicured flower gardens.',
        timings: '5:00 AM - 6:30 PM',
        entryFee: '₹20 entry fee',
        tips: 'Great panoramic view of Darjeeling town and Mt. Kanchenjunga backdrop on clear days.'
      },
      {
        name: 'Happy Valley Tea Estate',
        category: 'Tea Gardens & Factory',
        description: 'One of the oldest tea gardens established in 1854, producing prized Muscatel Darjeeling tea.',
        timings: '8:00 AM - 4:00 PM (Factory closed Mondays)',
        entryFee: '₹100 for guided tea manufacturing tour and tasting session',
        tips: 'Walk between tea bushes and interact respectfully with local tea pluckers in the morning.'
      },
      {
        name: 'Padmaja Naidu Himalayan Zoological Park & HMI',
        category: 'Wildlife & Mountaineering History',
        description: 'High-altitude zoo home to rare Red Pandas and Snow Leopards, alongside Himalayan Mountaineering Institute museum.',
        timings: '8:30 AM - 4:30 PM (Closed Thursdays)',
        entryFee: '₹110 for Indians, ₹110 for zoo + HMI composite',
        tips: 'Explore Tenzing Norgay memorial and Everest expedition gear exhibits inside HMI.'
      }
    ],
    localFood: [
      {
        dish: 'Steamed Tibetan Momos & Thukpa',
        type: 'both',
        description: 'Juicy dumplings filled with seasoned vegetables or chicken, served with spicy red chili dip and hot broth.',
        mustTrySpot: 'Kunga Restaurant or Dekevas on Gandhi Road'
      },
      {
        dish: 'First Flush Darjeeling Tea & Bakery Confectionery',
        type: 'veg',
        description: 'Aromatic champagne of teas paired with freshly baked apple pies and lemon tarts.',
        mustTrySpot: 'Nathmulls Tea Lounge or historic Glenary’s Bakery & Cafe on Nehru Road'
      },
      {
        dish: 'Traditional Nepali Thali (Gundruk & Sel Roti)',
        type: 'both',
        description: 'Fermented leafy vegetable curry (Gundruk), crispy rice flour doughnuts (Sel Roti), and local aloo dum.',
        mustTrySpot: 'Revolver Cafe or Mahakal Restaurant'
      }
    ],
    sample3DayItinerary: {
      day1: {
        title: 'Chowrasta Mall, Heritage Cafes & Red Pandas',
        morning: 'Arrive and check in; visit the Padmaja Naidu Himalayan Zoological Park to see Red Pandas and snow leopards.',
        afternoon: 'Tour the Himalayan Mountaineering Institute; walk down to Happy Valley Tea Estate for tea tasting.',
        evening: 'Stroll around Chowrasta Mall; enjoy coffee and live jazz/piano pastries at historic Glenary’s.',
        estimatedDayCost: '₹1,200 - ₹2,000'
      },
      day2: {
        title: 'Tiger Hill Sunrise & UNESCO Toy Train',
        morning: 'Pre-dawn drive (4:00 AM) to Tiger Hill for majestic Kanchenjunga sunrise; return via Batasia Loop and Ghoom Monastery.',
        afternoon: 'Hearty Tibetan momo lunch at Kunga; board the afternoon DHR Toy Train steam joyride to Ghoom.',
        evening: 'Shop for authentic loose-leaf Darjeeling tea at Nathmulls; quiet dinner by the fireplace.',
        estimatedDayCost: '₹2,200 - ₹3,500'
      },
      day3: {
        title: 'Peace Pagoda & Panoramic Tea Hills',
        morning: 'Visit the serene Japanese Peace Pagoda and Buddhist Temple surrounded by tall pines.',
        afternoon: 'Take the Darjeeling Ropeway (cable car) ride over lush tea plantations down the valley.',
        evening: 'Walk around Mahakal Temple on Observatory Hill overlooking the twin valleys before departure.',
        estimatedDayCost: '₹1,400 - ₹2,400'
      }
    },
    dailyBudgets: {
      low: {
        totalPerDay: '₹1,400 - ₹2,000',
        stay: '₹500 - ₹900 (Budget guesthouse or homestay near Gandhi Road)',
        food: '₹400 - ₹600 (Tibetan eateries, momo stalls, bakery snacks)',
        localTransport: '₹300 - ₹450 (Shared jeeps from Chowk Bazaar)',
        activities: '₹200 - ₹350 (Zoo and museum entry fees)'
      },
      medium: {
        totalPerDay: '₹3,200 - ₹5,500',
        stay: '₹1,800 - ₹3,200 (Heritage colonial hotel or 3-star view property like Central Heritage)',
        food: '₹800 - ₹1,400 (Glenary’s, Kunga, Nathmulls, specialty cafes)',
        localTransport: '₹600 - ₹1,000 (Private taxi for local 7-point sightseeing)',
        activities: '₹1,000 - ₹1,600 (Toy train joyride ticket + ropeway)'
      },
      high: {
        totalPerDay: '₹7,500 - ₹17,000+',
        stay: '₹5,500 - ₹13,000+ (Luxury tea estate bungalow like Glenburn Tea Estate or Windamere Hotel)',
        food: '₹1,800 - ₹3,200 (Colonial multi-course dining, estate lunches)',
        localTransport: '₹1,500 - ₹2,500 (Dedicated private 4WD vehicle)',
        activities: '₹2,000 - ₹3,500 (Steam engine toy train, private tea sommelier workshop)'
      }
    },
    safetyAndTravelTips: [
      'Pack warm layers even in summer months, as temperatures drop rapidly after 5:00 PM.',
      'Book Toy Train tickets months in advance via IRCTC during peak spring and autumn seasons.',
      'Carry cash; smaller shops, taxis, and viewpoints frequently face patchy cellular network for digital payments.',
      'Narrow mountain road to Tiger Hill experiences massive traffic jams on holiday weekends; depart early.'
    ],
    howToReach: {
      byAir: 'Bagdogra Airport (IXB) is 70 km away (~3 hours scenic drive through tea gardens).',
      byTrain: 'New Jalpaiguri (NJP) Railway Station is 73 km away with trains from Kolkata, Delhi, and Guwahati.',
      byRoad: 'Connected via Hill Cart Road (NH55) and Rohini Highway from Siliguri.'
    },
    idealTripDuration: '3 to 4 days'
  },
  {
    id: 'andaman-islands',
    name: 'Andaman Islands',
    state: 'Andaman and Nicobar Islands',
    tagline: 'Turquoise lagoons, pristine coral reefs, and storied cellular jail history',
    aliases: ['andaman', 'andaman islands', 'port blair', 'havelock', 'swaraj dweep', 'neil island', 'radhanagar'],
    coordinates: { lat: 11.6234, lon: 92.7265 },
    bestSeason: {
      months: 'October to May',
      description: 'Clear azure skies, calm seas (23°C - 30°C), and crystal water visibility ideal for scuba diving and inter-island ferries.',
      peakSeason: 'December to January',
      monsoonSeason: 'June to September (cyclonic storms, rough seas, inter-island passenger ferries often suspended)',
      summerSeason: 'March to May (warm, great for scuba diving underwater visibility)'
    },
    majorAttractions: [
      {
        name: 'Radhanagar Beach (Havelock / Swaraj Dweep)',
        category: 'Beaches & Nature',
        description: 'Voted one of Asia’s best beaches; powdery white sand, turquoise waters, and lush tropical jungle backdrop.',
        timings: '6:00 AM - 5:30 PM (Swimming not permitted post sunset due to high tides)',
        entryFee: 'Free entry',
        tips: 'Stay for the sunset; changing rooms, showers, and eco-cafes are available on premise.'
      },
      {
        name: 'Cellular Jail National Memorial (Port Blair)',
        category: 'National History & Heritage',
        description: 'Historic colonial prison known as Kaala Paani where Indian freedom fighters were exiled and imprisoned.',
        timings: '9:00 AM - 12:30 PM, 1:30 PM - 4:45 PM (Mondays closed); Light & Sound show 6:00 PM',
        entryFee: '₹30 entry fee; Light & Sound show ₹150 - ₹300',
        tips: 'The evening Light & Sound show narrated in the voice of an ancient Peepal tree is moving and unmissable.'
      },
      {
        name: 'Elephant Beach (Havelock)',
        category: 'Water Sports & Corals',
        description: 'Famous hub for snorkeling, sea walking, glass-bottom boat rides, and vibrant live coral reefs.',
        timings: '7:30 AM - 3:30 PM (reached via 20-min speed boat or 1.8 km forest trek)',
        entryFee: 'Speed boat ticket ~₹1,000 round-trip including basic snorkeling',
        tips: 'Wear water shoes as coral remnants near the beach shore can be sharp.'
      },
      {
        name: 'Bharatpur & Laxmanpur Beaches (Neil / Shaheed Dweep)',
        category: 'Coral Reefs & Natural Rock Bridge',
        description: 'Shallow coral lagoons at Bharatpur and the famous geological natural sea-arch bridge at Laxmanpur.',
        timings: 'Natural bridge best visited during low tide',
        entryFee: 'Free entry',
        tips: 'Check tide charts before heading to the natural rock bridge to walk safely across the exposed dead coral shelf.'
      }
    ],
    localFood: [
      {
        dish: 'Fresh Andaman Seafood Platter (Crab, Lobster, Red Snapper)',
        type: 'non-veg',
        description: 'Fresh morning catch grilled with garlic butter or cooked in spicy coastal coconut curry.',
        mustTrySpot: 'Something Different - A Beachside Cafe on Havelock or New Lighthouse Restaurant in Port Blair'
      },
      {
        dish: 'Coconut Prawn Curry & Rice',
        type: 'non-veg',
        description: 'Succulent bay prawns simmered in freshly squeezed coconut milk, lemongrass, and green chilies.',
        mustTrySpot: 'Full Moon Cafe at Dive India, Havelock'
      },
      {
        dish: 'South Indian Coastal Thali & Tender Coconut',
        type: 'veg',
        description: 'Fresh banana leaf vegetarian lunch with sambar, rasam, and fresh tropical fruit bowls.',
        mustTrySpot: 'Annapurna Restaurant in Aberdeen Bazaar, Port Blair'
      }
    ],
    sample3DayItinerary: {
      day1: {
        title: 'Port Blair History & Cellular Jail',
        morning: 'Arrive at Veer Savarkar Airport; check in and visit the historic Cellular Jail memorial.',
        afternoon: 'Visit the Anthropological Museum and Samudrika Naval Marine Museum.',
        evening: 'Attend the poignant Light & Sound show at Cellular Jail; walk through Aberdeen Bazaar.',
        estimatedDayCost: '₹1,500 - ₹2,500'
      },
      day2: {
        title: 'Ferry to Havelock & Radhanagar Sunset',
        morning: 'Take morning high-speed private ferry (Makruzz/Green Ocean) from Port Blair to Havelock (Swaraj Dweep).',
        afternoon: 'Check into beach resort; relish fresh seafood curry lunch by the shoreline.',
        evening: 'Spend late afternoon swimming at Radhanagar Beach (Beach No. 7) and watch the glorious tropical sunset.',
        estimatedDayCost: '₹3,000 - ₹4,800'
      },
      day3: {
        title: 'Elephant Beach Corals & Neil Island Transit',
        morning: 'Speed boat to Elephant Beach for guided sea walking or snorkeling among colorful coral fish.',
        afternoon: 'Ferry to Neil Island (Shaheed Dweep); explore Bharatpur beach water activities.',
        evening: 'Witness sunset at Laxmanpur beach before boarding evening return ferry back to Port Blair.',
        estimatedDayCost: '₹2,500 - ₹4,500'
      }
    },
    dailyBudgets: {
      low: {
        totalPerDay: '₹2,200 - ₹3,200',
        stay: '₹1,000 - ₹1,500 (Basic eco-hut or budget guesthouse in Port Blair/Havelock)',
        food: '₹600 - ₹800 (Local South Indian diners, beach shack rice meals)',
        localTransport: '₹300 - ₹500 (Rented scooter on Havelock @ ₹400-₹500/day + fuel)',
        activities: '₹300 - ₹500 (Cellular jail entry, basic snorkeling)'
      },
      medium: {
        totalPerDay: '₹4,500 - ₹7,500',
        stay: '₹2,800 - ₹4,500 (3-star beachfront resort with AC cottages)',
        food: '₹1,000 - ₹1,800 (Mid-range seaside cafes, seafood specialties)',
        localTransport: '₹800 - ₹1,200 (Private taxi transfers, scooter rentals)',
        activities: '₹1,500 - ₹2,500 (Private ferry tickets, introductory scuba dive or sea walk)'
      },
      high: {
        totalPerDay: '₹10,000 - ₹25,000+',
        stay: '₹7,500 - ₹18,000+ (Luxury 5-star beachfront property like Taj Exotica Radhanagar or Barefoot at Havelock)',
        food: '₹2,500 - ₹4,500 (Gourmet beach dining, candlelit seafood dinners)',
        localTransport: '₹2,000 - ₹3,000 (Private AC cabs throughout)',
        activities: '₹3,500 - ₹7,000 (PADI boat scuba diving, private catamaran charter)'
      }
    },
    safetyAndTravelTips: [
      'Book private inter-island catamaran ferry tickets (Makruzz, Nautika) well in advance.',
      'Respect indigenous tribal reserves; contact or photography with protected tribes (e.g. Jarawas) is strictly illegal under POCRA Act.',
      'Mobile connectivity on islands outside Port Blair is primarily BSNL and Airtel (4G/5G may be sporadic).',
      'Always swim within designated lifeguard-patrolled safe zones on beaches.'
    ],
    howToReach: {
      byAir: 'Veer Savarkar International Airport (IXZ) in Port Blair has regular non-stop flights from Chennai, Kolkata, Bengaluru, and Delhi.',
      byTrain: 'No rail connectivity (Island territory).',
      byRoad: 'No mainland road connectivity; passenger sea ships operate from Chennai, Kolkata, and Visakhapatnam (takes 3-4 days).'
    },
    idealTripDuration: '4 to 6 days'
  },
  {
    id: 'mysuru',
    name: 'Mysuru',
    state: 'Karnataka',
    tagline: 'The City of Palaces, royal Dasara heritage, fragrant sandalwood, and silk',
    aliases: ['mysuru', 'mysore', 'city of palaces', 'chamundi', 'mysore palace'],
    coordinates: { lat: 12.2958, lon: 76.6394 },
    bestSeason: {
      months: 'October to March',
      description: 'Pleasant, moderate climate (18°C - 30°C) with breezy evenings, ideal for palace tours and heritage walks.',
      peakSeason: 'September-October (World-famous 10-day Mysuru Dasara festival)',
      monsoonSeason: 'June to September (moderate rainfall, lush Brindavan Gardens)',
      summerSeason: 'April to May (warm, reaching 34°C, but relatively milder than northern plains)'
    },
    majorAttractions: [
      {
        name: 'Mysore Palace (Amba Vilas)',
        category: 'Royal Palace & Indo-Saracenic Architecture',
        description: 'Seat of the Wadiyar dynasty; magnificent halls with stained glass, golden howdah, illuminated by 97,000 light bulbs.',
        timings: '10:00 AM - 5:30 PM daily; Illumination Sundays & holidays 7:00 PM - 7:45 PM',
        entryFee: '₹100 for adults, ₹50 for children',
        tips: 'Do not miss Sunday evening illumination when the entire palace glows in dazzling amber light.'
      },
      {
        name: 'Chamundeshwari Temple & Chamundi Hill',
        category: 'Spiritual & Hilltop Panorama',
        description: 'Ancient temple dedicated to Goddess Durga perched at 3,300 ft, featuring a monolithic 15-foot Nandi statue.',
        timings: '7:30 AM - 2:00 PM, 3:30 PM - 6:00 PM, 7:30 PM - 9:00 PM',
        entryFee: 'Free general entry; special darshan ₹100',
        tips: 'Climb the 1,000 heritage stone steps early in the morning for fitness and valley views.'
      },
      {
        name: 'Brindavan Gardens & Musical Fountain',
        category: 'Gardens & Light Show',
        description: 'Terraced ornamental gardens laid across Krishnarajasagara (KRS) dam with synchronized dancing musical fountains.',
        timings: '6:30 AM - 9:00 PM; Fountain show 6:30 PM - 7:30 PM',
        entryFee: '₹50 for adults, ₹10 for children',
        tips: 'Arrive by 5:30 PM to walk through the tiered rose gardens before the musical light show begins.'
      },
      {
        name: 'Devaraja Market',
        category: 'Traditional Bazaars & Senses',
        description: 'Century-old heritage market with vibrant pyramids of kumkum colors, fragrant jasmine garlands, and local fruits.',
        timings: '6:00 AM - 8:30 PM daily',
        entryFee: 'Free entry',
        tips: 'Great place to buy authentic sandalwood oil, agarbatti (incense), and pure Mysuru Pak sweet.'
      },
      {
        name: 'St. Philomena’s Cathedral',
        category: 'Neo-Gothic Architecture',
        description: 'One of the tallest churches in Asia, built in Neo-Gothic style inspired by Germany’s Cologne Cathedral.',
        timings: '5:00 AM - 6:00 PM',
        entryFee: 'Free entry',
        tips: 'Step down into the underground catacomb beneath the main altar to view the relic of St. Philomena.'
      }
    ],
    localFood: [
      {
        dish: 'Mylari Mysore Masala Dosa',
        type: 'veg',
        description: 'Pillowy soft yet crisp golden dosa smeared with spiced red garlic chutney and dollop of white freshly churned butter.',
        mustTrySpot: 'Original Vinayaka Mylari in Nazarbad'
      },
      {
        dish: 'Authentic Ghee Mysore Pak',
        type: 'veg',
        description: 'Melt-in-mouth royal sweet made from gram flour, sugar syrup, and generous warm desi ghee.',
        mustTrySpot: 'Guru Sweets in Devaraja Market (invented by the royal palace cook)'
      },
      {
        dish: 'Mysore Bonda & Filter Coffee',
        type: 'veg',
        description: 'Golden fried crispy dumplings made of urad flour, ginger, and coconut bits, served with coconut chutney.',
        mustTrySpot: 'Mylari or Dasaprakash'
      }
    ],
    sample3DayItinerary: {
      day1: {
        title: 'Royal Grandeur & Illumination',
        morning: 'Start with iconic Mylari butter masala dosa; explore the magnificent Mysore Palace interior halls.',
        afternoon: 'Visit Jaganmohan Palace Art Gallery to view paintings by Raja Ravi Varma; shop for Mysore Silk sarees.',
        evening: 'Watch Mysore Palace illuminated in 97,000 bulbs (Sundays) or attend the palace sound & light show.',
        estimatedDayCost: '₹900 - ₹1,800'
      },
      day2: {
        title: 'Chamundi Hills & Sensory Bazaars',
        morning: 'Drive up Chamundi Hill to visit Chamundeshwari Temple and the massive monolithic Nandi bull statue.',
        afternoon: 'Wander through sensory Devaraja Market; taste hot Mysore Pak sweet at historic Guru Sweets.',
        evening: 'Visit St. Philomena’s Cathedral, followed by a stroll and musical fountain show at Brindavan Gardens.',
        estimatedDayCost: '₹1,100 - ₹2,000'
      },
      day3: {
        title: 'Srirangapatna Heritage Excursion',
        morning: 'Take a short 15 km excursion to Srirangapatna (island fortress capital of Tipu Sultan); visit Dariya Daulat Bagh.',
        afternoon: 'Explore Ranganathittu Bird Sanctuary by rowboat to spot painted storks, pelicans, and marsh crocodiles.',
        evening: 'Return to Mysuru for traditional South Indian dinner thali before departure.',
        estimatedDayCost: '₹1,200 - ₹2,200'
      }
    },
    dailyBudgets: {
      low: {
        totalPerDay: '₹1,200 - ₹1,700',
        stay: '₹500 - ₹800 (Budget lodge or guesthouse near railway station)',
        food: '₹350 - ₹500 (Dosa joints, Udupi vegetarian thalis)',
        localTransport: '₹150 - ₹250 (KSRTC city buses or shared autos)',
        activities: '₹150 - ₹250 (Palace and garden entrance tickets)'
      },
      medium: {
        totalPerDay: '₹2,600 - ₹4,400',
        stay: '₹1,600 - ₹2,600 (3-star heritage hotel like Royal Orchid Metropole or Pai Vista)',
        food: '₹600 - ₹1,000 (Mylari, multi-cuisine restaurants, sweet shops)',
        localTransport: '₹400 - ₹700 (Auto rickshaws or app-based cabs)',
        activities: '₹400 - ₹700 (Ranganathittu boat safari, audio guide)'
      },
      high: {
        totalPerDay: '₹6,500 - ₹15,000+',
        stay: '₹4,500 - ₹11,000+ (Luxury heritage property like Lalitha Mahal Palace Hotel or Radisson Blu)',
        food: '₹1,500 - ₹2,500 (Fine dining royal Karnataka cuisine)',
        localTransport: '₹1,200 - ₹1,800 (Private AC taxi for day trips)',
        activities: '₹1,000 - ₹2,000 (Private palace guide, wildlife boat tour)'
      }
    },
    safetyAndTravelTips: [
      'Footwear must be deposited at the palace security gate before entering the palace interior.',
      'Buy authentic Sandalwood and Mysore Silk products from government outlets (KSIC for silk, KSDL for sandalwood) to avoid counterfeit goods.',
      'Book hotel accommodation months in advance if visiting during the 10-day Dasara festival.',
      'Auto-rickshaws have meters; insist on meter fare or negotiate upfront.'
    ],
    howToReach: {
      byAir: 'Mysuru Airport (MYQ) operates limited flights; Kempegowda International Airport (BLR) in Bengaluru is 170 km away.',
      byTrain: 'Mysuru Junction (MYS) has multiple daily Vande Bharat and Shatabdi express trains from Bengaluru (takes ~1.5 - 2 hrs).',
      byRoad: 'The 10-lane Bengaluru-Mysuru Expressway has reduced driving time to just 1.5 to 2 hours.'
    },
    idealTripDuration: '2 to 3 days'
  },
  {
    id: 'leh-ladakh',
    name: 'Leh-Ladakh',
    state: 'Ladakh',
    tagline: 'Land of High Mountain Passes, azure glacial lakes, and Buddhist gompas',
    aliases: ['leh', 'ladakh', 'leh-ladakh', 'pangong', 'pangong tso', 'nubra', 'nubra valley', 'khardung la'],
    coordinates: { lat: 34.1526, lon: 77.5771 },
    bestSeason: {
      months: 'June to September',
      description: 'Sunny summer season (15°C - 25°C day, 5°C - 10°C night) with clear roads, open mountain passes, and vibrant monasteries.',
      peakSeason: 'July and August (Hemis Festival, high tourist motorcycling expeditions)',
      monsoonSeason: 'Ladakh is a high-altitude rain-shadow desert with minimal rain, though transit roads (Manali/Srinagar) face monsoon landslides in July-August',
      summerSeason: 'October to April is extreme winter (-10°C to -25°C) with frozen lakes and Chadar trek'
    },
    majorAttractions: [
      {
        name: 'Pangong Tso Lake',
        category: 'High Altitude Glacial Lake',
        description: 'Endorheic lake at 14,270 ft extending from India to Tibet, renowned for shifting shades of blue and turquoise.',
        timings: 'Inner Line Permit (ILP) required; overnight stay permitted at Spangmik/Lukung camps',
        entryFee: 'ILP environment fee ~₹400 + ₹20/day per person',
        tips: 'Temperatures plummet drastically after sunset; keep heavy thermal down jackets ready.'
      },
      {
        name: 'Nubra Valley & Hunder Sand Dunes',
        category: 'High Altitude Desert & Bactrian Camels',
        description: 'Desert valley surrounded by craggy mountains featuring double-humped Bactrian camel safaris and Diskit Monastery.',
        timings: 'Cross via Khardung La during daylight hours',
        entryFee: 'Camel safari ~₹300 - ₹500 for 15 minutes',
        tips: 'Visit the 106-foot Maitreya Buddha statue at Diskit Monastery overlooking the valley.'
      },
      {
        name: 'Khardung La Pass',
        category: 'Mountain Pass',
        description: 'One of the highest motorable mountain passes in the world at 17,582 ft elevation, gateway to Nubra and Siachen.',
        timings: 'Open daytime (subject to BRO snow clearance)',
        entryFee: 'Included in Ladakh ILP',
        tips: 'Do not stay longer than 15-20 minutes at the summit due to thin oxygen levels.'
      },
      {
        name: 'Thiksey & Hemis Monasteries',
        category: 'Tibetan Buddhist Monasteries',
        description: 'Imposing 12-story hilltop monastery resembling Tibet’s Potala Palace, housing a 49-foot Maitreya statue.',
        timings: '6:00 AM - 1:00 PM, 2:30 PM - 6:30 PM; Morning puja at 6:30 AM',
        entryFee: '₹50 entry fee',
        tips: 'Attend the 6:30 AM morning prayer assembly to witness monks chanting with cymbals and giant horns.'
      },
      {
        name: 'Magnetic Hill & Sangam (Indus-Zanskar Confluence)',
        category: 'Geological Wonder & River Vista',
        description: 'Confluence of muddy green Indus and vibrant blue Zanskar rivers, and optical illusion hill where vehicles appear to defy gravity.',
        timings: 'Best during sunny daylight hours',
        entryFee: 'Free; Zanskar river rafting ~₹1,200 - ₹1,800',
        tips: 'The color contrast between the two rivers is sharpest between May and October.'
      }
    ],
    localFood: [
      {
        dish: 'Ladakhi Thukpa & Skyu',
        type: 'both',
        description: 'Traditional hearty root-vegetable or mutton stew cooked with hand-rolled thumb wheat pasta shells.',
        mustTrySpot: 'The Tibetan Kitchen or Gesmo Restaurant in Leh'
      },
      {
        dish: 'Butter Tea (Gur Gur Chai) & Khambir Bread',
        type: 'veg',
        description: 'Salty pink tea churned with yak butter and salt, accompanied by crusty traditional Ladakhi whole-wheat bread.',
        mustTrySpot: 'Alchi Kitchen or local monastery stalls'
      },
      {
        dish: 'Momo Platter & Tingmo',
        type: 'both',
        description: 'Soft steamed lotus-shaped buns (Tingmo) served with rich spicy vegetable or yak-cheese curry.',
        mustTrySpot: 'Lamayuru Restaurant near Main Bazaar'
      }
    ],
    sample3DayItinerary: {
      day1: {
        title: 'Acclimatization, Leh Palace & Shanti Stupa',
        morning: 'Mandatory rest in hotel room for acclimatization (minimum 24 hours required after flying into Leh at 11,500 ft).',
        afternoon: 'Gentle walk through Leh Main Bazaar; visit the historic 17th-century 9-story Leh Palace.',
        evening: 'Climb Shanti Stupa for panoramic sunset over the snowcapped Stok Kangri range; light dinner.',
        estimatedDayCost: '₹1,500 - ₹2,500'
      },
      day2: {
        title: 'Khardung La Pass & Nubra Valley Dunes',
        morning: 'Drive across Khardung La Pass (17,582 ft); stop briefly for photographs at the iconic summit sign.',
        afternoon: 'Descend into Nubra Valley; visit Diskit Monastery and marvel at the giant Maitreya Buddha statue.',
        evening: 'Double-humped Bactrian camel ride amidst the white sand dunes of Hunder; stay in a deluxe tent camp.',
        estimatedDayCost: '₹3,000 - ₹5,000'
      },
      day3: {
        title: 'Pangong Tso Glacial Wonder & Thiksey',
        morning: 'Drive via Shyok River route to the mesmerizing turquoise waters of Pangong Tso Lake.',
        afternoon: 'Walk along the shore of Pangong Tso; photograph changing water shades; lunch at a lakeview camp.',
        evening: 'Return to Leh via Chang La pass (17,590 ft); stop at Thiksey Monastery for evening serenity.',
        estimatedDayCost: '₹3,500 - ₹5,500'
      }
    },
    dailyBudgets: {
      low: {
        totalPerDay: '₹1,800 - ₹2,800',
        stay: '₹700 - ₹1,200 (Budget guesthouse in Changspa or hostel dorm)',
        food: '₹500 - ₹700 (Local Tibetan diners, thukpa, momo joints)',
        localTransport: '₹400 - ₹600 (Shared tempo travellers for Pangong/Nubra trips)',
        activities: '₹200 - ₹300 (Monastery entry fees, online environmental permit)'
      },
      medium: {
        totalPerDay: '₹4,500 - ₹7,500',
        stay: '₹2,500 - ₹4,200 (Comfortable 3-star Ladakhi hotel or Nubra luxury tent)',
        food: '₹1,000 - ₹1,600 (The Tibetan Kitchen, organic garden cafes, bakeries)',
        localTransport: '₹1,200 - ₹2,000 (Rented Royal Enfield motorcycle @ ₹1,500/day + fuel or shared taxi)',
        activities: '₹500 - ₹1,000 (ILP permits, camel safari, river rafting)'
      },
      high: {
        totalPerDay: '₹10,000 - ₹25,000+',
        stay: '₹7,000 - ₹18,000+ (Luxury eco-resort like The Grand Dragon Ladakh or Chamba Camp Thiksey)',
        food: '₹2,200 - ₹4,000 (Gourmet multi-course Himalayan dining)',
        localTransport: '₹3,500 - ₹5,500 (Dedicated private 4x4 Toyota Innova/Scorpio with seasoned mountain driver)',
        activities: '₹2,000 - ₹4,000 (Private cultural guide, premium camp experience)'
      }
    },
    safetyAndTravelTips: [
      'CRITICAL: Acute Mountain Sickness (AMS) is real. Rest completely for the first 24-48 hours after arrival in Leh. Do not travel to Pangong or Khardung La on Day 1.',
      'Obtain the official Inner Line Permit (ILP) online through the Ladakh Administration portal before traveling to Nubra and Pangong.',
      'Drink 3-4 liters of water daily to assist oxygenation; avoid alcohol and smoking during acclimatization.',
      'Only postpaid mobile connections (Airtel, Jio, BSNL) work in Ladakh; prepaid SIM cards from other Indian states will not connect.'
    ],
    howToReach: {
      byAir: 'Kushok Bakula Rimpochee Airport (IXL) in Leh operates daily direct flights from Delhi, Mumbai, and Srinagar.',
      byTrain: 'No rail connectivity in Ladakh. Nearest railheads are Jammu Tawi (700 km) and Chandigarh.',
      byRoad: 'Two legendary mountain highways: Manali-Leh Highway (475 km) and Srinagar-Leh Highway (420 km), open only from late May to October.'
    },
    idealTripDuration: '5 to 7 days'
  }
];
