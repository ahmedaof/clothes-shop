import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { clotheService } from '../clothe.service';
import { clothe } from '../clothes.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
   
     clothes!:clothe[];
      id!: number;
  clothe!: clothe;

    
  constructor(
              private clotheService: clotheService,
              private route:ActivatedRoute,
              private router:Router) { 
                
              }

  ngOnInit(){ 
    // this.id = +this.route.snapshot.params['id'];
    // this.clothe = this.clotheService.getClothe(this.id);
    this.route.params.subscribe(
    (params: Params)=>{
      this.id =+params['id'];
    
      this.clothe = this.clotheService.getClothe(this.id);
      
    }
    )

  }
  onDeleteClothe(){
    this.clotheService.changeID(this.id);    
    this.clotheService.deleteClothe(this.id);
    this.router.navigate(['/clothes'])
  }
    
  }


