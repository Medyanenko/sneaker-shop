const Header = () => {
   return(
    <header className="d-flex justify-between align-center p-40">
    <div className="d-flex align-center">
      <img height={40} width={40} src="/img/logo.png" alt="logo" />
      <div>
        <h3 className="text-uppercase">React Sneakers</h3>
        <p className="opacity-5">Магазин найкращих кросівок</p>
      </div>
    </div>
    <ul className="d-flex">
      <li className="mr-30">
        <img height={18} width={18} src="/img/cart.svg" alt="cart" />
        <span> 1205 грн</span>
      </li>
      <li>
        <img height={18} width={18} src="/img/user.svg" alt="user" />
      </li>
    </ul>
  </header>
   )
}
export default Header;