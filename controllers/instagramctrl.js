var ig = require('instagram-node').instagram();

ig.use({
	access_token: '291450914.1677ed0.ce729fcf5d6844c5a588b2f44e0fa54d'
});

exports.media = function(req, res) {
		// use the instagram package to get popular media
		ig.user_self_media_recent(function(err, medias, pagination, remaining, limit) {
		// render the home page and pass in the popular images
		res.render('pages/index', { grams: medias });
	});
};