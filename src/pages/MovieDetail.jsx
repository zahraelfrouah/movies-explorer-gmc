import { useParams, Link } from "wouter";
import { ChevronLeft, Star } from "lucide-react";


const movies = [
  {
    id: 1,
    title: "Inception",
    description: "A mind-bending thriller by Christopher Nolan.",
    rating: 4.8,
    posterUrl: "https://img3.hulu.com/user/v3/artwork/5519f425-9b21-48fb-8e67-aef24c76604a?base_image_bucket_name=image_manager&base_image=27c60b99-1b1d-47bd-bea0-b4e562bedccc&size=458x687&format=webp",

    trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
  },
  {
    id: 2,
    title: "The Dark Knight",
    description: "Batman faces the Joker in Gotham City.",
    rating: 4,
    posterUrl: "https://storage.googleapis.com/pod_public/1300/257216.jpg",
    trailerUrl: "https://www.youtube.com/embed/EXeTwQWrcwY?si=NAZ5aRFCoLixYIf7",
  },
  {
    id: 3,
    title: "Interstellar",
    description: "Exploring space and time to save humanity.",
    rating: 4.7,
    posterUrl: "https://www.theatre-vanves.fr/wp-content/uploads/2025/04/interstellar-internet-1440x810.jpg",
    trailerUrl: "https://www.youtube.com/embed/zSWdZVtXT7E?si=JLwnUm7FPncSe87d",
  },
];

export default function MovieDetail() {
  const params = useParams();
  const id = parseInt(params.id || "0");

  const movie = movies.find((m) => m.id === id);

  if (!movie) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <h1 className="text-2xl font-bold mb-4">Movie not found</h1>
        <Link href="/">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md">
            Back to Home
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white pb-20">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link href="/">
          <button className="mb-8 flex items-center hover:bg-gray-800 px-3 py-2 rounded-md transition">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Home
          </button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Poster */}
          <div className="space-y-8">
            <div className="relative aspect-[2/3] overflow-hidden rounded-2xl shadow-xl border border-gray-800">
              <img
                src={movie.posterUrl}
                alt={movie.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-black/70 px-4 py-2 text-lg font-bold">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span>{movie.rating}/5</span>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold">{movie.title}</h1>
              <p className="text-lg text-gray-400">
                {movie.description}
              </p>
            </div>
          </div>

          {/* Trailer */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Trailer</h2>

            {movie.trailerUrl ? (
              <div className="aspect-video w-full overflow-hidden rounded-2xl shadow-xl border border-gray-800">
                <iframe
                  src={movie.trailerUrl}
                  title={`${movie.title} trailer`}
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="aspect-video w-full flex items-center justify-center bg-gray-800 rounded-2xl border border-dashed border-gray-700">
                <p className="text-gray-400">
                  No trailer available for this movie.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}