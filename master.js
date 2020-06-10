
// essa função inicia a aplicação sempre com o "foco" no nome! - isso só acontece quando atualiza a página
(function() {
    var inNome = document.getElementById('inNome');
    inNome.focus();
    return;
})();

// Criando uma lista para armazenar os dados

var clientes = [];

// Referenciando os elementos pela sua ID

const inNome = document.getElementById('inNome');
const inTelefone = document.getElementById('inTelefone');
const inLanches = document.getElementById('inLanches');
const inBebidas = document.getElementById('inBebidas');
const inRua = document.getElementById('inRua');
const inComplemento = document.getElementById('inComplemento');

const error = document.getElementById('error');
const btnRegistrar = document.getElementById('btnRegistrar');

// Esse evento vai monitorar o que for escrito no campo nome
inNome.addEventListener("keyup", function(){
    var value = this.value;
    if(value == "" || value == " ") {
        error.style.display = "inline-block";
        error.textContent = "O nome é obrigatório!"
        inNome.focus();
        return;
    } else {
        error.style.display = "none";
    }
});

// Essa parte vai formatar o número de telefone
inTelefone.addEventListener("change", function(){
    var telefone = inTelefone.value;

    var ddd = telefone.charAt(0) + telefone.charAt(1);
    var nove = telefone.charAt(2);
    var num1 = telefone.charAt(3) +
                telefone.charAt(4) +
                telefone.charAt(5) +
                telefone.charAt(6);
    var num2 = telefone.charAt(7) +
                telefone.charAt(8) +
                telefone.charAt(9) +
                telefone.charAt(10);
inTelefone.value = "(" + ddd + ")" + " " + nove + num1 + "-" + num2;
});

// Essa parte salva os dados ao enviar o pedido
btnRegistrar.addEventListener("click", function(){
    //bebida
    var b = inBebidas.selectedIndex;
    var bebida = inBebidas.options[b].text;

    //lanche
    var l = inLanches.selectedIndex;
    var lanche = inLanches.options[l].text;

    // dados do cliente
    var tel = inTelefone.value;
    var nome = inNome.value;
    var rua = inRua.value;
    var compl = inComplemento.value;

    // criação do objeto
    var cliente = {
        nome: nome,
        telefone: tel,
        rua: rua,
        complemento: compl,
        lanche: lanche, 
        bebida: bebida
    }

    // Adicionando o cliente a lista criada anteriormente
    clientes.push(cliente);

    // Esse codigo "zera" a pagina
    var form = document.getElementsByTagName("input");
        for (var i = 0; i < form.length; i++) {
            form[i].value = "";
        }

    inNome.focus();

});