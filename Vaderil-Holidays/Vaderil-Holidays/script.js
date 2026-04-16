const packages = [
    {
        title: '5 Days & 4 Nights',
        pickup: '550 Kms',
        travel: 'All Sightseeing',
        price: '₹11,800',
        badge: 'Most Popular',
        routeTags: ['Kochi', 'Munnar', 'Thekkady', 'Alappuzha'],
        rateTable: [
            { vehicle: 'Sedan', amount: '₹11,800', extraKm: '₹16/km' },
            { vehicle: 'Ertiga', amount: '₹13,400', extraKm: '₹18/km' },
            { vehicle: 'Innova', amount: '₹15,000', extraKm: '₹20/km' },
            { vehicle: 'Innova Crysta', amount: '₹18,650', extraKm: '₹23/km' },
            { vehicle: 'Tempo Traveller (12 Seater)', amount: '₹21,200', extraKm: '₹24/km' },
            { vehicle: 'Tempo Traveller (17 Seater)', amount: '₹23,750', extraKm: '₹25/km' },
            { vehicle: 'Tempo Traveller (19 Seater)', amount: '₹28,900', extraKm: '₹28/km' },
            { vehicle: 'Tempo Traveller (26 Seater)', amount: '₹34,100', extraKm: '₹32/km' },
            { vehicle: 'Force Urbania (17 Seater)', amount: '₹44,250', extraKm: '₹35/km' }
        ],
        itinerary: [
            'Day 1: Pickup from Kochi Airport, Railway Station, or hotel and drive to Munnar. En route visit Cheeyappara and Valara Waterfalls and a spice plantation. Overnight stay at Munnar.',
            'Day 2: Full day Munnar sightseeing including Eravikulam National Park, Tea Museum, Rose Garden, Photo Point, Mattupetty Dam, Echo Point, and sunset viewpoints. Overnight stay at Munnar.',
            'Day 3: Drive to Thekkady and visit Periyar Wildlife Sanctuary and Periyar Lake boating. Optional elephant ride, spice plantation visit, and cultural shows. Overnight stay at Thekkady.',
            'Day 4: Drive to Alappuzha and check in to a houseboat or hotel. Enjoy village life, canal cruise, sunset in backwaters, and optional Shikara ride. Overnight stay at Alappuzha.',
            'Day 5: Drive back to Kochi. Optional Fort Kochi, Chinese Fishing Nets, and Marine Drive. Drop at Kochi Airport, Railway Station, or hotel.'
        ]
    },
    {
        title: '5 Days / 4 Nights',
        pickup: '650 Kms',
        travel: 'All Sightseeing',
        price: '₹13,400',
        badge: 'Waterfalls',
        routeTags: ['Kochi', 'Athirappilly', 'Munnar', 'Thekkady', 'Alappuzha'],
        rateTable: [
            { vehicle: 'Sedan', amount: '₹13,400', extraKm: '₹16/km' },
            { vehicle: 'Ertiga', amount: '₹15,200', extraKm: '₹18/km' },
            { vehicle: 'Innova', amount: '₹17,000', extraKm: '₹20/km' },
            { vehicle: 'Crysta', amount: '₹20,950', extraKm: '₹23/km' },
            { vehicle: 'Tempo Traveller (12 Seater)', amount: '₹23,600', extraKm: '₹24/km' },
            { vehicle: 'Tempo Traveller (17 Seater)', amount: '₹26,250', extraKm: '₹25/km' },
            { vehicle: 'Tempo Traveller (19 Seater)', amount: '₹32,700', extraKm: '₹28/km' },
            { vehicle: 'Tempo Traveller (26 Seater)', amount: '₹37,300', extraKm: '₹32/km' },
            { vehicle: 'Force Urbania (17 Seater)', amount: '₹47,750', extraKm: '₹35/km' }
        ],
        itinerary: [
            'Day 1: Pickup from Kochi Airport, Railway Station, or hotel and drive to Athirappilly Waterfalls, then continue to Munnar through scenic forest routes with spice plantation and tea garden views. Overnight stay at Munnar.',
            'Day 2: Full day Munnar sightseeing with optional sunrise jeep safari, Eravikulam National Park, Tea Museum, Rose Garden, Photo Point, Mattupetty Dam, Echo Point, and evening sunset viewpoints. Overnight stay at Munnar.',
            'Day 3: Drive to Thekkady. Visit Periyar Wildlife Sanctuary, enjoy boating in Periyar Lake, optional elephant ride or bath, and evening cultural shows including Kathakali and Kalaripayattu. Overnight stay at Thekkady.',
            'Day 4: Drive to Alappuzha and check in to a houseboat or hotel. Experience village life, canal cruises, optional Shikara rides, and a serene backwater sunset. Overnight stay at Alappuzha.',
            'Day 5: After breakfast drive back to Kochi for local sightseeing including Fort Kochi, Chinese Fishing Nets, and Marine Drive, then drop at Airport or Railway Station.'
        ]
    },
    {
        title: '6 Days & 5 Nights',
        pickup: '850 Kms',
        travel: 'All Sightseeing',
        price: '₹18,800',
        badge: '',
        routeTags: ['Kochi', 'Munnar', 'Alappuzha', 'Varkala', 'Trivandrum'],
        rateTable: [
            { vehicle: 'Sedan', amount: '₹18,800', extraKm: '₹16/km' },
            { vehicle: 'Ertiga', amount: '₹21,300', extraKm: '₹18/km' },
            { vehicle: 'Innova', amount: '₹23,800', extraKm: '₹20/km' },
            { vehicle: 'Crysta', amount: '₹29,050', extraKm: '₹23/km' },
            { vehicle: 'Tempo Traveller (12 Seater)', amount: '₹32,400', extraKm: '₹24/km' },
            { vehicle: 'Tempo Traveller (17 Seater)', amount: '₹35,750', extraKm: '₹25/km' },
            { vehicle: 'Tempo Traveller (19 Seater)', amount: '₹45,800', extraKm: '₹28/km' },
            { vehicle: 'Tempo Traveller (26 Seater)', amount: '₹50,200', extraKm: '₹32/km' },
            { vehicle: 'Force Urbania (17 Seater)', amount: '₹63,250', extraKm: '₹35/km' }
        ],
        itinerary: [
            'Day 1: Pickup from Kochi Airport, Railway Station, or hotel and drive to Munnar. En route visit Cheeyappara and Valara Waterfalls, spice plantation, and tea garden views. Overnight stay at Munnar.',
            'Day 2: Munnar sightseeing including optional sunrise jeep safari, Eravikulam National Park, Tea Museum, Rose Garden, Photo Point, Mattupetty Dam, Echo Point, and sunset viewpoints. Overnight stay at Munnar.',
            'Day 3: Drive from Munnar to Alappuzha. Check in to houseboat or hotel and enjoy backwater village views, canal cruise, and optional Shikara ride. Overnight stay at Alappuzha.',
            'Day 4: Drive to Varkala with en route visit to Jatayu Earth’s Center. Explore Varkala Cliff, beach, cafes, shopping, and sunset view. Overnight stay at Varkala.',
            'Day 5: Drive to Trivandrum. Visit options include Trivandrum Zoo, Kovalam Beach and Lighthouse, Ayurveda spa, and mangrove forest. Overnight stay at Trivandrum.',
            'Day 6: Trivandrum sightseeing including Padmanabhaswamy Temple and Azhimala Shiva Temple, followed by drop at Trivandrum Airport or Railway Station.'
        ]
    },
    {
        title: '6 Days & 5 Nights',
        pickup: '950 Kms',
        travel: 'All Sightseeing',
        price: '₹18,800',
        badge: '',
        routeTags: ['Kochi', 'Munnar', 'Thekkady', 'Alappuzha', 'Varkala', 'Trivandrum'],
        rateTable: [
            { vehicle: 'Sedan', amount: '₹18,800', extraKm: '₹16/km' },
            { vehicle: 'Ertiga', amount: '₹21,300', extraKm: '₹18/km' },
            { vehicle: 'Innova', amount: '₹23,800', extraKm: '₹20/km' },
            { vehicle: 'Innova Crysta', amount: '₹29,050', extraKm: '₹23/km' },
            { vehicle: 'Tempo Traveller (12 Seater)', amount: '₹32,400', extraKm: '₹24/km' },
            { vehicle: 'Tempo Traveller (17 Seater)', amount: '₹35,750', extraKm: '₹25/km' },
            { vehicle: 'Tempo Traveller (19 Seater)', amount: '₹45,800', extraKm: '₹28/km' },
            { vehicle: 'Tempo Traveller (26 Seater)', amount: '₹50,200', extraKm: '₹32/km' },
            { vehicle: 'Force Urbania (17 Seater)', amount: '₹63,250', extraKm: '₹35/km' }
        ],
        itinerary: [
            'Day 1: Kochi to Munnar pickup and transfer. En route visit Cheeyappara and Valara Waterfalls, spice plantation, and tea garden views. Optional Kathakali or Kalaripayattu in the evening.',
            'Day 2: Full day Munnar sightseeing with Eravikulam National Park, Tea Museum, Rose Garden, Photo Point, Mattupetty Dam, and Echo Point. Optional sunrise jeep safari.',
            'Day 3: Drive to Thekkady. Visit Periyar Wildlife Sanctuary, enjoy boating in Periyar Lake, optional elephant ride, and cultural shows.',
            'Day 4: Drive to Alappuzha and check in to houseboat or hotel. Experience backwater village views, canal cruise, and optional Shikara ride.',
            'Day 5: Drive to Varkala with en route visit to Jatayu Earth’s Center. Explore Varkala Cliff, Varkala Beach, and sunset views.',
            'Day 6: Drive to Trivandrum. Optional Padmanabhaswamy Temple, Azhimala Shiva Temple, and TVM Zoo, followed by drop at Airport or Railway Station.'
        ]
    },
    {
        title: '7 Days & 6 Nights',
        pickup: '1000 Kms',
        travel: 'All Sightseeing',
        price: '₹20,200',
        badge: '',
        routeTags: ['Kochi', 'Munnar', 'Thekkady', 'Alappuzha', 'Varkala', 'Trivandrum'],
        rateTable: [
            { vehicle: 'Sedan', amount: '₹20,200', extraKm: '₹16/km' },
            { vehicle: 'Ertiga', amount: '₹22,900', extraKm: '₹18/km' },
            { vehicle: 'Innova', amount: '₹25,600', extraKm: '₹20/km' },
            { vehicle: 'Crysta', amount: '₹31,900', extraKm: '₹23/km' },
            { vehicle: 'Tempo Traveller (12 Seater)', amount: '₹35,200', extraKm: '₹24/km' },
            { vehicle: 'Tempo Traveller (17 Seater)', amount: '₹38,500', extraKm: '₹25/km' },
            { vehicle: 'Tempo Traveller (19 Seater)', amount: '₹46,900', extraKm: '₹28/km' },
            { vehicle: 'Tempo Traveller (26 Seater)', amount: '₹55,100', extraKm: '₹32/km' },
            { vehicle: 'Force Urbania (17 Seater)', amount: '₹70,000', extraKm: '₹35/km' }
        ],
        itinerary: [
            'Day 1: Arrival at Kochi. Pickup from Kochi Airport or Railway Station. Visit Fort Kochi, Mattanchery Palace, Jew Street, Chinese Fishing Nets, and Marine Drive. Overnight stay at Kochi.',
            'Day 2: Drive from Kochi to Munnar. En route visit Cheeyappara and Valara Waterfalls, spice plantation, and tea garden views. Overnight stay at Munnar.',
            'Day 3: Munnar sightseeing with optional sunrise jeep safari, Eravikulam National Park, Tea Museum, Mattupetty Dam, Echo Point, Rose Garden, and Photo Point. Overnight stay at Munnar.',
            'Day 4: Drive to Thekkady. Visit Periyar Wildlife Sanctuary, boating in Periyar Lake, spice plantation, and evening cultural shows. Overnight stay at Thekkady.',
            'Day 5: Drive to Alappuzha. Check in to houseboat or hotel and enjoy canal cruise, village views, and optional Shikara ride. Overnight stay at Alappuzha.',
            'Day 6: Drive to Varkala with en route visit to Jatayu Earth’s Center. Visit Varkala Cliff, Varkala Beach, and sunset views. Overnight stay at Varkala.',
            'Day 7: Drive to Trivandrum. Visit Sree Padmanabhaswamy Temple, Azhimala Shiva Temple, Kovalam Beach, and Lighthouse, then drop at Trivandrum Airport or Railway Station.'
        ]
    },
    {
        title: '8 Days & 7 Nights',
        pickup: '1200 Kms',
        travel: 'All Sightseeing',
        price: '₹24,000',
        badge: 'Premium',
        routeTags: ['Kochi', 'Munnar', 'Thekkady', 'Alappuzha', 'Varkala', 'Trivandrum', 'Kanyakumari'],
        rateTable: [
            { vehicle: 'Sedan', amount: '₹24,000', extraKm: '₹16/km' },
            { vehicle: 'Ertiga', amount: '₹27,200', extraKm: '₹18/km' },
            { vehicle: 'Innova', amount: '₹30,400', extraKm: '₹20/km' },
            { vehicle: 'Crysta', amount: '₹37,200', extraKm: '₹23/km' },
            { vehicle: 'Tempo Traveller (12 Seater)', amount: '₹41,600', extraKm: '₹24/km' },
            { vehicle: 'Tempo Traveller (17 Seater)', amount: '₹46,000', extraKm: '₹25/km' },
            { vehicle: 'Tempo Traveller (19 Seater)', amount: '₹55,600', extraKm: '₹28/km' },
            { vehicle: 'Tempo Traveller (26 Seater)', amount: '₹64,800', extraKm: '₹32/km' },
            { vehicle: 'Force Urbania (17 Seater)', amount: '₹82,000', extraKm: '₹35/km' }
        ],
        itinerary: [
            'Day 1: Arrival at Kochi. Pickup from Kochi Airport or Railway Station and hotel check-in. Visit Fort Kochi, Chinese Fishing Nets, and Marine Drive. Overnight stay at Kochi.',
            'Day 2: Drive to Munnar through scenic routes. En route visit Cheeyappara Waterfalls, Valara Waterfalls, spice plantations, and tea garden views. Overnight stay at Munnar.',
            'Day 3: Munnar local sightseeing with optional sunrise jeep safari. Visit Eravikulam National Park, Tea Museum, Mattupetty Dam, Echo Point, Rose Garden, and Photo Point. Overnight stay at Munnar.',
            'Day 4: Drive to Thekkady. Visit Periyar Wildlife Sanctuary, boating in Periyar Lake, spice plantation tour, and cultural shows. Overnight stay at Thekkady.',
            'Day 5: Drive to Alappuzha. Check in to houseboat or hotel and enjoy backwater canal cruise, village views, and optional Shikara ride. Overnight stay at Alappuzha.',
            'Day 6: Drive to Varkala via Jadayu Earth Centre. Visit Varkala Cliff, Varkala Beach, and sunset view. Overnight stay at Varkala.',
            'Day 7: Drive to Trivandrum. Visit Padmanabhaswamy Temple, Azhimala Shiva Temple, TVM Zoo, mangrove forest, and Kovalam Beach. Overnight stay at Trivandrum.',
            'Day 8: Early morning Kanyakumari sightseeing including sunrise, Vivekananda Rock Memorial, and Thiruvalluvar Statue, then drive back to Trivandrum for airport or railway station drop.'
        ]
    }
];

    const vehicles = [
    {
        title: 'Sedan Cars',
        subtitle: '4 seater',
        image: 'images/sedan.jpg'
    },
    {
        title: 'SUV / MUV',
        subtitle: '7 seater – Ertiga / Innova',
        image: 'https://pngimg.com/d/toyota_PNG1927.png'
    },
    {
        title: 'Tempo Traveller',
        subtitle: '12–26 seaters',
        image: 'images/traveller.jpg'
    }
    ];

    const packageGrid = document.getElementById('packageGrid');
    const vehicleGrid = document.getElementById('vehicleGrid');

    packageGrid.innerHTML = packages.map((pkg, index) => `
    <article class="package-card reveal">
            <div class="package-head">
                <div>
                    <h4>${pkg.title}</h4>
                </div>
                ${pkg.badge ? `<span class="badge">${pkg.badge}</span>` : ''}
                <div class="package-meta">
                    ${pkg.routeTags.map(tag => `<span class="chip">${tag}</span>`).join('')}
                </div>
            </div>
            <div class="package-body">
                <div class="package-inclusions">
                    <span>🚗 Pickup & Drop</span>
                    <span>🗺️ All Sightseeing</span>
                    <span>🅿️ Toll & Parking</span>
                    <span>👤 Driver Bata</span>
                    <span>⛽ Fuel Expense</span>
                </div>
                <a href="#" class="itinerary-link" data-package-index="${index}">▼ View Itinerary</a>
                <div class="package-footer">
                    <div class="price-wrap">
                        <div class="price">${pkg.price}</div>
                        <div class="kms">${pkg.pickup}</div>
                    </div>
                </div>
                <a href="#contact" class="btn btn-primary">Book Now @ ₹2000</a>
                <p class="balance-note"><em>*Balance payment on arrival</em></p>
            </div>
    </article>
    `).join('');

    vehicleGrid.innerHTML = vehicles.map(vehicle => `
    <article class="vehicle-card reveal">
        <img src="${vehicle.image}" alt="${vehicle.title}">
            <h4>${vehicle.title}</h4>
            <p>${vehicle.subtitle}</p>
    </article>
    `).join('');

    document.getElementById('year').textContent = new Date().getFullYear();

    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-open');
});

    navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('mobile-open'));
});

    const revealEls = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });
    revealEls.forEach(el => observer.observe(el));

    const enquiryForm = document.getElementById('enquiryForm');
    const formMessage = document.getElementById('formMessage');
    const whatsappNumber = '917012305403';
    const itineraryModal = document.getElementById('itineraryModal');
    const itineraryTitle = document.getElementById('itineraryModalTitle');
    const itineraryContent = document.getElementById('itineraryModalContent');
    const closeItineraryModal = document.getElementById('closeItineraryModal');

