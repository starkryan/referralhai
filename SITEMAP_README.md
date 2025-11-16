# Sitemap for SEO Optimization

This project includes an automatically generated sitemap to improve search engine ranking and discoverability.

## Files Created

### 1. `public/sitemap.xml`
- **Location**: `/public/sitemap.xml`
- **Purpose**: Main sitemap file for search engines
- **Contains**: All important pages with metadata

### 2. `public/robots.txt`
- **Location**: `/public/robots.txt`
- **Purpose**: Tells search engines where to find the sitemap
- **Contains**: Sitemap reference and crawling instructions

### 3. `scripts/generate-sitemap.js`
- **Location**: `/scripts/generate-sitemap.js`
- **Purpose**: Dynamic sitemap generator
- **Features**: Auto-updates dates and manages page listings

## Pages Included in Sitemap

| Page | Priority | Change Frequency | Description |
|------|----------|------------------|-------------|
| Homepage (`/`) | 1.0 | Weekly | Main landing page |
| APK Download (`/freerecharge.apk`) | 0.8 | Monthly | Direct app download |
| Privacy Policy (`/privacy`) | 0.5 | Monthly | Privacy information |
| Terms of Service (`/terms`) | 0.5 | Monthly | Legal terms |
| Support (`/support`) | 0.6 | Monthly | Help and support |
| Features (`/features`) | 0.7 | Monthly | App features |

## Usage

### Generate Sitemap Manually
```bash
npm run sitemap
```

### Auto-update Sitemap
Run the sitemap generator whenever you:
- Add new pages
- Update existing content
- Change app information
- Add new images

## SEO Benefits

1. **Better Indexing**: Search engines discover all pages faster
2. **Priority Signals**: Indicates which pages are most important
3. **Freshness Data**: Shows when content was last updated
4. **Image SEO**: Includes app screenshots and logo in search results
5. **Change Frequency**: Tells crawlers how often to revisit pages

## Configuration

To modify the sitemap, edit `scripts/generate-sitemap.js`:

```javascript
const pages = [
  {
    path: '/new-page',
    priority: '0.8',
    changefreq: 'weekly',
    images: [
      {
        loc: '/images/new-image.png',
        title: 'Image Title',
        caption: 'Image description'
      }
    ]
  }
];
```

## Submit to Search Engines

### Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property: `https://freerechargeapp.com`
3. Submit sitemap: `https://freerechargeapp.com/sitemap.xml`

### Other Search Engines
- **Bing**: Use Bing Webmaster Tools
- **Yandex**: Use Yandex.Webmaster
- **Baidu**: Use Ziyuan.baidu.com

## Best Practices

1. **Keep URLs HTTPS**: Ensure all URLs use HTTPS
2. **Update Regularly**: Regenerate sitemap when content changes
3. **Monitor Coverage**: Check search console for indexing issues
4. **Validate Sitemap**: Use tools to validate XML syntax
5. **Avoid Orphan Pages**: Ensure all important pages are included

## Automatic Updates

For production deployments, consider adding the sitemap generation to your build process:

```json
{
  "scripts": {
    "build": "next build && npm run sitemap"
  }
}
```