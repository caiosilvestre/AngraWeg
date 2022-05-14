import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ferramentas',
  templateUrl: './ferramentas.component.html',
  styleUrls: ['./ferramentas.component.css']
})
export class FerramentasComponent implements OnInit {
  df={nome:['F-27540','F-08500','F-20542','F-24025'],
      status:['Manutenção','Est. Produção','Afiação','Reforma'],
    };
  constructor() { }

  ngOnInit(): void {
  }

}
