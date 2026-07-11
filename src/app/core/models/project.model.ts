export interface Project {
  readonly id: number;
  readonly title: string;
  readonly slug: string;
  readonly shortDescription: string;
  readonly description: string;
  readonly technologies: readonly string[];
  readonly githubUrl: string;
  readonly liveUrl?: string;
  readonly imageUrl?: string;
  readonly galleryImages?: readonly string[];
  readonly featured: boolean;
}