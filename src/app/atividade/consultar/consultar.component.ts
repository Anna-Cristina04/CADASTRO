import { Component, Input, OnInit } from "@angular/core";
import { write } from "fs";
import { TestObject } from "protractor/built/driverProviders";

@Component({
    selector: 'consultar',
    templateUrl: './consultar.component.html',
    styleUrls: ['./consultar.component.css']
})

export class ConsultarComponent implements OnInit{
        ngOnInit(): void {
        }
        
        pessoas: Object[] = JSON.parse(localStorage.getItem("pessoas")) || []
      
      }
    