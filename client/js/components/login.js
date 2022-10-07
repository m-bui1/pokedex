function renderLogin() {
  document.querySelector("#showLoginSignup").innerHTML = `
    <section class='log-in'>
      <form onSubmit="login(event)">
<div class="section section-signup" style="background-image: url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cad4b52e-f6b1-432f-9035-a5f4853bcf15/d84o6a9-28125268-b60b-4752-a665-acf6b32fbe37.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NhZDRiNTJlLWY2YjEtNDMyZi05MDM1LWE1ZjQ4NTNiY2YxNVwvZDg0bzZhOS0yODEyNTI2OC1iNjBiLTQ3NTItYTY2NS1hY2Y2YjMyZmJlMzcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.E8Cz0zggZe_qb5KHtrjPAJJTDCl3YQ7K7GUvLtOBrbg'); background-size: cover; background-position: top center; min-height: 700px;">
<div class="container">
          <div class="row">
            <div class="card card-signup"
             data-background-color="blue">
              <div class="card-header text-center">
                <h3 class="card-title title-up">Login</h3>

              </div>
              <div class="card-body">

                <div class="input-group no-border">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="now-ui-icons text_caps-small"></i>
                    </span>
                  </div>
                  <input type="text" name="email" placeholder="Email..." class="form-control">
                </div>
                <div class="input-group no-border">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="now-ui-icons ui-1_email-85"></i>
                    </span>
                  </div>
                  <input type="password" name="password" class="form-control" placeholder="Password...">
                </div>
              </div>
              <div class="card-footer text-center">
                <button  class="btn btn-neutral btn-round btn-lg">Login</button>
              </div>
            </div>
          </div>
        </div>
</div>
      </form>
    </section>
  `;
}

function login(event) {
  event.preventDefault();
  const form = event.target;

  // takes data from the form html tag and converts it into an object literal.
  const data = Object.fromEntries(new FormData(form));

  // console.log(form);
  fetch("/api/sessions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.error) {
        renderLogin();
        renderError(res.error);
      } else {
        const userName = res;
        state.loggedInUserName = userName;
        let showLoginSignup = document.querySelector("#showLoginSignup");
        let user_name = document.querySelector(".userName");
        console.log(user_name);
        user_name.innerText = state.loggedInUserName;
        showLoginSignup.innerText = "";
        renderPokemonList();
        renderNavBar();
        renderFavouritePokemon();
      }
    });
}

function renderError(errorMessage) {
  const page = document.querySelector("#page");
  page.innerHTML =
    `<h2 style='color: red'>${errorMessage}<`
}