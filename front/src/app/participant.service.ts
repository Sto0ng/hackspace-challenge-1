import { Injectable } from '@angular/core';
import { User } from "app/user.model";

@Injectable()
export class ParticipantService {
  participants: User[] = [
    new User(1, 'Robert', 'https://ca.slack-edge.com/T5ELW5B0V-U5DUQ1LDN-3393bcaa54f3-1024'),
    new User(2, 'Annie', 'https://ca.slack-edge.com/T5ELW5B0V-U5FCEMUNS-9e8aa0e14520-1024'),
    new User(3, 'Pablo', 'https://ca.slack-edge.com/T5ELW5B0V-U5F2HFNEL-c8605ed38e29-1024'),
    new User(4, 'Alejandro', 'https://ca.slack-edge.com/T5ELW5B0V-U5GLX3GPR-98367864d8fe-1024'),
    new User(5, 'Diego', 'https://ca.slack-edge.com/T5ELW5B0V-U5FUH6QLW-1c97fb3c0d0a-1024'),
    new User(6, 'Participant', 'https://d30y9cdsu7xlg0.cloudfront.net/png/10299-200.png'),
    new User(7, 'Participant', 'https://d30y9cdsu7xlg0.cloudfront.net/png/10299-200.png'),
    new User(8, 'Participant', 'https://d30y9cdsu7xlg0.cloudfront.net/png/10299-200.png'),
    new User(9, 'Participant', 'https://d30y9cdsu7xlg0.cloudfront.net/png/10299-200.png'),
    new User(10, 'Participant', 'https://d30y9cdsu7xlg0.cloudfront.net/png/10299-200.png'),
    new User(11, 'Participant', 'https://d30y9cdsu7xlg0.cloudfront.net/png/10299-200.png'),
    new User(12, 'Participant', 'https://d30y9cdsu7xlg0.cloudfront.net/png/10299-200.png'),
    new User(13, 'Participant', 'https://d30y9cdsu7xlg0.cloudfront.net/png/10299-200.png'),
    new User(14, 'Participant', 'https://d30y9cdsu7xlg0.cloudfront.net/png/10299-200.png'),
    new User(15, 'Participant', 'https://d30y9cdsu7xlg0.cloudfront.net/png/10299-200.png'),
    new User(16, 'Participant', 'https://d30y9cdsu7xlg0.cloudfront.net/png/10299-200.png'),
    new User(17, 'Participant', 'https://d30y9cdsu7xlg0.cloudfront.net/png/10299-200.png'),
    new User(18, 'Participant', 'https://d30y9cdsu7xlg0.cloudfront.net/png/10299-200.png'),
    new User(19, 'Participant', 'https://d30y9cdsu7xlg0.cloudfront.net/png/10299-200.png'),
    new User(20, 'Participant', 'https://d30y9cdsu7xlg0.cloudfront.net/png/10299-200.png'),
    new User(21, 'Participant', 'https://d30y9cdsu7xlg0.cloudfront.net/png/10299-200.png'),
    new User(22, 'Participant', 'https://d30y9cdsu7xlg0.cloudfront.net/png/10299-200.png'),
    new User(23, 'Participant', 'https://d30y9cdsu7xlg0.cloudfront.net/png/10299-200.png'),
    new User(24, 'Participant', 'https://d30y9cdsu7xlg0.cloudfront.net/png/10299-200.png'),
    new User(25, 'Participant', 'https://d30y9cdsu7xlg0.cloudfront.net/png/10299-200.png'),
    new User(26, 'Participant', 'https://d30y9cdsu7xlg0.cloudfront.net/png/10299-200.png'),
    new User(27, 'Participant', 'https://d30y9cdsu7xlg0.cloudfront.net/png/10299-200.png'),
    new User(28, 'Participant', 'https://d30y9cdsu7xlg0.cloudfront.net/png/10299-200.png'),
    new User(29, 'Participant', 'https://d30y9cdsu7xlg0.cloudfront.net/png/10299-200.png'),
    new User(30, 'Participant', 'https://d30y9cdsu7xlg0.cloudfront.net/png/10299-200.png'),
    new User(31, 'Participant', 'https://d30y9cdsu7xlg0.cloudfront.net/png/10299-200.png'),
    new User(32, 'Participant', 'https://d30y9cdsu7xlg0.cloudfront.net/png/10299-200.png'),
    new User(33, 'Participant', 'https://d30y9cdsu7xlg0.cloudfront.net/png/10299-200.png'),
    new User(34, 'Participant', 'https://d30y9cdsu7xlg0.cloudfront.net/png/10299-200.png'),
    new User(35, 'Participant', 'https://d30y9cdsu7xlg0.cloudfront.net/png/10299-200.png')
  ];

  constructor() { }

  getParticipants(): Promise<User[]> {
    return Promise.resolve(this.participants);
  } 

  getParticipant(id: number): Promise<User> {
    return this.getParticipants()
              .then(participant => participant.find(participant => participant.id === id));
  }

}
