import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  default_content = true; 
 title="angular3";
current_content(state: boolean) {
    this.default_content = state;
}

}
