import firebase from 'firebase/compat/app';

export interface AuthUserModel {
  uid: string;
  email: string | null;
  claims: {
    [key: string]: boolean;
  };
}

const _customClaimsKeys: string[] = ['Partner', 'Buyer'];

export function firebaseUserToAuthUserDTO(
  user: firebase.User,
  claims: { [key: string]: unknown }
): AuthUserModel {
  const customClaims: { [key: string]: boolean } = {};
  Object.entries(claims).forEach(([key, value]) => {
    if (_customClaimsKeys.includes(key)) {
      customClaims[key] = value as boolean;
    }
  });
  return { uid: user.uid, email: user.email, claims: customClaims };
}
