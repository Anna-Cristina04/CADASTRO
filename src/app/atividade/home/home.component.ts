import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'teste',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
    urlImagem= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfcQwZbnB57nlavD16iPHru_9nsgkRIkUkbA&usqp=CAU";

    @Input()
    write="";

    ngOnInit(){
        
    }

}