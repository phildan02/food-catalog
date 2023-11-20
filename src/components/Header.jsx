import {Link} from 'react-router-dom';

function Header() {
    return (
        <nav className="header brown darken-2">
            <div className="nav-wrapper">
                <Link to='/' className="brand-logo">Food catalog</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to='/about'>О нас</Link></li>
                    <li><Link to='/contacts'>Контакты</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };