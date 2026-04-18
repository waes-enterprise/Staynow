import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

const lodges = [
  {
    name: 'Copperbelt Executive Lodge',
    description: 'A refined retreat in the heart of Chingola, Copperbelt Executive Lodge offers spacious air-conditioned rooms with flat-screen TVs, complimentary Wi-Fi, and a sparkling outdoor pool. Perfect for business travellers and mining professionals visiting the Copperbelt Province. Enjoy on-site dining at our a la carte restaurant, or unwind with a cold Mosi by the poolside after a long day. Secure parking and 24-hour front desk service ensure a hassle-free stay.',
    location: 'Chingola',
    address: 'Kabundi Road, Chingola, Copperbelt Province',
    phone: '+260212610000',
    latitude: -12.5286,
    longitude: 27.8833,
    price: 450,
    totalRooms: 12,
    availableRooms: 3,
    amenities: '["Wi-Fi","Pool","Restaurant","Parking","Air Conditioning","Room Service"]',
    images: '["/lodges/lodge-safari.png","/lodges/pool-luxury.png","/lodges/room-modern.png"]',
    tags: '["Available tonight","Filling fast"]',
    rating: 4.3,
    reviewCount: 87,
    featured: true,
  },
  {
    name: 'Mokorro Guest House',
    description: "Mokorro Guest House offers a warm Zambian welcome in Kitwe, the bustling hub of the Copperbelt. Our cosy en-suite rooms come with hot showers, satellite TV, and free breakfast. Located just minutes from Kitwe's CBD and major shopping centres. Whether you are passing through or staying for work, Mokorro feels like home away from home. The friendly staff can arrange local transport and recommendations for nearby restaurants.",
    location: 'Kitwe',
    address: 'Parklands Road, Kitwe, Copperbelt Province',
    phone: '+260212220000',
    latitude: -12.8167,
    longitude: 28.2,
    price: 300,
    totalRooms: 8,
    availableRooms: 2,
    amenities: '["Wi-Fi","Breakfast","Parking","Hot Shower","TV"]',
    images: '["/lodges/room-cozy.png","/lodges/room-budget.png"]',
    tags: '["Only 2 rooms left"]',
    rating: 4.1,
    reviewCount: 63,
    featured: true,
  },
  {
    name: 'Savannah Rest Lodge',
    description: "Set against the scenic backdrop of Ndola's green suburbs, Savannah Rest Lodge combines modern comfort with the tranquillity of nature. Each room features a private balcony, minibar, and premium bedding. Our lush gardens and braai area make it ideal for weekend getaways. Conference facilities available for corporate events up to 50 guests. The on-site restaurant serves both local and international cuisine.",
    location: 'Ndola',
    address: 'Kansenshi Road, Ndola, Copperbelt Province',
    phone: '+260212620000',
    latitude: -12.9587,
    longitude: 28.6366,
    price: 400,
    totalRooms: 15,
    availableRooms: 5,
    amenities: '["Wi-Fi","Pool","Restaurant","Garden","Conference Room","Balcony"]',
    images: '["/lodges/hotel-evening.png","/lodges/conference.png","/lodges/restaurant.png"]',
    tags: '["Available tonight"]',
    rating: 4.5,
    reviewCount: 124,
    featured: true,
  },
  {
    name: 'Lusaka Comfort Inn',
    description: "Located in Lusaka's vibrant East Park area, Comfort Inn is the capital's best-kept secret for affordable luxury. Walk to Arcades Shopping Mall, Manda Hill, and dozens of restaurants. Our rooftop terrace offers stunning city views at sunset. Every room includes a workstation, perfect for digital nomads and business travellers. Airport shuttle available on request. Complimentary breakfast included with all bookings.",
    location: 'Lusaka',
    address: 'Church Road, Lusaka, Lusaka Province',
    phone: '+260211250000',
    latitude: -15.3875,
    longitude: 28.3228,
    price: 600,
    totalRooms: 20,
    availableRooms: 1,
    amenities: '["Wi-Fi","Rooftop Terrace","Restaurant","Gym","Workspace","Airport Shuttle"]',
    images: '["/lodges/room-modern.png","/lodges/hotel-evening.png","/lodges/pool-luxury.png"]',
    tags: '["Only 1 room left","Popular"]',
    rating: 4.7,
    reviewCount: 213,
    featured: true,
  },
  {
    name: 'Livingstone Safari Lodge',
    description: "Just 15 minutes from Victoria Falls, Livingstone Safari Lodge is your gateway to Zambia's premier tourist destination. Thatched chalets with authentic African decor, a riverside bar overlooking the Zambezi, and daily guided tours to the Falls. We arrange sunset river cruises, bungee jumping, and helicopter flights. An unforgettable experience awaits. Full-board and half-board options available.",
    location: 'Livingstone',
    address: 'Mosi-oa-Tunya Road, Livingstone, Southern Province',
    phone: '+260213320000',
    latitude: -17.8419,
    longitude: 25.8543,
    price: 700,
    totalRooms: 10,
    availableRooms: 2,
    amenities: '["Wi-Fi","River View","Restaurant","Tour Desk","Pool","Bar"]',
    images: '["/lodges/lodge-safari.png","/lodges/river-deck.png","/lodges/pool-luxury.png"]',
    tags: '["Filling fast"]',
    rating: 4.8,
    reviewCount: 342,
    featured: true,
  },
  {
    name: 'Kafue River Camp',
    description: 'Nestled on the banks of the mighty Kafue River, this eco-friendly camp offers a true Zambian bush experience. Wake up to hippo calls, enjoy bird watching from your deck, and fall asleep under a blanket of stars. Comfortable safari tents with en-suite bathrooms. Ideal for nature lovers, anglers, and anyone seeking to disconnect from the hustle. All meals included with your stay. Canoe trips available on request.',
    location: 'Kafue',
    address: 'Kafue River Road, Kafue, Lusaka Province',
    phone: '+260211360000',
    latitude: -15.77,
    longitude: 28.17,
    price: 350,
    totalRooms: 6,
    availableRooms: 4,
    amenities: '["River View","Bird Watching","Fishing","Campfire","Breakfast","Parking"]',
    images: '["/lodges/safari-tent.png","/lodges/river-deck.png","/lodges/lodge-safari.png"]',
    tags: '["Available tonight"]',
    rating: 4.4,
    reviewCount: 56,
    featured: false,
  },
  {
    name: 'Chipata Gateway Lodge',
    description: 'The perfect stopover on your way to South Luangwa National Park or the Malawi border. Chipata Gateway Lodge offers clean, comfortable rooms at unbeatable prices. Our friendly staff can arrange safari packages, vehicle hire, and local tours. Enjoy traditional Zambian cuisine at our in-house restaurant, or grab a cold drink at the bar after a day on the road. Secure parking for overland travellers.',
    location: 'Chipata',
    address: 'Mchinji Road, Chipata, Eastern Province',
    phone: '+260216220000',
    latitude: -13.6327,
    longitude: 32.6464,
    price: 250,
    totalRooms: 10,
    availableRooms: 6,
    amenities: '["Wi-Fi","Restaurant","Bar","Parking","Tour Desk","Breakfast"]',
    images: '["/lodges/room-cozy.png","/lodges/restaurant.png"]',
    tags: '["Great value"]',
    rating: 4.0,
    reviewCount: 38,
    featured: false,
  },
  {
    name: 'Sunset Ridge Hotel',
    description: "Perched on the hills overlooking Kabwe, Sunset Ridge Hotel offers panoramic views of the Zambian countryside. Our boutique hotel features elegantly decorated rooms, an infinity pool, and one of the finest restaurants in Central Province. Perfect for romantic getaways, anniversaries, or simply treating yourself to something special. The infinity pool is a guest favourite at sunset.",
    location: 'Kabwe',
    address: 'Broadway Road, Kabwe, Central Province',
    phone: '+260212250000',
    latitude: -14.4669,
    longitude: 28.4464,
    price: 500,
    totalRooms: 14,
    availableRooms: 3,
    amenities: '["Wi-Fi","Infinity Pool","Restaurant","Garden","Valley View","Room Service"]',
    images: '["/lodges/hotel-evening.png","/lodges/pool-luxury.png","/lodges/room-modern.png"]',
    tags: '["Filling fast","Premium"]',
    rating: 4.6,
    reviewCount: 91,
    featured: true,
  },
  {
    name: 'Siavonga Lake Resort',
    description: 'Escape to the shores of Lake Kariba at Siavonga Lake Resort. Our lakeside chalets offer direct water access, private decks, and breathtaking sunset views over the lake. Enjoy boat cruises, fishing expeditions, and fresh tilapia from the lake. A tranquil paradise just two hours from Lusaka, perfect for weekend retreats and family holidays. Self-catering and full-board options available.',
    location: 'Siavonga',
    address: 'Lake Kariba Drive, Siavonga, Southern Province',
    phone: '+260213260000',
    latitude: -16.5403,
    longitude: 28.7069,
    price: 550,
    totalRooms: 8,
    availableRooms: 2,
    amenities: '["Lake View","Boat Cruises","Fishing","Restaurant","Pool","Private Deck"]',
    images: '["/lodges/lake-chalet.png","/lodges/pool-luxury.png","/lodges/river-deck.png"]',
    tags: '["Only 2 rooms left","Weekend favourite"]',
    rating: 4.7,
    reviewCount: 78,
    featured: true,
  },
  {
    name: 'Solwezi Travellers Inn',
    description: 'The top-rated accommodation in Solwezi, North-Western Province. Solwezi Travellers Inn caters to the growing mining and business community with modern rooms, reliable generator backup, high-speed internet, and a 24-hour front desk. Our conference room seats 30 and we offer laundry service for extended stays. Clean, safe, and always welcoming. Monthly rates available for contractors.',
    location: 'Solwezi',
    address: 'Kansanshi Road, Solwezi, North-Western Province',
    phone: '+260212680000',
    latitude: -11.7186,
    longitude: 26.3847,
    price: 380,
    totalRooms: 16,
    availableRooms: 7,
    amenities: '["Wi-Fi","Generator","Conference Room","Laundry","Restaurant","Secure Parking"]',
    images: '["/lodges/room-modern.png","/lodges/conference.png","/lodges/room-cozy.png"]',
    tags: '["Available tonight","Business friendly"]',
    rating: 4.2,
    reviewCount: 45,
    featured: false,
  },
];

export async function POST() {
  try {
    // Clear existing data
    await db.reservation.deleteMany();
    await db.lodge.deleteMany();

    // Insert all lodges
    for (const lodge of lodges) {
      await db.lodge.create({ data: lodge });
    }

    return NextResponse.json({
      success: true,
      message: `Seeded ${lodges.length} lodges successfully`,
      lodges: lodges.map(l => l.name),
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('Seed error:', error);
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const count = await db.lodge.count();
    return NextResponse.json({
      totalLodges: count,
      message: count > 0
        ? `${count} lodges in database. POST /api/seed to re-seed.`
        : 'No lodges found. POST /api/seed to seed the database.',
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
