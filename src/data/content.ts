// Bilingual content. Voice: calm, contemplative, grounded — per Rancabango Q3
// creative direction. Facts (price, breakfast, activities) verified from DIP
// booking engine + rate card + existing site, for ad-driven conversion.

export const BOOKING_URL = "https://be.dip.id/booking/cekrooms?keyid=d18a85ac29c8bb3ee18fbc8d6562301b";
export const WA_URL = "https://wa.me/628112237711";
export const WA_NUMBER = "+62 811-2237-711";
export const PHONE = "0262-233369";
export const PHONE_TEL = "tel:+62262233369";
export const MAPS_URL = "https://maps.google.com/?q=Rancabango+Hotel+Resort+Garut";
export const MAPS_EMBED = "https://www.google.com/maps?q=Rancabango+Hotel+%26+Resort+Garut&output=embed";
export const IG_URL = "https://www.instagram.com/rancabango_hotel/";
export const TIKTOK_URL = "https://www.tiktok.com/@rancabangohotelresort";

// Fakta booking — dipakai untuk anchor harga & info pra-booking.
export const PRICE_FROM = 1150000;              // publish/rack rate kamar termurah (Superior)
export const PRICE_DEAL = 850000;               // harga booking langsung DIP + kode RCB2026 (10% + 10%)
export const CHECK_IN = "14.00";
export const CHECK_OUT = "12.00";

// Online Travel Agents — sekunder. Direct (DIP/WA) = CTA utama; OTA di footer.
export const OTA = [
  { name: "Traveloka", url: "https://trv.lk/e0ed2bdc" },
  { name: "Tiket.com", url: "https://www.tiket.com/hotel/indonesia/rancabango-hotel-resort-garut-804001745562902833" },
  { name: "Booking.com", url: "https://www.booking.com/Share-GxYKeD" },
  { name: "Agoda", url: "https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1959928&hl=id-id&hid=69702812" },
];

export const nav = [
  { href: "/rooms", id: "Kamar", en: "Rooms" },
  { href: "/#experience", id: "Aktivitas", en: "Experience" },
  { href: "/wedding", id: "Wedding", en: "Wedding" },
  { href: "/meetings", id: "Meeting & Event", en: "Meetings & Events" },
  { href: "/#contact", id: "Kontak", en: "Contact" },
];

// 8 tipe kamar — nama resmi rate card. Harga = publish rate ("mulai dari"),
// aman: rack tertinggi, ops mustahil underquote; DIP jual lebih murah.
// (⚠ foto Superior/Studio/Villa sementara — menunggu foto dedikasi klien.)
export const rooms = [
  { name: "Superior", img: "/images/room-hd-superior.webp", price: 1150000, guests: 2,
    id: "Kamar hangat untuk berdua, ketenangan yang sederhana.", en: "A warm room for two, simple calm." },
  { name: "Studio Room", img: "/images/room-hd-studio.webp", price: 1250000, guests: 2,
    id: "Ruang lapang dengan sentuhan kayu.", en: "An open room with a wooden touch." },
  { name: "Deluxe Garden", img: "/images/room-hd-deluxe-garden.webp", price: 1350000, guests: 2,
    id: "Jendela lebar membuka ke taman hijau.", en: "A wide window onto the green garden." },
  { name: "Deluxe Balcony", img: "/images/room-hd-deluxe-balcony.webp", price: 1450000, guests: 2,
    id: "Balkon pribadi, pagi ditemani daun dan cahaya.", en: "A private balcony, mornings of leaves and light." },
  { name: "Bungalow Cigintung", img: "/images/cottages-blue.webp", price: 1500000, guests: 2,
    id: "Cottage yang menyatu dengan taman, tenang seperti seharusnya.", en: "A cottage woven into the garden, quiet as it should be." },
  { name: "Bungalow Suite Guntur", img: "/images/room-suite-guntur.webp", price: 3000000, guests: 4,
    id: "Dua lantai kayu dan loft, ruang untuk berkumpul.", en: "Two wooden floors and a loft, room to gather." },
  { name: "Bungalow Guntur", img: "/images/room-bungalow-guntur.webp", price: 3500000, guests: 2,
    id: "Cottage kayu hangat, gunung dari balik jendela.", en: "A warm wooden cottage, mountains beyond the window." },
  { name: "Villa Rancabango", img: "/images/room-hd-villa.webp", price: 7500000, guests: 6,
    id: "Villa kayu paling luas, sebuah dunia kecil sendiri.", en: "The largest wooden villa, a small world of its own." },
];

