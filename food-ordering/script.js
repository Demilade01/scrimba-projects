// ============================================
// Menu Data
// ============================================
const menuData = [
    {
        id: 1,
        name: "Classic Burger",
        description: "Juicy beef patty with fresh lettuce, tomato, and special sauce",
        price: 12.99,
        category: "burgers",
        emoji: "🍔"
    },
    {
        id: 2,
        name: "Cheese Burger",
        description: "Double beef patty with melted cheese and crispy bacon",
        price: 14.99,
        category: "burgers",
        emoji: "🍔"
    },
    {
        id: 3,
        name: "Veggie Burger",
        description: "Plant-based patty with avocado and fresh vegetables",
        price: 11.99,
        category: "burgers",
        emoji: "🥗"
    },
    {
        id: 4,
        name: "Margherita Pizza",
        description: "Fresh mozzarella, tomato sauce, and basil on thin crust",
        price: 16.99,
        category: "pizza",
        emoji: "🍕"
    },
    {
        id: 5,
        name: "Pepperoni Pizza",
        description: "Classic pepperoni with extra cheese and Italian herbs",
        price: 18.99,
        category: "pizza",
        emoji: "🍕"
    },
    {
        id: 6,
        name: "Supreme Pizza",
        description: "Loaded with pepperoni, sausage, peppers, and olives",
        price: 21.99,
        category: "pizza",
        emoji: "🍕"
    },
    {
        id: 7,
        name: "Hawaiian Pizza",
        description: "Ham and pineapple with mozzarella cheese",
        price: 17.99,
        category: "pizza",
        emoji: "🍕"
    },
    {
        id: 8,
        name: "Fresh Orange Juice",
        description: "Freshly squeezed orange juice packed with vitamins",
        price: 4.99,
        category: "drinks",
        emoji: "🍊"
    },
    {
        id: 9,
        name: "Iced Coffee",
        description: "Rich cold brew with a hint of vanilla",
        price: 5.99,
        category: "drinks",
        emoji: "☕"
    },
    {
        id: 10,
        name: "Smoothie Bowl",
        description: "Mixed berry smoothie with granola and fresh fruits",
        price: 8.99,
        category: "drinks",
        emoji: "🥤"
    },
    {
        id: 11,
        name: "Lemonade",
        description: "Homemade fresh lemonade with mint",
        price: 3.99,
        category: "drinks",
        emoji: "🍋"
    },
    {
        id: 12,
        name: "Chocolate Cake",
        description: "Rich chocolate layer cake with creamy frosting",
        price: 7.99,
        category: "desserts",
        emoji: "🍰"
    },
    {
        id: 13,
        name: "Ice Cream Sundae",
        description: "Vanilla ice cream with chocolate sauce and cherries",
        price: 6.99,
        category: "desserts",
        emoji: "🍨"
    },
    {
        id: 14,
        name: "Apple Pie",
        description: "Warm apple pie with cinnamon and vanilla ice cream",
        price: 8.99,
        category: "desserts",
        emoji: "🥧"
    },
    {
        id: 15,
        name: "Cheesecake",
        description: "New York style cheesecake with berry compote",
        price: 9.99,
        category: "desserts",
        emoji: "🍰"
    }
];

// ============================================
// State Management
// ============================================
let cart = [];
let currentCategory = 'all';

// ============================================
// DOM Elements
// ============================================
const menuGrid = document.getElementById('menuGrid');
const cartBtn = document.getElementById('cartBtn');
const cartCount = document.getElementById('cartCount');
const cartSidebar = document.getElementById('cartSidebar');
const closeCart = document.getElementById('closeCart');
const cartOverlay = document.getElementById('cartOverlay');
const cartItems = document.getElementById('cartItems');
const cartEmpty = document.getElementById('cartEmpty');
const cartFooter = document.getElementById('cartFooter');
const totalPrice = document.getElementById('totalPrice');
const checkoutBtn = document.getElementById('checkoutBtn');
const checkoutModal = document.getElementById('checkoutModal');
const closeModal = document.getElementById('closeModal');
const modalOverlay = document.getElementById('modalOverlay');
const checkoutForm = document.getElementById('checkoutForm');
const successModal = document.getElementById('successModal');
const closeSuccess = document.getElementById('closeSuccess');
const categoryBtns = document.querySelectorAll('.category-btn');

// ============================================
// Render Menu Items
// ============================================
function renderMenuItems(category = 'all') {
    const filteredItems = category === 'all'
        ? menuData
        : menuData.filter(item => item.category === category);

    menuGrid.innerHTML = filteredItems.map(item => `
        <div class="menu-item">
            <div class="item-image">${item.emoji}</div>
            <div class="item-content">
                <div class="item-header">
                    <h3 class="item-name">${item.name}</h3>
                    <span class="item-price">$${item.price.toFixed(2)}</span>
                </div>
                <p class="item-description">${item.description}</p>
                <div class="item-footer">
                    <span class="item-category">${item.category}</span>
                    <button class="add-to-cart" onclick="addToCart(${item.id})">Add to Cart</button>
                </div>
            </div>
        </div>
    `).join('');
}

