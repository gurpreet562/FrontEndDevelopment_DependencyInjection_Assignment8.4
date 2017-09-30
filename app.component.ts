import { Component } from '@angular/core';
import { ListService } from "app/service/list.service";
import { DropDownService } from "app/service/drop-down.service";
import {MessageService} from './message.service';
// defining component detail like selector ,templateUrl and styleUrls
@Component({
  selector: 'app-component',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ListService,MessageService]
})
export class RootComponent {
  title: string;
  name: string;
  lastName: string;
  userDetail = {};
  arrayList: any[] = [];
  genderArray: any[] = [];
// defining constructor with _listservice and _dropdownservice as a private property
  constructor(private _listService: ListService, private _dropDownService: DropDownService,private _messageservice:MessageService) { }

  ngOnInit() {
    this.userDetail = {
      name: '',
      lastName: '',
      age: '',
      genderType: '',
      date: ''
    }
    this.genderArray = this._dropDownService.getDropDown();
    _messageservice.getMessage();
  }


  submit(values) {
   
    console.log(values);
    let model = {
      name: values.name,
      lastName: values.lastName,
      age: values.age,
      gender: values.gender,
      date:values.date
    }
    this._listService.addList(model);
    this.arrayList = this._listService.getList();
    _messageservice.addmessage();
  }
}

