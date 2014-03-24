var game = new Phaser.Game(400, 490, Phaser.AUTO, 'game_div');

var score = 0;

var updateScore = function() {
	var scope = angular.element($("#app")).scope();
	scope.$apply(function() {
		scope.score = score;
	});
};

game.state.add('load', load_state);
game.state.add('menu', menu_state);
game.state.add('play', play_state);

game.state.start('load');