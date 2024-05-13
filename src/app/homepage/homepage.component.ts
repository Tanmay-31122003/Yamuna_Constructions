import { Component, OnInit } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css','./homepage.component1.css']
})
export class HomepageComponent {

  constructor (private fb: FormBuilder) {}

  form: FormGroup =this.fb.group({
    from_name : ['',[Validators.required]],
    to_name : 'ADMIN',
    from_email : ['',[Validators.required,Validators.email]],
    from_phone : ['',[Validators.required,Validators.maxLength(10)]],
    message : ['',[Validators.required, Validators.maxLength(200)]],
  });

  async send(){
    if(this.form.valid){
      emailjs.init('zAS4g8zFhcCRd6m7N');

      emailjs.send("service_nn3nh2a","template_gj7klzb",{
      from_name: this.form.value.from_name,
      to_name: this.form.value.to_name,
      from_email: this.form.value.from_email,
      from_phone: this.form.value.from_phone,
      message: this.form.value.message,
      })
        .then(
          (response) => {
            alert('Feedback has been sent to Developer..👍');
            this.form.reset();
          },
          (error) => {
            console.error('Error sending email:', error);
            alert('Error sending feedback. Please try again.');
          }
        );
    } else {
      alert('Please fill in all the required fields correctly.');
    }
}
}
