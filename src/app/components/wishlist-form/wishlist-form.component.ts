import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms'

@Component({
  selector: 'app-wishlist-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './wishlist-form.component.html',
  styleUrl: './wishlist-form.component.scss',
})
export class WishlistFormComponent {
  @Output() submitted = new EventEmitter<{ nome: string; email: string }>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.email]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.submitted.emit(this.form.value);
      this.form.reset();
    } else {
      this.form.markAllAsTouched();
    }
  }
}
