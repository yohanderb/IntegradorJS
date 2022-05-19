const categoria = document.getElementById("categoria");
const totalPagar = document.getElementById("total_pagar");
const cantidad = document.querySelector(".cantidad");
const borrar = document.querySelector(".borrar");
const resumen = document.querySelector(".resumen");
const valorBoleto = 200;

console.log(cantidad.value)


const aplicarDescuento = ()=>{
    let cantidadBoletos = cantidad.value;
    let total = "";
    let precioBoleto = "";
    if(categoria.value==="Estudiante"){
        precioBoleto = valorBoleto * 0.2;
        total = cantidadBoletos * precioBoleto;
        totalPagar.innerHTML = total;
    } else if(categoria.value==="Trainee"){
        precioBoleto = valorBoleto * 0.5;
        total = cantidadBoletos * precioBoleto;
        totalPagar.innerHTML = total;
    } else{
        precioBoleto = valorBoleto * 0.85;
        total = cantidadBoletos * precioBoleto;
        totalPagar.innerHTML = total;
    }

    borrar.addEventListener("click",()=>{
        totalPagar.innerHTML = "";
        cantidad.value = "";
    })

}


resumen.addEventListener("click",aplicarDescuento)


