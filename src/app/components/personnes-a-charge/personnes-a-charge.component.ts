import { PersonneAChargeService } from './../../services/personne-a-charge.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-personnes-a-charge',
  templateUrl: './personnes-a-charge.component.html',
  styleUrls: ['./personnes-a-charge.component.css']
})
export class PersonnesAChargeComponent {

  personnes_a_charge: any[] = [];

  constructor(private personneAChargeService: PersonneAChargeService) {}

  ngOnInit(): void {
    this.personneAChargeService.getPersonnesACharge().subscribe(data => {
      this.personnes_a_charge = data;
    });
  }
}
