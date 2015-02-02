Package.describe({
  name: 'purepattern:collection-mocker',
  version: '0.0.6',
  // Brief, one-line summary of the package.
  summary: 'Mocker for collections using a simple schema',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/PurePattern/meteor-collection-mocker',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.use('peerlibrary:dimsum@0.1.8_6');
  api.addFiles('collection-mocker.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('purepattern:collection-mocker');
  api.addFiles('collection-mocker-tests.js');
});
