module.exports = function() {
	
	return {
		
		prod: {
			
			options: {
				pretty: false,
				debug: false,
				comments: false
			},
			
			files: {
				'index.html': ['dev/views/index.jade']
			}

		},

		dev : {
			options: {
				pretty: true,
				debug: true,
				comments: true,
				timestamp: "<%= new Date().getTime() %>"
			},
			
			files: {
				'index-dev.html': ['dev/views/index.jade']
			}
		}

	};

}