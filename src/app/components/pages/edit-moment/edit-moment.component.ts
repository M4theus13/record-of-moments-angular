import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Moments } from 'src/app/interfaces/Moments';
import { MessagesService } from 'src/app/services/messages.service';
import { MomentService } from 'src/app/services/moment.service';
@Component({
  selector: 'app-edit-moment',
  templateUrl: './edit-moment.component.html',
  styleUrls: ['./edit-moment.component.css']
})
export class EditMomentComponent {

  ngOnInit():void {
    const id = Number(this.route.snapshot.paramMap.get('id'))

    this.momentService.getMoment(id).subscribe((item) => {
      this.moment = item.data
    })
  }

  moment!: Moments
  btnText: string = 'Editar'



  constructor (
    private momentService: MomentService,
    private route: ActivatedRoute,
    private router: Router,
    private messagesService: MessagesService
  ) {}

  async editHandler(momentData: Moments) {
    const id = this.moment.id;

    const formData = new FormData();

    formData.append('title',momentData.title);
    formData.append('description',momentData.description);

    if (momentData.image) {
      formData.append('image', momentData.image);
    }

    await this.momentService.updateMoment(id!, formData).subscribe();

    this.messagesService.add(`Momento ${id} atualizado com sucesso!`);

    this.router.navigate(['/']);
  }

}
