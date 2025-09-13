"use client";

import React from "react";
import GoogleReviewsWidget from "google-reviews-widget";

export default function ReviewsSection() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">
        What Our Customers Say
      </h2>

      <GoogleReviewsWidget
        instanceId="fo9H8S76XVjEDFBP3RLe"
      />
    </div>
  );
}
