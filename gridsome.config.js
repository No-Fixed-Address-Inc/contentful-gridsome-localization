module.exports = {
  templates: {
    // Add templates for content types here.
    // Read more: https://gridsome.org/docs/templates/
    ContentfulBlogPost: '/blog/:title',
  },
  plugins: [
    {
      use: '@gridsome/source-contentful',
      options: {
        space: '33x91w7h0xu5', // required
        accessToken: 'xch7RV1G5RDUvzW-tN9MzndPwlz85RgmQw8Wz_jNgBs', // required
        typeName: 'Contentful',
        parameters: {
          locale: "*"
       }
      }
    },
    {
      use: "gridsome-plugin-i18n",
      options: {
        locales: [ // locales list
          'en-US',
          'zh-CN'
        ],
        pathAliases: { // path segment alias for each locales
          'en-US': 'en',
          'zh-CN': 'cn'
        },
        fallbackLocale: 'en', // fallback language
        defaultLocale: 'en', // default language
        enablePathRewrite: true, // rewrite path with locale prefix, default: true
        rewriteDefaultLanguage: false, // rewrite default locale, default: true
        messages: {
          'en-US': require('./src/locales/en-US.json'),
          'zh-CN': require('./src/locales/zh-CN.json'),
        }
      }
    }
  ]
}
