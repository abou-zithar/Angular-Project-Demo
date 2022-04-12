import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error:string='';
  constructor(private _AuthService:AuthService , private _Router:Router) { }

  loginForm:FormGroup=new FormGroup ({
  email:new FormControl(null , [Validators.required , Validators.email]),
   password:new FormControl(null  , [Validators.required])
  });

  submitLogin(formInfo:FormGroup){
    this._AuthService.login(formInfo.value).subscribe((response)=>
    {
      if (response.message=='success')
      {
         this._Router.navigate(['/home'])
      }
      else
      {
        this.error='email is invalid'
      }
    })
  }




  ngOnInit(): void {
  }

}
