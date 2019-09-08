import React, { Fragment } from "react"
import Header from "./header"
import "./layout.css"

const Layout = ({children}) => {
    return (
        <Fragment>
            <Header />
            <div>{children}</div>
        </Fragment>
    )
}

export default Layout