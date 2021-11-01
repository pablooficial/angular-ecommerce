import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {}

  onSubmit(): void {
    // Processar dados de checkout aqui
    this.items = this.cartService.clearCart();
    console.warn('Seu pedido foi enviado', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
