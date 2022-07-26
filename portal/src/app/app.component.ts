import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import config from '../assets/config/config.json';

type NewType = Observable<any>;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = `${config.app.ip} - ${config.app.name}`;
  constructor(private http: HttpClient) {
    this.getJSON().subscribe((data: any) => {
      this.title = data.app.name;
    });
  }
  public getJSON(): NewType {
    return this.http.get('./assets/config/config.json');
  }
}
