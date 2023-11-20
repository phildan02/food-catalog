function Footer() {
    return (
        <footer className="page-footer brown darken-2">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Food catalog
                    <a className="grey-text text-lighten-4 right" href="#!" target="blank" rel="noreferrer">Repository</a>
                </div>
            </div>
        </footer>
    );
}

export { Footer };