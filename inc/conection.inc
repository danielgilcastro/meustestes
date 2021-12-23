<?PHP 
date_default_timezone_set('America/Sao_Paulo');

$host = "127.0.0.1";
$user = "root";
$password = "";
$database = "db_projeto_praia";
$port = "3306";
$socket = "C:/Program Files (x86)/EasyPHP-Devserver-17/eds-binaries/dbserver/mysql5717x86x210310095448/mysql.sock";

$link = mysqli_connect($host,$user,$password,$database,$port,$socket);

?>