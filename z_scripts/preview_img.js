console.log("entrou o base.js")

function readImage() {
    if (this.files && this.files[0]) {
        var file = new FileReader();
        file.onload = function(e) {
            document.getElementById("preview").src = e.target.result;
        };
        file.readAsDataURL(this.files[0]);
    }
}
//document.getElementById("img-input").addEventListener("change", readImage, false);
document.getElementById("img-input").onchange = readImage

/*    no HTML
    <form action="proc/base.php" enctype="multipart/form-data" method="POST">

        <div>
            <input id="img-input" type="file" name="imagem" accept="image/*">
        </div>

        <div id="img-container">
            <img id="preview" src="" width="150px">
        </div>

        <br><button type="submit">Enviar</button>


    </form>
*/