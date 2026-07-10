/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Root → primary Brownfield door (non-permanent so we can retarget later).
      { source: "/", destination: "/brownfield", permanent: false },
      // Retired product routes → new Greenfield / Brownfield doors (301, preserve ad-linked traffic).
      { source: "/idea", destination: "/greenfield", permanent: true },
      { source: "/out", destination: "/brownfield?angle=ceiling", permanent: true },
      { source: "/grow", destination: "/brownfield?angle=traction", permanent: true },
    ];
  },
};
module.exports = nextConfig;
