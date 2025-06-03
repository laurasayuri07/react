import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="logo">Netflix</h1>
      <nav>
        <ul className="nav-links">
          <li>Início</li>
          <li>Séries</li>
          <li>Favoritos</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
