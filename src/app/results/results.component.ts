import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router, ActivatedRoute } from '@angular/router';
import { c } from '../../assets/colleges';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  colleges: string[] = [];
  text = '';

  constructor(
    private db: AngularFirestore,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.text = this.route.snapshot.paramMap.get('text');

    c.forEach(a => {
      if (a.toLowerCase().includes(this.text)) {
        this.colleges.push(a);
      }
    });
    if (this.colleges.length === 1) {
      this.router.navigate(['c', this.colleges[0]]);
    }
  }

  research() {
    this.router.navigate(['']);
  }

  get(name: string) {
    this.router.navigate(['c', name]);
  }
}
