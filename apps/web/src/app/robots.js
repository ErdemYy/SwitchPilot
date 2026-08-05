"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = robots;
function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/admin/', '/api/'],
        },
        sitemap: 'https://switchpilot.io/sitemap.xml',
    };
}
