import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../interfaces/contact';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  favorites: Contact[] = [];
  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.getFavorites();
  }

  getFavorites = () => {
    this.favorites = this.contactService.getFavorites();
  };

  removeFavorite = (contact: Contact): void => {
    this.contactService.toggleFavorite(contact);
    this.getFavorites();
  };

  deleteContact = (contact: Contact): void => {
    this.contactService.deleteContact(contact);
    this.getFavorites();
  };
}
