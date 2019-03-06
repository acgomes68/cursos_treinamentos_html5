$(document).ready(function() {
    
	$("#credito").change(function() {
		var credito = parseFloat($(this).val());
		realizaCalculo(credito);
	});

	function realizaCalculo (credito) {
		var bonus = 0;
		var total = 0;

		if (credito >= 50 && credito < 100) {
			bonus = parseFloat((credito*0.1).toFixed(2));
			total = credito+bonus;
			$(".bonus").html("Bônus R$"+bonus.toString());
			$(".bonus").attr("data-ativo", "bonus");
			$(".bonus").attr("data-bonus", bonus);
			$(".total").attr("data-total", total);
		} else if (credito >= 100) {
			bonus = parseFloat((credito*0.2).toFixed(2));
			total = credito+bonus
			$(".bonus").html("Bônus R$"+bonus.toString());
			$(".bonus").attr("data-ativo", "super-bonus");
			$(".bonus").attr("data-bonus", bonus);
			$(".total").attr("data-total", total);
		} else {
			$(".bonus").empty();
			$(".bonus").attr("data-ativo", "");
			$(".bonus").attr("data-bonus", "");
			$(".total").attr("data-total", credito);
		}
	}


	$("form").submit(function(e) {
		e.preventDefault();

		var credito = $("#credito").val();
		var bonus = $(".bonus").attr("data-bonus");
		var total = $(".total").attr("data-total");

		$.ajax({
			url: 'http://arquivo.devmedia.com.br/projeto/requisicao.php',
			type: 'POST',
			data: {
				credito: credito, 
			  	bonus: bonus,
			  	total: total
			},
		})
		.done(function() {
			$("#credito").empty();
			$(".bonus").empty();
			$(".total").empty();
			$(".status").html("O valor total de R$"+total+" foi adicionado com sucesso.");                                                                             		
		})
		.fail(function() {
			$(".status").html("Erro, não foi possivel adicionar o bônus");
		});
	});

	$('#credito').focus(function() {
		$(".status").empty();
	});


});