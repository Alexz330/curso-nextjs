import type { Metadata } from "next";

export const metadata:Metadata = {
    title: "Pricing Page",
    description: "SEO description",
    keywords: ["SEO", "keywords"],
};

export default function PricingPage() {
    return (
        <div>
           <span className="text-7xl">Pricing page</span>
        </div>
    );
}