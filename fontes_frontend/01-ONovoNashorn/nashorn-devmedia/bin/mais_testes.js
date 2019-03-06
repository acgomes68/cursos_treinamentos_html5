function testeValoresAPartirDoJS() {
	var idade = 30;
	// O valor é recuperado e passado para um objeto SimpleBindings
	SimpleBindings
	bindingSimples = new SimpleBindings();
	simpleBindings.put("globalValue", idade);
	// No momento de traduzir a expressão, o binding é feito
	nashorn.eval("print (globalValue)", bindingSimples);
}

// ---
function testeFuncaoOrdemSuperior() {
	var listaGenerica = [ 'ABC', 4, new java.lang.Object(), 2.45 ];
	listaGenerica.forEach(function(elemento) {
		print(elemento);
	});
	// Ou..
	var lista = java.util.Arrays.asList(listaGenerica);
	lista.forEach(function(elemento) { print(elemento) } ); 
}
testeFuncaoOrdemSuperior();