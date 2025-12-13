import React from 'react';
import { HeaderNavigationBase } from './HeaderNavigationBase';
import { Button } from './Button';
import 'primeicons/primeicons.css'; // Ensure icons are available

// Use PrimeIcons Zap equivalent
const ZapIcon = "pi pi-bolt";

import { useNavigate } from 'react-router-dom';

export const HeaderNavigationDualTierDemo = () => {
    const navigate = useNavigate();

    return (
        <HeaderNavigationBase
            items={[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                {
                    label: "Products",
                    href: "/products",
                    items: [
                        { label: "All Products", href: "/products" },
                        { label: "AI Envelop", href: "/products#ai-envelop" },
                        { label: "News AI", href: "/products#news-ai" },
                        { label: "Nutrition Copilot", href: "/products#nutrition-copilot" },
                        { label: "Smart Finance", href: "/products#personal-finance-copilot" },
                        { label: "Police AI", href: "/products#ai-copilot-police" },
                        { label: "Legal AI", href: "/products#ai-copilot-consulting" },
                    ],
                },
                {
                    label: "Services",
                    href: "/services",
                    items: [
                        { label: "All Services", href: "/services" },
                        { label: "AI Advisory", href: "/services#genai-advisory" },
                        { label: "Project Scoping", href: "/services#project-scoping" },
                        { label: "Building POC", href: "/services#building-poc" },
                        { label: "GenAI Consulting", href: "/services#genai-consulting" },
                    ]
                },
                { label: "Events", href: "/events" },
                { label: "Contact", href: "/contact" },
            ]}
        />
    );
};

export default HeaderNavigationDualTierDemo;
