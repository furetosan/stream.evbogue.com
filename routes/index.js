
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Ev Bogue\'s Stream' });
};