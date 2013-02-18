
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { 
  	title: 'Ev Bogue\'s Stream',
  	gravatar: 'https://secure.gravatar.com/avatar/40a5e089f8c877d995141f9a780fadc9?s=420'
  	});
};