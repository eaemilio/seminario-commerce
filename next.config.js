const commerce = require('./commerce.config.json')
const {
  withCommerceConfig,
  getProviderName,
} = require('./framework/commerce/config')

const provider = 'local';

module.exports = withCommerceConfig({
  commerce,
  i18n: {
    locales: ['es'],
    defaultLocale: 'es',
  },
})

// Don't delete this console log, useful to see the commerce config in Vercel deployments
console.log('next.config.js', JSON.stringify(module.exports, null, 2))
