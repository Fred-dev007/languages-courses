import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/auth/login-form/login-form.component';
import { RegisterFormComponent } from './components/auth/register-form/register-form.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { MainContentComponent } from './components/layout/main-content/main-content.component';
import { NavComponent } from './components/layout/nav/nav.component';
import { FormAddTaskComponent } from './components/tasks/form-add-task/form-add-task.component';
import { SearchTaskComponent } from './components/tasks/search-task/search-task.component';
import { TaskComponent } from './components/tasks/task/task.component';
import { TaskGroupComponent } from './components/tasks/task-group/task-group.component';
import { TaskGroupListComponent } from './components/tasks/task-group-list/task-group-list.component';
import { TestComponent } from './components/tests/test/test.component';
import { AfficheListeLanguagesComponent } from './components/tests/affiche-liste-languages/affiche-liste-languages.component';
import { AfficheDetailsLanguageComponent } from './components/tests/affiche-details-language/affiche-details-language.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CustomPipe } from './custom.pipe';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { UserListComponent } from './components/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegisterFormComponent,
    HeaderComponent,
    MainContentComponent,
    NavComponent,
    FormAddTaskComponent,
    SearchTaskComponent,
    TaskComponent,
    TaskGroupComponent,
    TaskGroupListComponent,
    TestComponent,
    AfficheListeLanguagesComponent,
    AfficheDetailsLanguageComponent,
    NotFoundComponent,
    CustomPipe,
    UserListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
    
  ],
  providers: [
    provideHttpClient(
      withFetch(),
    ),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
