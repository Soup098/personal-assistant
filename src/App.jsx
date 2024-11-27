import Home from './components/Home.jsx'
import Calendar from './components/Calendar.jsx'
import Finance from './components/Finance.jsx'
import Recipes from './components/Recipes.jsx'
import Cleaning from './components/Cleaning.jsx'
import Lists from './components/Lists.jsx'

import { useState } from 'react'

export default function App() {

    const [activeAppComponent, setActiveAppComponent] = useState(null)

    function handleNavClick(buttonName){
        setActiveAppComponent(buttonName)
    }

    function renderComponent(){
        switch(activeAppComponent){
            case 'home' :
                return <Home />
            case 'calendar':
                return <Calendar />
            case 'finance':
                return <Finance />    
            case 'recipes':
                return <Recipes />
            case 'cleaning':
                return <Cleaning />
            case 'lists':
                return <Lists />
            default:
                return null
        }
    }

    return (
        <main>
            <nav className="app-nav">
                <h1>Personal Assistant</h1>
                <div className="nav-items">
                    <button className="nav-btn home-btn"
                    onClick={() =>handleNavClick("home")}>Home</button>
                    <button className="nav-btn calendar-btn" 
                    onClick={() =>handleNavClick("calendar")}>Calendar</button>
                    <button className="nav-btn finance-btn"
                    onClick={() =>handleNavClick("finance")}>Finance</button>
                    <button className="nav-btn recipes-btn"
                    onClick={() =>handleNavClick("recipes")}>Recipes</button>
                    <button className="nav-btn cleaning-btn"
                    onClick={() =>handleNavClick("cleaning")}>Cleaning</button>
                    <button className="nav-btn lists-btn"
                    onClick={() =>handleNavClick("lists")}>Lists</button>
                </div>
            </nav>
            {renderComponent()}
        </main>
        
    )
}


//get a better understanding of how the onclick

// 1. <SideBar /> is given the prop onNavClick with the handleNavClick() function as an argument

// 2. when a button is clicked in <SideBar/>, an arrow function returns the onNavClick() function, giving it the string name of the button as an argument

// 3. the string name is passed to the onNavClick which passes it to the handleNavClick() function, which runs the setActiveComponent() function from the useState()

// 4. the activeAppComponent is set to the string name by setActiveComponent(), which is used in the renderComponents() function switch statement to render the specific component associated with the string name.