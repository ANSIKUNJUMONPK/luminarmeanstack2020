//polymorphism-many forms
//-method overloading and method overriding
class maths{
    add(){
        console.log(10+20);
    }
    add(num1){
        console.log(20+num1)
    }
    add(num,num1){
        console.log(num+num1)

    }
}
var calc=new maths();
calc.add(10,20);



