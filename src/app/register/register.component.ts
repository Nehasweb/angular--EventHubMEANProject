import { Component, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { AccordionModule } from 'ngx-bootstrap/accordion';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ReactiveFormsModule, AccordionModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers: [FormBuilder, Validators]
})
export class RegisterComponent 
{
    RegistrationForm : any ;

    SetData()
    {
      this.RegistrationForm.setValue(
        {
          FirstName: '',
          MiddleName: '',
          LastName: '',
          PhoneNumber: '',
          Email: '',
          Education: '',
          College: '',
          MothersProfession: '',
          FathersProfession: '',
          ParentsNumber: '',
          CurrentAddress: '',
          PermanentAddress: '',
        }
      );
    }

  
}
