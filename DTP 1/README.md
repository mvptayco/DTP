# Basketball Flyer Generator

A modern, responsive basketball event flyer generator built with HTML, Tailwind CSS, and JavaScript. This project allows you to create and export professional-looking basketball event flyers with dynamic content and interactive features.

## 🚀 Tech Stack

- **HTML5** - Structure and content
- **Tailwind CSS** - Utility-first CSS framework for styling
- **JavaScript** - Dynamic functionality and interactivity
- **QRCode.js** - QR code generation
- **html2canvas** - Export functionality

## ✨ Features

- Responsive design that works on all devices
- Dynamic QR code generation
- Interactive partner logos with hover effects
- Export functionality to save flyer as PNG
- Modern gradient animations and transitions
- Custom styling with CSS animations
- Mobile-first approach

## 🛠️ Installation

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Open the project folder:
```bash
cd basketball-flyer
```

3. Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

## 📝 Usage

1. **View the Flyer**
   - Open `index.html` in your web browser
   - The flyer will be displayed with all interactive elements

2. **Customize Content**
   - Edit the content in `index.html`
   - Modify styles in `styles.css`
   - Update functionality in `script.js`

3. **Export the Flyer**
   - Click the "Export Flyer" button
   - The flyer will be downloaded as a PNG file

## 🎨 Customization

### Changing Colors
The color scheme can be modified in `styles.css`:
```css
:root {
  --primary: #ff6b00;
  --secondary: #1a1a1a;
  --accent: #ffd700;
}
```

### Updating Content
Edit the following sections in `index.html`:
- Player information
- Event details
- Partner logos
- Contact information

### Modifying QR Code
Update the QR code URL in `script.js`:
```javascript
const qrcode = new QRCode(document.getElementById("qrcode"), {
    text: "https://downtownbasketball.com",
    // ... other options
});
```

## 🔧 Dependencies

- Tailwind CSS v2.1.2
- QRCode.js v1.0.0
- html2canvas (latest version)

## 📱 Responsive Design

The flyer is fully responsive and includes:
- Mobile-first approach
- Flexible layouts
- Adaptive typography
- Responsive images
- Touch-friendly interactions

## 🎯 Features in Detail

1. **QR Code Generation**
   - Automatically generates QR code on page load
   - Customizable size and colors
   - Links to event website

2. **Export Functionality**
   - High-quality PNG export
   - Maintains all styling and images
   - Loading state feedback
   - Error handling

3. **Interactive Elements**
   - Hover effects on partner logos
   - Smooth transitions
   - Animated gradients
   - Responsive buttons

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Author

Justine D. Palatan
