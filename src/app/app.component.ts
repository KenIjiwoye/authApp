import { Component } from '@angular/core';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})
export class AppComponent {
  isLoggedIn: boolean;
  constructor(public authService:AuthService){
    this.authService.afAuth.authState.subscribe(auth => {
      if(auth) {
        this.isLoggedIn = true;
        console.log('logged IN', auth)
      } else {
        this.isLoggedIn = false;
        console.log('sorry, you are not logged in')
      }
    });
  }

  login(){
    this.authService.login();
  }

  logout(){
    this.authService.logout();
  }
}
