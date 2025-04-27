import "./Navbar.css"
function Navbar(){
    return(
        <div id="navbar">
            <h1>Food<span>Hub</span></h1>
            <div id="navbar_1">
            <p>Home</p>
            <p>About</p>
            <p>Services</p>
            <p>Food</p>
            <p>Contact</p>
            </div>
            <div id="navbar_2">
                <span> Signin</span>
                <span id="logout">Signup</span>
            </div>
            
            
            
        </div>
    )
}
export default Navbar