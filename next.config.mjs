import withExportImages from 'next-export-optimize-images'

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: "/match-bond-new",
    images: {
    },
    compiler: {
    },
    sassOptions: {

    },

};

export default withExportImages(nextConfig);
