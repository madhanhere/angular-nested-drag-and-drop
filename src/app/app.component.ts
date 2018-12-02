import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {Section} from '../entities/Section';
import {pokemonSpecies, pokemonTrainers} from '../entities/LineItem';
import {DragulaService} from 'ng2-dragula';
import * as _ from 'lodash';
import {Dragula, Drake} from 'dragula';
import * as dragula from 'dragula';
import autoScroll from 'dom-autoscroller';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit, OnDestroy {
  title = 'drag-drop';
  drake: Drake = dragula({});
  dragulaService: DragulaService;
  scroll: any;

  sections: Section [] = [
    {
      ID: 1,
      name: 'Trainer One',
      lineItems: [
        pokemonSpecies[0],
        pokemonTrainers[0]
      ]
    },
    {
      ID: 2,
      name: 'Trainer two',
      lineItems: [
        pokemonSpecies[1],
        pokemonTrainers[1]
      ]
    },
    {
      ID: 3,
      name: 'Trainer three',
      lineItems: [
        pokemonSpecies[2],
        pokemonTrainers[2]
      ]
    }
  ];

  constructor(private dragulaService: DragulaService,
              private element: ElementRef) {
    this.dragulaService = dragulaService;
    this.dragulaService.createGroup('PokemonSection', {});
    this.dragulaService.createGroup('PokemonItem', {});
    this.dragulaService.dropModel('PokemonSection').subscribe((dropElement: object) => {
      console.log('PokemonSection');
      console.log(dropElement);
      // section logic
    });
    this.dragulaService.dropModel('PokemonItem').subscribe((dropElement: object) => {
      console.log('PokemonItem');
      console.log(dropElement);
      // cart Item logic
    });
  }

  ngOnInit(): void {
    this.scroll = autoScroll(
      // can also be an array of elements if they're { overflow: auto; max-height: XXpx } containers.
      // i.e. [someViewChild.nativeElement]
      window,
      {
        margin: 30,
        maxSpeed: 25,
        scrollWhenOutside: true,

        autoScroll: function () { // don't use () => {} syntax, we want to keep the 'this'
          return this.down && this.drake.dragging;
        }
      });
  }

  ngAfterViewInit(): void {
    this.drake.containers.push(this.element.nativeElement.getElementById('parent-container'));
    _.forEach(this.sections, (section: Section) => {
      const elem: Element = this.element.nativeElement.getElementById('section-' + section.ID);
      this.drake.containers.push(elem);
    });
  }

  ngOnDestroy(): void {
    // this.ds.destroy('bag');
    this.scroll.destroy();
  }
}
