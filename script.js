document.addEventListener('DOMContentLoaded', function() {
    // Product data - in a real application, this would come from a database
    const products = [
        {
            id: 1,
            name: 'Wireless Earbuds',
            price: 49.99,
            rating: 4.5,
            reviews: 1234,
            image: '/api/placeholder/150/150',
            category: 'electronics'
        },
        {
            id: 2,
            name: 'Smart Watch',
            price: 79.99,
            rating: 4.0,
            reviews: 856,
            image: '/api/placeholder/150/150',
            category: 'electronics'
        },
        {
            id: 3,
            name: 'Portable Charger',
            price: 29.99,
            rating: 5.0,
            reviews: 642,
            image: '/api/placeholder/150/150',
            category: 'electronics'
        },
        {
            id: 4,
            name: 'Bluetooth Speaker',
            price: 59.99,
            rating: 3.5,
            reviews: 1087,
            image: '/api/placeholder/150/150',
            category: 'electronics'
        },
        {
            id: 5,
            name: 'HD Webcam',
            price: 39.99,
            rating: 4.2,
            reviews: 398,
            image: '/api/placeholder/150/150',
            category: 'electronics'
        }
    ];

    // Cart functionality
    let cart = JSON.parse(localStorage.getItem('cosmiczCart')) || [];
    updateCartCount();

    // Add to cart buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            addToCart(products[index]);
        });
    });

    // Hero slider functionality
    let currentSlide = 0;
    const heroSlider = document.querySelector('.hero-slider img');
    const heroImages = [
        '/api/placeholder/1200/300',
        '/api/placeholder/1200/300',
        '/api/placeholder/1200/300'
    ];

    document.querySelector('.slider-controls .prev').addEventListener('click', function() {
        currentSlide = (currentSlide - 1 + heroImages.length) % heroImages.length;
        heroSlider.src = heroImages[currentSlide];
    });

    document.querySelector('.slider-controls .next').addEventListener('click', function() {
        currentSlide = (currentSlide + 1) % heroImages.length;
        heroSlider.src = heroImages[currentSlide];
    });

    // Search functionality
    const searchForm = document.querySelector('.search');
    const searchInput = searchForm.querySelector('input');
    const searchButton = searchForm.querySelector('button');

    searchButton.addEventListener('click', function(e) {
        e.preventDefault();
        performSearch(searchInput.value);
    });

    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            performSearch(searchInput.value);
        }
    });

    // Functions
    function addToCart(product) {
        // Check if product is already in cart
        const existingProductIndex = cart.findIndex(item => item.id === product.id);
        
        if (existingProductIndex > -1) {
            // Product exists, increase quantity
            cart[existingProductIndex].quantity += 1;
        } else {
            // Product doesn't exist, add it with quantity 1
            cart.push({
                ...product,
                quantity: 1
            });
        }
        
        // Save to localStorage
        localStorage.setItem('cosmiczCart', JSON.stringify(cart));
        
        // Update cart count
        updateCartCount();
        
        // Visual feedback
        showAddedToCartMessage(product.name);
    }

    function updateCartCount() {
        const cartCountElement = document.querySelector('.cart-count');
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCountElement.textContent = totalItems;
    }

    function showAddedToCartMessage(productName) {
        // Create a temporary message
        const message = document.createElement('div');
        message.classList.add('added-to-cart-message');
        message.textContent = ${productName} added to cart;
        message.style.position = 'fixed';
        message.style.bottom = '20px';
        message.style.right = '20px';
        message.style.backgroundColor = '#4CAF50';
        message.style.color = 'white';
        message.style.padding = '10px 20px';
        message.style.borderRadius = '4px';
        message.style.zIndex = '1000';
        document.body.appendChild(message);
        
        // Remove after 3 seconds
        setTimeout(() => {
            document.body.removeChild(message);
        }, 3000);
    }

    function performSearch(query) 
        if (query.trim() === '') return;
        
        // In a real application, this would redirect to a search results page
        // For this demo, we'll just show an alert
        alert(Searching for: ${query});
        
        // You would normally redirect like this:
        // window.location.href = search-results.html?q=${encodeURIComponent(query)}; }
}
);
