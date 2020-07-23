<?php
	$json = file_get_contents('php://input');
	$data = json_decode($json);
	$st = ($post);
	$date = date(' Y-m-d H:i');
	file_put_contents('log/game.log', $json . $date . "\n", FILE_APPEND);
	echo 'yes';
?>