function renderSignUp() {
  document.querySelector("#showLoginSignup").innerHTML = `
  <section class="sign-up">

    <form onSubmit="signUp(event)">

      <div class="section section-signup" style=" background-image: url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cad4b52e-f6b1-432f-9035-a5f4853bcf15/d7i3cm4-dc9f4577-6b7d-4d59-8b46-a15bf5e84209.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NhZDRiNTJlLWY2YjEtNDMyZi05MDM1LWE1ZjQ4NTNiY2YxNVwvZDdpM2NtNC1kYzlmNDU3Ny02YjdkLTRkNTktOGI0Ni1hMTViZjVlODQyMDkuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.MAvFmljnNt5yawKRk7Tm-59pAkenmRqY3ZmzVmfsMjI'); background-size: cover; background-position: top center; min-height: 700px;">
        <div class="container">
          <div class="row">
            <div class="card card-signup" data-background-color="green">
              <div class="card-header text-center">
                <h3 class="card-title title-up">Sign Up</h3>

              </div>
              <div class="card-body">
                <div class="input-group no-border">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="now-ui-icons users_circle-08"></i>
                    </span>
                  </div>
                  <input type="text" name="name" class="form-control" placeholder="Username...">
                </div>
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
                <button  class="btn btn-neutral btn-round btn-lg">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </section>

  `;
}

// <h2>Sign Up:</h2>
// <fieldset>
//   <label for="">Username: </label>
//   <input type="text" name="name">
// </fieldset>
// <fieldset>
//   <label for="">Email: </label>
//   <input type="text" name="email">
// </fieldset>
// <fieldset>
//   <label for="">Password: </label>
//   <input type="password" name="password">
// </fieldset>
// <fieldset>
//   <label htmlFor="">Avatar: </label>
//   <input type="text" name="avatar">
// </fieldset>

// <button>Sign Up</button>

function signUp(event) {
  event.preventDefault();
  const form = event.target;
  const data = Object.fromEntries(new FormData(form));

  fetch("/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((userName) => {
      state.loggedInUserName = userName;
      let showLoginSignup = document.querySelector("#showLoginSignup");
      showLoginSignup.innerText = "";
      let user_name = document.querySelector(".userName");
      console.log(user_name);
      user_name.innerText = state.loggedInUserName;
      renderNavBar();
      renderPokemonList();
      document.querySelector("#page").innerHTML = ``;
    });
}