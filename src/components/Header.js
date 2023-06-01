import headerLogoPic from '../images/header-logo.svg';

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={headerLogoPic} alt="лого" />
    </header>
  );
}

export default Header;