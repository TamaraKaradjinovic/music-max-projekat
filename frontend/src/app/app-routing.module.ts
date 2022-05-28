import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { MusicComponent } from './components/songs/music/music.component';
import { RegistrationComponent } from './components/auth/registration/registration.component';
import { ForumComponent } from './components/forum/forum.component';
import { AddSongComponent } from './components/songs/add-song/add-song.component';
import { TopListComponent } from './components/songs/top-list/top-list.component';
import { FestivalsComponent } from './components/news/festivals/festivals.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'music', component: MusicComponent },
  { path: 'music/:genre', component: MusicComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'top-list', component: TopListComponent },
  { path: 'add-song', component: AddSongComponent },
  { path: 'festivals', component: FestivalsComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
