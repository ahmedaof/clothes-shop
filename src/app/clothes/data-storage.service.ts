import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { AuthService } from '../auth/auth.service';
import { clotheService } from './clothe.service';
import { clothe } from './clothes.model';



@Injectable()
export class DataStorageService {
  constructor(private http: Http, private clotheService: clotheService,
               private authService:AuthService ) {}

  storeClothes() {
    const token = this.authService.getToken();
    return this.http.put('https://angular-41816-default-rtdb.firebaseio.com//clothes.json?auth='+ token,this.clotheService.getClothes());
  }

  getClothes() {
   const token = this.authService.getToken();
    this.http.get('https://angular-41816-default-rtdb.firebaseio.com//clothes.json?auth='+ token)
      .subscribe(
        (res:Response) =>{
          const clothes:clothe[]=res.json();
          this.clotheService.setClothes(clothes);
        }
      )
  }

}
