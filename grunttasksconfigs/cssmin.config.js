module.exports = function() {
	return {

		options: {
			shorthandCompacting: false,
			roundingPrecision: 30
		},
		target: {
			files: {
				'assets/css/offcanvas.min.css': ['assets/css/offcanvas.css']
			}
		}

	}

}