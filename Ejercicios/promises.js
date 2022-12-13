 const promesa = pedirTortillas(datos);
let tortillas =[];

 promesa.then(tortillas => {
   return comprarRefresco();
 }).then (refresco => {
    return comprarQuesito();
 }).catch(error => {
    alert();
 });

// anida2 
 // callback hell

 //event loop, para ver si queda algo pendiente, porque es asincrona