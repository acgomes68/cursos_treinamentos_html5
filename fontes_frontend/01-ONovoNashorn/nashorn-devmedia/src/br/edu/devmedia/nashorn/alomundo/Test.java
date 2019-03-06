package br.edu.devmedia.nashorn.alomundo;

import java.util.Arrays;
import java.util.List;
import java.util.function.Consumer;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

public class Test {

	public static void main(String[] args) {
		new Test().executarViaArquivoJS();
		// new Test().executarViaCodigoInline();
	}

	private void executarViaArquivoJS() {
		try {
			ScriptEngineManager factory = new ScriptEngineManager();
			ScriptEngine engine = factory.getEngineByName("nashorn");
			engine.eval("load(\"src/mais_testes.js\");");
		} catch (Exception ex) {
			ex.printStackTrace();
		}
	}

	private void executarViaCodigoInline() {
		try {
			ScriptEngineManager factory = new ScriptEngineManager();
			ScriptEngine engine = factory.getEngineByName("nashorn");
			engine.eval("function ola() {\n	var ola = 'DEVMEDIA'.toLowerCase();\n	itera();\n	print('Ola Mundo ' + ola + '!');\n}\nfunction itera() {\n	var cont = 1;\n	for (var i = 0, max = 5; i < max; i++) {\n		cont++;\n	}\n	print('Valor da var cont: ' + cont);\n}\nola();");
		} catch (ScriptException ex) {
			ex.printStackTrace();
		}
	}

	private void testeValoresAPartirDoJava() {
		try {
			ScriptEngineManager scriptEngineManager = new ScriptEngineManager();
			ScriptEngine engine = scriptEngineManager.getEngineByName("nashorn");
			String nome = "Julio";
			// Os valores em Java podem ser passados em associação comum de strings
			engine.eval("print('Oi, " + nome + "! Tudo bem?')");
		} catch (ScriptException e) {
			e.printStackTrace();
		}
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	private void testeFuncaoOrdemSuperior() {
		List<? extends Object> listaGenerica = Arrays.asList("ABC", 4, new Object(), 2.45);
		listaGenerica.forEach(new Consumer() { 
		    @Override 
		    public void accept(Object object) { 
		        System.out.println(object); 
		    } 
		}); 
	}

}
