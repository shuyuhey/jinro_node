exports.index = function(req, res) {
  return res.render("index", {
    title: 'おまえ人狼みたいな顔してんな' ,
    page: 'index'
  });
};

exports.create_room = function(req, res) {
  var token = require('crypto').randomBytes(32).toString('hex');
  res.render('create_room', {
    title: 'ルーム新規作成 - おまえ人狼みたいな顔してんな',
    page: 'create_room',
    room_url: "http://" + req.header('host') + "/room/" + token,
    token: token});
};

exports.room = function(req, res) {
  console.log(req.params.id);
  res.render('room', {
    title: 'ルーム - おまえ人狼みたいな顔してんな',
    page: 'create_room',
    room_url: "http://" + req.header('host') + "/room/"});
};
