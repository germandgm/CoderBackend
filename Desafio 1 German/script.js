
class Usuario {
    constructor(nombre, apellido, libros=[], mascotas=[]){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName(){
        return console.log(`Nombre: ${this.nombre} Apellido: ${this.apellido}`); 
    }

    addMascota(mascota){
        this.mascotas.push(mascota);
        //console.log(this.mascotas);
    }

    countMascota(){
        let cantidad = this.mascotas.length;
        return console.log(`El usuario ${this.nombre} tiene una cantidad de mascotas de: ${cantidad} `)
        
    }

    addBook(autor,name){
        const objetoBook = {nombre: autor, libro: name}
        this.libros.push(objetoBook);
    }

    getBookNames(){
        let newLibros=[];
        persona.libros.forEach(function(obj){
            newLibros.push(obj.libro);
        })
        console.log(newLibros);
    }

}
let librosGerman = [{nombre: "Oliver B", libro: "Assassin's Creed 2"}];
let mascotasGerman = ["gato"];

const persona = new Usuario("German", "Guerrero", librosGerman, mascotasGerman)

console.log(persona);

persona.getFullName();
persona.getBookNames();
persona.addMascota("perro");
persona.countMascota();
persona.addBook("Greg Bear", "Halo Silentium");
persona.getBookNames();

console.log(persona);



