
function getArray<T>(items: T[]) : T[]{
  return new Array<T>().concat(items);
}

const numberArray = getArray<number>([1,2,3,4,5])
numberArray.push(3);

const stringArray = getArray<string>(["Pera", "Manzana", "Limon"])
stringArray.push("Ciruela");

function get2generic<T, U>(key: T, value: U): T {
  console.log(value);
  return key;
}

const generic2 = get2generic<number, string>(1, "uno");
console.log(generic2);

type ValidTypes = string | number;
const customArray = getArray<ValidTypes>(["Pera", "Manzana", "Limon", 1]) //no permitira valoes que no sean string y numbers

function getCustomGeneric<T extends ValidTypes, U>(key: T, value: U): T {
  console.log(value);
  return key;
}
const customArray1 = getCustomGeneric<number, string>(1, "test")
const customArray2 = getCustomGeneric<string, string>("test", "test")
//const customArray3 = getCustomGeneric<boolean, string>(false, "test") // no se permite ya que boolean no esta dentro de ValidTypes

