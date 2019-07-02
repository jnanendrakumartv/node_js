// console.log("Jnanendra")
// var obj = {
//     authorName : "Ryan Dahl",
//     language : "node",
//     version:"10.6",
// }
// console.log(obj.language, obj.version, obj.authorName);
// function dispaly(x){
//     console.log(x);
// }
// dispaly("");


// var user = {
//     first_name: "Janendra",
//     last_name: "Kumar",
//     age: 26,
//     place:"Pandavapura",
//     vehicle:"Pulsar" 
// };
//     console.log(user);


// function Shape () {
//     this.X = 10;
//     this.Y = 20;

//     this.move = function (x, y) {
//         this.X = x;
//         this.Y = y;
//     }
//     this.distance_from_origin = function () {
//         return Math.sqrt(this.X*this.X + this.Y*this.Y);
//     }
// }

// var s = new Shape();
// s.move(10, 10);
// console.log(s.distance_from_origin());




// function Shape () {//  www .  j ava 2 s. c  o  m
// }

// Shape.prototype.X = 0;
// Shape.prototype.Y = 0;

// Shape.prototype.move = function (x, y) {
//      this.X = x;
//      this.Y = y;
// }
// Shape.prototype.distance_from_origin = function () {
//      return Math.sqrt(this.X*this.X + this.Y*this.Y);
// }
// Shape.prototype.area = function () {
//      throw new Error("I don't have a form yet");
// }
// var s = new Shape();
// s.move(10, 10);
// console.log(s.distance_from_origin());

// function Square() {
// }

// Square.prototype = new Shape();
// Square.prototype.__proto__ = Shape.prototype;
// Square.prototype.Width = 0;

// Square.prototype.area = function () {
//    return this.Width * this.Width;
// }
// var sq = new Square();
// sq.move(-5, -5);
// sq.Width = 5;
// console.log(sq.area());
// console.log(sq.distance_from_origin());



// function Message() {
//     var message = 'Hi';
//     function setMessage(newMessage) {
//        if (!newMessage) 
//           throw new Error('cannot set empty message');
//        message = newMessage;
//     }
//     function getMessage() {
//        return message;
//     }
//     function printMessage() { 
//        console.log(message); 
//     }
//     return {
//        setMessage: setMessage,
//        getMessage: getMessage,
//        printMessage: printMessage
//     }; 
//  } 
//  // Pattern in use 
//  var hi1 = Message(); 
//  hi1.printMessage(); 
 
//  var hi2 = Message(); 
//  hi2.setMessage('Jnanendra'); 
//  hi2.printMessage();
 
//  hi1.printMessage(); 
 



// var result = '\n';
// for (var i = 1; i < 5; i++) {
//     // for (var j = 1; j < 5; j++) {
//     //     result += (i*j) + ' ';
//     result += (i) + ' ';   
    
// }
// console.log(result);



var obj = {
    0: 'YourCat',
    1: 'Come',
    2: 'To Home', 
    };
    
    console.log(obj[0], obj[1], obj[2]);