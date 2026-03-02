import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  serverExternalPackages: ['@takumi-rs/image-response'],
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // 禁用不兼容静态导出的功能
  skipTrailingSlashRedirect: true,
};

export default withMDX(config);