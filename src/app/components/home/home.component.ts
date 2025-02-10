import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  services = [
    { title: 'Limpeza de Fossa', description: 'Atendimento rápido e eficiente para limpeza de fossas sépticas.' },
    { title: 'Desentupimento', description: 'Desentupimento de tubulações sem quebra, com tecnologia avançada.' },
    { title: 'Hidrojateamento', description: 'Solução completa para limpeza de caixas de gordura e redes pluviais.' }
  ];
}
