import { LightningElement, track } from 'lwc';

export default class helloWorld extends LightningElement {
    @track greeting = 'World';
    @track myInput = 'World';


    handleChange(event) {
        this.myInput = this.greeting;
        this.greeting = event.target.value;
        console.log("Greeting: ", this.greeting);
    }

    handleClick() {
        this.greeting = this.myInput + ". It's a pleasure to meet you";
    }
}