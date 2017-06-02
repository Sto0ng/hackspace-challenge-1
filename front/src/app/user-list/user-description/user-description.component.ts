import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';
import { ParticipantService } from "app/participant.service";
import { User } from "app/user.model";

@Component({
  selector: 'app-user-description',
  templateUrl: './user-description.component.html',
  styleUrls: ['./user-description.component.css']
})
export class UserDescriptionComponent implements OnInit {
  participant: User;

  constructor(
    private route: ActivatedRoute,
    private participantService: ParticipantService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.participantService.getParticipant(+params['id']))
      .subscribe(participant => this.participant = participant);
  }

  goBack() {
    this.location.back();
  }

}
