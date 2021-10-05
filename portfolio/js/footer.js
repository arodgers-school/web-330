class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
  <footer class="page-footer font-small navbar-custom-bottom pt-4">
    <div class="container-fluid text-center text-md-left">
      <div class="row">
        <div class="col-md-9 mt-md-0 mt-1">
          <h5 class="text-uppercase">Adam Rodgers</h5>
          <p>Check out these links for more about me and Bellevue University</p>
        </div>
        <hr class="clearfix w-100 d-md-none pb-3" />
        <div class="col-md-3 mb-md-0 mb-3">
          <h5 class="text-uppercase">Links</h5>
          <ul class="list-unstyled">
            <li>
            <a href="https://github.com/arodgers-school">My Github</a>
            </li>
            <li>
            <a href="https://www.bellevue.edu/degrees/bachelor/web-development-bs/">Bellevue University Web Development Program</a>
            </li>
            <li>
            <a href="https://www.youtube.com/user/bellevueuniversity/">Bellevue University Youtube</a>
            </li>
            <li>
            <a href="https://github.com/buwebdev">Bellevue University Github</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright text-center py-3">
      © 2021 Copyright:
      <a href="#"> Adam Rodgers</a>
    </div>
  </footer>`;
  }
}

customElements.define("footer-component", Footer);
