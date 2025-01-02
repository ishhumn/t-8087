import { Star } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface ReviewCardProps {
  name: string;
  rating: number;
  message: string;
  date: string;
}

const ReviewCard = ({ name, rating, message, date }: ReviewCardProps) => {
  // Generate a random number between 1 and 4 for avatar selection
  const avatarNumber = Math.floor(Math.random() * 4) + 1;
  const avatarUrl = `https://source.unsplash.com/random/150x150?portrait=${avatarNumber}`;

  return (
    <Card className="w-full bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:bg-slate-800/70 transition-all">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12 border-2 border-blue-500">
            <AvatarImage src={avatarUrl} alt={name} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="font-semibold text-lg text-white">{name}</div>
        </div>
        <div className="flex items-center">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={`w-4 h-4 ${
                index < rating ? "fill-blue-500 text-blue-500" : "text-gray-500"
              }`}
            />
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-300">{message}</p>
        <p className="text-sm text-gray-500 mt-2">{date}</p>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
