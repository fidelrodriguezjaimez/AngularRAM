function logsClassTest(messageLog: string): ClassDecorator {
  console.log("Inicio decorator, con el mensaje:" + messageLog);
  return function():void{
    console.log("llegue a decorator");
  }
}

function logsPropertyTest(messageLog: string): PropertyDecorator {
  console.log("Inicio decorator, con el mensaje:" + messageLog);
  return function():void{
    console.log("llegue a decorator de propiedad");
  }
}

function logsmethodTest(messageLog: string): MethodDecorator {
  console.log("Inicio decorator, con el mensaje:" + messageLog);
  return function():void{
    console.log("llegue a decorator de propiedad");
  }
}

@logsClassTest("Fidel, como estas")
export class UserClass {
  id?:number;
  name: string;
  phone: string;
 @logsPropertyTest("propiedad age") age: number;

  constructor(id: number, name: string, phone: string, age: number){
    this.id= id;
    this.name = name;
    this.phone = phone;
    this.age = age;
  }

  @logsmethodTest("methodo login")
  login():void{
    console.log("Loading...");
  }
}
