import { Star } from "lucide-react";
import { motion } from "framer-motion";

export function MovieCard({ movie, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="group relative flex flex-col overflow-hidden rounded-xl bg-card border border-white/5 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
    >
      {/* Poster Image Container */}
      <div className="relative aspect-[2/3] overflow-hidden bg-muted">
        <img
          src={movie.posterUrl}
          alt={movie.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            // Fallback for broken images
            e.target.src =
              "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=800&q=80";
          }}
        />

        {/* Rating Badge Overlay */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1 text-sm font-bold backdrop-blur-md border border-white/10">
          <Star className="h-4 w-4 fill-accent text-accent" />
          <span className="text-white">{movie.rating}/5</span>
        </div>

        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 relative z-10 -mt-12 bg-gradient-to-t from-card via-card to-transparent pt-12">
        <h3 className="font-display text-xl font-bold leading-tight text-white mb-2 line-clamp-1 group-hover:text-primary transition-colors">
          {movie.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
          {movie.description}
        </p>
      </div>

      {/* Bottom accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}
