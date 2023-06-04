import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  CartItems=[
    {
      imageSrc: '../../assets/Images/herramientas/cajaherramientas.jpg',
      header: 'Caja de herramientas',
      price: 40,
      availableProducts: 20
    },
    {
      imageSrc: '../../assets/Images/herramientas/cintametrica.jpg',
      header: 'Cinta métrica',
      price: 10,
      availableProducts: 15
    },
    {
      imageSrc: '../../assets/Images/herramientas/martillito.jpg',
      header: 'Martillo de carpintero',
      price: 18,
      availableProducts: 15
    },
    {
      imageSrc: '../../assets/Images/herramientas/alicateuniversal.jpg',
      header: 'Alicate universal',
      price: 15,
      availableProducts: 20
    },
    {
      imageSrc: '../../assets/Images/herramientas/pinturas.jpg',
      header: 'Pintura acrílica',
      price: 8,
      availableProducts: 30
    },
    {
      imageSrc: '../../assets/Images/herramientas/guantesseguridad.jfif',
      header: 'Guantes de seguridad',
      price: 8,
      availableProducts: 16
    },
    {
      imageSrc: '../../assets/Images/herramientas/cintadoblecara.jpg',
      header: 'Cinta adhesiva de doble cara',
      price: 5,
      availableProducts: 30
    },
    {
      imageSrc: '../../assets/Images/herramientas/tornillostuercas.jpg',
      header: 'Tornillos y tuercas surtidos',
      price: 5,
      availableProducts: 21
    }
  ]

  getTotalQuantity(): number {
    return this.CartItems.length;
  }

  getTotalPrice(): number {
    let totalPrice = 0;
    for (const item of this.CartItems) {
      totalPrice += item.price;
    }
    return totalPrice;
  }

  getCurrentDateTime(): string {
    const currentDateTime = new Date();
    const year = currentDateTime.getFullYear();
    const month = ('0' + (currentDateTime.getMonth() + 1)).slice(-2);
    const day = ('0' + currentDateTime.getDate()).slice(-2);
    const hours = ('0' + currentDateTime.getHours()).slice(-2);
    const minutes = ('0' + currentDateTime.getMinutes()).slice(-2);
    const seconds = ('0' + currentDateTime.getSeconds()).slice(-2);
    return `${hours}:${minutes}:${seconds} ${year}-${month}-${day}`;
  }

}
