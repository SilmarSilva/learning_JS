//Uso do Math.floor para arredondar valores.
let sortear = 1 + Math.random() * 6
console.log(sortear); // 5.287291775182561, 2.727629895093601, 5.4846937299895275

let sortear1 = 1 + Math.floor(Math.random() * 6)
console.log(sortear1); // 2, 4, 5

rect1 = areaDoRetangulo (5,10)
function areaDoRetangulo(largura,altura){
    return largura * altura;
}

if (temp > 85) {
    alert("It is hot!");
 }
 if (age >= 21) {
    alert("You are old enough to buy a drink.");
 }
 else {
    alert("You are too young to be served in a bar.");
 }

 switch(mon) {
    case "Sep":
    case "Apr":
    case "Jun":
    case "Nov":
            alert("This month has 30 days.");
            break;
    case "Feb":
            alert("This month has 28 or 29 days.");
            break;
    default:
            alert("This month has 31 days.");
    }