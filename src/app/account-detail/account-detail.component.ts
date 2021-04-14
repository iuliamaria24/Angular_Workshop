import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss']
})
export class AccountDetailComponent implements OnInit {

  firstName: string ="";
  lastName: string ="";
  phoneNumber: string="";
  constructor(private _router: Router, private _activateRoute: ActivatedRoute ) { }


  ngOnInit(): void {
    this._activateRoute.queryParams.subscribe(params => {
      this.firstName = params['firstName'];
      this.lastName = params['lastName'];
      this.phoneNumber = params['phone'];    })

  }

}
