function validation(dog) {
    let errors = {}
    if(!dog.name)
    errors.name = "el nombre de la raza es requerido";
    else if(!/^[a-zA-Z]+$/.test(dog.name))
    errors.name = "ingrese un texto valido"
    else if (dog.name.length>12)
    errors.name = "nombre muy largo"

    if(!dog.height_max)
    errors.height_max = "la altura maxima es requerida";
    else if(dog.height_max<7)
    errors.height_max = "la altura no puede ser menor que 7"
    else if (dog.height_max>300)
    errors.height_max = "la altura no puede ser mayor que 300"
  

    if(!dog.height_min)
    errors.height_min = "la altura maxima es requerida";
    else if(dog.height_min<0)
    errors.height_min = "la altura no puede ser menor que 1"
    else if (dog.height_min>15)
    errors.height_min = "la altura no puede ser mayor que 15"
  
    if(!dog.height_min)
    errors.height_min = "la altura maxima es requerida";
    else if(dog.height_min<0)
    errors.height_min = "la altura no puede ser menor que 1"
    else if (dog.height_min>15)
    errors.height_min = "la altura no puede ser mayor que 15"


    if(!dog.weight_max)
    errors.weight_max = "el peso maximo es requerido";
    else if(dog.weight_max<10)
    errors.weight_max = "el peso maximo no puede ser menor a 10 kilos"
    else if (dog.weight_max>300)
    errors.weight_max = "el peso maximo no puede ser mayor a 300 kilos"
 
    
    if(!dog.weight_min)
    errors.weight_min = "el peso minimo es requerido";
    else if(dog.weight_min<2)
    errors.weight_min = "el peso maximo no puede ser menor a 2 kilos"
    else if (dog.weight_min>100)
    errors.weight_min = "el peso maximo no puede ser mayor a 100 kilos"
  

    if(!dog.weight_min)
    errors.weight_min = "el peso minimo es requerido";
    else if(dog.weight_min<2)
    errors.weight_min = "el peso maximo no puede ser menor a 2 kilos"
    else if (dog.weight_min>100)
    errors.weight_min = "el peso maximo no puede ser mayor a 100 kilos"
  

    if(!dog.life_span)
    errors.life_span = "el promedio de vida es requerido";
    else if(!/[a-zA-Z0-9]+/.test(dog.life_span))
    errors.life_span = "debe añadir la edad y si son meses o años "
    
    
    if(dog.temperament.length===0)
    errors.temperament= "tiene que selecionar al menos un temperamento"

    if(!dog.image)
    errors.image = "la url de la imagen es requerida"


    else if (!/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i.test(dog.image))
    errors.image = "el dato ingresado no es valido"
    
    return errors
}
export default validation;