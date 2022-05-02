import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validate',
  templateUrl: './form-validate.component.html',
  styleUrls: ['./form-validate.component.css']
})
export class FormValidateComponent implements OnInit {
	


	ngOnInit(): void {
  }


  angForm: FormGroup | any;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  
  createForm() {
    this.angForm = this.fb.group({
       username: ['', [Validators.required ]],
       email: ['', [Validators.required ,  Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
       password: ['', [Validators.required, Validators.minLength(6)] ],
		suggestions: ['', [Validators.required] ],
		skill: ['', [Validators.required] ],
       currency: ['', [Validators.required] ],
       website: ['', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')] ],
       phoneus: ['', [Validators.required] ],
       digits: ['', [Validators.required] ],
       number: ['', [Validators.required] ],
       range: ['', [Validators.required] ],
       terms: ['', [Validators.requiredTrue] ],
    });
  }
  
  
  toggleEye: boolean = true;
  
  toggleEyeIcon(inputPassword:any) {
		this.toggleEye = !this.toggleEye;
		
		inputPassword.type = inputPassword.type === 'password' ? 'text' : 'password';

		
	}


}
