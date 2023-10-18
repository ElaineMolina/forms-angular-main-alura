import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensagem-errors',
  templateUrl: './mensagem-errors.component.html',
  styleUrls: ['./mensagem-errors.component.css']
})
export class MensagemErrorsComponent implements OnInit {

  @Input() mensagem = '';
  constructor() { }

  ngOnInit(): void {
  }

}
