import {inject} from 'aurelia-framework';
import {DialogService} from 'aurelia-dialog';
import {EditPerson} from './edit-person';

@inject(DialogService)
export class App {
  constructor(dialogService) {
    this.dialogService = dialogService;
  }
  submit(){
    this.dialogService.open({ viewModel: EditPerson, model: 'Good or Bad?'}).then((result) => {
      if (!result.wasCancelled) {
        console.log('good');
      } else {
        console.log('bad');
      }
    });
  }
}
