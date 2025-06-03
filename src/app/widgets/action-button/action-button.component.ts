import { Component, input, OnInit } from '@angular/core';
import { IonButton, IonIcon, IonText } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { logoWhatsapp } from 'ionicons/icons';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss'],
  imports: [IonButton, IonIcon, IonText]
})
export class ActionButtonComponent  implements OnInit {

  iconColor = input<string>('medium');
  icon = input<string>();
  buttonName = input<string>();

  constructor() {}

  ngOnInit() {}

}
