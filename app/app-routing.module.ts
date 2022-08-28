import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuardGuard } from './pages/Admin/AdminGuard/admin-guard.guard';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { SignupComponent } from './components/signup/signup.component';
import { AboutComponent } from './pages/about/about.component';

import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { HomeComponent } from './pages/home/home.component';
import { UserDashboardComponent } from './pages/User/user-dashboard/user-dashboard.component';

import { AdminDashboardComponent } from './pages/Admin/adminComponent/admin-dashboard.component';
import { UserGuardGuard } from './pages/User/UserGuard/user-guard.guard';
import { ProfileComponent } from './components/profile/profile.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { AddCategoryComponent } from './pages/Admin/AddCategory/add-category/add-category.component';
import { ViewCategoriesComponent } from './pages/Admin/view-categories/view-categories.component';
import { viewQuizesComponent } from './pages/Admin/viewQuizes/view-quizes/view-quizes.component';
import { AddQuizComponent } from './pages/Admin/add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './pages/Admin/update-quiz/update-quiz.component';
import { ViewQuestionsComponent } from './pages/Admin/view-questions/view-questions.component';
import { AddQuestionComponent } from './pages/Admin/add-question/add-question.component';
import { LoadAllQuizesComponent } from './pages/User/load-all-quizes/load-all-quizes.component';
import { UserCategoriesComponent } from './pages/User/user-categories/user-categories.component';
import { CategoryQuizComponent } from './pages/User/category-quiz/category-quiz.component';
import { UserStartQuizComponent } from './pages/User/user-start-quiz/user-start-quiz.component';
import { AttemptQuizComponent } from './pages/User/attempt-quiz/attempt-quiz.component';









const routes: Routes = [
  {
    path: 'attempt/:id',
    component: AttemptQuizComponent,
    canActivate: [UserGuardGuard]

  }

  ,
  {
    path: "signup",
    component: SignupComponent,
    pathMatch: "full"

  },
  {
    path: "login",
    component: LoginComponent,
    pathMatch: 'full',



  },
  {
    path: "home",
    component: HomeComponent,
    pathMatch: "full"

  },
  {
    path: "userDashboard",
    component: UserDashboardComponent,
    canActivate: [UserGuardGuard],
    children: [{
      path: 'profile',
      component: ProfileComponent,
    },
    {
      path: 'allQuizes',
      component: LoadAllQuizesComponent
    }, {
      path: 'categories',
      component: UserCategoriesComponent
    }, {
      path: 'categoryQuiz/:cid',
      component: CategoryQuizComponent
    }, {
      path: 'startQuiz/:qid',
      component: UserStartQuizComponent
    }
    ]
  },
  {
    path: "adminDashboard",
    component: AdminDashboardComponent,
    canActivate: [AdminGuardGuard],
    children: [{
      path: 'profile',
      component: ProfileComponent
    }, {
      path: '',
      component: WelcomeComponent
    }, {
      path: 'edit',
      component: EditProfileComponent
    },
    {
      path: 'addCategory',
      component: AddCategoryComponent
    }
      , {
      path: 'viewCategory',
      component: ViewCategoriesComponent
    }, {
      path: 'viewQuizes',
      component: viewQuizesComponent
    }, {
      path: 'addQuizes',
      component: AddQuizComponent
    }, {
      path: 'updateQuiz/:qid',
      component: UpdateQuizComponent
    }, {
      path: 'viewQuestions/:qId/:qTitle',
      component: ViewQuestionsComponent
    }, {
      path: 'addQuestions/:qId/:qTitle',
      component: AddQuestionComponent
    }
    ]

  },
  {
    path: "about",
    component: AboutComponent,
    pathMatch: "full"
  },
  {
    path: 'logout',
    component: LogoutComponent,
    pathMatch: 'full'
  }, {
    path: "error-page",
    component: ErrorPageComponent,
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
