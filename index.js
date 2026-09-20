//part 1
let name = prompt("Enter your name:");
let age = prompt("Enter your age :");
let gender = prompt("Enter your gender (male or female): ");
if( gender==="male"){
    alert("Welcome Mr." +name);
}else if(gender ==="female"){
    alert("Welcom Ms." +name);
}else {
    alert(" Welcome "+name);
}
if (gender === "male") {
    document.write("Welcome Mr. " + name);
} else if (gender === "female") {
    document.write("Welcome Ms. " + name);
} else {
    document.write("Welcome " + name);
}
document.write("   <br>        ");
//part 2
if( age<16 ){
    document.write( "You are not eligible to place an order :" );
}else{
     let order = prompt("Choose your order (Burger, Shawarma, Zinger): ");
//part3
if( order==="Burger"||order==="Shawarma"||order==="Zinger"){
document.write("Your order is being prepared");
}else{
    document.write(".Invalid order. Please try again");
}
//part4 
let isAvailable;
if( order==="Burger"|| order==="Shawarma"||order==="Zinger"){
    isAvailable=true;
}else{
    isAvailable=false;
}
if(age>= 18 && isAvailable){
    document.write("Order confirmed");
}else if(age<18 || !isAvailable){
    document.write("Order requires verification")
}
let orderStatus = " ";
if (age>=18 && isAvailable) {
    orderStatus="Order confirmed";
} else {
    orderStatus="Order requires verification";
}
document.write("<h1>Final Order Summary</h1>");
document.write("Name:" + name + "<br>");
document.write("Age:" + age + "<br>");
document.write("Gender:" + gender + "<br>");
document.write("Order:" + order + "<br>");
document.write("Order Status:" + orderStatus);
}