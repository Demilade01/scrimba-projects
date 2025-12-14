# 🍕 FoodHub - Food Ordering App

A modern, fully-functional food ordering web application built with vanilla HTML, CSS, and JavaScript. Features a beautiful UI with smooth animations, complete cart functionality, and a checkout system.

## ✨ Features

### 🎨 Modern UI/UX
- Beautiful gradient hero section
- Smooth animations and transitions
- Responsive design for all devices
- Elegant color scheme with CSS variables
- Custom scrollbar styling

### 🍔 Menu System
- 15+ food items across 4 categories
- Category filtering (All, Burgers, Pizza, Drinks, Desserts)
- Detailed item descriptions and pricing
- Emoji-based food icons
- Hover effects and animations

### 🛒 Shopping Cart
- Add items to cart with one click
- Sliding cart sidebar
- Adjust item quantities (+/-)
- Remove items from cart
- Real-time price calculation
- Cart count badge with pop animation
- Persistent cart (saved to localStorage)

### 💳 Checkout System
- Complete checkout modal with form validation
- Customer information fields:
  - Full Name
  - Email
  - Phone Number
  - Delivery Address
  - Payment Method
- Order summary with subtotal, delivery fee, and total
- Success confirmation modal with order number
- Form reset after order placement

### ⌨️ Keyboard Shortcuts
- **ESC** - Close modals and cart
- **C** - Toggle cart sidebar

### 🎯 Additional Features
- Smooth scrolling navigation
- Toast notifications for user actions
- Empty cart state with helpful message
- Overlay backgrounds for modals
- Loading animations for menu items

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required!

### Installation

1. Clone or download this repository
2. Navigate to the `food-ordering` folder
3. Open `index.html` in your web browser

That's it! The app is ready to use.

### Quick Start
```bash
# If you have a local server (optional)
cd food-ordering
python -m http.server 8000
# Then open http://localhost:8000
```

## 📁 File Structure

```
food-ordering/
├── index.html       # Main HTML structure
├── styles.css       # All styling and animations
├── script.js        # JavaScript functionality
└── README.md        # Documentation
```

## 🎨 Color Palette

- **Primary**: #FF6B6B (Coral Red)
- **Secondary**: #4ECDC4 (Turquoise)
- **Accent**: #FFE66D (Yellow)
- **Dark**: #2C3E50
- **Light**: #ECF0F1
- **Success**: #2ECC71

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with:
  - Flexbox & Grid
  - CSS Variables
  - Animations & Transitions
  - Media Queries
- **JavaScript (ES6+)** - Vanilla JS with:
  - Array methods (map, filter, reduce)
  - DOM manipulation
  - Event handling
  - Local Storage API

## 🎯 Key Functionalities

### Menu Rendering
```javascript
// Dynamic menu rendering with category filtering
renderMenuItems(category = 'all')
```

### Cart Management
```javascript
addToCart(itemId)        // Add item to cart
removeFromCart(itemId)   // Remove item from cart
updateQuantity(id, change) // Update item quantity
updateCart()             // Refresh cart display
```

### Modal System
```javascript
openCheckoutModal()      // Open checkout form
closeCheckoutModal()     // Close checkout form
closeSuccessModal()      // Close success message
```

## 🌟 Code Highlights

### Smooth Animations
- Menu items fade in with staggered timing
- Cart sidebar slides from the right
- Modal pop-in effects
- Button hover transformations
- Shopping cart count badge pop animation

### User Experience
- Empty cart state with friendly message
- Toast notifications for actions
- Form validation on checkout
- Persistent cart across page reloads
- Smooth scrolling navigation

### Performance
- Minimal DOM manipulation
- Efficient event handling
- No external dependencies
- Lightweight (< 50KB total)

## 🎓 Learning Outcomes

This project demonstrates:
- ✅ DOM manipulation and traversal
- ✅ Event handling and delegation
- ✅ State management in vanilla JavaScript
- ✅ CSS animations and transitions
- ✅ Responsive web design
- ✅ Form validation
- ✅ Local Storage API
- ✅ Modern JavaScript (ES6+)
- ✅ UI/UX best practices

## 🚀 Future Enhancements

Potential features to add:
- [ ] Search functionality
- [ ] User authentication
- [ ] Order history
- [ ] Real payment integration
- [ ] Restaurant location/hours
- [ ] Reviews and ratings
- [ ] Favorite items
- [ ] Special offers/coupons
- [ ] Multiple delivery addresses
- [ ] Order tracking

## 📝 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)

## 📄 License

This project is open source and available for educational purposes.

## 👨‍💻 Author

Built as a learning project for Scrimba.

## 🙏 Acknowledgments

- Google Fonts (Inter font family)
- Emoji icons for food items
- Inspired by modern food delivery apps

---

**Enjoy ordering! 🎉**
