import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

wishlist:any
emsg:any

  constructor(private api:ApiService, private router:Router, private cart:CartService) { }

  ngOnInit(): void {
    this.api.getwishlist().subscribe(
      (data:any)=>{
        this.wishlist = data.products
        if(this.wishlist.length===0){
          this.emsg='Empty Wishlist'
        }
      },
      (data:any)=>{
        this.emsg = data.error.message
      }
    )
  }

  deletewish(product:any){
    this.api.deletefromwish(product.id).subscribe(
      (result:any)=>{
        alert(result.message)
        this.router.navigateByUrl('wish-list')
        this.wishlist=result.wishlist
        if(this.wishlist.length===0){
          this.emsg='Empty Wishlist'
        }
        // window.location.reload()
      },
      (result:any)=>{
        alert(result.error.message)
      },
    )
  }
  addcart(product:any){
    this.cart.addcart(product)
    this.deletewish(product)
  }

}
