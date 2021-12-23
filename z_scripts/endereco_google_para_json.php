<?PHP

$enderecoStrg ="R. Siuko Akegawa, 251-1 - Jardim da Prata, Magé - RJ, 25903-587";

if (sizeof(explode(" - ",$enderecoStrg)) >= 3  ) {
    $ndereco["logradouro"] = explode(" - ", $enderecoStrg)[0];
    $endereco["bairro"] = explode(',',explode(" - ", $enderecoStrg)[1])[0];
    $endereco["municipio"] = explode(',',explode(" - ", $enderecoStrg)[1])[1];
    $endereco["uf"] = explode(',',explode(" - ", $enderecoStrg)[2])[0];
    $endereco["cep"] = explode(',',explode(" - ", $enderecoStrg)[2])[1];
   
   
    echo json_encode($endereco);
}






?>