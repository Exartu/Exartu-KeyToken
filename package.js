Package.describe({
  summary: "key tokens",
  name: 'javiber:keytoken'
});

Package.onUse(function (api){

  api.versionsFrom('0.9.0')
//  api.add_files(['client.js'],'client');
  api.addFiles(['server.js'],'server');
  api.export('KeyToken');
});