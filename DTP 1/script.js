// Initialize QR Code
document.addEventListener('DOMContentLoaded', function() {
    // Generate QR Code
    const qrcode = new QRCode(document.getElementById("qrcode"), {
        text: "https://downtownbasketball.com",
        width: 128,
        height: 128,
        colorDark: "#f97316",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    // Export functionality
    const exportButton = document.getElementById('exportButton');
    exportButton.addEventListener('click', exportFlyer);

    // Add hover effects to partner logos
    const partnerLogos = document.querySelectorAll('.partner-logo');
    partnerLogos.forEach(logo => {
        logo.addEventListener('mouseover', () => {
            logo.style.filter = 'grayscale(0%)';
        });
        logo.addEventListener('mouseout', () => {
            logo.style.filter = 'grayscale(100%)';
        });
    });
});

// Function to export the flyer as an image
function exportFlyer() {
    const flyerContainer = document.querySelector('.flyer-container');
    
    // Show loading state
    const exportButton = document.getElementById('exportButton');
    const originalText = exportButton.textContent;
    exportButton.textContent = 'Exporting...';
    exportButton.disabled = true;

    html2canvas(flyerContainer, {
        scale: 2, // Higher quality
        useCORS: true, // Allow cross-origin images
        backgroundColor: null
    }).then(canvas => {
        // Create download link
        const link = document.createElement('a');
        link.download = 'basketball-flyer.png';
        link.href = canvas.toDataURL('image/png');
        link.click();

        // Reset button state
        exportButton.textContent = originalText;
        exportButton.disabled = false;
    }).catch(error => {
        console.error('Export failed:', error);
        exportButton.textContent = 'Export Failed';
        setTimeout(() => {
            exportButton.textContent = originalText;
            exportButton.disabled = false;
        }, 2000);
    });
}

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
