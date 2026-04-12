    const packages = [
    {
        title: '5 Days – Munnar, Thekkady, Alappuzha',
        days: '5 Days / 4 Nights',
        pickup: '550 Kms',
        travel: 'All Sightseeing',
        price: '₹11,800',
        badge: 'Most Popular',
        routeTags: ['Cochin', 'Munnar', 'Thekkady', 'Alleppey'],
        itinerary: [
            'Day 1: Arrival at Cochin and drive to Munnar.',
            'Day 2: Munnar sightseeing with tea gardens and local viewpoints.',
            'Day 3: Drive to Thekkady and explore wildlife and spice plantations.',
            'Day 4: Drive to Alappuzha for a backwater experience.',
            'Day 5: Return for departure.'
        ]
    },
    {
        title: '5 Days – Athirappilly, Munnar, Thekkady, Alappuzha',
        days: '5 Days / 4 Nights',
        pickup: '650 Kms',
        travel: 'All Sightseeing',
        price: '₹13,400',
        badge: 'Waterfalls',
        routeTags: ['Athirappilly', 'Munnar', 'Alleppey'],
        itinerary: [
            'Day 1: Athirappilly waterfalls and nearby sightseeing.',
            'Day 2: Drive to Munnar and explore tea plantation areas.',
            'Day 3: Continue to Thekkady for wildlife and cultural activities.',
            'Day 4: Move to Alappuzha and enjoy backwater views.',
            'Day 5: Departure transfer.'
        ]
    },
    {
        title: '7 Days – Munnar, Thekkady, Alappuzha, Varkala, Trivandrum',
        days: '7 Days / 6 Nights',
        pickup: '950 Kms',
        travel: 'All Sightseeing',
        price: '₹19,400',
        badge: '',
        routeTags: ['Cochin', 'Munnar', 'Thekkady', 'Alleppey', 'Varkala', 'Trivandrum'],
        itinerary: [
            'Day 1-2: Cochin to Munnar sightseeing and stay.',
            'Day 3: Thekkady wildlife and spice plantations.',
            'Day 4: Alappuzha backwater experience.',
            'Day 5: Varkala beach and cliff views.',
            'Day 6-7: Trivandrum city highlights and departure.'
        ]
    },
    {
        title: '5 Days 4 Nights Kochi–Munnar–Thekkady–Alappuzha–Kochi',
        days: '5 Days / 4 Nights',
        pickup: '550 Kms',
        travel: 'All Sightseeing Included',
        price: '₹11,800',
        badge: 'Most Popular',
        routeTags: ['Kochi', 'Munnar', 'Thekkady', 'Alappuzha', 'Kochi'],
        itinerary: [
            'Day 1: On arrival at Cochin Airport or Railway Station, our driver-cum-guide welcomes you and drives to Munnar. En route visit Valara and Cheeyappara waterfalls and a spice plantation. Overnight stay at Munnar resort/hotel.',
            'Day 2: Morning pickup for Munnar sightseeing: Tea Plantations, Chithirapuram viewpoint, Rajamalai (Eravikulam National Park), Tea Museum, Rose Garden, Mattupetty Dam, and Echo Point. Drop back to Munnar resort/hotel.',
            'Day 3: Morning pickup after breakfast and drive to Thekkady. Check-in at hotel. Sightseeing includes Periyar Wildlife Sanctuary, spice plantations, Cultural Show Center, and elephant camp. Overnight at Thekkady.',
            'Day 4: Morning pickup after breakfast and drive to Alleppey. Drop at the houseboat for overnight backwater journey.',
            'Day 5: Morning pickup after breakfast. Visit Fort Kochi Beach and Chinese Fishing Nets. Drop at airport or railway station for onward journey.'
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
                    <p class="days-text">${pkg.days}</p>
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
                <a href="#contact" class="btn btn-primary">View Itinerary</a>
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

    itineraryTitle.textContent = selectedPackage.title;
    itineraryContent.innerHTML = selectedPackage.itinerary.map(day => `<p>${day}</p>`).join('');
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
