import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from '../interfaces/contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  @Output() submitEvent = new EventEmitter<Contact>();
  constructor() {}

  ngOnInit(): void {}

  emitSubmitEvent = (form: NgForm): void => {
    let newContact: Contact = {
      name: form.value.name,
      company: form.value.company,
      emergency: form.value.emergeny === 'true' ? true : false,
      number: form.value.number,
      birthday: form.value.birthday,
      isFavorite: false,
    };
    console.log(newContact);
    this.submitEvent.emit(newContact);
  };
}
