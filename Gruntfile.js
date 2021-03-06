/*
 After you have changed any settings for the responsive_images task,
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function (grunt) {

    grunt.initConfig({
        responsive_images: {
            dev: {
                options: {
                    separator: "",
                    engine: 'im',
                    sizes: [
                        {
                            name: "_large_1x",
                            width: '50%'
}, {
                            name: "_medium_2x",
                            width: '70%'
}, {
                            name: "_medium_1x",
                            width: '37.50%'
}, {
                            name: "_small_2x",
                            width: '25%'
}, {
                            name: "_small_1x",
                            width: '12.50%'
}]
                },
                files: [{
                    expand: true,
                    src: ['{htmlcode,sea,phones,taxi}.{gif,jpg,png}'],
                    cwd: 'img/',
                    dest: 'img_new/'
        }]

            }
        },

        /* Clear out the images directory if it exists */
        clean: {
            dev: {
                src: ['images'],
            },
        },

        /* Generate the images directory if it is missing */
        mkdir: {
            dev: {
                options: {
                    create: ['images']
                },
            },
        },

        /* Copy the "fixed" images that don't go through processing into the images/directory */
        copy: {
            dev: {
                files: [{
                    expand: true,
                    src: ['images_src/fixed/*.{gif,jpg,png}'],
                    dest: 'images/',
                    flatten: true,
        }]
            },
        },

    });

    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images']);

};
