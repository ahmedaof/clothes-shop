import { Component} from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../clothes/data-storage.service';
@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})
export class HeaderComponent {

constructor(private dataStorageService:DataStorageService,
            public authservice:AuthService,
            private route:Router){}
onsave(){

    this.dataStorageService.storeClothes()
    .subscribe(
        (res: Response)=>{
           console.log();
        }
    );

}
onFetch(){
    this.dataStorageService.getClothes();
}
logOut(){
    this.authservice.logout();
    this.route.navigate(['/signin']); 
    
}
}