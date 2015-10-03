var net = require('net');
var readline = require('readline');

var HOST = '127.0.0.1';
var PORT = 6969;

var client = new net.Socket();
var rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('OHAI> ');
rl.prompt();

rl.on('line', function(line) {
	client.connect(PORT, HOST, function() {
	    client.write(line.trim());
	});

	rl.prompt();
});
