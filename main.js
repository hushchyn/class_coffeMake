class CoffeeMake{
    constructor( mark, model){
        this.mark = mark;
        this.model = model;
    }
    on(){
        return `${this.mark} ${this.model} is on`
    }
    off(){
        return `${this.mark} ${this.model} is off`
    }
}


class DripCoffeeMaker extends CoffeeMake{
    constructor(mark, model, color){
        super(mark, model)
        this.color = color
    }
    Count(num){
        return 'You choose ' + num + ' cups of coffe'
    }
    Start(){
        return 'Please wait your coffee is preparing ...'
    }
    Finish(){
        return 'Your coffe is ready, please take it'
    }
}

// let i = new DripCoffeeMaker('Philips', 'N12')
// console.log(i);
// i.on()
// i.off()
// i.Start()
// i.Count()



class CarobCoffeMachine extends CoffeeMake{
    constructor( mark, model, color){
        super ( mark, model)
        this.color = color;
    }
    ShakeMilk(){
        return 'Milk is shaked'
    }
    TypeOfCoffe(drink){
        return `You chose `+ drink
    }
    Start(){
        return 'Please wait your coffee is preparing ...'
    }
    Finish(){
        return 'Your coffe is ready, please take it'
    }
}

// let qqq = new CarobCoffeMachine('Philips', 'NQS','')
// console.log(qqq);
// console.log(qqq.on()); 
// console.log(qqq.TypeOfCoffe('cappuccino')); 




class CoffeeMachine extends CoffeeMake{
    constructor ( mark, model,){
        super ( mark, model)
    }
    Count(param){
        return 'You choose ' + param + ' cups'
    }
    ChooseDrink(drink){
        return 'You choose ' + drink
    }
    GrindGrains(){
        return 'Coffee grain is ready for preparing'
    }
    ShakeMilk(){
        return 'Milk is shaked'
    }
    Start(){
        return 'Please wait your coffee is preparing ...'
    }
    Finish(){
        return 'Your coffe is ready, please take it'
    }
}

// let cm = new CoffeeMachine('Delongi', 'QWERT' )
// console.log(cm.Count(3));
// console.log(cm.ChooseDrink('latte'));
// console.log(cm.on());

