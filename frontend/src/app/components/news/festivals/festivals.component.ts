import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Festival } from 'src/app/model/festival';
import { FestivalService } from 'src/app/services/festival.service';

@Component({
  selector: 'app-festivals',
  templateUrl: './festivals.component.html',
  styleUrls: ['./festivals.component.css']
})
export class FestivalsComponent implements OnInit {

  ongoingFestivals!: Festival[]
  finishedFestivals!: Festival[]

  constructor(
    private festivalService: FestivalService,
    private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {

    this.festivalService.getOngoing().subscribe(
      (res: Festival[]) => {
        this.ongoingFestivals = res
        this.festivalService.getPast().subscribe(
          (res: Festival[]) => {
            this.finishedFestivals = res
          }
        )
      }
    )


  }

}
