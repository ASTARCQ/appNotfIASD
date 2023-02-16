import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { PersonasService } from '../services/servicio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login:FormGroup;

  constructor(private fb:FormBuilder, private authService: PersonasService,public loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.login=this.fb.group({
      email:['',[Validators.email,Validators.required]],
      password:['',Validators.required]
    })
  }
  onSubmit(form:FormGroup){
    if(form.valid){
      this.authService.login(form.value.email, form.value.password)
    }
  }

}
