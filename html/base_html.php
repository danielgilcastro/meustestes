<?PHP 
//  include "../inc/conection.inc";
session_start();
if ($_SESSION['status'] == 'logado'):
    
    $query = "";
    $result = mysqli_query($link,$query);

    
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/base.css">
    <title>Document</title>
</head>
<body>
    
    <h1>Base</h1>
</body>
<script src="../scripits/base.js"></script>
</html>


<?PHP 
endif;
?>