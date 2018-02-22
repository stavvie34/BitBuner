scp('workout-forever.script', 'sigma-cosmetics');
exec('workout-forever.script', 'sigma-cosmetics', 1);
if ((prompt('Click "yes" to kill the workout-forever script.')) === true) {
	kill('workout-forever.script', 'sigma-cosmetics');
	tprint('workout-forever.script has been killed.');
}