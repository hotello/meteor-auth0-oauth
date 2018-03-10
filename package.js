Package.describe({
  name: "hotello:auth0-oauth",
  summary: "Auth0 OAuth flow",
  version: "1.0.0"
});

Package.onUse(function(api) {
  api.versionsFrom('1.5');
  
  api.use('oauth2', ['client', 'server']);
  api.use('oauth', ['client', 'server']);
  api.use('http', ['server']);
  api.use('underscore', 'server');
  api.use('random', 'client');
  api.use('service-configuration', ['client', 'server']);

  api.addFiles('auth0_client.js', 'client');
  api.addFiles('auth0_server.js', 'server');

  api.export('Auth0');
});
