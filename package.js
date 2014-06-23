Package.describe({
  summary: "key tokens"
});

Package.on_use(function (api){

//  api.add_files(['client.js'],'client');
  api.add_files(['server.js'],'server');
  api.export('KeyToken');
});