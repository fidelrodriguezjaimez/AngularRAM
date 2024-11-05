export class UserClass {
  id?:number;
  name: string;
  phone: string;
  age: number;

  public set getName(name: string) {
    this.name = name;
  }

  public get getName(): string {
    return this.name;
  }

  constructor(id: number, name: string, phone: string, age: number){
    this.id= id;
    this.name = name;
    this.phone = phone;
    this.age = age;
  }

  login():void{
    console.log("Loading...");
  }
}
