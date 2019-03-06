function loop() {
	for (i = 0; i < 5; i++) {
		print("Quantidade de tentativas: " + i);
		java.lang.Thread.sleep(2000);
	}
	iniciarThread();
}
loop();

function iniciarThread() {
	// this is how we get access to Java class Thread
	var Thread = Java.type("java.lang.Thread");

	// subclass with our run method
	var MyThread = Java.extend(Thread, {
		run : function() {
			print("Executou em uma Thread separada!");
		}
	});
	var th = new MyThread();
	th.start();
	th.join();
}