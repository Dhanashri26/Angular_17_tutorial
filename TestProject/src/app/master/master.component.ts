import { Component } from '@angular/core';
import { DesignationComponent } from '../designation/designation.component';
import { RolesComponent } from '../roles/roles.component';
import { CommonModule } from '@angular/common';

/* Here we have use CommonModule directive --> After angular 17 the common module directive is essential for using many of the common directives and pipes,
 such as ngIf and ngFor, within your application's components. It brings together a collection of commonly needed Angular directives and services that you often need in your templates.
*
*/

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [DesignationComponent, RolesComponent, CommonModule],
  templateUrl: './master.component.html',
  styleUrl: './master.component.scss'
})
export class MasterComponent {

  currentComponent:string = 'Roles';

  change(tabName:string) {
    this.currentComponent = tabName;

  }
}
