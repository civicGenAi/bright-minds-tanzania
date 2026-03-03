import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
}

const SEO = ({ title, description, keywords }: SEOProps) => {
    const location = useLocation();

    useEffect(() => {
        const baseTitle = "Dyslexia Tanzania";
        const fullTitle = title ? `${title} | ${baseTitle}` : `${baseTitle} | Empowering Neurodiverse Learners`;

        document.title = fullTitle;

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute(
                "content",
                description || "Dyslexia Tanzania is a non-profit organization dedicated to raising awareness, screening, and providing educational support for children with dyslexia across Tanzania."
            );
        }

        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute(
                "content",
                keywords || "dyslexia tanzania, neurodiversity, special education, reading support, screening tanzania, educational advocacy"
            );
        }

        // Update OG tags too
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute("content", fullTitle);

        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) ogUrl.setAttribute("content", `https://www.dyslexiatanzania.org${location.pathname}`);

    }, [title, description, keywords, location]);

    return null;
};

export default SEO;
