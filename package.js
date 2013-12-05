Package.describe({
  summary: "Firebase Token Generator wrapper for Meteor"
});

Npm.depends({ "firebase-token-generator": "0.1.4" });

Package.on_use(function(api) {
  if (api.export) api.export('FirebaseTokenGenerator', 'server');
  api.add_files('firebase_token_generator.js', 'server');
});
