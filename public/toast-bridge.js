// Toast Bridge Script - Exposes Sonner toast to iframe content
(function() {
    'use strict';

    // Wait for Sonner to be available
    function waitForSonner() {
        if (typeof window.toast !== 'undefined') {
            // Sonner is available, expose it to parent window and iframe
            exposeToastToWindow();
        } else {
            // Wait a bit longer and try again
            setTimeout(waitForSonner, 100);
        }
    }

    // Expose toast function to window object for iframe access
    function exposeToastToWindow() {
        if (typeof window.toast !== 'undefined') {
            // Make toast available globally
            window.globalToast = {
                success: window.toast.success,
                error: window.toast.error,
                info: window.toast.info,
                warning: window.toast.warning,
                loading: window.toast.loading
            };

            // Also make it available as window.toast for backward compatibility
            if (!window.toast.success) {
                window.toast = window.globalToast;
            }

            console.log('Toast bridge initialized - Sonner toasts available globally');
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', waitForSonner);
    } else {
        waitForSonner();
    }

    // Also try to make toast available to iframe content
    window.addEventListener('message', function(event) {
        // Handle toast requests from iframe
        if (event.data && event.data.type === 'toast') {
            if (typeof window.toast !== 'undefined') {
                const { message, toastType } = event.data;

                switch(toastType) {
                    case 'success':
                        window.toast.success(message);
                        break;
                    case 'error':
                        window.toast.error(message);
                        break;
                    case 'info':
                        window.toast.info(message);
                        break;
                    case 'warning':
                        window.toast.warning(message);
                        break;
                    default:
                        window.toast.info(message);
                }
            }
        }
    });
})();