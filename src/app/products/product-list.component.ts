import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = true;
  buttonText = 'Hide Image';

  filteredProducts: IProduct[];
  products: IProduct[];

  constructor(private _productService: ProductService) {}

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this._listFilter
      ? this.performFilter(this._listFilter)
      : this.products;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter(
      (product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

  toggleImage(): void {
    this.showImage = !this.showImage;

    this.buttonText = this.showImage ? 'Hide Image' : 'Show Image';
  }

  ngOnInit(): void {
    this._productService
      .getProducts()
      .subscribe(
        products => {
          this.products = products;
          this.filteredProducts = this.products;
        },
        err => {
          console.log(err.error);
        },
        () => {
          console.log('Complete');
        }
      );
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List ' + message;
  }
}
