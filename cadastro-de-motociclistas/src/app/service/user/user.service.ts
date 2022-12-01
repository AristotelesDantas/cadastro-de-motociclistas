import { Injectable } from '@angular/core';
export interface User {
  name: string;
  email: string;
  id?: number;
  passoword: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userList: User[] = [
    {
      name: 'Aristoteles',
      email: 'ari@lksho.com',
      id: 1,
      passoword: '1234',
    },
    {
      name: 'Carlos',
      email: 'carlos@lksho.com',
      id: 2,
      passoword: '1235',
    },
    {
      name: 'Ze',
      email: 'aze@lksho.com',
      id: 3,
      passoword: '1236',
    },
  ];
  create(user: User) {
    const id = this.userList[this.userList.length - 1].id || 0;
    this.userList.push({ ...user, id: id + 1 });
  }
  get() {
    return this.userList;
  }
  update(user: User) {
    this.userList[this.userList.findIndex((u) => user.id === u.id)] = user;
  }
  remove(user: User) {
    const index = this.userList.findIndex((u) => user.id === u.id);
    if (index >= 0) {
      this.userList.splice(index, 1);
    }
  }
  findByName(name: string) {
    const user = this.userList.find((u) => name === u.name);
    return user
  }
}
