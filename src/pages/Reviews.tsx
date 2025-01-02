import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import ReviewCard from "@/components/ReviewCard";
import ReviewForm from "@/components/ReviewForm";
import { Card } from "@/components/ui/card";

interface Review {
  name: string;
  rating: number;
  message: string;
  date: string;
}

const initialReviews: Review[] = [
  {
    name: "Emma Thompson",
    rating: 5,
    message: "AI-Solutions has transformed our workflow. Their AI-powered virtual assistant is incredibly intuitive and has significantly improved our productivity.",
    date: "2024-02-15"
  },
  {
    name: "James Wilson",
    rating: 4,
    message: "Great experience working with AI-Solutions. Their prototyping solutions saved us countless hours in the design phase.",
    date: "2024-02-14"
  },
  {
    name: "Sophie Chen",
    rating: 5,
    message: "The team at AI-Solutions is exceptional. Their commitment to innovation and customer support is outstanding.",
    date: "2024-02-13"
  },
  {
    name: "Marcus Rodriguez",
    rating: 4,
    message: "Very impressed with the AI capabilities. It's made our digital transformation journey much smoother.",
    date: "2024-02-12"
  },
  {
    name: "Alexandra Kim",
    rating: 5,
    message: "The virtual assistant is a game-changer. It's like having an extra team member who's always available to help.",
    date: "2024-02-11"
  },
  {
    name: "Oliver Singh",
    rating: 5,
    message: "AI-Solutions has helped us stay ahead of the curve. Their innovative approach to problem-solving is remarkable.",
    date: "2024-02-10"
  }
];

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const storedReviews = localStorage.getItem("reviews");
    if (storedReviews) {
      setReviews(JSON.parse(storedReviews));
    } else {
      setReviews(initialReviews);
      localStorage.setItem("reviews", JSON.stringify(initialReviews));
    }
  }, []);

  const handleSubmitReview = (newReview: Review) => {
    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem("reviews", JSON.stringify(updatedReviews));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <Navbar />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-8">
          Customer Reviews
        </h1>
        
        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>

        {/* Review Form Section */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Leave a Review</h2>
          <Card className="p-6 bg-slate-800/50 backdrop-blur-sm border-slate-700">
            <ReviewForm onSubmit={handleSubmitReview} />
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-slate-800 py-8 mt-24">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 AI-Solutions. All rights reserved.</p>
          <p className="mt-2">Innovating the future of digital employee experience.</p>
        </div>
      </footer>
    </div>
  );
};

export default Reviews;
