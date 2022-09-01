


const solicitudServidorUsuarios = (usuario, callback)=>{
    setTimeout(()=>{
       if(usuario === "admin"){
        callback(null, ["juan", "Ernesto","Facundo"])
       } else{
        callback("Solo los usuarios de tipo admin tiene acceso a esta información")
       }          
    },3000);
  }
  
  const callback = (error, resultado)=>{
    if(error){
        console.log(error);
    }else{
        console.log(`Los usuarios registrados son: ${resultado}`)
    }
   
  }
 
  //Quiero solicitar al servidor todos los usuarios registrados

  solicitudServidorUsuarios("admin", callback)
  //solicitudServidorUsuarios("usuario general", callback)