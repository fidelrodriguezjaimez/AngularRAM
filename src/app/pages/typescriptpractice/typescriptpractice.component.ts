import { Component, OnInit } from '@angular/core';

export enum HttpCodes { badRequest, notFound, unauthorized }

@Component({
  selector: 'app-typescriptpractice',
  templateUrl: './typescriptpractice.component.html',
  styleUrls: ['./typescriptpractice.component.css']
})

export class TypescriptpracticeComponent implements OnInit {

  displayedColumns: string[] =['id', 'name', 'phone', 'age', 'edit', 'delete'];
  tuplaMultiplesTipos: [string, number, boolean];
  tuplaMismoTipo: [string, string];
  readonly RES = { status: 500 };
  username = 'fidel';
  lastName = 'rdrgz';
  fullname = `${this.username} ${this.lastName}`
  displayedNumbers: number[] =[45, 30, 11, 78, 22, 34];
  user =[
    {id: 0, name: "Fidel"},
    {id: 1, name: "Test"},
    {id: 2, name: "Ale"}
  ];
  resultReduce: number;
  stringreduce: string;
  joinMessage: string;
  someresult: boolean;
  everyRsult: boolean;

  constructor(){
    this.displayedColumns.push("cadena");
    this.tuplaMultiplesTipos = ["cadena", 1, true];
    this.tuplaMismoTipo  = ["cadena","cadena"];

    if(this.RES.status === HttpCodes.unauthorized)
    {
      console.log("Inicio");
    }

    console.log(`la suma es ${this.suma(20, 23)}`);

    this.displayedColumns.forEach((element, index) => {
      console.log(element);
    });

    this.displayedColumns.fill("operate", 2);//desde el indice 2 reemplaza los valores por "operate"
    const filterColumns = this.displayedColumns.filter(p => p == "name");
    console.log(filterColumns);

    const findColumns = this.displayedColumns.find(p => p == "operate");
    console.log(findColumns);

    const newitems = this.user.map((item)=>{
      return  item.name;
    })
    console.log(newitems);

    this.resultReduce = this.displayedNumbers.reduce((previus, current) => previus + current, 0);
    console.log(this.resultReduce);

    this.stringreduce = this.displayedColumns.reduce((previus, current) => `${previus} ${current}`, "");
    console.log(this.stringreduce);

    this.joinMessage = this.displayedColumns.join("/");
    console.log(this.joinMessage);

    this.someresult = this.displayedNumbers.some((item) => item > 10); // valida que algun elemento cumpla
    console.log(this.someresult);

    this.everyRsult = this.displayedNumbers.every((item) => item > 60);// valida que tod los elementos sean mayores a 60
    console.log(this.everyRsult);
  }

  ngOnInit(): void {
    console.log("Inicio oninit");
  }

  suma(a:number, b:number) : number {
    return a+b;
  }

}
