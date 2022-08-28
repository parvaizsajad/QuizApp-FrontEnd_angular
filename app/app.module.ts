import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

import { AboutComponent } from './pages/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './pages/home/home.component';
import { authInterceptorProvider } from './service/AuthInterceptor/auth-interceptor';

import { LogoutComponent } from './components/logout/logout.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { AdminDashboardComponent } from './pages/Admin/adminComponent/admin-dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserDashboardComponent } from './pages/User/user-dashboard/user-dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { ProfileComponent } from './components/profile/profile.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';

import { AddCategoryComponent } from './pages/Admin/AddCategory/add-category/add-category.component';
import { ViewCategoriesComponent } from './pages/Admin/view-categories/view-categories.component';
import { viewQuizesComponent } from './pages/Admin/viewQuizes/view-quizes/view-quizes.component';
import { AddQuizComponent } from './pages/Admin/add-quiz/add-quiz.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { UpdateQuizComponent } from './pages/Admin/update-quiz/update-quiz.component';
import { ViewQuestionsComponent } from './pages/Admin/view-questions/view-questions.component';
import { AddQuestionComponent } from './pages/Admin/add-question/add-question.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { UserSideBarComponent } from './pages/User/user-side-bar/user-side-bar.component';
import { LoadAllQuizesComponent } from './pages/User/load-all-quizes/load-all-quizes.component';
import { UserCategoriesComponent } from './pages/User/user-categories/user-categories.component';
import { CategoryQuizComponent } from './pages/User/category-quiz/category-quiz.component';
import { UserStartQuizComponent } from './pages/User/user-start-quiz/user-start-quiz.component';
import { AttemptQuizComponent } from './pages/User/attempt-quiz/attempt-quiz.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from "ngx-ui-loader";




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    LogoutComponent,
    ErrorPageComponent,
    SidebarComponent,
    ProfileComponent,
    WelcomeComponent,
    EditProfileComponent,
    ViewCategoriesComponent,
    AddCategoryComponent,
    viewQuizesComponent,
    AddQuizComponent,
    UpdateQuizComponent,
    ViewQuestionsComponent,
    AddQuestionComponent,
    UserSideBarComponent,
    LoadAllQuizesComponent,
    UserCategoriesComponent,
    CategoryQuizComponent,
    UserStartQuizComponent,
    AttemptQuizComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatSelectModule,
    CKEditorModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground: true
    }),



  ],
  providers: [authInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
