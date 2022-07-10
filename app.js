
const proyectos=[
    nuevopro=new Proyecto("Proyecto de ventas","Ventas de todo tipo")
];
const educaciones=[
    nuevaEducacion=new Educacion("Proyecto de ventas","Ventas de todo tipo")
];

//funcion que sirve para desplegar el arreglo de proyectos y lo invocamos mas abajo para agregar nuevo proyecto y volverlo a desplegar
function mostrarPersonas(){
    let texto="";
    for(let proyecto  of proyectos){
        console.log(proyecto);
        texto+=` <div class="card-body" id="proyectos">
        <h3>${proyecto._proyecto}</h3>
        <p class="text-primary ">${proyecto._tarea}</p>
        <hr noshade="noshade" />
      </div>`
    }
    document.getElementById("proyectos").innerHTML=texto;
    
}

function agregarProyecto(){
        //tomamos todo el formulario y lo paso a una variable otra forma usando .forms la otra es document.getElemn......
        const formu=document.forms['formu'];
        //agarramos los datos de formu y lo pasamos a una variable
        const proyecto=formu['proyecto'];
        const tarea=formu['tarea'];

        if(proyecto.value !="" && tarea.value!=""){        
        //creamos un nuevo proyecto y le pasamos los datos que sacamos del formulario .value sirve para sacar solo ese dato si no estamos extrayendo todo la linea de codigo
        const nuevoProyec =new Proyecto(proyecto.value,tarea.value);
        console.log(nuevoProyec);
        proyectos.push(nuevoProyec);
        //volvemos a llamar al metodo mostrar personas para que se muestre el nuevo proyecto que se agrego
        mostrarPersonas();
        }else{
            alert("no se puede agregar informacion vacia");
        }
         
}


function mostrarEducacion(){
    let textoHtml="";//creo una variable textohtml que es la que va contener todo el codigo que se va desplegar en la pagina
    for(let educacionn of educaciones){
        console.log(educacionn);
        textoHtml+=` <div class="card-body" id="educaciones">
        <h3>${educacionn._educacion}</h3>
        <p class="text-primary ">${educacionn._titulo}</p>
        <hr noshade="noshade" />
      </div>`
    }
    document.getElementById("educaciones").innerHTML=textoHtml;
}

function agregarEducacion(){
        //tomamos todo el formulario y lo paso a una variable otra forma usando .forms la otra es document.getElemn......
        const formu=document.forms['formu1'];
         //agarramos los datos de formu y lo pasamos a una variable
        const educacion=formu['educacion'];
        const titulo=formu['titulo'];
         //creamos un nuevo proyecto y le pasamos los datos que sacamos del formulario .value sirve para sacar solo ese dato si no estamos extrayendo todo la linea de codigo
       const nuevaEdu=new Educacion(educacion.value,titulo.value);
       //ahora lo agregamos al arreglo que ya tenemos creado arriba de todo
       console.log(nuevaEdu);
       educaciones.push(nuevaEdu);
       //volvemos a llamar al metodo mostrar personas para que se muestre el nuevo proyecto que se agrego
        mostrarEducacion();
        }
