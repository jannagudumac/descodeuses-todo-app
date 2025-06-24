import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if (sessionStorage.getItem('isLoggedIn')) {
    return true;
  } else {
    return router.createUrlTree(['/login']); // Redirect to login if not authenticated}
  }
};
