import { Component, OnInit } from '@angular/core';
import { DropdownValue } from '../_models/dropdown-value';

@Component({
  selector: 'app-appdropdown',
  templateUrl: './appdropdown.component.html',
  styleUrls: ['./appdropdown.component.css']
})
export class AppdropdownComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
  contactMethods = [
    { id: 1, label: "Email", name: "how are you doing. I am fine" },
    { id: 2, label: "Phone", name: "how are you doing. I am fine" }
  ]

  dropdownValues: DropdownValue[] = [
    { label: "Email", value: "Email" },
    { label: "Phone", value: "Phone" }
  ]

  GetChildData(data: any){
    console.log(data);
  }

  elements: any = [
    {id: 1, first: 'Mark', last: 'Otto', handle: '@mdo'},
    {id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat'},
    {id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter'},
  ];

  headElements = ['ID', 'First', 'Last', 'Handle'];

}
