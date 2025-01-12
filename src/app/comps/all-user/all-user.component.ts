import { Component, OnInit } from '@angular/core';
import { AllUserService } from 'src/app/Service/all-user.service';
import { Users } from 'src/app/classes/Users';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {
  constructor(private useSer: AllUserService) { }
  ngOnInit(): void {
    this.useSer.getAllUser().subscribe(
      succ => {
        this.allUser=succ
        console.log(this.allUser);
        
        debugger
        console.log(succ);

      },
      err => {
        debugger
        console.log(err);
      }
    )
  }


  allUser: Array<Users> = new Array<Users>()
}