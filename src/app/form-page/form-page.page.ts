import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.page.html',
  styleUrls: ['./form-page.page.scss'],
})
export class FormPagePage implements OnInit {
  constructor() {}

  @Input() email!: string;
  @Input() edad!: number;
  @Input() fechaNacimiento!: Date;
  @ViewChild('formvalid') myForm!: NgForm;

  Imprimir() {
    console.log('edad = ' + this.edad);
  }
  ngOnInit() {}
}
