var load_state = {
	preload: function() {
		this.game.stage.backgroundColor = '#71c5cf';
		this.game.load.image('bird', 'assets/brain.png');
		this.game.load.image('pipe', 'assets/pipe.png');
		this.game.load.audio('jump', 'assets/jump.wav');
	},
	create: function() {
		this.game.state.start('menu');
	}
};