import './App.css';
function App() {
  return (
    <div >
      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
    <form action="masterhome">
        <h3>Login Here</h3>

        <label for="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username"/>

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password"/>

        <a href="masterhome"><button>Log In</button></a>
        <div class="social">
          <div class="go"><i class="fab fa-google"></i>  Google</div>
          <div class="fb"><i class="fab fa-facebook"></i>  Facebook</div>
        </div>
    </form>
       
   
    </div>
  );
}

export default App;
