const Header = () => {
  return(
        <header>
      <div class="container-fluit ">
        <nav class="navbar navbar-expand-lg bg-dark px-5">
          <button class="navbar-toggler text-bg-light my-2" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon "></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarTogglerDemo01">
            <a class="nevzat navbar-brand text-warning" href="/">Nevzat.</a>
            <ul class="navbar-nav me-auto mx-auto ">
              <li class="nav-item">
                <a href="/" class="nav-link btn-outline-success active text-warning border-bottom" aria-current="page"
                  href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-warning" href="/works">Works</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-warning" href="/form">Contact</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-warning" href="about">About</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    )
}
export default Header