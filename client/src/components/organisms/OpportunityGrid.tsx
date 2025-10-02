import { Opportunity } from '../../types/opportunity';
import { OpportunityCard } from '../molecules';

interface OpportunityGridProps {
  opportunities: Opportunity[];
  savedOpportunities: string[];
  onSave: (id: string) => void;
}

export const OpportunityGrid = ({
  opportunities,
  savedOpportunities,
  onSave,
}: OpportunityGridProps) => {
  if (opportunities.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-gray-500 dark:text-gray-400">
          No opportunities found. Try adjusting your filters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {opportunities.map((opportunity) => (
        <OpportunityCard
          key={opportunity.id}
          opportunity={opportunity}
          onSave={onSave}
          isSaved={savedOpportunities.includes(opportunity.id)}
        />
      ))}
    </div>
  );
};
