import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  college = 'University';
  asdf1: string;
  asdf2: string;

  constructor(
    private db: AngularFirestore,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.college = this.route.snapshot.paramMap.get('name');
  }

  add(sname: string, sdesc: string) {
    this.db.collection('colleges', ref => ref.where('name', '==', this.college)).get().toPromise()
    .then(a => {
      a.docs[0].ref.collection('entries').add({sname, sdesc});
    }).then(() => this.router.navigate(['c', this.college]));
  }
}