// ============================================
// Cart Functions
// ============================================
function addToCart(itemId) {
    const item = menuData.find(item => item.id === itemId);
    const existingItem = cart.find(cartItem => cartItem.id === itemId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...item,
            quantity: 1
        });
    }

    updateCart();
    showNotification('Item added to cart!');
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCart();
}

function updateQuantity(itemId, change) {
    const item = cart.find(cartItem => cartItem.id === itemId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(itemId);
        } else {
            updateCart();
        }
    }
}

function updateCart() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Update cart items display
    if (cart.length === 0) {
        cartEmpty.classList.add('active');
        cartFooter.classList.remove('active');
        cartItems.innerHTML = '';
    } else {
        cartEmpty.classList.remove('active');
        cartFooter.classList.add('active');

        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">${item.emoji}</div>
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                    <div class="cart-item-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Update total price
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalPrice.textContent = `$${total.toFixed(2)}`;

    // Update checkout modal summary
    updateCheckoutSummary(total);
}

function updateCheckoutSummary(subtotal) {
    const deliveryFee = 5.00;
    const total = subtotal + deliveryFee;

    document.getElementById('summarySubtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('summaryDelivery').textContent = `$${deliveryFee.toFixed(2)}`;
    document.getElementById('summaryTotal').textContent = `$${total.toFixed(2)}`;
}

// ============================================
// Cart Sidebar Toggle
// ============================================
function toggleCart(show) {
    if (show) {
        cartSidebar.classList.add('active');
        cartOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    } else {
        cartSidebar.classList.remove('active');
        cartOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

cartBtn.addEventListener('click', () => toggleCart(true));
closeCart.addEventListener('click', () => toggleCart(false));
cartOverlay.addEventListener('click', () => toggleCart(false));

// ============================================
// Checkout Modal
// ============================================
function openCheckoutModal() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }

    checkoutModal.classList.add('active');
    modalOverlay.classList.add('active');
    toggleCart(false);
    document.body.style.overflow = 'hidden';
}

function closeCheckoutModal() {
    checkoutModal.classList.remove('active');
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

checkoutBtn.addEventListener('click', openCheckoutModal);
closeModal.addEventListener('click', closeCheckoutModal);
modalOverlay.addEventListener('click', () => {
    closeCheckoutModal();
    closeSuccessModal();
});

// ============================================
// Form Submission
// ============================================
checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Generate random order number
    const orderNumber = Math.floor(100000 + Math.random() * 900000);
    document.getElementById('orderNumber').textContent = orderNumber;

    // Close checkout modal and show success modal
    closeCheckoutModal();
    successModal.classList.add('active');
    modalOverlay.classList.add('active');

    // Reset form and cart
    checkoutForm.reset();
    cart = [];
    updateCart();
});

// ============================================
// Success Modal
// ============================================
function closeSuccessModal() {
    successModal.classList.remove('active');
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

closeSuccess.addEventListener('click', closeSuccessModal);

// ============================================
// Category Filtering
// ============================================
categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        categoryBtns.forEach(b => b.classList.remove('active'));

        // Add active class to clicked button
        btn.classList.add('active');

        // Get category and render items
        const category = btn.getAttribute('data-category');
        currentCategory = category;
        renderMenuItems(category);
    });
});

// ============================================
// Notification System
// ============================================
function showNotification(message) {
    // Remove existing notification if any
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background-color: var(--success);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: var(--border-radius);
        box-shadow: var(--shadow-lg);
        z-index: 10000;
        animation: slideInRight 0.3s ease, slideOutRight 0.3s ease 2.7s;
    `;

    document.body.appendChild(notification);

    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Add notification animations to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ============================================
// Smooth Scrolling
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// Keyboard Shortcuts
// ============================================
document.addEventListener('keydown', (e) => {
    // Press 'Escape' to close modals and cart
    if (e.key === 'Escape') {
        toggleCart(false);
        closeCheckoutModal();
        closeSuccessModal();
    }

    // Press 'C' to toggle cart
    if (e.key === 'c' || e.key === 'C') {
        if (!cartSidebar.classList.contains('active')) {
            toggleCart(true);
        }
    }
});

// ============================================
// Initialize App
// ============================================
function init() {
    renderMenuItems();
    updateCart();

    // Add entrance animation to menu items
    setTimeout(() => {
        const items = document.querySelectorAll('.menu-item');
        items.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 50);
        });
    }, 100);
}

// Run initialization when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ============================================
// Local Storage (Optional - Save Cart)
// ============================================
function saveCart() {
    localStorage.setItem('foodhub-cart', JSON.stringify(cart));
}

function loadCart() {
    const savedCart = localStorage.getItem('foodhub-cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }
}

// Load cart on page load
window.addEventListener('load', loadCart);

// Save cart whenever it changes
window.addEventListener('beforeunload', saveCart);
