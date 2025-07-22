// Load components
import Isotope from './components/isotope'
import IsotopeItem from './components/isotope-item'

let VueIsotope = {
	Isotope,
	IsotopeItem
}

// Setup
VueIsotope.install = function (Vue) {}

// auto install in browser
if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(VueIsotope)
}

// ES6
export default VueIsotope

// CommonJS
module.exports = exports.default