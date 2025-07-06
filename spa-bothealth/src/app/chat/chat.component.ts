import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";
@Component({
    selector:'app-chat',
    templateUrl:'./chat.component.html',
    styleUrl:'./chat.component.css'
})

export class ChatComponent implements OnInit{
    constructor(private authService: AuthService, private router: Router){};
    public userName : string;
    public id: number;
    ngOnInit(): void {
        const isUserAuthenticated = this.authService.verifyLogin();
        console.log("isUserAuthenticated", isUserAuthenticated);
        if(!isUserAuthenticated){
            this.router.navigate(['/login']);
        };

        const userData = this.authService.getUserData();
        console.log(userData)
        this.userName = userData.name;
        this.id = userData.id;
    }
    
}