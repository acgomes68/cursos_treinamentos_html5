function ola() {
	var ola = 'DEVMEDIA'.toLowerCase();
	itera();
	print('Ola Mundo ' + ola + '!');
}
function itera() {
	var cont = 1;
	for (var i = 0, max = 5; i < max; i++) {
		cont++;
	}
	print('Valor da var cont: ' + cont);
}
ola();