import Navigation from '../pages/partials/Navigation'


const Layout = ({children}) => {
    return (
        <div className="custom-site-wrapper">
            <Navigation />
            {children}
        </div>
    )
}

export default Layout
