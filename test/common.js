(function() {
    require.config({
        baseUrl: '',
        paths: {
            'jasmine': '../node_modules/jasmine-core/lib/jasmine-core/jasmine',
            'jasmine-html': '../node_modules/jasmine-core/lib/jasmine-core/jasmine-html',
            'boot': '../node_modules/jasmine-core/lib/jasmine-core/boot',
            'www/scripts/foo/Foo': '../www/scripts/foo/Foo',
            'www/scripts/foo/Bar': '../www/scripts/foo/Bar',
            'www/scripts/foo/Baz': '../www/scripts/foo/Baz'
        },
        shim: {
            'jasmine': {
                exports: 'window.jasmineRequire'
            },
            'jasmine-html': {
                deps: ['jasmine'],
                exports: 'window.jasmineRequire'
            },
            'boot': {
                deps: ['jasmine', 'jasmine-html'],
                exports: 'window.jasmineRequire'
            }
        }
    });


    require(['boot'], function(){
        // Load the specs
        require([
            '../test/unit-spec/FooSpec'

        ], function () {

            // Initialize the HTML Reporter and execute the environment (setup by `boot.js`)
            window.onload();
        });
    });
}());