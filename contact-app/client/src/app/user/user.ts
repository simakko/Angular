export class User{
  id: number;
  userName: string;
  password: string;
  email: string;


  constructor(id: number, userName: string, password: string, email: string) {
    this.id = id;
    this.userName = userName;
    this.password = password;
    this.email = email;
  }
}
