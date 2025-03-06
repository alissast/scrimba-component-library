import React from "react"
import classnames from "classnames"

export default function Badge({ children, className, color, shape, ...rest }) {
    const badgeClass = "badge"
    const shapeClass = shape ? `badge-${shape}` : ""
    const colorClass = color ? `badge-${color}` : ""
    const allClasses = classnames(badgeClass, colorClass, shapeClass, className)
    
    return (
        <span className={allClasses}>
            {children}
        </span>
    )
}