// Keunggulan properti (pembeda, bukan fasilitas kamar generik) — di bawah grid kamar.
export const roomAmenities = [
  { id: "Landscape sawah yang asri", en: "Lush rice-field landscape" },
  { id: "View Gunung Guntur", en: "Mount Guntur views" },
  { id: "Running track Jl. Ibrahim Adjie", en: "Running track on Jl. Ibrahim Adjie" },
  { id: "Kolam renang & parkir gratis", en: "Pool & free parking" },
];

// Fasilitas kamar (dari DIP) — untuk halaman detail kamar /rooms.
export const roomFacilities = [
  { id: "Sarapan untuk 2 orang", en: "Breakfast for 2" },
  { id: "AC", en: "Air conditioning" },
  { id: "TV LED 43\"", en: "43\" LED TV" },
  { id: "Coffee & tea maker", en: "Coffee & tea maker" },
  { id: "Mini bar", en: "Mini bar" },
  { id: "Air mineral", en: "Mineral water" },
  { id: "Akses kolam renang", en: "Pool access" },
  { id: "Perahu danau", en: "Lake rowboat" },
  { id: "Parkir gratis", en: "Free parking" },
  { id: "WiFi", en: "WiFi" },
];

// Halaman WEDDING (/wedding).
export const wedding = {
  hero: "/images/wedding-gapura.webp",
  intro: {
    id: "Menikah dengan latar sawah, Gunung Guntur, dan gapura khas Bali. Sebuah hari yang tenang dan berkesan, jauh dari keramaian kota.",
    en: "Marry against rice fields, Mount Guntur, and a Balinese gate. A calm, memorable day, far from the noise of the city.",
  },
  features: [
    { id: "Gapura khas Bali", en: "Balinese gate", descId: "Titik akad dan resepsi yang ikonik, dibingkai gapura dan taman.", descEn: "An iconic ceremony and reception spot, framed by the gate and gardens." },
    { id: "Latar sawah & gunung", en: "Rice-field & mountain backdrop", descId: "Panorama alam sebagai dekorasi alami sepanjang acara.", descEn: "Natural scenery as living décor throughout the day." },
    { id: "Katering Arummanis", en: "Arummanis catering", descId: "Hidangan Asia dan internasional dari dapur Arummanis Restaurant.", descEn: "Asian and international dishes from the Arummanis kitchen." },
    { id: "Venue Bali View & Plaza", en: "Bali View & Plaza venue", descId: "Ruang outdoor luas untuk akad, resepsi, hingga pesta kebun.", descEn: "Wide outdoor space for ceremony, reception, and garden parties." },
  ],
  // Foto wedding asli dari properti (dekorasi Bali, floral arch, latar gunung).
  gallery: [
    "/images/wedding-p1.webp",
    "/images/wedding-hall-1.webp",
    "/images/wedding-p2.webp",
    "/images/wedding-hall-2.webp",
    "/images/wedding-p3.webp",
    "/images/gapura-person.webp",
  ],
};

// Halaman MEETING & EVENTS (/meetings).
export const meetings = {
  hero: "/images/meeting-room.webp",
  room: "Ajisaka Meeting Room",
  intro: {
    id: "Rapat, seminar, gala dinner, gathering, retreat, dan team building dalam satu tempat — udara sejuk pegunungan, view sawah, dan Ajisaka Meeting Room hingga 120 orang.",
    en: "Meetings, seminars, gala dinners, gatherings, retreats, and team building in one place — cool mountain air, rice-field views, and the Ajisaka Meeting Room for up to 120.",
  },
  layouts: [
    { name: "Theater", cap: 120 },
    { name: "Classroom", cap: 80 },
    { name: "U-Shape", cap: 75 },
    { name: "Round Table", cap: 70 },
  ],
  features: [
    { id: "MICE & korporat", en: "MICE & corporate", descId: "Rapat, konferensi, seminar, gathering, dan retreat perusahaan.", descEn: "Meetings, conferences, seminars, gatherings, and corporate retreats." },
    { id: "Team building di alam", en: "Team building in nature", descId: "Aktivitas luar ruang: perahu, api unggun, dan lahan luas.", descEn: "Outdoor activities: boats, bonfires, and wide grounds." },
    { id: "Paket meeting & F&B", en: "Meeting & F&B packages", descId: "Half-day, full-day, dan fullboard dengan hidangan Arummanis.", descEn: "Half-day, full-day, and fullboard with Arummanis dining." },
    { id: "Menginap sekalian", en: "Stay on site", descId: "Kombinasikan acara dengan menginap di 43 kamar dan cottage.", descEn: "Combine the event with a stay across 43 rooms and cottages." },
  ],
  // Foto acara nyata dari korporat yang pernah menginap & event di Rancabango.
  gallery: [
    { img: "/images/mice-seminar-1.webp", id: "Rapat & seminar", en: "Meetings & seminars" },
    { img: "/images/mice-gala-letters.webp", id: "Gala dinner", en: "Gala dinner" },
    { img: "/images/mice-atv.webp", id: "Team building ATV", en: "ATV team building" },
    { img: "/images/mice-jeep.webp", id: "Off-road", en: "Off-road" },
    { img: "/images/mice-gala-dinner.webp", id: "Malam kebersamaan", en: "Evening together" },
    { img: "/images/mice-paintball.webp", id: "Games lapangan", en: "Field games" },
    { img: "/images/mice-laptops.webp", id: "Workshop", en: "Workshop" },
    { img: "/images/mice-lake-group.webp", id: "Foto bersama", en: "Group moments" },
    { img: "/images/mice-seminar-2.webp", id: "Rapat koordinasi", en: "Coordination meeting" },
  ],
};

