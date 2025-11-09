// Google Tracking Bypass - Privacy protection script
(function() {
  'use strict';

  // Block Google Analytics and tracking scripts
  const blockedHosts = [
    'www.google-analytics.com',
    'google-analytics.com',
    'stats.g.doubleclick.net',
    'www.googletagmanager.com',
    'googletagmanager.com',
    'connect.facebook.net',
    'www.facebook.com',
    'facebook.com'
  ];

  // Override XMLHttpRequest
  const originalXHROpen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function(method, url, async, user, password) {
    if (url && typeof url === 'string') {
      const shouldBlock = blockedHosts.some(host => url.includes(host));
      if (shouldBlock) {
        console.log('Blocked tracking request:', url);
        return;
      }
    }
    return originalXHROpen.call(this, method, url, async, user, password);
  };

  // Override fetch
  const originalFetch = window.fetch;
  window.fetch = function(url, options) {
    if (url && typeof url === 'string') {
      const shouldBlock = blockedHosts.some(host => url.includes(host));
      if (shouldBlock) {
        console.log('Blocked tracking fetch:', url);
        return Promise.resolve(new Response('blocked', { status: 200 }));
      }
    }
    return originalFetch.call(this, url, options);
  };

  // Block dynamic script loading for tracking
  const originalCreateElement = document.createElement;
  document.createElement = function(tagName) {
    const element = originalCreateElement.call(this, tagName);

    if (tagName.toLowerCase() === 'script') {
      const originalSetAttribute = element.setAttribute;
      element.setAttribute = function(name, value) {
        if (name === 'src' && value && typeof value === 'string') {
          const shouldBlock = blockedHosts.some(host => value.includes(host));
          if (shouldBlock) {
            console.log('Blocked tracking script:', value);
            return;
          }
        }
        return originalSetAttribute.call(this, name, value);
      };
    }

    return element;
  };

  console.log('Google Tracking Bypass loaded - privacy protection active');
})();