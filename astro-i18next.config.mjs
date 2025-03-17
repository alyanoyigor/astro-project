/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  locales: ['en', 'fr', 'uk'],
  defaultLocale: 'en',
  namespaces: ["about", "common", "home", "blog", "favorites"],
  defaultNamespace: "common",
};
