import { Component, OnInit } from '@angular/core';
import { c } from '../../assets/colleges';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  asdf = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  search(text: string) {
    this.router.navigate(['results', text]);
  }
}
