import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Festival } from 'src/app/model/festival';
import { AuthService } from 'src/app/services/auth.service';
import { FestivalService } from 'src/app/services/festival.service';

export interface ViewFestivalDialogData {
  festival: Festival
}

@Component({
  selector: 'app-view-festival',
  templateUrl: './view-festival.component.html',
  styleUrls: ['./view-festival.component.css']
})
export class ViewFestivalComponent implements OnInit {

  comment!: string
  festival!: Festival
  comments: Comment[] = []

  constructor( 
    public dialogRef: MatDialogRef<ViewFestivalComponent>,
    private festivalService: FestivalService,    
    private authService: AuthService,
    @Inject(MAT_DIALOG_DATA) public data: ViewFestivalDialogData,
    private _snackBar: MatSnackBar,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.festival = this.data.festival
    this.comments = this.festival.comments
  }
  

  addComment() {
    this.festivalService.postComment(this.comment, this.festival.id).subscribe(
      (res) => {      
        this.dialogRef.close()
        this._snackBar.open("Successful", 'Close', {
          duration: 3000,
          horizontalPosition: 'end',
          verticalPosition: 'top',
          panelClass: ['snackbar'],
        });

        this.router.navigate(['/festivals'])
      }
    )
  }

  isPast() {
    console.log(this.festival.endDate.toString())
    let now = new Date().toISOString().split("T")[0]

    return this.festival.endDate.toString() < now
  }

  guestLogged() {
    const role = this.authService.getRoleCookie()
    return ( role === 'guest')
  }
}
