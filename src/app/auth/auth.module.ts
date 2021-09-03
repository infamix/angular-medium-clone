import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EffectsModule } from "@ngrx/effects";
import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from "./components/register/register.component";
import { reducers } from "./store/reducers";
import { AuthService } from "./services/auth.service";
import { RegisterEffect } from "./store/effects/register.effect";
import { BackendErrorMessagesModule } from "../shared/modules/backendErrorMessages/backendErrorMessages.module";
import { PersistanceService } from "../shared/services/persistance.service";

const routes: Routes = [
    {
        path: 'register', 
        component: RegisterComponent,
    }
]

@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes), 
        ReactiveFormsModule, FormsModule, 
        StoreModule.forFeature('auth', reducers), 
        EffectsModule.forFeature([RegisterEffect]), 
        BackendErrorMessagesModule,
    ],   
    declarations: [RegisterComponent],
    providers: [AuthService, PersistanceService],
})
export class AuthModule {}