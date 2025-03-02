import { ImageIcon, Palette, Share, Sparkles, Zap } from "lucide-react";

export const features = [
  { id : 1 , 
    title: "AI-Powered Image Generation",
    description: "Transform text descriptions into stunning, high-quality images using advanced AI models.",
    icon: <Sparkles size={50} className="text-primary  bg-white shadow-[3px_3px_#000] rounded-lg p-"/>,
  },
  { id : 2 , 
    title: "Customizable Styles",
    description: "Choose from various artistic styles to match your vision, from futuristic cyberpunk to cozy minimalism.",
    icon: <Palette size={50} className="text-primary  bg-white shadow-[3px_3px_#000] rounded-lg p- " />,
  },
  { id : 3 , 
    title: "Fast & Efficient",
    description: "Generate images in seconds with our optimized AI models, perfect for quick inspiration or content creation.",
    icon: <Zap size={50} className="text-primary  bg-white shadow-[3px_3px_#000] rounded-lg p-" />,
  },
  { id : 4 , 
    title: "High-Resolution Output",
    description: "Download ultra-HD images suitable for professional use, marketing, or social media.",
    icon: <ImageIcon size={50} className="text-primary bg-white shadow-[3px_3px_#000] rounded-lg p- " />,
  },
  { id : 5 , 
    title: "Easy Sharing & Export",
    description: "Share your AI-generated visuals instantly or export them for further editing.",
    icon: <Share size={50} className="text-primary  bg-white shadow-[3px_3px_#000] rounded-lg p-" />,
  },
];
export const pricing = [
  {
    id : 619293,
    title: "Monthly Plan",
    price: "$19/month",
    description: "Perfect for frequent users who need unlimited AI image generations with full customization and priority support.",
    features: [
      "Unlimited AI image generations",
      "Access to all customization options",
      "High-resolution image downloads",
      "Priority customer support",
      "Cancel anytime",
    ],
    url: "https://buy.stripe.com/test_6oE7vM0Vgb5T0vuaEG"
  },
  {
    id : 2,
    title: "One-Time Purchase",
    price: "$49",
    description: "Ideal for one-time users who want a set number of AI images without any recurring fees.",
    features: [
      "Generate up to 20 AI images",
      "Full access to customization",
      "High-resolution downloads",
      "No recurring fees",
    ],
    url:"https://buy.stripe.com/test_fZeaHY47s3Drba8145"
  }
];
const faqs = [
  { id : 1,
    question: "How does the AI generate images from text?",
    answer: "Our AI uses advanced machine learning models to analyze your text and create realistic, high-quality images based on the description.",
  },
  { id : 2,
    question: "Can I use the generated images commercially?",
    answer: "Yes! You can use the images for personal or commercial projects. However, reselling them as standalone assets is not allowed.",
  },
  { id : 3,
    question: "What’s the difference between the monthly and one-time plan?",
    answer: "The monthly plan offers unlimited generations, while the one-time purchase gives you a fixed number of image generations without recurring payments.",
  },
  { id : 4,
    question: "How long does it take to generate an image?",
    answer: "Most images are generated within a few seconds, but complex requests may take up to a minute.",
  },
  { id : 5,
    question: "Do I need any design skills to use this?",
    answer: "Not at all! Just describe what you want, and the AI will generate the image for you.",
  },
];
export default faqs;
