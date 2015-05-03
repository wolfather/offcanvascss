module.exports = function( grunt ) {
	var cfg = {
		connect 		: require('./grunttasksconfigs/livereload.config'),
		compass 		: require('./grunttasksconfigs/compass.config'),
		cssmin 			: require('./grunttasksconfigs/cssmin.config'),
		jade 			: require('./grunttasksconfigs/jade.config')
	};
	
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		connect: cfg.connect(),

		compass : cfg.compass(),

		cssmin: cfg.cssmin(),
		
		jade: cfg.jade()
	});
	
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');


	// Default task(s).
	grunt.registerTask('htmldeploy', ['jade']);
	grunt.registerTask('cssminify', ['cssmin']);
	grunt.registerTask('csscompass', ['compass']);
	grunt.registerTask('cssdeploy', ['compass', 'cssmin']);

	grunt.registerTask('deploy', ['jade', 'compass', 'cssmin']);
	grunt.registerTask('default', ['connect']);
}