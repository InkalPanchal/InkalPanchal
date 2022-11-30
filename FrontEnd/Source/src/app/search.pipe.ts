import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!args){
      return value;
    }
    return value.filter((val:any)=>{
        debugger
      return (val.categoryName.toLocaleLowerCase().includes(args)) 
    //   || (val.lastName.includes(args)) || (val.phoneNumber.toString().includes(args)) || (val.jobId.includes(args));
    })
    
  }

}