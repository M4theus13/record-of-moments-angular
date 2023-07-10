import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Moments } from 'src/app/interfaces/Moments';
import { MessagesService } from 'src/app/services/messages.service';

import { MomentService } from 'src/app/services/moment.service';
@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent {
  btnText = 'Compartilhar!'

  constructor(
      private momentService: MomentService,
      private messageService: MessagesService,
      private router: Router
    ) {}

  async createHandler(moment: Moments) {
    const formData = new FormData

    formData.append('title', moment.title)
    formData.append('description', moment.description)

    if(moment.image) {
      formData.append('image', moment.image)
    }
    //todo

    await this.momentService.createMoment(formData).subscribe();

    //enviar para o service

    //exibir mensagem

    this.messageService.add('Momento adicionado com sucesso!')

    //redirect

    this.router.navigate(['/'])
  }
}
