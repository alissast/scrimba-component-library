import React from "react"
import classnames from "classnames"

export default function TestimonialLogo({ src, alt, text, className = "", ...rest }) {
    const logoContainerClasses = classnames("testimonial-logo-container", className)

    return (
        <div className={logoContainerClasses} {...rest}>
            {src && 
                <img 
                    className="logo-img" 
                    src={src}
                    alt={alt || `${text} logo`} 
                />
            }
            {text && (
                <span className="logo-text">
                    {text}
                </span>
            )}
        </div>
    )
}