import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RequirementsComponent } from './pages/requirements/requirements.component';
import { SongEntryComponent } from './pages/song-entry/song-entry.component';
import { SongListsComponent } from './pages/song-lists/song-lists.component';

import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';

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
    SongListsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
