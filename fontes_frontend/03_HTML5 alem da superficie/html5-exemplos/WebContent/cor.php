<?php
header('Content-Type: text/event-stream; charset=utf-8');
header('Cache-Control: no-cache');

switch(rand(1, 3))
{
	case 1:
		$cor = "red";
	break;
	case 2:
		$cor = "blue";
	break;
	case 3:
		$cor = "green";
	break;
}
echo "data: ".$cor."\n\n";
ob_flush();
flush();
?>
