import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { Punto1Component } from './components/punto1/punto1.component';
import { Punto5Component } from './components/punto5/punto5.component';
import { Punto5bisComponent } from './components/punto5bis/punto5bis.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent, FooterComponent, Punto1Component, Punto5Component, Punto5bisComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TP-ANGULAR';
}
