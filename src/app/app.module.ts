import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './page/main/main.component';
import { BooksComponent } from './content/books/books.component';
import { GamesComponent } from './content/games/games.component';
import { BlueHeaderComponent } from './body-parts/blue-header/blue-header.component';
import { GreenHeaderComponent } from './body-parts/green-header/green-header.component';
import { BlueFooterComponent } from './body-parts/blue-footer/blue-footer.component';
import { GreenFooterComponent } from './body-parts/green-footer/green-footer.component';
import { AboutComponent } from './page/about/about.component';
import { SearchComponent } from './page/search/search.component';
import { MenuComponent } from './body-parts/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BooksComponent,
    GamesComponent,
    BlueHeaderComponent,
    GreenHeaderComponent,
    BlueFooterComponent,
    GreenFooterComponent,
    AboutComponent,
    SearchComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
