# DigiThela - Vegetables Selling Website

A modern, responsive landing page for a vegetables selling business built with HTML, Tailwind CSS, and JavaScript.

## Features

### 🌱 Design & Layout
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and attractive design with green theme
- **Smooth Animations**: Hover effects, transitions, and loading animations
- **Professional Typography**: Easy-to-read fonts with proper hierarchy

### 🛒 E-commerce Features
- **Product Catalog**: Display of various vegetables with images, prices, and descriptions
- **Category Filtering**: Filter products by Leafy Greens, Root Vegetables, and Fruit Vegetables
- **Shopping Cart**: Add/remove items with quantity management
- **Cart Modal**: View cart contents with total price calculation

### 📱 Interactive Elements
- **Mobile Navigation**: Collapsible menu for mobile devices
- **Smooth Scrolling**: Navigation links scroll smoothly to sections
- **Product Search/Filter**: Easy product categorization
- **Contact Form**: Functional contact form with validation
- **Newsletter Signup**: Email subscription functionality

### 🎨 Sections Included
- **Header**: Navigation with logo and cart
- **Hero Section**: Eye-catching banner with call-to-action
- **Features**: Highlighting key benefits (Free Delivery, 100% Organic, Always Fresh)
- **Products**: Showcase of vegetables with filtering options
- **About**: Company information and values
- **Newsletter**: Email subscription section
- **Contact**: Contact information and form
- **Footer**: Links and social media

## Technologies Used

- **HTML5**: Semantic markup structure
- **Tailwind CSS**: Utility-first CSS framework for styling
- **JavaScript (ES6+)**: Interactive functionality and cart management
- **Font Awesome**: Icons for UI elements
- **Unsplash**: High-quality vegetable images

## File Structure

```
lavi/
├── index.html          # Main HTML file
├── script.js           # JavaScript functionality
├── styles.css          # Custom CSS styles
└── README.md          # This file
```

## Getting Started

1. **Download/Clone** the files to your local machine
2. **Open** `index.html` in your web browser
3. **That's it!** The website is ready to use

## Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## Features Breakdown

### JavaScript Functionality
- **Mobile Menu Toggle**: Responsive navigation
- **Product Filtering**: Dynamic product display based on categories
- **Shopping Cart Management**: Add, remove, and update quantities
- **Smooth Scrolling**: Enhanced user experience
- **Form Handling**: Newsletter and contact form processing
- **Notifications**: Add-to-cart confirmation messages
- **Loading Animation**: Professional loading screen

### Responsive Design
- **Mobile-First Approach**: Optimized for mobile devices
- **Breakpoint System**: Tailored layouts for different screen sizes
- **Touch-Friendly**: Large buttons and touch targets for mobile
- **Flexible Grid**: Adaptive product grid layout

### Performance Optimizations
- **CDN Resources**: Fast loading of external libraries
- **Optimized Images**: Properly sized images from Unsplash
- **Minimal JavaScript**: Efficient, vanilla JavaScript code
- **CSS Animations**: Hardware-accelerated transitions

## Customization

### Colors
The website uses a green color scheme defined in Tailwind config:
- Primary Green: `#4ade80`
- Dark Green: `#166534`
- Light Green: `#dcfce7`

### Products
Edit the `vegetables` array in `script.js` to add/modify products:
```javascript
{
    id: 1,
    name: 'Product Name',
    price: 3.99,
    category: 'leafy', // 'leafy', 'root', or 'fruit'
    image: 'image-url',
    description: 'Product description',
    weight: '1 lb'
}
```

### Content
- Update company information in the HTML
- Modify contact details in the contact section
- Change social media links in the footer

## Deployment

### Local Development
Simply open `index.html` in a web browser.

### Web Hosting
Upload all files to your web hosting service:
1. Upload `index.html`, `script.js`, and `styles.css`
2. Ensure file permissions are set correctly
3. Access your domain to view the site

### GitHub Pages
1. Create a GitHub repository
2. Upload the files
3. Enable GitHub Pages in repository settings
4. Access your site at `username.github.io/repository-name`

## Future Enhancements

### Potential Additions
- **Payment Integration**: Stripe, PayPal, or other payment gateways
- **User Authentication**: Login/signup functionality
- **Order Management**: Order history and tracking
- **Inventory Management**: Stock level tracking
- **Reviews & Ratings**: Customer feedback system
- **Search Functionality**: Product search with auto-complete
- **Wishlist**: Save favorite products
- **Blog Section**: Nutrition tips and recipes

### Technical Improvements
- **Progressive Web App**: Offline functionality
- **Performance Monitoring**: Analytics integration
- **SEO Optimization**: Meta tags and schema markup
- **Accessibility**: Enhanced ARIA labels and keyboard navigation

## Support

For questions or issues:
- Check the browser console for JavaScript errors
- Ensure all files are in the same directory
- Verify internet connection for CDN resources

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ for healthy living and sustainable farming**