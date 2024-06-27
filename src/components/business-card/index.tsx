import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface BusinessCardProps {
  name: string;
  title: string;
  phone: string;
  avatarUrl: string;
  introduction: string;
}

const BusinessCard: React.FC<BusinessCardProps> = ({ name, title, phone, avatarUrl, introduction }) => {
  return (
    <Card className="w-full mx-auto flex items-start justify-start mb-4 p-4">
      <CardHeader className="flex items-center p-4">
        <Avatar className="h-24 w-24">
          <AvatarImage src={avatarUrl} alt={`${name} avatar`} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className='flex items-start flex-col'>
          <CardTitle className="text-xl font-bold">{name}</CardTitle>
          <CardDescription className="text-sm">{title}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <p className="text-sm"><strong>Phone:</strong> {phone}</p>
        <p className="text-sm mt-4">{introduction}</p>
      </CardContent>
    </Card>
  );
};

export default BusinessCard;