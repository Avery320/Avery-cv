export interface CvTimelineItem {
  date: string;
  title: string;
  titlePrefix?: string;
  titleSuffix?: string;
  subtitle?: string;
  description?: string | CvTimelineDetail[];
  href?: string;
}

export interface CvTimelineDetail {
  text: string;
  level: "heading" | "detail";
}

export interface CvTimelineSection {
  heading: string;
  items: CvTimelineItem[];
}

export interface CvContent {
  pageTitle: string;
  pageDescription: string;
  workExperienceHeading: string;
  workExperience: CvTimelineItem[];
  educationHeading: string;
  education: CvTimelineItem[];
  sections: CvTimelineSection[];
}
