import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'Software Doctor';
   subtitle: string = 'Software Doctor';

  constructor(private router: Router) { }

  navigateToHome(): void {
    this.router.navigate(['/home']);
  }
}