// Aktivitas nyata — hal-hal yang bisa dilakukan tamu bersama keluarga.
export const experiences = [
  { img: "/images/activity-rowboat.webp", id: "Perahu di danau", en: "Rowboat on the lake",
    descId: "Menyusuri danau tenang dengan perahu kayu.", descEn: "Drift the calm lake on a wooden boat." },
  { img: "/images/activity-animal-feeding.webp", id: "Beri makan hewan", en: "Animal feeding",
    descId: "Anak-anak memberi makan hewan di taman — momen yang mereka ingat.", descEn: "Children feed the animals — the kind of thing they remember." },
  { img: "/images/activity-horse.webp", id: "Berkuda di sawah", en: "Horse riding by the fields",
    descId: "Menunggang kuda menyusuri pematang sawah.", descEn: "A pony ride along the rice-field paths." },
  { img: "/images/activity-bonfire.webp", id: "Api unggun malam", en: "Evening bonfire",
    descId: "Malam berkumpul di sekitar api unggun.", descEn: "Gather around the fire as night falls." },
  { img: "/images/yoga-mountain.webp", id: "Yoga pagi", en: "Morning yoga",
    descId: "Menyapa pagi dengan gerak perlahan, gunung di depan mata.", descEn: "Greet the morning slowly, mountains in view." },
  { img: "/images/pool-mountain-view.webp", id: "Kolam view gunung", en: "Mountain-view pool",
    descId: "Berenang dengan latar Gunung Guntur.", descEn: "Swim with Mount Guntur as your backdrop." },
];

// Paket — konsep saja (evergreen), tanpa harga/tanggal. Detail via WhatsApp.
export const packages = [
  { id: "Romance", en: "Romance",
    descId: "Menginap romantis dua hari, makan malam tepi danau, dan kamar yang ditata untuk berdua.", descEn: "A romantic two-day stay, lakeside dinner, and a room set for two." },
  { id: "Wellness Retreat", en: "Wellness Retreat",
    descId: "Pijat khas Bali, yoga pagi, dan waktu untuk memulihkan diri.", descEn: "Balinese massage, morning yoga, and time to restore." },
  { id: "Bon Fire Dinner", en: "Bonfire Dinner",
    descId: "Barbeque malam ditemani tari Bali dan api unggun.", descEn: "An evening barbecue with Balinese dance and a bonfire." },
  { id: "Romantic Dinner", en: "Romantic Dinner",
    descId: "Makan malam berdua di tepi danau, di bawah cahaya senja.", descEn: "Dinner for two by the lake, under the last light." },
];

// Info pra-booking — pertanyaan yang paling sering ditanya audiens.
export const info = [
  { label: { id: "Check-in / Check-out", en: "Check-in / Check-out" }, value: { id: "14.00 / 12.00 — late check-out bisa disesuaikan (booking langsung).", en: "2 PM / 12 PM — flexible late check-out on direct booking." } },
  { label: { id: "Dari Bandung", en: "From Bandung" }, value: { id: "±1,5–2 jam berkendara via Nagreg.", en: "±1.5–2 hours' drive via Nagreg." } },
  { label: { id: "Sarapan", en: "Breakfast" }, value: { id: "Termasuk untuk 2 orang di semua tipe kamar.", en: "Included for 2 guests, all room types." } },
  { label: { id: "Anak-anak", en: "Children" }, value: { id: "Anak di bawah 6 tahun menginap gratis.", en: "Children under 6 stay free." } },
  { label: { id: "Kolam renang", en: "Swimming pool" }, value: { id: "Buka 06.30–18.00, view Gunung Guntur.", en: "Open 6:30 AM–6 PM, Mount Guntur views." } },
  { label: { id: "Restoran", en: "Restaurant" }, value: { id: "Arummanis — masakan Asia & internasional, tepi danau, live music akhir pekan.", en: "Arummanis — Asian & international, lakeside, weekend live music." } },
];

