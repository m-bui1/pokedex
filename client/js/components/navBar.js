function renderNavBar() {
  if (state.loggedInUserName == null) {
    document.querySelector(".navBar").innerHTML = `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" onClick="renderEverything()">
        Home
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse top_nav" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto ">
        </ul>
        <ul class="navbar navbar-nav navbar-right" style="display:flex;">
          <li class="nav-item ">
            <a class="nav-link" onClick="renderLogin()">
              Login
            </a>
          </li>
          <li>
            <li class="nav-item ">
              <a class="nav-link" onClick="renderSignUp()">
                Sign Up
              </a>
            </li>
          </li>
        </ul>
      </div>
    </div>
  </nav> `;
  } else {
    document.querySelector(".navBar").innerHTML = `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" onClick="renderEverything()">
        Home
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse top_nav" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto ">
        </ul>
        <ul class="navbar navbar-nav navbar-right" style="display:flex;">
          <li class="nav-item ">
            <a class="nav-link" onClick="logout()">
              Logout
            </a>
          </li>
          <li>
          </li>
        </ul>
      </div>
    </div>
  </nav>`;
  }
}

function logout() {
  fetch("/api/sessions", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(),
  }).then((res) => {
    console.log(res);
    state.loggedInUserName = undefined;
    let showLoginSignup = document.querySelector("#showLoginSignup");
    showLoginSignup.innerText = "";
    let usernames = document.querySelector('.userName')
    usernames.innerText = ''
    renderEverything()
    let sprite = document.querySelector('#favourite1')
    sprite.innerHTML = ``
  });
}