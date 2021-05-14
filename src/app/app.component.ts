
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  label:string = "Documentos de faturação, orçamentos e encomendas";
  

  saftForm!: FormGroup;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.saftForm = this.formBuilder.group({
      datainicial:['',Validators.required],
      datafinal:['',Validators.required],
      email:['',[Validators.email,Validators.required]]
    })
  }



  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action: this.onClick.bind(this) }
  ];


  private onClick() {
    alert('Clicked in menu item')
  }

}
