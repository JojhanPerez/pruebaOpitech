import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'opitech';
  dataSource = [
    {
      "userName": "Mariana Garzon",
      "subject": "No puedo ingresar a mi cuenta",
      "customerSatisfaction": "80%",
      "priority": "Media",
      "status": "Pendiente"
    },
    {
      "userName": "Humberto Martinez",
      "subject": "No inicia sesión",
      "customerSatisfaction": "100%",
      "priority": "Baja",
      "status": "Resuelto"
    },
    {
      "userName": "Fernanda Giraldo",
      "subject": "Se cierra la sesión iniciada",
      "customerSatisfaction": "30%",
      "priority": "Alta",
      "status": "Pendiente"
    },
    {
      "userName": "Julian Pacheco",
      "subject": "No se visualiza bien la información",
      "customerSatisfaction": "100%",
      "priority": "Alta",
      "status": "resuelto"
    }
  ];
  displayedColumns = ["userName", "subject", "customerSatisfaction", "priority", "status"];
}
