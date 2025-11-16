#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Configuration
const config = {
  baseUrl: 'https://www.rechargejio.in',
  outputPath: '../public/sitemap.xml',
  publicDir: '../public',
  excludePatterns: ['*.map', '*.js', 'sitemap.xml', 'robots.txt']
};

// Pages to include in sitemap
const pages = [
  {
    path: '/',
    priority: '1.0',
    changefreq: 'weekly',
    images: [
      {
        loc: '/images/logo.png',
        title: 'FreeRecharge App - UPI &amp; Bill Payments',
        caption: 'Download FreeRecharge app for secure UPI payments and bill recharges'
      }
    ]
  },
  {
    path: '/freerecharge.apk',
    priority: '0.8',
    changefreq: 'monthly'
  },
  {
    path: '/earnflow.apk',
    priority: '0.8',
    changefreq: 'monthly'
  },
  {
    path: '/privacy',
    priority: '0.5',
    changefreq: 'monthly'
  },
  {
    path: '/terms',
    priority: '0.5',
    changefreq: 'monthly'
  },
  {
    path: '/support',
    priority: '0.6',
    changefreq: 'monthly'
  },
  {
    path: '/features',
    priority: '0.7',
    changefreq: 'monthly'
  },
  {
    path: '/download-guide',
    priority: '0.6',
    changefreq: 'monthly'
  },
  {
    path: '/faq',
    priority: '0.6',
    changefreq: 'monthly'
  },
  {
    path: '/contact',
    priority: '0.5',
    changefreq: 'monthly'
  }
];

function generateSitemap() {
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
  
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  sitemap += '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n\n';

  pages.forEach(page => {
    sitemap += '  <url>\n';
    sitemap += `    <loc>${config.baseUrl}${page.path}</loc>\n`;
    sitemap += `    <lastmod>${today}</lastmod>\n`;
    sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
    sitemap += `    <priority>${page.priority}</priority>\n`;
    
    if (page.images) {
      page.images.forEach(image => {
        sitemap += '    <image:image>\n';
        sitemap += `      <image:loc>${config.baseUrl}${image.loc}</image:loc>\n`;
        sitemap += `      <image:title>${image.title}</image:title>\n`;
        sitemap += `      <image:caption>${image.caption}</image:caption>\n`;
        sitemap += '    </image:image>\n';
      });
    }
    
    sitemap += '  </url>\n\n';
  });

  sitemap += '</urlset>';

  // Write sitemap to file
  const outputPath = path.resolve(__dirname, config.outputPath);
  fs.writeFileSync(outputPath, sitemap);
  
  console.log(`✅ Sitemap generated successfully at: ${outputPath}`);
  console.log(`📅 Last modified: ${today}`);
  console.log(`🔗 Total pages: ${pages.length}`);
}

// Run the generator
if (require.main === module) {
  generateSitemap();
}

module.exports = { generateSitemap, config, pages };