import { Component, OnInit } from '@angular/core';


//AngularFIREBASE2 https://github.com/IdanCo/angularfire2/blob/master/docs/install-and-setup.md
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';//modificado por actualización

@Component({
  selector: 'app-angular-fire-base2',
  templateUrl: './angular-fire-base2.component.html',
  styleUrls: ['./angular-fire-base2.component.css']
})
export class AngularFireBase2Component implements OnInit {
  items: Observable<any[]>;
  
  constructor(db: AngularFirestore) {
    this.items = db.collection('items').valueChanges();
  }


  ngOnInit(): void {
  }

}
