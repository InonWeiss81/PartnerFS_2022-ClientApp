import { Injectable, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";

@Injectable({providedIn: 'root'})
export class AppService implements OnDestroy {
    
    timer: any;

    startCounting() {
        this.timer = setTimeout(() => {
            this.navigateTo('login');
        }, this.minutesToMiliseconds(environment.LoginExpirationMinutes));
    }

    navigateTo(path: string) {
        this.router.navigate([`/${path}`]);
    }

    private minutesToMiliseconds(mins: number) {
        return mins * 60 * 1000;
    }

    ngOnDestroy(): void {
        clearTimeout(this.timer);
    }

    constructor(private router: Router) {}
}