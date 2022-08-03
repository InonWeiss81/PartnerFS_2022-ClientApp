import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  idNumber: string = '';
  constructor() { }

  ngOnInit(): void {
    this.idNumber = sessionStorage.getItem('idNumber') ?? '';
  }

}
