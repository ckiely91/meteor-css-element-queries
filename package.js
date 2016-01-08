Package.describe({
	name: "ckiely:css-element-queries"
	summary: "Simple wrapper for CSS Element Queries",
	version: "0.0.1",
	git: "https://github.com/ckiely91/meteor-css-element-queries"
});

Package.onUse(function(api) {
	api.addFiles('ResizeSensor.js', 'client');
	api.addFiles('ElementQueries.js', 'client');
});