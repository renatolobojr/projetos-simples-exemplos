/** Olá, eu quero mudar a propriedade do body de uma página html com javascript.

A idéia é mudar a imagem de fundo do body dependendo de um option selecionado num select.

Mais ou menos assim:**/

<select name="select" id="select" onchange="troca()">
<option value="1">1</option>
<option value="2">2</option>
</select>

<script>
function troca(){
        var op = $('#select').val();
        
        if(op==1){
            document.body.style="background: blue;";
        }else{
            document.body.style="background: red;";
        }
    }
</script>

/**

document.body.style.background = “red”


*/
