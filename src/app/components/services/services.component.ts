import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    { title: 'Limpeza de Fossa', description: 'Atendimento rápido e eficiente para limpeza de fossas sépticas.' },
    { title: 'Desentupimento', description: 'Desentupimento de tubulações sem quebra, com tecnologia avançada.' },
    { title: 'Hidrojateamento', description: 'Solução completa para limpeza de caixas de gordura e redes pluviais.' }
  ];

}
