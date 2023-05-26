import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginAsAdmin = () => console.log('admin login');
  loginAsUser = () => console.log('user login');
}
