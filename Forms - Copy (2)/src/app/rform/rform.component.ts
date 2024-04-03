import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrl: './rform.component.css'
})
export class RformComponent  {

  onSubmit(){
      console.log('submit');
      console.log(this.form);
  }

  answers = [{
    type: 'yes',
    text: 'Да'
  }, {
    type: 'no',
    text: 'Нет'
  }];



  genders = ['Male', 'Female', 'Other'];

  form!: FormGroup;

  ngOnInit(): void{
    this.form = new FormGroup({
      user: new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        pass: new FormControl('', Validators.required),
        phone: new FormControl('', Validators.required),
        surname: new FormControl('', Validators.required),
        name: new FormControl('', Validators.required),
        gender: new FormControl('', Validators.required)
      }),
    }
  


    )
  }
}
