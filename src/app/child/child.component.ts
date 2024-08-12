import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit {

  constructor(){}



  @Input() item = 30;

  ngOnInit(): void {
    
  }

}
