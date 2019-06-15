import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './page/main/main.component';
import { AboutComponent } from './page/about/about.component';
import { SearchComponent } from './page/search/search.component';

import { GreenHeaderComponent } from './body-parts/green-header/green-header.component';
import { GreenFooterComponent } from './body-parts/green-footer/green-footer.component';
import { BlueFooterComponent } from './body-parts/blue-footer/blue-footer.component';
import { BlueHeaderComponent } from './body-parts/blue-header/blue-header.component';

import { BooksComponent } from './content/books/books.component';
import { GamesComponent } from './content/games/games.component';

const pages: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'about', component: AboutComponent},
  {path: 'search', component: SearchComponent}
];

const parts: Routes = [
  {path: 'green', component: GreenHeaderComponent, outlet: 'header'},
  {path: 'green', component: GreenFooterComponent, outlet: 'footer'},
  {path: 'blue', component: BlueHeaderComponent, outlet: 'header'},
  {path: 'blue', component: BlueFooterComponent, outlet: 'footer'}
];

const sidebar: Routes = [
  {path: 'books', component: BooksComponent, outlet: 'sidebar'},
  {path: 'games', component: GamesComponent, outlet: 'sidebar'}
];

const contents: Routes = [
  {path: 'books', component: BooksComponent, outlet: 'content'},
  {path: 'games', component: GamesComponent, outlet: 'content'}
];

const routes: Routes = [...pages, ...parts, ...contents, ...sidebar];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
