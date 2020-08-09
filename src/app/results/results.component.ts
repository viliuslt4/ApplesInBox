import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  @Input() time: number;
  @Input() count: number;
  constructor() { }

  ngOnInit(): void {
  }

}
