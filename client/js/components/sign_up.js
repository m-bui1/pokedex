function renderSignUp() {
  document.querySelector("#showLoginSignup").innerHTML = `
  <section class="sign-up">

    <form onSubmit="signUp(event)">

      <div class="section section-signup" style="background-image: url('https://images.unsplash.com/photo-1628968434441-d9c1c66dcde7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cG9rZW1vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'); background-size: cover; background-position: top center; min-height: 700px;">
        <div class="container">
          <div class="row">
            <div class="card card-signup" data-background-color="orange">
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
      renderNavBar();
      renderPokemonList();
      document.querySelector("#page").innerHTML = ``;
    });
}