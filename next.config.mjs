import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  basePath: '/docs',
  output: 'export',
  serverExternalPackages: ['@takumi-rs/image-response'],
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  skipTrailingSlashRedirect: true,
};

export default withMDX(config);