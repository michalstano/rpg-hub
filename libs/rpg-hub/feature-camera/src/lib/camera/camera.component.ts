import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'rh-camera',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './camera.component.html',
  styleUrl: './camera.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureCameraComponent {}
