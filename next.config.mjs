/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "fakestoreapi.com", // ✅ Only the domain
                port: "",
                pathname: "/**",             // ✅ Allow all paths under this domain
            },
        ],
    },
};

export default nextConfig;