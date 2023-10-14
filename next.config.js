const { hostname } = require('os')

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com',"plus.unsplash.com","flowbite.s3.amazonaws.com"]
      },
}

module.exports = nextConfig
