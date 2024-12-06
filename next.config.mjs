import withExportImages from 'next-export-optimize-images'

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: "/match-bond-new",
    /**
     * Disable server-based image optimization. Next.js does not support
     * dynamic features with static exports.
     *
     * @see https://nextjs.org/docs/views/api-reference/components/image#unoptimized
     */
    images: {
    },
    compiler: {
    },
    sassOptions: {

    },
    convertFormat: [
        ['png', 'webp'],
        ['jpg', 'webp'],
    ],
};

export default withExportImages(nextConfig);
