import { Component } from '@angular/core';
import { Moments } from 'src/app/interfaces/Moments';

import { MomentService } from 'src/app/services/moment.service';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent {
  btnText = 'Compartilhar!'

  constructor(private momentService: MomentService) {}

  async createHandler(moment: Moments) {
    const formData = new FormData

    formData.append('title', moment.title)
    formData.append('description', moment.description)

    if(moment.image) {
      formData.append('image', moment.image)
    }
    //todo

    await this.momentService.createMoment(formData).subscribe()

    //enviar para o service

    //exibir mensagem

    //redirect
  }
}
