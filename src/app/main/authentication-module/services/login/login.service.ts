import {inject, Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {LoginModel} from "../../model/login.model";
import {from, mergeMap, Observable} from "rxjs";
import firebase from 'firebase/compat/app';
import {AuthUserModel,  firebaseUserToAuthUserDTO,
} from "../../model/auth-user.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly _fireAuth = inject(AngularFireAuth);
  authStateChange(): Observable<AuthUserModel | null> {
    return this._fireAuth.user.pipe(
      mergeMap((user: firebase.User | null) => from(this._getClaims(user)))
    );
  }
  private async _getClaims(
    user: firebase.User | null
  ): Promise<AuthUserModel | null> {
    if (user) {
      const token = await user.getIdTokenResult();
      return firebaseUserToAuthUserDTO(user, token.claims);
    }
    return null;
  }
  loginWithEmailAndPassword(
    login: LoginModel
  ): Observable<firebase.auth.UserCredential> {
    return from(
      this._fireAuth.signInWithEmailAndPassword(login.email, login.password)
    );
  }}
