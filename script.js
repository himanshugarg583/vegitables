// Vegetables data
const vegetables = [
    {
        id: 1,
        name: 'Organic Spinach',
        price: 399,
        category: 'leafy',
        image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=300&h=300&fit=crop',
        description: 'Fresh organic spinach leaves, perfect for salads and cooking.',
        weight: '1 kg'
    },
    {
        id: 2,
        name: 'Baby Carrots',
        price: 249,
        category: 'root',
        image: 'https://images.unsplash.com/photo-1445282768818-728615cc910a?w=300&h=300&fit=crop',
        description: 'Sweet and crunchy baby carrots, perfect for snacking.',
        weight: '1 kg'
    },
    {
        id: 3,
        name: 'Roma Tomatoes',
        price: 499,
        category: 'fruit',
        image: 'https://images.unsplash.com/photo-1546470427-227b00d1dfa3?w=300&h=300&fit=crop',
        description: 'Juicy Roma tomatoes, ideal for sauces and cooking.',
        weight: '1 kg'
    },
    {
        id: 4,
        name: 'Organic Kale',
        price: 349,
        category: 'leafy',
        image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=300&h=300&fit=crop',
        description: 'Nutrient-rich organic kale, perfect for smoothies and salads.',
        weight: '1 bunch'
    },
    {
        id: 5,
        name: 'Red Bell Peppers',
        price: 599,
        category: 'fruit',
        image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=300&h=300&fit=crop',
        description: 'Sweet and colorful red bell peppers, great for cooking.',
        weight: '500g'
    },
    {
        id: 6,
        name: 'Sweet Potatoes',
        price: 399,
        category: 'root',
        image: 'https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?w=300&h=300&fit=crop',
        description: 'Nutritious sweet potatoes, perfect for roasting.',
        weight: '1 kg'
    },
    {
        id: 7,
        name: 'Broccoli Crowns',
        price: 449,
        category: 'leafy',
        image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=300&h=300&fit=crop',
        description: 'Fresh broccoli crowns, packed with vitamins.',
        weight: '500g'
    },
    {
        id: 8,
        name: 'Cucumber',
        price: 199,
        category: 'fruit',
        image: 'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=300&h=300&fit=crop',
        description: 'Crisp and refreshing cucumbers, perfect for salads.',
        weight: '1 kg'
    },
    {
        id: 9,
        name: 'Red Onions',
        price: 299,
        category: 'root',
        image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=300&h=300&fit=crop',
        description: 'Sharp and flavorful red onions, essential for cooking.',
        weight: '1 kg'
    },
    {
        id: 10,
        name: 'Lettuce Mix',
        price: 399,
        category: 'leafy',
        image: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=300&h=300&fit=crop',
        description: 'Mixed lettuce varieties, perfect for fresh salads.',
        weight: '250g'
    },
    {
        id: 11,
        name: 'Zucchini',
        price: 349,
        category: 'fruit',
        image: 'https://images.unsplash.com/photo-1601001815894-4bb6c81416d7?w=300&h=300&fit=crop',
        description: 'Fresh zucchini, versatile for many dishes.',
        weight: '1 kg'
    },
    {
        id: 12,
        name: 'Russet Potatoes',
        price: 499,
        category: 'root',
        image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=300&h=300&fit=crop',
        description: 'Classic russet potatoes, perfect for baking and frying.',
        weight: '2 kg'
    }
];

// Shopping cart
let cart = [];

// DOM elements
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const cartBtn = document.getElementById('cart-btn');
const cartModal = document.getElementById('cart-modal');
const closeCartBtn = document.getElementById('close-cart');
const cartCount = document.getElementById('cart-count');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const productsGrid = document.getElementById('products-grid');
const filterBtns = document.querySelectorAll('.filter-btn');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderProducts('all');
    setupEventListeners();
    updateCartUI();
});

// Event listeners
function setupEventListeners() {
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    
    // Cart modal
    cartBtn.addEventListener('click', openCartModal);
    closeCartBtn.addEventListener('click', closeCartModal);
    cartModal.addEventListener('click', function(e) {
        if (e.target === cartModal) {
            closeCartModal();
        }
    });
    
    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.dataset.filter;
            setActiveFilter(this);
            renderProducts(filter);
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                mobileMenu.classList.add('hidden');
            }
        });
    });
    
    // Newsletter subscription
    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        if (email) {
            alert('Thank you for subscribing to our newsletter!');
            this.reset();
        }
    });
    
    // Contact form
    document.querySelector('#contact form').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        if (name && email && message) {
            alert('Thank you for your message! We\'ll get back to you soon.');
            this.reset();
        }
    });
}

// Mobile menu functions
function toggleMobileMenu() {
    mobileMenu.classList.toggle('hidden');
}

