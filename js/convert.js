
function convert(){
    let litre = document.getElementById("txtlitre").value;
    let txtcl = document.getElementById("txtcl");
    let txtml = document.getElementById("txtml");

    cl = litre * 100;
    ml = litre * 1000;
    txtcl.value = cl;
    txtml.value = ml;

}

const cont = document.getElementById("txtlitre");
cont.addEventListener("keyup", convert);

const contclear = document.getElementById("btnClear");
contclear.addEventListener("click", function(){
    if (!confirm("are u sure?")){
        event.preventDefault();
    }
});