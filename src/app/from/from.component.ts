import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.scss']
})
export class FromComponent implements OnInit {

  @Input() form!:FormGroup;
  @Output() submitData: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.submitData.emit()
  }

  get registrationGroupNumber(){
    return this.form.get('registrationGroupNumber')
  }


  get registrationGroupName(){
    return this.form.get('registrationGroupName')
  }

}
