import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allproducts:[],searchkey:string,propname:string): any[] {
   
    const result:any=[];
    if(!allproducts || searchkey=='' || propname==''){
      return allproducts;
    }

    //searching
    allproducts.forEach((product:any)=>{
      if(product[propname].trim().toLowerCase().includes(searchkey.toLocaleLowerCase())){
        result.push(product);
      }
    })

    return result;

  }

}
