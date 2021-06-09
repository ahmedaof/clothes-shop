import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { clotheService } from '../clothe.service';
import { clothe } from '../clothes.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
   id!:number;
   editMode=false;
   formGroup!: FormGroup;
   myGroup!: FormGroup


  constructor(private route: ActivatedRoute,
              private clotheService : clotheService,
              private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id=+params['id'];
        this.editMode=params['id'] !=null;
        this.initForm();
      
      }
    )
  }
  onSubmit(){
    
    const newClothe = new clothe(
      this.myGroup.value['email'],
      this.myGroup.value['name'],
      this.myGroup.value['number'],
      this.clotheService.getIndex()+1);
      const upClothe = new clothe(
        this.myGroup.value['email'],
        this.myGroup.value['name'],
        this.myGroup.value['number'],
        this.route.snapshot.params['id']);
   if(this.editMode){
     this.clotheService.updateClothe(this.id,upClothe)
   }else{
     this.clotheService.addClothe(newClothe);
   }
   this.onCanceleEdit();
  }
  private initForm(){
    let clotheName = '';
    let clotheEmail = '';
    let clotheNumber = +'';
    if(this.editMode){
      const clothe = this.clotheService.getClothe(this.id);
      clotheEmail = clothe.email;
      clotheName = clothe.name;
      clotheNumber = clothe.number;
    }
    this.myGroup = new FormGroup({
      'email': new FormControl(clotheEmail,Validators.required),
      'name': new FormControl(clotheName,Validators.required,),
      'number': new FormControl(clotheNumber,Validators.required),
    });
  }
  onCanceleEdit(){
     this.router.navigate(['../'],{relativeTo: this.route})
  }
}
