import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DropdownValue } from '../_models/dropdown-value';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {  

  ngOnInit(): void {
  }

  @Input()
  values!: DropdownValue[];

  @Input()
  value!: string[];

  @Output()
  valueChange: EventEmitter<string>;

  constructor(private elementRef:ElementRef) {
    this.valueChange = new EventEmitter();
  }

  select(value: string) {
    this.valueChange.emit(value);
  }
  
}
