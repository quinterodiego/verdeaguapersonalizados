const Navbar = ({ containerStyles }) => {
  return (
    <nav className={`${containerStyles}`}>
      <a href="#home" onClick={() => isActive('home')} className={isActive === 'home' ? 'active-link' : '' }>HOME</a>
      <a href="#categories" onClick={() => isActive('categories')} className={isActive === 'categories' ? 'active-link' : '' }>CATEGORIAS</a>
      <a href="#shop" onClick={() => isActive('shop')} className={isActive === 'shop' ? 'active-link' : '' }>SHOP</a>
      <a href="#contact" onClick={() => isActive('contact')} className={isActive === 'contact' ? 'active-link' : '' }>CONTACT</a>
    </nav>
  )
}

export default Navbar