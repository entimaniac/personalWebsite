import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  public skills: Array<{ name: string, rating: number }> = [
    { name: 'JAVA', rating: 90 },
    { name: 'HTML', rating: 95 },
    { name: 'SPRING BOOT', rating: 75 },
    { name: 'SQL', rating: 85 },
    { name: 'CSS', rating: 70 },
    { name: 'HADOOP', rating: 30 },
  ];
  constructor() { }

  ngOnInit() {
  }

}
