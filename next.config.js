/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        "landingfoliocom.imgix.net",
        "assets.aceternity.com",
        "images.unsplash.com",
        "backendcrm.homepapa.ca",
        "crm.homepapa.ca",
        "cdn.rareblocks.xyz",
        "api.microlink.io",
        "plus.unsplash.com",
        "lh3.googleusercontent.com" ,
        "tailwindui.com",
        "images.pexels.com"
      ],
      remotePatterns: [
        {
          protocol: "https",
          hostname: "cdn.sanity.io",
        },
      ],
    },
  };
  
  module.exports = nextConfig;