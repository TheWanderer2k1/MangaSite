import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MangaService } from './manga.service';
import {HttpClientModule} from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReadpageComponent } from './readpage/readpage.component';
import { SearchResultScreenComponent } from './search-result-screen/search-result-screen.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';
import { SearchService } from './search.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MangaService, LoginService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
