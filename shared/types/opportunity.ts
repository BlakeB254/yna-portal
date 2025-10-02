export type Track =
  | "Engineering"
  | "Media"
  | "IT/Coding"
  | "Business"
  | "Athletics"
  | "Communications"
  | "Agriculture"
  | "General";

export type OpportunityType =
  | "Scholarship"
  | "Competition"
  | "Job"
  | "Grant"
  | "Internship"
  | "Event"
  | "Workshop"
  | "Hackathon";

export type DifficultyLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

export type RewardType = "monetary" | "equipment" | "recognition" | "experience";

export interface OpportunityRequirements {
  age?: string;
  skills?: string[];
  experience?: DifficultyLevel;
  eligibility?: string[];
}

export interface OpportunityDates {
  applicationOpen?: string;
  applicationClose?: string;
  programStart?: string;
  programEnd?: string;
  eventDate?: string;
}

export interface OpportunityBenefits {
  monetary?: string;
  equipment?: string[];
  experience?: string;
  mentorship?: boolean;
  certificate?: boolean;
  type?: RewardType[];
}

export interface Opportunity {
  id: string;
  title: string;
  organization: string;
  type: OpportunityType;
  tracks: Track[];
  description: string;
  requirements: OpportunityRequirements;
  dates: OpportunityDates;
  benefits: OpportunityBenefits;
  applicationUrl: string;
  location: string;
  timeCommitment?: string;
  successRate?: string;
  alumniNotes?: string;
  difficulty?: DifficultyLevel;
}
