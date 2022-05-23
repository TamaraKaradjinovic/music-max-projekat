import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegistrationComponent } from './components/auth/registration/registration.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; 
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatCardModule } from '@angular/material/card'; 
import { MatSelectModule } from '@angular/material/select'; 
import { MatSnackBarModule } from '@angular/material/snack-bar'; 
import { MatNativeDateModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu'; 
import { MatToolbarModule}  from '@angular/material/toolbar'; 
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete'; 
import { MatDividerModule } from '@angular/material/divider'; 
import { MatSliderModule } from '@angular/material/slider';  
import { MatPaginatorModule } from '@angular/material/paginator'; 
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion'; 
// import {MatList, MatListModule} from '@angular/material/list';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { FormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component'; 
import { HttpRequestInterceptor } from './interceptors/HttpRequestInterceptor';
import { MenuComponent } from './components/menu/menu.component';
import { MusicComponent } from './components/songs/music/music.component';
import { ForumComponent } from './components/forum/forum.component';
import { TopListComponent } from './components/songs/top-list/top-list.component';
import { AddSongComponent } from './components/songs/add-song/add-song.component';
import { ViewSongComponent } from './components/songs/view-song/view-song.component';
import { FestivalsComponent } from './components/news/festivals/festivals.component';
import { NewsCardComponent } from './components/news/news-card/news-card.component';
import { AddNewsComponent } from './components/news/add-news/add-news.component';
import { FestivalCardComponent } from './components/news/festival-card/festival-card.component';
import { SongCardComponent } from './components/songs/song-card/song-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    MenuComponent,
    MusicComponent,
    MusicComponent,
    ForumComponent,
    TopListComponent,
    AddSongComponent,
    ViewSongComponent,
    FestivalsComponent,
    FestivalCardComponent,
    AddNewsComponent,
    NewsCardComponent,
    SongCardComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule, 
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatSelectModule,
    MatSnackBarModule,
    MatNativeDateModule,
    MatMenuModule,
    MatToolbarModule,
    MatAutocompleteModule, 
    MatDividerModule,
    MatSliderModule,
    MatPaginatorModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatIconModule,
    MatDialogModule,
    MatExpansionModule
    // MatList
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
