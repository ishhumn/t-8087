import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";

interface ReviewFormProps {
  onSubmit: (review: {
    name: string;
    rating: number;
    message: string;
    date: string;
  }) => void;
}

const ReviewForm = ({ onSubmit }: ReviewFormProps) => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");
  const [hoveredRating, setHoveredRating] = useState(0);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !rating || !message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    const review = {
      name,
      rating,
      message,
      date: new Date().toLocaleDateString(),
    };

    onSubmit(review);
    setName("");
    setRating(0);
    setMessage("");
    toast({
      title: "Success",
      description: "Your review has been submitted",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Input
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-slate-900/50 border-slate-700 text-white placeholder:text-gray-400"
        />
      </div>
      <div className="flex items-center space-x-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`w-6 h-6 cursor-pointer transition-colors ${
              index < (hoveredRating || rating)
                ? "fill-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
            onMouseEnter={() => setHoveredRating(index + 1)}
            onMouseLeave={() => setHoveredRating(0)}
            onClick={() => setRating(index + 1)}
          />
        ))}
      </div>
      <div>
        <Textarea
          placeholder="Write your review..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full bg-slate-900/50 border-slate-700 text-white placeholder:text-gray-400"
        />
      </div>
      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
        Submit Review
      </Button>
    </form>
  );
};

export default ReviewForm;
