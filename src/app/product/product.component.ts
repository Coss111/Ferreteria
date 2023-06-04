import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements  OnInit{
  @Input() view: 'grid' | 'list' | 'currcartitem' | 'prevcartitem'= 'grid';
  @Input() imageSrc: string;
  @Input() header: string;
  @Input() title: string;
  @Input() description: string;
  @Input() price: number;
  @Input() availableProducts: number;

  constructor() { }

  ngOnInit(): void {
  }

}
