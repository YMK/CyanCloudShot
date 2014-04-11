var screenshot = require('./screenshot.js');
function test () {
	screenshot.run(process.argv[2], process.argv[3])
}

setInterval(test, 600000);
