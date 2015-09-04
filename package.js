Package.describe({
  name: 'nwdev:copyrighter',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Add a copyright mark to your Meteor project with a call in Meteor.startUp',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use(['ui','templating'], 'client');
  api.addFiles('cTemplate.html', 'client');
  api.addFiles('copyrighter.js');
  api.addFiles('copyrighter.css', 'client');
  api.export('setCopyright', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('nwdev:copyrighter');
  api.addFiles('copyrighter-tests.js');
});
