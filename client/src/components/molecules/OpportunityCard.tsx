import { Opportunity } from '../../types/opportunity';
import { Card, Badge, Button } from '../atoms';
import { Calendar, MapPin, Clock, Award, ExternalLink } from 'lucide-react';
import { format } from 'date-fns';

interface OpportunityCardProps {
  opportunity: Opportunity;
  onSave?: (id: string) => void;
  isSaved?: boolean;
}

export const OpportunityCard = ({ opportunity, onSave, isSaved = false }: OpportunityCardProps) => {
  const getDeadlineDate = () => {
    if (opportunity.dates.applicationClose) {
      return format(new Date(opportunity.dates.applicationClose), 'MMM dd, yyyy');
    }
    if (opportunity.dates.eventDate) {
      return format(new Date(opportunity.dates.eventDate), 'MMM dd, yyyy');
    }
    return 'Ongoing';
  };

  const getDifficultyColor = (difficulty?: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Advanced':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'Expert':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  return (
    <Card hover className="p-5 flex flex-col h-full">
      {/* Header */}
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {opportunity.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{opportunity.organization}</p>
        </div>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-2 mb-3">
        <Badge variant="type">{opportunity.type}</Badge>
        {opportunity.tracks.slice(0, 2).map((track) => (
          <Badge key={track} variant="track">
            {track}
          </Badge>
        ))}
        {opportunity.difficulty && (
          <Badge className={getDifficultyColor(opportunity.difficulty)}>
            {opportunity.difficulty}
          </Badge>
        )}
      </div>

      {/* Description */}
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
        {opportunity.description}
      </p>

      {/* Info Grid */}
      <div className="space-y-2 mb-4 text-sm">
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
          <Calendar className="w-4 h-4" />
          <span>Deadline: {getDeadlineDate()}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
          <MapPin className="w-4 h-4" />
          <span>{opportunity.location}</span>
        </div>
        {opportunity.timeCommitment && (
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <Clock className="w-4 h-4" />
            <span>{opportunity.timeCommitment}</span>
          </div>
        )}
        {opportunity.benefits.monetary && (
          <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-semibold">
            <Award className="w-4 h-4" />
            <span>{opportunity.benefits.monetary}</span>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="mt-auto flex gap-2">
        <Button
          variant="primary"
          size="sm"
          className="flex-1 flex items-center justify-center gap-2"
          onClick={() => window.open(opportunity.applicationUrl, '_blank')}
        >
          Apply <ExternalLink className="w-4 h-4" />
        </Button>
        <Button
          variant={isSaved ? 'secondary' : 'outline'}
          size="sm"
          onClick={() => onSave?.(opportunity.id)}
        >
          {isSaved ? 'Saved' : 'Save'}
        </Button>
      </div>
    </Card>
  );
};
