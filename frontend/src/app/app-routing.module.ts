import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MusicComponent } from './components/music/music.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ForumComponent } from './components/forum/forum.component';
import { AddSongComponent } from './components/add-song/add-song.component';
import { TopListComponent } from './components/top-list/top-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'music', component: MusicComponent },
  { path: 'music/:id', component: MusicComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'top-list', component: TopListComponent },
  { path: 'add-song', component: AddSongComponent },
  

  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
