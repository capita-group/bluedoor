// components/ReviewModal.jsx
"use client";

import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function ReviewModal({ isOpen, onClose, onSubmit }) {
  const [reviewForm, setReviewForm] = useState({
    name: "",
    position: "",
    testimonial: "",
    rating: 5
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReviewForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRatingChange = (rating) => {
    setReviewForm(prev => ({
      ...prev,
      rating
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await onSubmit(reviewForm);
      setReviewForm({
        name: "",
        position: "",
        testimonial: "",
        rating: 5
      });
      onClose();
    } catch (error) {
      console.error("Failed to submit review:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <FaTimes className="w-5 h-5" />
        </button>

        <div className="mb-6 text-center">
          <h3 className="text-2xl font-bold text-[#5ab3e7]">
            Share Your Experience
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            We would love to hear about your dining experience
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Name *
            </label>
            <input
              type="text"
              name="name"
              value={reviewForm.name}
              onChange={handleInputChange}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#5ab3e7] focus:ring-2 focus:ring-[#5ab3e7]/20 outline-none transition"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Position / Title
            </label>
            <input
              type="text"
              name="position"
              value={reviewForm.position}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#5ab3e7] focus:ring-2 focus:ring-[#5ab3e7]/20 outline-none transition"
              placeholder="Food Blogger, Restaurant Owner, etc."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Rating
            </label>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleRatingChange(star)}
                  className="text-2xl focus:outline-none transition-transform hover:scale-110"
                >
                  {star <= reviewForm.rating ? (
                    <span className="text-yellow-400">★</span>
                  ) : (
                    <span className="text-gray-300">☆</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Review *
            </label>
            <textarea
              name="testimonial"
              value={reviewForm.testimonial}
              onChange={handleInputChange}
              required
              rows={4}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#5ab3e7] focus:ring-2 focus:ring-[#5ab3e7]/20 outline-none transition resize-none"
              placeholder="Share your dining experience with us..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-gradient-to-r from-[#5ab3e7] to-[#4a9fd8] py-3 font-medium text-white hover:from-[#4a9fd8] hover:to-[#5ab3e7] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-lg"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                </svg>
                Submitting...
              </span>
            ) : (
              "Submit Review"
            )}
          </button>
        </form>

        <p className="mt-4 text-center text-xs text-gray-500">
          Your review will be displayed after approval. We appreciate your feedback!
        </p>
      </div>
    </div>
  );
}