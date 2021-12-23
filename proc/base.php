<?PHP 

//include "../inc/conection.inc";

// session_start();
// if ($_SESSION['status'] == 'logado'){

//     $query = "";
//     $result = mysqli_query($link,$query);
    
//     $objeto = mysqli_fetch_object($result);

// }


$imagem  = $_FILES['imagem'];

echo $imagem['name'];
echo $imagem['type'];
echo $imagem['tmp_name'];
echo $imagem['error'];
echo $imagem['size'];





?>

