import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { combineLatest } from "rxjs";
import { Observable } from "rxjs";
import { map, tap, take } from "rxjs/operators";
import { AuthService } from "./auth.service";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot) {
    return combineLatest([
      this.authService.user,
      this.authService.isErrorState,
    ]).pipe(
      take(1),
      map(([user, isError]) => {
        const isAuth = !!user;
        if (isAuth) {
          return true;
        }
        if (isError) {
          return true; // Do not redirect if there's an error
        }
        return this.router.createUrlTree(["/auth"]);
      })
    );
  }
}
