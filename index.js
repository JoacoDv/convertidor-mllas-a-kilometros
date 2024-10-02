const input = document.getElementById("kilometers");
const button = document.getElementById("btn-convertidor");
const text = document.getElementById("resultado");


button.addEventListener("click", () => {
    if (input.value === "") {
        alert("Ingrese algun dato")
    }
    else if (input.value < 0) {
        alert("No se puede ingresar valores negativos")
    }
    const kilometros = input.value.replace("e", "");
    const millas = kilometros * 0.621371    
    text.textContent = `${kilometros} kilómetros son equivalentes a ${millas} millas`
})