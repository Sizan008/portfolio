import { Component, input } from '@angular/core';
import { Skill } from '../../../core/models/skill.model';

@Component({
  selector: 'app-skill-card',
  imports: [],
  templateUrl: './skill-card.html',
  styleUrl: './skill-card.scss',
})
export class SkillCard {
  readonly skill = input.required<Skill>();
}