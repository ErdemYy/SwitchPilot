export interface DocsArticle {
  id: string;
  title: string;
  slug: string;
  category: string;
  tags: string[];
  summary: string;
  contentMarkdown: string;
  audience: 'USER' | 'ADMIN' | 'DEVELOPER' | 'NOC' | 'MSP';
  updatedAt: string;
}

export interface ApiEndpointMetadata {
  path: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  tag: string;
  summary: string;
  description: string;
  parameters: Array<{ name: string; type: string; required: boolean; description: string }>;
  requestSchema?: any;
  responseSchema?: any;
}

export interface LearningCourseModule {
  id: string;
  title: string;
  level: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED' | 'ENTERPRISE';
  durationMinutes: number;
  description: string;
  certificationPath: string;
  isCompleted?: boolean;
}

export interface ErrorCodeEntry {
  code: string;
  category: string;
  message: string;
  cause: string;
  recoverySteps: string[];
}

export interface ReleaseChangelogItem {
  version: string;
  releaseDate: string;
  highlights: string[];
  newFeatures: string[];
  bugFixes: string[];
  breakingChanges?: string[];
}
