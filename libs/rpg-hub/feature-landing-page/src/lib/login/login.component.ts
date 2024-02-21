import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MapperPipe } from '@rpg-hub/shared-utils-mapper';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { LandingPageUtils } from '../landing-page.utils';

@Component({
  selector: 'rh-login',
  standalone: true,
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    RouterModule,
    ReactiveFormsModule,
    MapperPipe,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  readonly LandingPageUtils = LandingPageUtils;

  readonly loginGroup = new FormGroup({
    username: new FormControl<string>('', {
      validators: [Validators.required],
    }),
    password: new FormControl<string>('', {
      validators: [Validators.required],
    }),
  });

  submit(): void {
    LandingPageUtils.markAllAsDirty(this.loginGroup);
  }
}
