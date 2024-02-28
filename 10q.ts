

// QUESTION NUMBER # 1;

 // make an object of person with its name ,age,and email  ;

//          ........solution..........,
type person1 ={

    name:string,
    age:number
    email:string
}

let person2:person1 = {
    name: "shabana",
    age: 25,
    email : "shabana@gmail.com",
} 
console.log(person2)


// QUESTION # 2;
// creat a function to calculate sum of two numbers;
 
//        .....solution.........,
function sum (a: number, b: number){
    return a + b;
}
let newsum = sum(4,5);
console.log(newsum);


// QUESTION # 3;
// save the persons's information  by interface method;

//       ..... solution.........
interface person {
    name:string 
    age:number
    isStudent:boolean;
}
let newperson:person = {
    name : "shabana",
    age : 25,
    isStudent : true,
}
console.log(newperson);

// QUESTION NUMBER # 4;
//  create a classs of vehicle and other class car which extends vehicle claaa;

//         .....solution........
class vehicle {
    modle:string = ""
    constructor(modle:string){
 this.modle = modle;
    }
}
class car1 extends vehicle {
    numbersofdoors:number = 0;
    constructor(modle:string,numbersofdoors:number){
   super(modle);
   this.numbersofdoors;
    }
}
let newcar = new car1("civic",4);
console.log(newcar);
console.log(newcar.modle);
console.log(newcar.modle);

// QUESTION NUMBER # 5;
// creat an  array of colors;

 //        ...solution....
let colors:string [] = ["red", "blue","green","white","yello","black"]
console.log(colors);

// QUESTION NUMBER # 6;
 // make a veriable of any type;

 //      .....solution.....
let myname:any = "fiza";
console.log(typeof myname);

// QUESTION NUMBER # 7;
  // creat a function by using union .which may be string or number;
  //     ......solution.....
 function printID ( id:number | string ):void {
    console.log(id)
 }
 printID("me");
 
// QUESTION NUMBER # 8;
// write days name by enum;

//       ......solution.....,
enum days  {
   monday,
   tuesday,
   wednesday,
   thursday,
   friday,
   saturday,
   sunday,
}

let today:days = days.saturday;
console.log(today);

// QUESTION NUMBER # 9;
//  create a function  of revers arrray by generic type;
  
//        ......solution.......,
function reversarray<T>(arr:T[]):T[] {
 return [arr[1] ,arr[0]]
 }                                                    
   
 const orignalarray:number[] =reversarray<number>( [1,2,]);
 
 console.log(orignalarray);
 const result:string[] = reversarray<string> (["hello ","fiza"]);
 console.log(result);


// QUESTION NUMBER # 10;
//Create a TypeScript class called Rectangle that represents a rectangle. It should have the sum properties and methods:
  
//        ......solution.......;

class rectangle {
    width:number ;
    height:number ;

    constructor(width:number, height:number){
  this.width = width
  this.height = height
    }

calculateArea():number {
    return this.width * this.height
}

calcultePerameetewrs():number {
    return 2 * (this.width + this.height);
}

}

const rectangle1 = new rectangle(4,5);
console.log(rectangle1);
console.log( "Area",rectangle1.calculateArea())
console.log( "perameetrs",rectangle1.calcultePerameetewrs())