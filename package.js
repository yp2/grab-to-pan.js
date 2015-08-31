// package metadata file for Meteor.js
var packageName = 'yp2:grab-to-pan.js';
var where = 'client'; // where to install: 'client' or 'server'. For both, pass nothing.
var version = '1.0.0';
var summary = 'grab-to-pan.js. Meteor package.';
var gitLink = 'https://github.com/yp2/grab-to-pan.js';
var documentationFile = 'README.md';

// Meta-data
Package.describe({
    name: packageName,
    version: version,
    summary: summary,
    git: gitLink,
    documentation: documentationFile
});

Package.onUse(function(api) {
    api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']); // Meteor versions

    var files = [
        'grab-to-pan.css',
        'grab-to-pan.js',
        'grab.cur',
        'grabbing.cur'
    ];

    api.addFiles(files, where);
    api.export('GrabToPan', where)
});
