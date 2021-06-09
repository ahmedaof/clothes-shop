import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { clotheService } from './clothe.service';
import { clothe } from './clothes.model';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent implements OnInit {
  clothes!:clothe[];
  clothe!:clothe;
 

 
  constructor(private clotheService:clotheService,
              private router:Router,
              private route:ActivatedRoute) { 

  }

  ngOnInit() {
    this.clothes = this.clotheService.getClothes();
    this.clotheService.clotheChanged.subscribe(
      (clothes:clothe[])=>{
        this.clothes = clothes;
      }
    )
     
  }


}
