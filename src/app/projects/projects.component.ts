import { Component, OnInit } from '@angular/core';
import { GithubService } from './services/github.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  constructor(private GithubService: GithubService) { }

  users;


  ngOnInit() {
    this.users = this.GithubService.getUsers();

    this.GithubService.getUsers().subscribe(
      (data) => {
        console.log(data); // ONLY WORKS ONCE
      }
    )
  }

}
