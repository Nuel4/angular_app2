import { ConvertPropertyBindingResult } from '@angular/compiler/src/compiler_util/expression_converter'

export class Ingredient{
    /*public name: string;
    public amount : number; */  //same as constructor ConvertPropertyBindingResult.

    constructor(public name :string , public amount :number){

    }
}