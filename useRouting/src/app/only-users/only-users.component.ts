import { ActivatedRoute } from '@angular/router';
import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-only-users',
  templateUrl: './only-users.component.html',
  styleUrls: ['./only-users.component.scss']
})
export class OnlyUsersComponent implements OnInit {
  users: string[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService) {
    // this.usersService.getAll().subscribe(x => {
    //   this.users = x;
    // });

    console.log(activatedRoute.snapshot.data);
    this.users = activatedRoute.snapshot.data.users;
  }

  ngOnInit() {
  }

}
