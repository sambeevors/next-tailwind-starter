const withAlias = require('@blunck/next-alias')({
  '~': __dirname + '/src',
  '@root': __dirname + '/'
})

module.exports = withAlias()
