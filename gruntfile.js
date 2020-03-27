module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.initConfig ({
		uglify: {
			my_target: {
				files: {
					'_/js/script.js': ['_/components/js/*.js']
				} //files
			} //my_target
		}, //Uglify
		compass: {
			dev: {
				options: {
					config: 'config.rb'
				} //options
			} //dev
		}, //compass
		watch: {
			options: { livereload: true },
			scripts: {
				files: ['_/components/js/*.js'],
				tasks: ['uglify']
		}, //scripts
		sass: {
			files: ['_/components/sass/*.sass'],
			tasks: ['compass:dev']
		}, //sass
		html: {
			files: ['*.html']
		},
		} //watch
	}); //initConfig
	grunt.registerTask('default', ['watch']);
} //exports