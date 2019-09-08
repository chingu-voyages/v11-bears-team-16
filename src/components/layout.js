import React from "react"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import "./components.css"

const Layout = ({children}) => {
    return (
        <div className="layout-wrapper">
            <div className="content">
                <Header />
                <div>{children}</div>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}

export default Layout