import { Injectable } from '@angular/core';
import { User } from "app/user.model";

@Injectable()
export class UserService {

  users: User[] = [
    new User(1, 'Robert', 'https://ca.slack-edge.com/T5ELW5B0V-U5DUQ1LDN-3393bcaa54f3-1024'),
    new User(2, 'Annie', 'https://ca.slack-edge.com/T5ELW5B0V-U5FCEMUNS-9e8aa0e14520-1024'),
    new User(3, 'Pablo', 'https://ca.slack-edge.com/T5ELW5B0V-U5F2HFNEL-c8605ed38e29-1024'),
    new User(4, 'Alejandro', 'https://ca.slack-edge.com/T5ELW5B0V-U5GLX3GPR-98367864d8fe-1024'),
    new User(5, 'Diego', 'https://ca.slack-edge.com/T5ELW5B0V-U5FUH6QLW-1c97fb3c0d0a-1024')
  ];

  constructor() { }

  getUsers(): User[] {
    return this.users;
  } 

}
