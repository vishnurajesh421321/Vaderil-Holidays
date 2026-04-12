    const packages = [
    {
        title: '5 Days – Munnar, Thekkady, Alappuzha',
        image: 'https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&w=1200&q=80',
        days: '5 Days',
        pickup: '1,200 km',
        travel: 'Included',
        price: '₹ 9,999',
        description: 'A classic Kerala route with tea gardens, wildlife experiences, and a backwater stay.'
    },
    {
        title: '5 Days – Athirappilly, Munnar, Thekkady, Alappuzha',
        image: 'images/thekkadi.jpg',
        days: '5 Days',
        pickup: '1,000 km',
        travel: 'Included',
        price: '₹ 9,999',
        description: 'Blend waterfalls, cool hill stations, forest routes, and backwater views in one itinerary.'
    },
    {
        title: '7 Days – Munnar, Thekkady, Alappuzha, Varkala, Trivandrum',
        image: 'https://images.unsplash.com/photo-1587922546307-776227941871?auto=format&fit=crop&w=1200&q=80',
        days: '7 Days',
        pickup: '1,000 km',
        travel: 'Included',
        price: '₹ 14,999',
        description: 'A longer scenic Kerala journey across hills, backwaters, beaches, and city highlights.'
    },
    {
        title: '5 Days 4 Nights Kochi–Munnar–Thekkady–Alappuzha–Kochi',
        image: 'images/alapuzha.jpg',
        days: '5 Days / 4 Nights',
        pickup: '550 km',
        travel: 'All Sightseeing Included',
        price: '₹ 11,800',
        description: 'Day 1: Arrival at Cochin Airport/Railway Station and drive to Munnar with en route visits to Valara & Cheeyappara waterfalls and a spice plantation. Day 2: Munnar sightseeing—tea plantations, Chithirapuram viewpoint, Rajamalai (Eravikulam National Park), Tea Museum, Rose Garden, Mattupetty Dam, and Echo Point. Day 3: Drive to Thekkady and visit Periyar Wildlife Sanctuary, spice plantations, cultural show center, and elephant camp. Day 4: Drive to Alappuzha and board a houseboat for an overnight backwater journey. Day 5: Visit Fort Kochi Beach and Chinese Fishing Nets, then drop at airport/railway station.'
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

    packageGrid.innerHTML = packages.map(pkg => `
    <article class="package-card reveal">
        <img src="${pkg.image}" alt="${pkg.title}">
            <div class="package-body">
                <h4>${pkg.title}</h4>
                <div class="package-meta">
                    <span class="chip">${pkg.days}</span>
                    <span class="chip">Pickup: ${pkg.pickup}</span>
                    <span class="chip">Travel: ${pkg.travel}</span>
                </div>
                <p>${pkg.description}</p>
                <div class="package-footer">
                    <div class="price">${pkg.price}</div>
                    <a href="#contact" class="btn btn-primary">Book Now</a>
                </div>
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
