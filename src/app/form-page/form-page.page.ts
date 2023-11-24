import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.page.html',
  styleUrls: ['./form-page.page.scss'],
})
export class FormPagePage implements OnInit {
  constructor() {}

  @Input() email: any;
  @Input() edad: any;
  @Input() fechaNacimiento: any;

  ngOnInit() {}
}
