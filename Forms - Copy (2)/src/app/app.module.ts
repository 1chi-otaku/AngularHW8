import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Добавляем FormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { PasswordMatchDirective } from './password-match.directive';
import { RformComponent } from './rform/rform.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    PasswordMatchDirective,
    RformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Включаем FormsModule здесь
    ReactiveFormsModule // Включаем ReactiveFormsModule здесь
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
