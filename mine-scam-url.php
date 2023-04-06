<?php

$url = "https://ms5hf7.cn/j/ntb.php?c=7-eleven-my&m=7-eleven-my-m&tg=7-eleven-my&ln=7-eleven-my&vb=7-eleven-my&_t=1680754874449";

$o = fopen("urls.txt", "a+");
$n = 1;

while(true){
	$res = file_get_contents($url);
	
	fwrite($o, $res);
	
	if($n > 20){
		break;
	}
	
	$n++;
}

fclose($o);