export default function SideBar({ onNavClick }){
    return(
        <nav className="app-nav">
            <h1>Personal Assistant</h1>
            <div className="nav-items">
                <button className="nav-option home-btn" 
                onClick={()=> onNavClick('home')}>Home</button>
                <button className="nav-option calendar-btn" 
                onClick={()=> onNavClick('calendar')}>Calendar</button>
                <button className="nav-option finance-btn"
                onClick={()=> onNavClick('finance')}>Finance</button>
                <button className="nav-option recipes-btn"
                onClick={()=> onNavClick('recipes')}>Recipes</button>
                <button className="nav-option cleaning-btn"
                onClick={()=> onNavClick('cleaning')}>Cleaning</button>
                <button className="nav-option lists-btn"
                onClick={()=> onNavClick('lists')}>Lists</button>
            </div>
        </nav>
    )
    
}

//get a better understanding of how the onclick() function works to push the string to the sidebar props. maybe draw a diagram? 