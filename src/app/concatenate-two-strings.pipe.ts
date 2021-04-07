import { isEmptyExpression } from '@angular/compiler';
import { parseSelectorToR3Selector } from '@angular/compiler/src/core';
import { isNull } from '@angular/compiler/src/output/output_ast';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concatenateTwoStrings'
})
export class ConcatenateTwoStringsPipe implements PipeTransform {

  transform(value: string, addedValue?: string): string {
    let str3;
    return str3=value.concat(addedValue.toString());

  }

}
