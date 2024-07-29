import {AuthUserModel} from "../model/auth-user.model";
import {patchState, signalStore, withMethods, withState} from '@ngrx/signals';
import {inject} from "@angular/core";
import {LoginService} from "../services/login/login.service";


type AuthState = {
  authUser: AuthUserModel | null;
  newAccount: boolean;
}
const initialState: AuthState= {
  authUser: null,
  newAccount: false,
}

export const AuthStore =
  signalStore(
    withState(initialState),
    withMethods((store, _authService = inject(LoginService))=>({
      login(){
        _authService.loginWithEmailAndPassword()
      }
    }))
  )
