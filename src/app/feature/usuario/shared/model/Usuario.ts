export class Usuario {
    id: number;
    nombre: string;
    correo: string;
    clave: string;
    rol: string;

    // constructor(user: any){
    //     if (user.id) { // if id exists , you can implement the first constructor
    //         this.id = user.id;
    //         this.nombre = user.nombre;
    //         this.correo = user.correo;
    //         this.clave = user.clave;
    //         this.rol = user.rol;
    //     }
    //     if (user.clave) { // if password exists : you can implement the second one
    //         this.correo = user.correo;
    //         this.clave = user.clave;
    //     }
    // }

    // constructor(
    //     id: number,
    //     nombre: string,
    //     correo: string,
    //     clave: string,
    //     rol: string
    // ) {

    //     this.id = id;
    //     this.nombre = nombre;
    //     this.correo = correo;
    //     this.clave = clave;
    //     this.rol = rol;
    // }

    // constructor(
    //     correo: string,
    //     clave: string
    // ) {

    //     this.correo = correo;

    //     this.clave = clave;

    // }
}