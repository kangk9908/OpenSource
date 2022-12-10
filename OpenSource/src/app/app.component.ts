import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'OpenSource';

  constructor(private route: Router) {}
}
