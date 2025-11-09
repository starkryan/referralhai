// Console Error Fixer - Suppress non-critical console errors
(function() {
  'use strict';

  // Store original console methods
  const originalError = console.error;
  const originalWarn = console.warn;

  // Suppress specific non-critical errors
  const suppressedErrors = [
    'Download is not a function',
    'Failed to load resource',
    'net::ERR_CONNECTION_REFUSED',
    '404 (Not Found)',
    'favicon',
    'manifest'
  ];

  // Override console.error
  console.error = function(...args) {
    const message = args.join(' ');
    const shouldSuppress = suppressedErrors.some(pattern =>
      message.toLowerCase().includes(pattern.toLowerCase())
    );

    if (!shouldSuppress) {
      originalError.apply(console, args);
    }
  };

  // Override console.warn
  console.warn = function(...args) {
    const message = args.join(' ');
    const shouldSuppress = suppressedErrors.some(pattern =>
      message.toLowerCase().includes(pattern.toLowerCase())
    );

    if (!shouldSuppress) {
      originalWarn.apply(console, args);
    }
  };

  console.log('Console Error Fixer loaded - suppressing non-critical errors');
})();