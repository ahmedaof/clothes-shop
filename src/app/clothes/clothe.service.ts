import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { clothe } from "./clothes.model";

export class clotheService{
    clotheChanged = new Subject<clothe[]>();
    clotheSelected = new EventEmitter<clothe>();
    ID!:number
    private clothes: clothe[] = [
        new clothe('ahmed@test.com','teshirt',23,0),
        new clothe('mohamed@test.com','shirt',44,1),
        new clothe('test@test.com','test',33,2)
      ];
      changeID(index: number){
      
        
      }
      getClothes(){
          return this.clothes.slice();
      }
      getClothe(index:number){
       
          return this.clothes[index];
         
      }
      addClothe(clothe:clothe){
         this.clothes.push(clothe);
         this.clotheChanged.next(this.clothes.slice());
      }
      updateClothe(index:number , newClothe:clothe){
        this.clothes[index] = newClothe;
        this.clotheChanged.next(this.clothes.slice());
      }
      getIndex(){
        return this.clothes.length-1;
      }
      deleteClothe(index: number){

        for(let x=index;x<this.clothes.length-1;x++)
  
        this.clothes[index+1].id =x;
       
        this.clothes.splice(index,1);
        this.clotheChanged.next(this.clothes.slice());
      }
      setClothes(clothes:clothe[]){
        this.clothes = clothes;
        this.clotheChanged.next(this.clothes.slice())
        
      }
   
      
}