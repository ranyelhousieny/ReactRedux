

const  Navbar = () => (
    <div>
        {/* Hamburger bar*/}
        <nav className='navbar navbar-expand-sm navbar-light bg-light'>
        <div className='container'>
            <a className='navbar-brand'
              href='/'>
              Rany ElHousieny
          </a>
            <button
              className='navbar-toggler'
              data-toggle='collapse'
              data-target="#myNavbar"
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div
              className='collapse navbar-collapse'
              id="myNavbar"
            >
              <ul  className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link' href='/'>
                Home
              </a>
            </li>
            
          </ul>
            
            </div>
          
        </div>
        </nav>
      </div>
)

export default Navbar;