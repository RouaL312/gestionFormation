import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';



@Component({
  selector: 'app-dzmt-autocomplete-plane',
  templateUrl: './dzmt-autocomplete-plane.component.html',
  styleUrls: ['./dzmt-autocomplete-plane.component.css']
})
export class DzmtAutocompletePlaneComponent implements OnInit {

  constructor() { }

  control = new FormControl();
  streets: string[] = ['Champs-Élysées', 'Lombard Street', 'Abbey Road', 'Fifth Avenue'];
  filteredStreets!: Observable<string[]>;

  ngOnInit() {
    this.filteredStreets = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.streets.filter(street => this._normalizeValue(street).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

}
