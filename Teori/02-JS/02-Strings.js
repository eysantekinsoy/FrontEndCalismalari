// let x,y,z;
// x=5;
// y=10;
// z=15;
// let x=5, y=10, z=15;
// console.log(x,y,z);

let myVariable = "BilgeAdam Akademi ANK-16 Frontend Eğitimi";
console.log(myVariable, typeof myVariable);
console.log(myVariable.length);

console.log(myVariable.charAt(0));
console.log(myVariable.charAt(1));
console.log(myVariable.charAt(2));
console.log(myVariable.charAt(3));
console.log(myVariable.charAt(4));
console.log(myVariable.charAt(39));
console.log(myVariable.charAt(40));
console.log(myVariable.charAt(myVariable.length-1));
// console.log(myVariable.charAt(9));
console.log(myVariable.charAt(41));

console.log("----------");

console.log(myVariable[0]);
console.log(myVariable[1]);
console.log(myVariable[2]);
console.log(myVariable[3]);
console.log(myVariable[4]);
console.log(myVariable[myVariable.length-1]);
console.log(myVariable[9]);
console.log(myVariable[41]);
console.clear();

//Substring() = parça ayırmak vey koparmak için kullanılır.
//[start,end)
console.log(myVariable);
console.log(myVariable.substring(0));
console.log(myVariable.substring(1));
console.log(myVariable.substring(10));
console.log(myVariable.substring(10,15));
console.log(myVariable.substring(10,16));
console.log(myVariable.substring(10,17));
console.log(myVariable.substring(-1)); // inactive değişiklik olmaz 0 olrak alır.
console.log(myVariable.substring(5,9));
console.log(myVariable.substring(9,5));

let post = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis natus unde accusamus obcaecati dolorem nihil id placeat distinctio corrupti aliquam sit vero repellat aspernatur facilis rem sequi, ut dolores veniam adipisci voluptatum eligendi vitae ullam ratione! Architecto error laudantium adipisci itaque tenetur eligendi. Nemo quidem id assumenda autem beatae fuga.";

console.log(post.substring(0,50)+"...");

let fullName = "Eysan Tekinsoy";
console.log(fullName.substring(0,2)+"*****");
console.log(fullName.substring(6,8)+"*****");
console.log(fullName.substring(12,14)+"*****");
console.clear();

//split() ayırıcı-ayraç:Array
console.log(myVariable);
console.log(myVariable.split(" "));
console.log(myVariable.split(""));
console.log(myVariable.split("i"));
console.log(myVariable.split(" ",1));
console.log(myVariable.split(" ",2));
console.log(myVariable.split(" ",3));


//trim(); boşluk silici
let brand = "     BilgeAdam     ";
console.log(brand);
console.log(brand.trimStart());
console.log(brand.trimEnd());
console.log(brand.trim());

//replace() yerdeğiştirme
console.log(myVariable);
console.log(myVariable.replace("Adam","Kadın"));
console.log(myVariable.replace("mi","X"));
console.log(myVariable.replaceAll("mi","X"));
console.log(myVariable.replaceAll("JJ","X"));
console.clear();

//slice() = parçala,dilimle [start,end)
console.log(myVariable);
console.log(myVariable.slice());
console.log(myVariable.slice(0));
console.log(myVariable.slice(1));
console.log(myVariable.slice(1,5));
console.log(myVariable.slice(-1));
console.log(myVariable.slice(-2));
console.log(myVariable.slice(-7));
console.log(myVariable.slice(0,-7));
console.log(myVariable.slice(0,9));
console.log(myVariable.slice(9,0)); // Boş değer döndürür.
console.log(myVariable.slice(-2,5)); // Boş değer döndürür.


const url = "https://www.google.com";
console.log(url);
console.log(url.slice(-3));
console.log(url.slice(0,5));
console.log(url.slice(12,-4));
console.clear();

//includes() içeriyor mu? evet,hayır (boolean)
console.log(myVariable);
console.log(myVariable.includes("Adam"));
console.log(myVariable.includes("adam"));
console.log(myVariable.includes("K"));
console.log(myVariable.includes("k"));
console.log(myVariable.includes("x"));
console.log(myVariable.includes("i"));
console.log(myVariable.includes("i",2));
console.log(myVariable.includes("B"));
console.log(myVariable.includes("B",1));
console.clear();

//indexOf()
console.log(myVariable);
console.log(myVariable.indexOf("A"));
console.log(myVariable.indexOf("X"));
console.log(myVariable.indexOf("A"));
console.log(myVariable.indexOf("A",6));
console.log(myVariable.indexOf("A",11));
console.log(myVariable.indexOf("A",19));
console.log(myVariable.indexOf("Adam"));
console.log(myVariable.indexOf("mi"));
console.log(myVariable.indexOf("mi",16));

console.log(myVariable.lastIndexOf("mi"));
console.log(myVariable.lastIndexOf("mi",38));

//upperCase,lowerCase
console.log(myVariable.toUpperCase());
console.log(myVariable.toLowerCase());
console.clear();

//startsWith, endsWith
console.log(myVariable);
console.log(myVariable.startsWith("B"));
console.log(myVariable.startsWith("Bilge"));
console.log(myVariable.startsWith("BilgeAdam"));
console.log(myVariable.startsWith("bilgeAdam"));
console.log(myVariable.startsWith("Adam"));
console.log(myVariable.startsWith("Adam",5));

console.log(myVariable.endsWith("i"));
console.log(myVariable.endsWith("imi"));
console.log(myVariable.endsWith("Eğitimi"));
console.log(myVariable.endsWith("Eğitim"));
console.log(myVariable.endsWith("Eğitim",40));