import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[] = [];
  user: User = {
    id: null,
    name: { first: '', last: '' },
    birthdate: '',
    email: '',
    phone: '',
    address: ''
  };
  showForm = false;
  isEdit = false;

  constructor(private delogRef: MatDialog) { }

  ngOnInit(): void {
    this.fillUserArray();
  }
  fillUserArray() {
    this.users = [
      { id: 1, name: { first: 'Mohamed', last: 'Hassouna' }, birthdate: '20/10/2001', email: 'kaka-2004-11@gmail.com', phone: '0597183062', address: 'Palestine' },
      { id: 2, name: { first: 'Mohamed', last: 'Hassouna' }, birthdate: '20/10/2001', email: 'kaka-2004-11@gmail.com', phone: '0597183062', address: 'Palestine' },
      { id: 3, name: { first: 'Mohamed', last: 'Hassouna' }, birthdate: '20/10/2001', email: 'kaka-2004-11@gmail.com', phone: '0597183062', address: 'Palestine' },
      { id: 4, name: { first: 'Mohamed', last: 'Hassouna' }, birthdate: '20/10/2001', email: 'kaka-2004-11@gmail.com', phone: '0597183062', address: 'Palestine' },
      { id: 5, name: { first: 'Mohamed', last: 'Hassouna' }, birthdate: '20/10/2001', email: 'kaka-2004-11@gmail.com', phone: '0597183062', address: 'Palestine' },
      { id: 6, name: { first: 'Mohamed', last: 'Hassouna' }, birthdate: '20/10/2001', email: 'kaka-2004-11@gmail.com', phone: '0597183062', address: 'Palestine' },
      { id: 7, name: { first: 'Mohamed', last: 'Hassouna' }, birthdate: '20/10/2001', email: 'kaka-2004-11@gmail.com', phone: '0597183062', address: 'Palestine' },
      { id: 8, name: { first: 'Mohamed', last: 'Hassouna' }, birthdate: '20/10/2001', email: 'kaka-2004-11@gmail.com', phone: '0597183062', address: 'Palestine' },
      { id: 9, name: { first: 'Mohamed', last: 'Hassouna' }, birthdate: '20/10/2001', email: 'kaka-2004-11@gmail.com', phone: '0597183062', address: 'Palestine' },
      { id: 10, name: { first: 'Mohamed', last: 'Hassouna' }, birthdate: '20/10/2001', email: 'kaka-2004-11@gmail.com', phone: '0597183062', address: 'Palestine' }
    ];
  }
  addUser() {
    this.showForm = true;
    this.isEdit = false;
    this.user = {
      id: null,
      name: { first: '', last: '' },
      birthdate: '',
      email: '',
      phone: '',
      address: ''
    };
  }

  editUser(user: User) {
    this.showForm = true;
    this.isEdit = true;
    this.user = user;
  }

  removeUser(user: User) {
    this.users = this.users.filter(u => u.id !== user.id);
  }

  submitUser() {
    if (this.isEdit) {
      const index = this.users.findIndex(u => u.id === this.user.id);
      this.users[index] = this.user;
    } else {
      const id = this.users.length + 1;
      this.user.id = id;
      this.users.push(this.user);
    }
    this.showForm = false;
  }

}