// Ulasan ASLI dari Google (via listing publik) — bukan karangan. Kutipan
// dipertahankan dalam bahasa asli tamu (autentik).
export const REVIEWS = {
  rating: "4.7",
  count: 1982,
  source: "Google",
  items: [
    { name: "Andri D.", stars: 5, text: "The location is beautiful — perfect for calming both the heart and mind. The service was excellent." },
    { name: "Muhammad I.", stars: 5, text: "Recommended hotel and resort for staycation. A large room, clean, and a good view." },
    { name: "Imann S.", stars: 5, text: "Located nearby all the tourist spots. Good service, a comfortable stay." },
  ],
};

// Galeri portrait saja (3:4) agar grid rata & rapi — tanpa foto landscape.
export const gallery = [
  { img: "/images/sawah-mountain-1.webp", id: "Sawah dengan latar Gunung Guntur", en: "Rice fields beneath Mount Guntur" },
  { img: "/images/koi-pond.webp", id: "Kolam ikan dan jembatan kayu", en: "Fish pond and wooden bridge" },
  { img: "/images/pool-2.webp", id: "Kolam renang menghadap gunung", en: "Pool facing the mountains" },
  { img: "/images/gapura.webp", id: "Gapura khas Bali", en: "A Balinese gate" },
  { img: "/images/bridge-ricefield.webp", id: "Jembatan kayu di tepi sawah", en: "Wooden bridge along the fields" },
  { img: "/images/pond-mountain-3.webp", id: "Taman tropis yang rimbun", en: "Lush tropical gardens" },
];

// FAQ — GEO/AEO + jawab pertanyaan pra-booking nyata. Jawaban ID juga ke FAQPage schema.
export const faq = [
  {
    qId: "Berapa harga menginap di Rancabango?",
    qEn: "How much is a stay at Rancabango?",
    aId: "Kamar mulai dari Rp 1.150.000 per malam (publish rate) sudah termasuk sarapan untuk 2 orang. Booking langsung lewat website pakai kode RCB2026 bisa hemat sampai 20%.",
    aEn: "Rooms start from Rp 1,150,000 per night (rack rate), breakfast for two included. Book direct via the website with code RCB2026 to save up to 20%.",
  },
  {
    qId: "Apakah sarapan sudah termasuk?",
    qEn: "Is breakfast included?",
    aId: "Ya, semua tipe kamar sudah termasuk sarapan untuk 2 orang. Harga juga sudah termasuk pajak.",
    aEn: "Yes, all room types include breakfast for two. Prices already include tax.",
  },
  {
    qId: "Aktivitas apa saja yang bisa dilakukan di Rancabango?",
    qEn: "What is there to do at Rancabango?",
    aId: "Banyak untuk keluarga: berperahu di danau, memberi makan hewan, berkuda menyusuri sawah, api unggun malam, yoga pagi, dan berenang di kolam dengan pemandangan Gunung Guntur. Tersedia juga running track dan taman luas untuk bersantai.",
    aEn: "Plenty for families: rowboats on the lake, animal feeding, horse rides by the fields, evening bonfires, morning yoga, and a pool with Mount Guntur views. There's also a running track and wide gardens to unwind.",
  },
  {
    qId: "Jam berapa check-in dan check-out?",
    qEn: "What are check-in and check-out times?",
    aId: "Check-in pukul 14.00 dan check-out pukul 12.00. Late check-out bisa disesuaikan untuk tamu yang booking langsung, sesuai ketersediaan.",
    aEn: "Check-in at 2 PM, check-out at 12 PM. Flexible late check-out for direct-booking guests, subject to availability.",
  },
  {
    qId: "Berapa jarak Rancabango dari Bandung?",
    qEn: "How far is Rancabango from Bandung?",
    aId: "Sekitar 1,5–2 jam berkendara dari Bandung via Nagreg, di Tarogong Kaler, Garut, di kaki Gunung Guntur.",
    aEn: "About 1.5–2 hours' drive from Bandung via Nagreg, in Tarogong Kaler, Garut, at the foot of Mount Guntur.",
  },
  {
    qId: "Bagaimana cara memesan dan apakah cocok untuk anak?",
    qEn: "How do I book, and is it family-friendly?",
    aId: "Pesan langsung lewat website (mesin booking DIP) atau WhatsApp +62 811-2237-711 untuk harga terbaik. Sangat ramah keluarga — anak di bawah 6 tahun menginap gratis, dengan aktivitas perahu, beri makan hewan, dan berkuda.",
    aEn: "Book directly via the website (DIP engine) or WhatsApp +62 811-2237-711 for the best rate. Very family-friendly — children under 6 stay free, with rowboats, animal feeding, and horse rides.",
  },
];
