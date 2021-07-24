const Footer = () => {
    const centreText = {textAlign: 'center'};

    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div style={centreText}>
                            Copyright 2021 GavAusWeb
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
