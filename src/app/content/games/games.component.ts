import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.sass']
})
export class GamesComponent implements OnInit {

  items = [
    {id: 1, author: 'David Fox, Matthew Kane', title: 'Zak McKracken and the Alien Mindbenders',
      image: 'https://www.lemon64.com/covers/full/z/zak_mckracken.jpg'},
    {id: 2, author: 'Sid Meier', title: 'Pirates!',
      image: 'https://www.lemon64.com/covers/full/p/pirates.jpg'},
    {id: 3, author: 'Archer MacLean', title: 'IK+',
      image: 'https://www.lemon64.com/covers/full/i/ik_plus_(the_hit_squad).jpg'},
    {id: 4, author: 'John Twiddy, Hugh Riley', title: 'Last Ninja 2',
      image: 'https://www.lemon64.com/covers/full/l/last_ninja_2_(activision)_(usa).jpg'},
    {id: 5, author: 'Anne Westfall, Jon Freeman, Paul Reiche III, Tommy V. Dunbar', title: 'ArcHon',
      image: 'https://www.lemon64.com/covers/full/a/archon.jpg'},
    {id: 6, author: 'David Braben, Ian Bell, Simon Jay, David Dunn, Aidan Bell', title: 'Elite',
      image: 'https://www.lemon64.com/covers/full/e/elite_-_gold_edition.jpg'},
    {id: 7, author: 'Paul Bowman, Darek Lukaszuk, Rich Rayl, John Burton, Darek Lukaszuk...', title: 'Project Firestart',
      image: 'https://www.lemon64.com/covers/full/p/project_firestart.jpg'},
    {id: 8, author: 'John Rowlands, Steve Rowlands', title: 'Creatures',
      image: 'https://www.lemon64.com/covers/full/c/creatures_(thalamus).jpg'},
    {id: 9, author: 'Peter Liepa, Chris Gray', title: 'Boulder Dash',
      image: 'https://www.lemon64.com/covers/full/b/boulder_dash_(disk).jpg'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
