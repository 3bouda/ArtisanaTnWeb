import {Component, inject} from '@angular/core';
import {LoginModel} from "../../../model/login.model";
import {AuthStore} from "../../../store/auth.store";
import {LoginService} from "../../../services/login/login.service";

@Component({
  selector: 'app-login-container',
  standalone: true,
  imports: [],
  templateUrl: './login-container.component.html',
  styleUrl: './login-container.component.scss',
  providers: [AuthStore,LoginService]
})
export class LoginContainerComponent {
  readonly store = inject(AuthStore);

  loginWithEmailAndPassword(loginModel: LoginModel) {
  }
}
