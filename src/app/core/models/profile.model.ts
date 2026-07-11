export interface Profile {
  readonly fullName: string;
  readonly shortName: string;
  readonly title: string;
  readonly location: string;
  readonly email: string;
  readonly phone?: string;
  readonly summary: string;
  readonly profileImageUrl: string;
  readonly resumeUrl: string;
}