// Cart functions
function openCartModal() {
    cartModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeCartModal() {
    cartModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

function addToCart(productId) {
    const product = vegetables.find(v => v.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartUI();
    showAddToCartNotification(product.name);
}

function removeFromCart(productId) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    if (itemIndex > -1) {
        if (cart[itemIndex].quantity > 1) {
            cart[itemIndex].quantity -= 1;
        } else {
            cart.splice(itemIndex, 1);
        }
    }
    updateCartUI();
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Update cart count
    if (totalItems > 0) {
        cartCount.textContent = totalItems;
        cartCount.classList.remove('hidden');
    } else {
        cartCount.classList.add('hidden');
    }
    
    // Update cart total
    cartTotal.textContent = totalPrice.toFixed(0);
    
    // Update cart items
    cartItems.innerHTML = '';
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="text-gray-500 text-center py-4">Your cart is empty</p>';
    } else {
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'flex items-center justify-between border-b pb-4';
            cartItem.innerHTML = `
                <div class="flex items-center space-x-3">
                    <img src="${item.image}" alt="${item.name}" class="w-12 h-12 object-cover rounded">
                    <div>
                        <h4 class="font-medium">${item.name}</h4>
                        <p class="text-sm text-gray-500">₨${item.price} × ${item.quantity}</p>
                    </div>
                </div>
                <div class="flex items-center space-x-2">
                    <button onclick="removeFromCart(${item.id})" class="text-red-500 hover:text-red-700">
                        <i class="fas fa-minus-circle"></i>
                    </button>
                    <span>${item.quantity}</span>
                    <button onclick="addToCart(${item.id})" class="text-green-500 hover:text-green-700">
                        <i class="fas fa-plus-circle"></i>
                    </button>
                </div>
            `;
            cartItems.appendChild(cartItem);
        });
    }
}

function showAddToCartNotification(productName) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'fixed top-20 right-4 bg-veggie-green text-white px-4 py-2 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300';
    notification.innerHTML = `
        <div class="flex items-center space-x-2">
            <i class="fas fa-check-circle"></i>
            <span>${productName} added to cart!</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 2000);
}

// Product filtering and rendering
function setActiveFilter(activeBtn) {
    filterBtns.forEach(btn => {
        btn.classList.remove('active', 'bg-veggie-green', 'text-white');
        btn.classList.add('bg-white', 'text-veggie-green', 'border', 'border-veggie-green');
    });
    
    activeBtn.classList.add('active', 'bg-veggie-green', 'text-white');
    activeBtn.classList.remove('bg-white', 'text-veggie-green', 'border', 'border-veggie-green');
}

function renderProducts(filter) {
    productsGrid.innerHTML = '';
    
    const filteredProducts = filter === 'all' 
        ? vegetables 
        : vegetables.filter(product => product.category === filter);
    
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 transform hover:-translate-y-1';
        productCard.innerHTML = `
            <div class="relative">
                <img src="${product.image}" alt="${product.name}" class="product-image w-full h-40 object-cover">
                <div class="absolute top-2 right-2">
                    <span class="bg-veggie-green text-white px-2 py-1 rounded-full text-xs font-semibold">
                        ${product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                    </span>
                </div>
            </div>
            <div class="p-4">
                <h3 class="text-lg font-semibold mb-2">${product.name}</h3>
                <p class="text-gray-600 text-sm mb-3">${product.description}</p>
                <div class="flex items-center justify-between mb-3">
                    <span class="text-2xl font-bold text-veggie-green">₨${product.price}</span>
                    <span class="text-sm text-gray-500">${product.weight}</span>
                </div>
                <button onclick="addToCart(${product.id})" 
                        class="w-full bg-veggie-green text-white py-2 rounded-lg hover:bg-green-600 transition duration-300 flex items-center justify-center space-x-2">
                    <i class="fas fa-cart-plus"></i>
                    <span>Add to Cart</span>
                </button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
    
    // Add animation to cards
    setTimeout(() => {
        const cards = productsGrid.querySelectorAll('.bg-white');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 50);
            }, index * 50);
        });
    }, 50);
}

// Scroll animations
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('#home');
    const speed = scrolled * 0.5;
    
    if (parallax) {
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Add some interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Add loading animation
    const loader = document.createElement('div');
    loader.id = 'loader';
    loader.className = 'fixed inset-0 bg-white z-50 flex items-center justify-center';
    loader.innerHTML = `
        <div class="text-center">
            <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-veggie-green"></div>
            <p class="mt-4 text-veggie-green font-semibold">Loading Fresh Vegetables...</p>
        </div>
    `;
    document.body.appendChild(loader);
    
    // Remove loader after page loads
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(loader);
        }, 300);
    }, 1000);
    
    // Add scroll-to-top button
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopBtn.className = 'fixed bottom-6 right-6 bg-veggie-green text-white w-12 h-12 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-40 opacity-0';
    scrollTopBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.appendChild(scrollTopBtn);
    
    // Show/hide scroll-to-top button
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.style.opacity = '1';
        } else {
            scrollTopBtn.style.opacity = '0';
        }
    });
});

// Add some fun easter eggs
let clickCount = 0;
document.querySelector('h1').addEventListener('click', function() {
    clickCount++;
    if (clickCount === 5) {
        this.style.animation = 'bounce 1s ease-in-out';
        setTimeout(() => {
            this.style.animation = '';
            clickCount = 0;
        }, 1000);
    }
});

// Add CSS animations via JavaScript
const style = document.createElement('style');
style.textContent = `
    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
        40% { transform: translateY(-10px); }
        60% { transform: translateY(-5px); }
    }
    
    .fade-in {
        animation: fadeIn 0.5s ease-in;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);