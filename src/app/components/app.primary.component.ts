import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  standalone: true,
  imports: [],
  template: `<button
    (click)="btnClick.emit()"
    class="cursor-pointer text-white hover:border-blue-400 rounded-lg bg-sky-500 w-full border-red-50 px-5 py-2 shadow-md bg-red-1"
  >
    {{ label() }}
  </button>`,
  styles: ``,
})
export class AppPrimaryButton {
  
  label = input('');
  btnClick = output();
}
