module.exports = function() {
	
	return {
		
		compile: {
			
			options: {
				pretty: false,
				debug: false,
				timestamp: "<%= new Date().getTime() %>"
			},
			
			files: {
				'index.html': ['dev/views/index.jade']
			}

		}

	};

}