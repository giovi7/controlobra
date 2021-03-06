import { Observable } from 'rxjs';
import { AuthService } from './../../auth/services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers:[AuthService],
})


export class NavbarComponent {
  public user$: Observable<any> = this.authSvc.afAuth.user;

  constructor(public authSvc: AuthService, private router:Router) {}

  

  async onLogout(){
    try{
      await this.authSvc.logout(); 
      this.router.navigate(['/login']);
    }
    catch(error){
      console.log(error);
    }
    
  }

}

