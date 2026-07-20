/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Root → The Build (build-b) is the new primary door. Non-permanent so we can retarget later.
      { source: "/", destination: "/build-b", permanent: false },
      // Retired product routes → old Greenfield / Brownfield doors kept alive (301, preserve ad-linked traffic).
      { source: "/idea", destination: "/greenfield", permanent: true },
      { source: "/out", destination: "/brownfield?angle=ceiling", permanent: true },
      { source: "/grow", destination: "/brownfield?angle=traction", permanent: true },
    ];
  },
};
module.exports = nextConfig;
