let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]

function pesos() {

    let x = document.getElementById("monto").value; 
    let resultado = x /meses.length;    

    if (x == false) {
        swal("Porfavor ingrese algun numero")
    }

    else if(x < 3000) {
        swal("El numero ingresado debe ser mayor a $3000")
    }

    else {
        for (let i=0;i<meses.length;i++)
        document.getElementById("mostrarahorro").innerHTML = "Lo que usted debera ahorrar durante 12 meses sera la suma de $  " + resultado.toFixed(2) + " pesos uruguayos ";
     }
}

let dolares = {
    cambio:43,
}

function dolar() {
    
    let x = document.getElementById("monto").value; 
    let resultado = x /meses.length;    
    let result1 = resultado /dolares.cambio;
    if (x == false) {
        swal("Porfavor ingrese algun numero")
    }

    else if(x < 3000) {
        swal("El numero ingresado debe ser mayor a $3000")
    }

    else   { 
        
    for (let i=0;i<meses.length;i++)
    document.getElementById("mostrarahorro").innerHTML = "Lo que usted debera ahorrar durante 12 meses sera la suma de U$S " + result1.toFixed(2) + " dolares ";

    }
}

let url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch (error => console.log(error))

    const mostrarData = (data) => {
        console.log(data)
        let body = ''
        for (let i=0;i<1;i++){
            body +=`<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].email}</td></tr> ` 
        }

        document.getElementById('data').innerHTML = body
    }

