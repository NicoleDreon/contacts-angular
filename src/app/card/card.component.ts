import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../contact.service';
import { Contact } from '../interfaces/contact';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() contactRef: Contact;
  @Output() deleteEvent = new EventEmitter<void>();
  @Output() favoriteEvent = new EventEmitter<void>();
  homePage: boolean;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.url === '/home'
      ? (this.homePage = true)
      : (this.homePage = false);
  }

  emitDeleteEvent = (): void => {
    this.deleteEvent.emit();
  };

  toggleFavorite = () => {
    this.favoriteEvent.emit();
  };
}
