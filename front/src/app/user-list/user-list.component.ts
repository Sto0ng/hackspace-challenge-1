import { Component, OnInit } from '@angular/core';
import { UserService } from "app/user.service";
import { User } from "app/user.model";
import { ParticipantService } from "app/participant.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit { 
  title = 'Hackspace challenge #1'; 
  users: User[];
  participants: User[];
  participantBatches: User[][];
  // batchIterator: any;

  constructor(
    private userService: UserService,
    private participantService: ParticipantService
  ) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
    this.participantService.getParticipants().then(participants => {
      this.participants = participants;
      this.participantBatches = this.getBatches(this.participants, 7);
    });
    // this.batchIterator = this.participantBatches.entries();
  }

  getBatches(participants: User[], groupSize: number): User[][] {
		var tempArray = [];
		for (let i=0, j=participants.length; i<j; i+=groupSize) 
	    tempArray.push(participants.slice(i,i+groupSize));
		return tempArray;
  }
}
