export interface Skill {
  readonly id: number;
  readonly name: string;
  readonly category: 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'Other' | 'Responsive Design';
}