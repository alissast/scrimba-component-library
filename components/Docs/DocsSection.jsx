import React from "react"

export default function DocsSection({ children, title }) {

    return (
        <article>
            <h2>{title}</h2>
            {children}
        </article>        
    )
}