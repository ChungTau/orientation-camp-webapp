import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AnimatedTooltip } from '../ui/animated-tooltip';
import AvatarCircles from '../magicui/avatar-circles';

interface GroupCardProps {
  groupName: string;
  slogan: string;
  description: string;
  avatarUrl: string;
}

const avatarUrls = [
    "https://avatars.githubusercontent.com/u/16860528",
    "https://avatars.githubusercontent.com/u/20110627",
    "https://avatars.githubusercontent.com/u/106103625",
  ];

const GroupCard: React.FC<GroupCardProps> = ({ groupName, slogan, description, avatarUrl }) => {
  return (
    <Card className="w-full mx-auto mb-4 flex flex-row justify-between items-center">
      <CardHeader className="flex items-center flex-row p-4">
        <Avatar className="h-16 w-16 mr-4">
          <AvatarImage src={avatarUrl} alt={`${groupName} avatar`} />
          <AvatarFallback>{groupName.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className='flex items-start justify-center flex-col'>
          <CardTitle className="text-xl font-bold">{groupName}</CardTitle>
          <CardDescription className="text-sm">{slogan}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="p-4 flex flex-row">
      <AvatarCircles numPeople={99} avatarUrls={avatarUrls} />
      </CardContent>
    </Card>
  );
};

export default GroupCard;