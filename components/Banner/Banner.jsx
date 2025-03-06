import React from "react"
import classnames from "classnames"
import { FaCheckCircle, FaExclamationTriangle, FaTimesCircle, FaInfoCircle } from "react-icons/fa";


export default function Banner({ 
    children, 
    title,
    className, 
    status = "neutral", 
    showIcon = true,
    ...rest 
}) {
    const bannerClass = "banner"
    const statusClass = `banner-${status}`
    const allBannerClasses = classnames(bannerClass, statusClass, className)

    const statusTitle = {
        success: "Congratulations!",
        warning: "Attention",
        error: "There is a problem with your application",
        neutral: "Update available",
    }

    const statusIcon = {
        success: <FaCheckCircle />,
        warning: <FaExclamationTriangle />,
        error: <FaTimesCircle />,
        neutral: <FaInfoCircle />,
    }

    return (
        <aside 
            role={status === "error" ? "alert" : "status"} 
            className={classnames(allBannerClasses, {"no-icon" : !showIcon })}
            {...rest}
        >
            <div className="banner-header">
                {showIcon && <span className="banner-icon">
                    {statusIcon[status]}
                </span>}                
                <div className="banner-text">
                    <div className="banner-title">{title || statusTitle[status]}</div>
                    {children && <div className="banner-message">{children}</div>}
                </div>
            </div>
        </aside>
    )
}
