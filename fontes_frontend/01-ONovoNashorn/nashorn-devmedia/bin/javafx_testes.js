var Button = javafx.scene.control.Button;
var StackPane = javafx.scene.layout.StackPane;
var Scene = javafx.scene.Scene;

function start(estagioInicial) {
	estagioInicial.title = "Ola Mundo!";
	var button = new Button();
	button.text = "Dizer 'Ola Mundo!'";
	button.onAction = function() print("Ola Mundo!");
	var root = new StackPane();
	root.children.add(button);
	estagioInicial.scene = new Scene(root, 300, 250);
	estagioInicial.show();
}