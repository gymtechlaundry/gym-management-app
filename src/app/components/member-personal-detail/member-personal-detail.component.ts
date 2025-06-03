import { Component, input, OnInit } from '@angular/core';
import { IonItem, IonButton, IonIcon, IonText, IonLabel, IonThumbnail } from "@ionic/angular/standalone";
import { Member } from 'src/app/interfaces/member.interface';

@Component({
  selector: 'app-member-personal-detail',
  templateUrl: './member-personal-detail.component.html',
  styleUrls: ['./member-personal-detail.component.scss'],
  imports: [IonLabel, IonItem, IonButton, IonIcon, IonText, IonThumbnail]
})
export class MemberPersonalDetailComponent  implements OnInit {

  member = input<Member>();
  isList = input<boolean>(true);
  constructor() { }

  ngOnInit() {}

}
