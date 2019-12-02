import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.css']
})
export class CollegeComponent implements OnInit {
  college = {
    name: 'University',
    entries: []
  };

  constructor(
    private db: AngularFirestore,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');


    /*const batch = this.db.firestore.batch();

    c.forEach(a => {
      const id = this.db.createId();
      const ref = this.db.collection('colleges').doc(id).ref;
      batch.set(ref, {name: a});
    });

    batch.commit();

    const batch1 = this.db.firestore.batch();

    d.forEach(a => {
      const id = this.db.createId();
      const ref = this.db.collection('colleges').doc(id).ref;
      batch1.set(ref, {name: a});
    });

    batch1.commit();*/




    this.db.collection('colleges', ref => ref.where('name', '==', name)).get().toPromise()
    .then(a => {
      this.college.name = a.docs.length ? a.docs[0].data().name : { name };
      a.docs[0].ref.collection('entries').get().then(b => {
        b.forEach(c => {
          this.college.entries.push(c.data());
        });
      });
    });
  }

  add(college: string) {
    this.router.navigate(['add', this.college.name]);
  }
}
