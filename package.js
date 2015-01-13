Package.describe({
  summary: "key tokens",
  name: 'aida:keytoken',
  version: '0.1.0',
  git: "https://github.com/Exartu/Exartu-KeyToken.git"
});

Package.onUse(function (api){

  api.versionsFrom('0.9.0')
//  api.add_files(['client.js'],'client');
  api.addFiles(['server.js'],'server');
  api.export('KeyToken');
});
