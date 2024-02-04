import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  //pegando os parametros "/" da url
  constructor(
    private activeRoute:ActivatedRoute,
    private navegador:Router
    ) {
    this.activeRoute.params.subscribe(
      res => console.log(res)

    );

    //query params /portifolio/1?name=Daniel&token=123
    this.activeRoute.queryParams.subscribe(
      res => console.log(res)
    );

    this.activeRoute.firstChild?.params.subscribe(
      res => console.log(res)
    );

   }

  ngOnInit(): void {
    setInterval(()=>{
      this.navegador.navigate(['/']);
    },5000);
  }

}
