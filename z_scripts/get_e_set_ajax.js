function getXXXXXXXXX(where_id = "") {
    var ajax = new XMLHttpRequest();
    ajax.open("POST", "xxxxxxxxxxxxx.php");
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax.responseType = "json";
    ajax.send("where_id=" + where_id);
    ajax.onreadystatechange = function() {
            if (ajax.readyState == 4 && ajax.status == 200) {
                console.log(ajax.response);
            }
        }
        /*          PHP
            $where_id = $_POST['where_id'];
            $query = "SELECT * FROM `XX_TABLE_XX` WHERE `id` = '$where_id'";
            $result = mysqli_query($link , $query);
            $object = mysqli_fetch_object($result);            
            echo json_encode($object);
        */
}


function setXXXXXXXXXXXo(atributo_to_set, novo_valor, where_id) {
    var ajax = new XMLHttpRequest();
    ajax.open("POST", "xxxxxxxxxxxxx.php");
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //ajax.responseType = "json";
    ajax.send("atributo_to_set=" + atributo_to_set + "&novo_valor=" + novo_valor + "&where_id=" + where_id);
    ajax.onreadystatechange = function() {
            if (ajax.readyState == 4 && ajax.status == 200) {
                //console.log(ajax.response);
            }
        }
        /*      PHP
        $where_id = $_POST['where_id'];
        $atributo_to_set = $_POST['atributo_to_set'];
        $novo_valor = $_POST['novo_valor'];

        $query = "UPDATE `policial` SET `$atributo_to_set` = '$novo_valor' WHERE `policial`.`id` = '$where_id';";

        $result = mysqli_query($link , $query);    
        */

}