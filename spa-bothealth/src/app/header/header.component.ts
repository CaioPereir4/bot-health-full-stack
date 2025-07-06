import { Component, Input, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import {  Router } from "@angular/router";
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {
    @Input() name !: string;
    public initials: string;

    constructor(private authService: AuthService, private router: Router ) {}ngOnInit(): void {
        this.initials = this.extractInitialByName(this.name);
    };



    public doLogout(){
        const resultOfLogout = this.authService.logout();
        if(resultOfLogout){
            this.router.navigate(['/login']);
        } else {
            alert("Problems to do logout!");
            this.router.navigate['/login']
        }
    };

    public extractInitialByName(name: string){
        return name
        .split(' ') 
        .map(namePart => namePart.charAt(0))
        .join('') 
        .toUpperCase(); 
    };
}