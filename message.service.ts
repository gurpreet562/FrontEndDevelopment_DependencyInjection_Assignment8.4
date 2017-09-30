import { Injectable } from '@angular/core';

@Injectable()
export class MessageService{
addMessage():string{
 return "Data added successfully"
 }
 getMessage():string{
 return "Data Retrieved Successfully";
 }
 
