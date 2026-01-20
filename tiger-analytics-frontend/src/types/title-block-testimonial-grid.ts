import { UploadFile } from "./index";

// Testimonial item types
export interface Testimonial {
  content: string;
  name: string;
  position: string;
  role: string;
  image: UploadFile;
  logo_image: UploadFile;
}

// Testimonial grid component types
export interface ComponentBlockTestimonialGrid {
  __typename: "ComponentBlockTestimonialGrid";
  id: string;
  heading_1: string;
  heading_2: string;
  testimonials: Testimonial[];
}

// Props types for testimonial grid component
export interface TestimonialGridSectionProps {
  id: string;
  heading_1: string;
  heading_2: string;
  testimonials: Testimonial[];
}
