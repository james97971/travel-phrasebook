// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // ❌ i18n 설정 넣지 마세요. 넣으면 /en/ko가 로케일로 먹혀서 404 납니다.
};

export default nextConfig;
