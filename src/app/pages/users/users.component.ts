import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  displayedColumns=['id', 'name', 'phone', 'age', 'edit', 'delete'];
  dataSource: MatTableDataSource<User> = new MatTableDataSource();

  constructor(private userService: UserService){
    this.loadUsers();
  }

  ngOnInit(): void {
    console.log("Inicio");
  }

  loadUsers(): void{
    this.userService.getUsers().subscribe({
      next: (users)=> {
        this.dataSource.data = users;
      },
      error: (err) => {
        alert('ocurrio un error ' + err);
      }
    });
  }

  remove(id: number): void{
    this.userService.removeUser(id).subscribe({
      next: ()=> {
        this.loadUsers()
      },
      error: (err) => {
        alert('ocurrio un error ' + err);
      }
    });
  }
}
