import {Component, OnDestroy, OnInit} from '@angular/core';
import { DateFilterFn } from '@angular/material/datepicker';
import {Account} from "../../../model/account";
import {AuthService} from "../../../services/auth.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit, OnDestroy  {

  model: Account = {
    name : '',
    surname : '',
    gender : '',
    birthdate : '',
    email : '',
    password : '',
    phoneNumber : ''
  }

  password2 : string = ''

  constructor( private authService: AuthService) { }

  ngOnInit(): void {
  }

  subscriptions : Subscription[] = [];

  ngOnDestroy(): void {
    console.log('gasim se...')
    const u = this.subscriptions.length
    let i = 0
    for (const x of this.subscriptions) {
      if (!x.closed)
        i = i + 1
      x.unsubscribe();
    }
    console.log('ukupno...' + u + ' ugasio sam '+ i)
  }

  getMinDate() {
    const minDate = new Date();
    minDate.setFullYear(minDate.getFullYear()-18, minDate.getMonth(), minDate.getDate())
    return minDate
  }

  filterYounger: DateFilterFn<Date | null> = (date: Date | null) => {
    return date != null && date <= this.getMinDate();
  };

  register(){
    this.subscriptions.push(this.authService.register(this.model)
      .subscribe(
        (res) => {
          console.log('registration successful')
          this.subscriptions.push(this.authService.login(this.model.email, this.model.password).subscribe(
            (res) => {
              console.log('logged in')
              this.authService.router.navigate(['/home'])
            },
            (err) => {
              if (err.status === 400) {
                console.log('login unsuccessful')
              }
            }
          ))
        },
        (err) => {
          if (err.status === 400) {
            console.log('registration unsuccessful');
          }
        }
      ))
  }

}
