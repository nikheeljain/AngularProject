import { CanActivateFn } from '@angular/router';
//allow admin user only
export const authGuard: CanActivateFn = (route, state) => {
  return true;  
};
//allow normal user only
export const authGuardUser: CanActivateFn = (route, state) => {
  return true;
}
