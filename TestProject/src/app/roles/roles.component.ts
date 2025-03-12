import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRole } from '../model/interface/role';

/* According to codng standard, In angular component -->varible declaration should be at top, then constructor, then ngOnInit().  */



@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss'
})

export class RolesComponent implements OnInit {
  
  roleList: IRole[]= [];     //this is array which has a type of interface role. This variable will holdarray of objects.
  http = inject(HttpClient);

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllRoles();
    
  }

  getAllRoles() {
      this.http.get("https://projectapi.gerasim.in/api/EmployeeManagement/GetAllEmployees").subscribe((res:any)=> {
        console.log(res);
      })
      
      
  }




  /* primitive datatype in angular => string, number, boolean, date, object, array, null and undefned.*/

firstName: string = "Angular Tutorials"; //standard way of creating variable
angularVersion = "Version 18";

version:number = 18;
isActive: boolean = false;
currentDate : Date = new Date();   //It's calling the date constructor

inputType: string = "button";
selectedState:string = " ";


showWelcomAlert() {
    //This is a normal function.
    alert("Welcome to Angular 18 tutorial")
}

showMessage(message:string) {
  //This is a parameterized function.
  alert(message);
}
}
