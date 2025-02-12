import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Page",
    description: "SEO description",
    keywords: ["SEO", "keywords"],
};



export default function ContactPage() {
    return (
        <div>
           <span className="text-7xl">Contact page</span>
        </div>
    );
}