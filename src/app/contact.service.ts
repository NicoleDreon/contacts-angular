import { Injectable } from '@angular/core';
import { Contact } from './interfaces/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  contacts: Contact[] = [
    {
      name: 'Billy',
      company: 'Ford',
      emergency: false,
      number: '248-248-2480',
      birthday: '01-24-1994',
      isFavorite: false,
    },
    {
      name: 'Jane',
      company: 'Ford',
      emergency: false,
      number: '248-248-2480',
      birthday: '01-24-1994',
      isFavorite: false,
    },
    {
      name: 'Jill',
      company: 'Ford',
      emergency: false,
      number: '248-248-2480',
      birthday: '01-24-1994',
      isFavorite: false,
    },
    {
      name: 'Joe',
      company: 'Ford',
      emergency: false,
      number: '248-248-2480',
      birthday: '01-24-1994',
      isFavorite: false,
    },
    {
      name: 'Jordan',
      company: 'Ford',
      emergency: false,
      number: '248-248-2480',
      birthday: '01-24-1994',
      isFavorite: false,
    },
    {
      name: 'Tim',
      company: 'Ford',
      emergency: false,
      number: '248-248-2480',
      birthday: '01-24-1994',
      isFavorite: false,
    },
  ];

  favorites: Contact[] = [];
  constructor() {}

  getContacts = () => {
    return this.contacts;
  };

  deleteContact = (contact: Contact): void => {
    let index: number = this.contacts.findIndex((item) => {
      return item === contact;
    });
    this.contacts.splice(index, 1);
  };

  addContact = (contact: Contact): void => {
    this.contacts.push(contact);
  };

  getFavorites = () => {
    return this.contacts.filter((item) => {
      return item.isFavorite;
    });
  };

  toggleFavorite = (contact: Contact): void => {
    let index: number = this.contacts.findIndex((item) => {
      return item === contact;
    });
    this.contacts[index].isFavorite = !this.contacts[index].isFavorite;
  };
}
