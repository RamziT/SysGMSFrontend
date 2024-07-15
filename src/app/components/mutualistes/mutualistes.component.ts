import { Component } from '@angular/core';
import { MutualisteService } from 'src/app/services/mutualiste.service';

@Component({
  selector: 'app-mutualistes',
  templateUrl: './mutualistes.component.html',
  styleUrls: ['./mutualistes.component.css']
})
export class MutualistesComponent {

  mutualistes: any[] = [];

  constructor(private mutualisteService: MutualisteService) { }

  ngOnInit(): void {
    this.mutualisteService.getMutualistes().subscribe(data => {
      this.mutualistes = data;
    });
  }

}
