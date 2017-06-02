export class User {
  id: number;
  name: string;
  profilePicture: string;
  github: string;
  linkedin: string;
  email: string;

  // TODO: extend constructor
  constructor(id: number, name: string, profilePicture: string) {
    this.id = id;
    this.name = name;
    this.profilePicture = profilePicture;
  }
}