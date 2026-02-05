import { Component } from '@angular/core';
import {Cd} from '../cd/cd';
import {Tracklist} from '../tracklist/tracklist';
import {Spine} from '../spine/spine';

@Component({
  selector: 'jewel-case',
  imports: [
    Cd,
    Tracklist,
    Spine
  ],
  templateUrl: './jewel-case.html',
  styleUrl: './jewel-case.css',
})
export class JewelCase {

}
