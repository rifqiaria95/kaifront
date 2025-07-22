var path = require('path')
var WebpackConfig = require('themekit-webpack-config')
var config = new WebpackConfig()
	.withStandaloneEntry('vue-isotope')
	.withLibrary('VueIsotope')
	.withAlias({
		'vue-isotope': path.resolve(__dirname, '..')
	})
	.addLoader(
		// hack to be able to require isotope-layout via webpack
		// see http://isotope.metafizzy.co/appendix.html#webpack
		{ test: /isotope\-|fizzy\-ui\-utils|desandro\-|masonry|packery|outlayer|get\-size|doc\-ready|eventie|eventemitter/, loader: 'imports?define=>false&this=>window' }
	)

module.exports = config