import React from "react"
import classnames from "classnames"
import { HiOutlineCloudUpload } from "react-icons/hi";

export default function Card({ 
    children, 
    icon = <HiOutlineCloudUpload />,
    iconPosition,
    iconColor,
    iconBgColor,
    title,
    headingLevel = "h3",
    cardBgColor = "#F9FAFB",
    cardHeadingColor = "#111827",
    cardTextColor = "#6B7280",
    ...rest
}) {

    const validHeadingLevels = ["h1", "h2", "h3", "h4", "h5", "h6"]
    const lowerCaseHeadingLevel = headingLevel?.toLowerCase()
    const HeadingTag = validHeadingLevels.includes(lowerCaseHeadingLevel) 
        ? lowerCaseHeadingLevel 
        : "h3"

    const predefinedIconThemes = {
        gray: {bg: "#F3F4F6", icon: "#1F2937"},
        red: {bg: "#FEE2E2", icon: "#991B1B"},
        yellow: {bg: "#FEF3C7", icon: "#92400E"},
        green: {bg: "#D1FAE5", icon: "#065F46"},
        blue: {bg: "#DBEAFE", icon: "#1E40AF" },
        indigo: {bg:"#E0E7FF", icon: "#3730A3"},
        purple: {bg: "#EDE9FE", icon: "#5B21B6"},
        pink: {bg: "#FCE7F3", icon: "#9D174D"},
        darkBlue: {bg: "#1C51B9", icon: "#FFFFFF"},
        darkRed: {bg: "#7F1D1D", icon: "#FFFFFF"},
        darkGray: {bg: "#1F2937", icon: "#FFFFFF"},
        darkGreen: {bg: "#064E3B", icon: "#FFFFFF"},
    }

    const iconColorTheme = predefinedIconThemes[iconBgColor]
    const finalBgColor = iconColorTheme?.bg || iconBgColor || "#3F75FE"
    const finalIconColor = iconColor || iconColorTheme?.icon || "#FFFFFF"

    const validIconPositions = ["top", "right", "bottom", "left"]
    const standardizedIconPosition = (
        validIconPositions.includes(iconPosition) ? iconPosition : "top"
    )

    const cardClasses = classnames(
        "card",
        standardizedIconPosition === "top" && "card-has-icon-top",
        standardizedIconPosition === "right" && "card-has-icon-right",
        standardizedIconPosition === "bottom" && "card-has-icon-bottom",
        standardizedIconPosition === "left" && "card-has-icon-left"
    )
    const iconClasses = classnames(
        "card-icon", `card-icon-${standardizedIconPosition}`
    )

    return (
        <div 
            className={cardClasses}
            style={{ backgroundColor: cardBgColor }}
        >
            <div 
                className={iconClasses}
                style={
                    {
                        backgroundColor: finalBgColor,
                        color: finalIconColor,
                    }
                }
            >
                { icon }
            </div>
            <HeadingTag
                style={{ color: cardHeadingColor }}
            >
                {title}
            </HeadingTag>
            <div 
                style={{ color: cardTextColor }}
            >
                { children }
            </div>
        </div>
    )
}

