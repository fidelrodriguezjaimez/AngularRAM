namespace DataBaseEntity { // segun parece ya no es necesario usar namespaces, con la palabra export  en la clase se resulve

  export class User {
    name:string;

    constructor(name: string){
      this.name = name;
    }
  }

  const userObj = new User("Fide");

}


namespace DataBaseAccessEntity { // segun parece ya no es necesario usar namespaces, con la palabra export  en la clase se resulve

  export class User {
    name:string;
    edad: number;

    constructor(name: string, edad: number){
      this.name = name;
      this.edad = edad;
    }
  }

  const userObj = new User("Fide");

}
