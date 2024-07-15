import { Component, OnInit } from '@angular/core';
import { AssureService } from '../../services/assure.service';

@Component({
  selector: 'app-assures',
  templateUrl: './assures.component.html',
  styleUrls: ['./assures.component.css']
})
export class AssuresComponent implements OnInit {
  assures: any[] = [];

  constructor(private assureService: AssureService) { }

  ngOnInit(): void {
    this.assureService.getAssures().subscribe(data => {
      this.assures = data;
    });
  }
}
