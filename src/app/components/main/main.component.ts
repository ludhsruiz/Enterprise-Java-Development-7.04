import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  backgroundColor1:string = "teal";
  color1:string =  "purple";
  backgroundColor2:string = "red";
  color2:string =  "green";
  backgroundColor3:string = "magenta";
  color3:string =  "orangered";

  constructor() { }

  ngOnInit(): void {
  }

  swapColors():void{
    this.swapBox1();
    this.swapBox2();
    this.swapBox3();
  }

  swapBox1():void{
    if (this.backgroundColor1==="teal"){
      this.backgroundColor1="lightgray";
      this.color1="black";
    } else {
      this.backgroundColor1="teal";
      this.color1="purple";
    }
  }

  swapBox2():void{
    if (this.backgroundColor2==="red"){
      this.backgroundColor2="darkgray";
      this.color2="black";
    } else {
      this.backgroundColor2="red";
      this.color2="green";
    }
  }

  swapBox3():void{
    if (this.backgroundColor3==="magenta"){
      this.backgroundColor3="gray";
      this.color3="black";
    } else {
      this.backgroundColor3="magenta";
      this.color3="orangered";
    }
  }

  overBox1():void{
    if (this.backgroundColor1==="teal"){
      this.backgroundColor1="purple";
      this.color1="teal";
    } else if (this.backgroundColor1==="purple"){
      this.backgroundColor1="teal";
      this.color1="purple";
    } else if (this.backgroundColor1==="lightgray"){
      this.backgroundColor1="gray";
    } else if (this.backgroundColor1==="gray") {
      this.backgroundColor1="lightgray";
    }
  }

  overBox2():void{
    if (this.backgroundColor2==="red"){
      this.backgroundColor2="green";
      this.color2="red";
    } else if (this.backgroundColor2==="green"){
      this.backgroundColor2="red";
      this.color2="green";
    } else if (this.backgroundColor2==="darkgray"){
      this.backgroundColor2="gray";
    } else if (this.backgroundColor2==="gray") {
      this.backgroundColor2="darkgray";
    }
  }

  overBox3():void{
    if (this.backgroundColor3==="magenta"){
      this.backgroundColor3="orangered";
      this.color3="magenta";
    } else if (this.backgroundColor3==="orangered"){
      this.backgroundColor3="magenta";
      this.color3="orangered";
    } else if (this.backgroundColor3==="gray"){
      this.backgroundColor3="lightgray";
    } else if (this.backgroundColor3==="lightgray") {
      this.backgroundColor3="gray";
    }
  }

}
