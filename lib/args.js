module.exports = require('optimist')
	.usage('Usage: $0 [-b|-h|-s|-W <width>|-H <height>|-S <port>|-c <host>]')
	.alias('W', 'width').describe('W', 'Set the width of the playing field').default('W', 80)
	.alias('H', 'height').describe('H', 'Set the height of the playing field').default('H', 24)
	.alias('b', 'beep').describe('b', 'Enable beeping').boolean('b').default('b', false)
	.alias('h', 'help').describe('h', 'Help!').boolean('h')
	.alias('s', 'safer').describe('s', 'Safer output for running over SSH/Mosh/etc.').boolean('s').default('s', false)
	.alias('S', 'server').describe('S', 'Host a Pong server instead of playing Pong.')
	.alias('c', 'connect').describe('c', 'Connect to another Pong server')