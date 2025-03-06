import React from "react"
import classnames from "classnames"
import TestimonialLogo from "./TestimonialLogo"
import quoteIcon from "../../assets/images/quote-icon.svg"
import defaultTestimonialImg from "../../assets/images/christina-unsplash.png"
import defaultTestimonialIcon from "../../assets/images/workcation-logo.svg"

export default function Testimonial({
    children,
    author,
    company,
    role,
    img = null,
    alt,
    logo = null,
    ...rest
}) {

    const testimonialClasses = classnames(
        "testimonial",
        `testimonial-${img ? "with-img" : "without-img"}`
    )

    const testimonialFooterClasses = classnames(
        "testimonial-footer",
        `testimonial-footer-${img ? "with-img" : "without-img"}`
    )

    return (
        <figure className={testimonialClasses} {...rest}>
            {img && (
                <img
                    src={img}
                    alt={alt || author}
                />
            )}

            <div className="testimonial-content">
                {img && 
                    <div className="testimonial-quote-icon-container">
                        <img 
                            src={quoteIcon}
                            alt=""
                            className="testimonial-quote-icon" 
                        />
                    </div>
                }
                {!img && 
                    logo && 
                        <div className="testimonial-logo">
                            <TestimonialLogo {...logo} />
                        </div>
                }
                
                <blockquote className="testimonial-quote">
                    {children}
                </blockquote>

                <figcaption className={testimonialFooterClasses}>
                    <span className="testimonial-author">
                        {author}
                    </span>
                    {(role || company) && (
                        <>
                            {!img && <span className="testimonial-divider">
                                /
                            </span> }
                            <span className="testimonial-role-company">
                                {(role && company) 
                                    ? `${role}, ${company}`
                                    : role || company
                                }
                            </span>
                        </>
                    )}
                </figcaption>
            </div>
        </figure>
    )
}

export { defaultTestimonialImg, defaultTestimonialIcon }