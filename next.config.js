/** @type {import('next').NextConfig} */
const nextConfig = {
    api: {
        responseLimit: '8mb',
        bodyParser: {
            sizeLimit: '500kb',
        },
    },
}

module.exports = nextConfig