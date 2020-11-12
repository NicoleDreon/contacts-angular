import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../interfaces/contact';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css'],
})
export class ContactsPageComponent implements OnInit {
  contacts: Contact[] = [];
  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts = () => {
    this.contacts = this.contactService.getContacts();
  };

  deleteContact = (contact: Contact): void => {
    this.contactService.deleteContact(contact);
    this.getContacts();
  };

  addContact = (contact: Contact): void => {
    this.contactService.addContact(contact);
    this.getContacts();
  };

  toggleFavorite = (contact): void => {
    this.contactService.toggleFavorite(contact);
    this.getContacts();
  };
}
