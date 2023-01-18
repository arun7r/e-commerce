import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  allproducts:any=[];//all products array of details

  searchterm:string='';

  constructor(private api:ApiService, private cart:CartService) { }

  ngOnInit(): void {
    this.api.getProducts().subscribe(
      (data:any)=>{
        this.allproducts=data.products
      }
    )

    this.api.searchkey.subscribe(
      (data:any)=>{
        this.searchterm=data
      }
    )

  }

  addtowishlist(product:any){
    this.api.addtowishlist(product).subscribe(
      (result:any)=>{
        //(server ti client)
        alert(result.message)//added successfully
      },
      (result:any)=>{
        alert(result.error.message)//error
      }
    )
  }

  addcart(product:any){
    this.cart.addcart(product);
  }  

}
