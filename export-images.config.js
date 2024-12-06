/**
 * @type {import('next-export-optimize-images').Config}
 */
const config = {
    basePath: "/match-bond-new",
    convertFormat: [
        ['png', 'webp'],
        ['jpg', 'webp'],
    ],
}

module.exports = config