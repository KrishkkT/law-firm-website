import { Helmet } from 'react-helmet';

export default function SEO({ title, description, ogTitle, ogDescription, ogType = 'website', canonicalUrl }) {
  const siteTitle = 'Thakker & Associates';
  const fullTitle = title ? `${title} | ${siteTitle}` : `${siteTitle} | Premium Law Firm in Bhavnagar`;
  const defaultDescription = 'Thakker & Associates provides exceptional legal representation with integrity and expertise in Bhavnagar, Gujarat.';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || description || defaultDescription} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || fullTitle} />
      <meta name="twitter:description" content={ogDescription || description || defaultDescription} />
      
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    </Helmet>
  );
}
