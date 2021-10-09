// Your code here
class Cat {
    constructor(name, sex){
        this.name = name;
        this.sex = sex;
        }
    speak(){
        return `${this.name} says meow!`;
        }
    }
  
  class Dog {
    constructor(name, sex){
        this.name = name;
        this.sex = sex;
        }
    speak(){
        return `${this.name} says woof!`;
        }
    }
  
  class Bird {
    constructor(name, sex){
        this.name = name;
        this.sex = sex;
    }
        speak(){
            if (this.sex = "male"){
                console.log(`It\'s me! ${this.name}, the parrot!`)
            } else {
        console.log(`${this.name} says squawk!`)
        }

}
  }
    

  let bird = new Bird("Pablo", "male")

  bird.speak()
   let bird2 = new Bird("Mabel", "female")

   bird2.speak()



