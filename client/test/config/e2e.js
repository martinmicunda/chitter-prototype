// base path, that will be used to resolve files and exclude
basePath= '../..';

// list of files / patterns to load in the browser
files= [
    ANGULAR_SCENARIO,
    ANGULAR_SCENARIO_ADAPTER,
    'test/e2e/**/*.scenario.js'
];

// list of files to exclude
exclude= [];

// use dots reporter, as travis terminal does not support escaping sequences
// possible values: 'dots', 'progress'
// CLI --reporters progress
reporters= ['progress'];

junitReporter= {
  // will be resolved to basePath (in the same way as files/exclude patterns)
  outputFile: 'test_out/e2e-results.xml'
};

// web server port
// CLI --port 9876
port= 9876;

// cli runner port
// CLI --runner-port 9009
runnerPort = 9009;

urlRoot= '/__test/';

// enable / disable colors in the output (reporters and logs)
// CLI --colors --no-colors
colors= true;

// level of logging
// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
// CLI --log-level debug
logLevel= LOG_INFO;

// enable / disable watching file and executing tests whenever any file changes
// CLI --auto-watch --no-auto-watch
autoWatch= false;

// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
// CLI --browsers Chrome,Firefox,Safari
browsers= [process.env.TRAVIS ? 'Firefox' : 'Chrome'];

// If browser does not capture in given timeout [ms], kill it
// CLI --capture-timeout 5000
captureTimeout= 20000;

// Auto run tests on start (when browsers are captured) and exit
// CLI --single-run --no-single-run
singleRun= true;

// report which specs are slower than 500ms
// CLI --report-slower-than 500
reportSlowerThan= 500;

plugins= [
    'karma-jasmine',
    'karma-chrome-launcher',
    'karma-firefox-launcher',
    'karma-junit-reporter'
];
