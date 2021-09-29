class Nav extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <nav class="navbar navbar-custom navbar-expand-lg sticky-top navbar-dark fixed-top">
    <a class="navbar-brand" href=""><i class="fas fa-hand-point-right"></i> Adam Rodgers</a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="basicExampleNav">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="index.html">Landing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="about.html">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Resume</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">DB Diagrams</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">API Unit Tests</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Bucket List</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Quick Links</a>
        </li>
      </ul>
    </div>
  </nav>`;
  }
}

customElements.define("nav-component", Nav);
