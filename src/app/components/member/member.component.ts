import { Component, input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonCard, IonItem, IonThumbnail, IonLabel, IonButton, IonIcon, IonText, IonCol, IonRow } from "@ionic/angular/standalone";
import { Member } from 'src/app/interfaces/member.interface';
import { MemberPersonalDetailComponent } from "../member-personal-detail/member-personal-detail.component";

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
  imports: [IonRow, IonCol, IonText, IonIcon, IonButton, IonLabel, IonCard, IonItem, IonThumbnail, RouterLink, MemberPersonalDetailComponent]
})
export class MemberComponent  implements OnInit {

  member = input<Member>();
  constructor() {}

  ngOnInit() {}

}
