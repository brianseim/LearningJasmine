import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RequirementsComponent } from './pages/requirements/requirements.component';
import { SongEntryComponent } from './pages/song-entry/song-entry.component';
import { SongListsComponent } from './pages/song-lists/song-lists.component';

import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TeamMemberService } from './services/team-member.service';
import { SongService } from './services/song.service';

import { SongComponent } from './components/song/song.component';
import { SongEditComponent } from './components/song-edit/song-edit.component';

const appRoutes: Routes = [
  { path: 'requirements', component: RequirementsComponent },
  { path: 'song-entry', component: SongEntryComponent },
  { path: 'song-lists', component: SongListsComponent },
  { path: '', redirectTo: '/requirements', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    RequirementsComponent,
    SongEntryComponent,
    SongListsComponent,
    SongComponent,
    SongEditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    ReactiveFormsModule
  ],
  providers: [SongService, TeamMemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