packageGrid.addEventListener('click', (event) => {
    const itineraryLink = event.target.closest('.itinerary-link');
    if (!itineraryLink) return;

    event.preventDefault();
    const index = Number(itineraryLink.dataset.packageIndex);
    const selectedPackage = packages[index];
    if (!selectedPackage) return;

    itineraryContent.innerHTML = `
        <div class="pdf-itinerary-sheet">
            <div class="pdf-itinerary-top">
                <div class="pdf-brand">VADERIL HOLIDAYS</div>
                <div class="pdf-sheet-badge">${selectedPackage.badge || 'Kerala Package'}</div>
            </div>

            <div class="pdf-itinerary-hero">
                <div class="pdf-itinerary-hero-text">
                    <p class="pdf-route-label">PACKAGE OVERVIEW</p>
                    <h3>${selectedPackage.title}</h3>
                    <div class="pdf-route-tags">
                        ${selectedPackage.routeTags.map(tag => `<span>${tag}</span>`).join('')}
                    </div>
                </div>

                <div class="pdf-price-box">
                    <div class="pdf-price-label">Starting From</div>
                    <div class="pdf-price-value">${selectedPackage.price}</div>
                    <div class="pdf-km-value">${selectedPackage.pickup}</div>
                </div>
            </div>

            <div class="pdf-section">
                <h4>Vehicle Rate Chart</h4>
                <div class="pdf-table-wrap">
                    <table class="pdf-rate-table">
                        <thead>
                            <tr>
                                <th>Vehicle Type</th>
                                <th>Package Amount</th>
                                <th>Extra KM Rate</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${selectedPackage.rateTable.map(row => `
                                <tr>
                                    <td>${row.vehicle}</td>
                                    <td>${row.amount}</td>
                                    <td>${row.extraKm}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="pdf-section">
                <h4>Detailed Itinerary</h4>
                <div class="pdf-day-list">
                    ${selectedPackage.itinerary.map((day, i) => {
        const parts = day.split(':');
        const heading = parts.length > 1 ? parts.shift() : `Day ${i + 1}`;
        const details = parts.length > 0 ? parts.join(':').trim() : day;

        return `
                            <article class="pdf-day-card">
                                <div class="pdf-day-number">${i + 1}</div>
                                <div class="pdf-day-content">
                                    <h5>${heading}</h5>
                                    <p>${details}</p>
                                </div>
                            </article>
                        `;
    }).join('')}
                </div>
            </div>
        </div>
    `;

    itineraryModal.classList.add('open');
});

    closeItineraryModal.addEventListener('click', () => {
    itineraryModal.classList.remove('open');
});

    itineraryModal.addEventListener('click', (event) => {
    if (event.target === itineraryModal) {
        itineraryModal.classList.remove('open');
    }
});

    enquiryForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(enquiryForm);
    const name = (formData.get('name') || '').toString().trim();
    const phone = (formData.get('phone') || '').toString().trim();
    const destination = (formData.get('destination') || '').toString().trim();
    const passengers = (formData.get('passengers') || '').toString().trim();
    const days = (formData.get('days') || '').toString().trim();
    const vehicle = (formData.get('vehicle') || '').toString().trim();
    const details = (formData.get('details') || '').toString().trim();

    const lines = [
        'Hi Vaderil Holidays, I would like a quick enquiry.',
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Destination / Package: ${destination || '-'}`,
        `Passengers: ${passengers || '-'}`,
        `Days: ${days || '-'}`,
        `Vehicle: ${vehicle || '-'}`,
        `Trip Details: ${details || '-'}`
    ];

    const message = encodeURIComponent(lines.join('\n'));
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    window.open(whatsappUrl, '_blank', 'noopener');

    formMessage.textContent = 'Redirecting to WhatsApp with your enquiry details...';
    enquiryForm.reset();
});
