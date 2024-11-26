import SideBar from './components/SideBar.jsx'
import Home from './components/Home.jsx'
import Calendar from './components/Calendar.jsx'
import Finance from './components/Finance.jsx'
import Recipes from './components/Recipes.jsx'
import Cleaning from './components/Cleaning.jsx'
import Lists from './components/Lists.jsx'

import { useState } from 'react'

export default function App() {

    const [activeAppComponent, setActiveAppComponent] = useState(null)

    function handleNavClick(componentName){
        setActiveAppComponent(componentName)
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
            <SideBar onNavClick={handleNavClick} />
            {renderComponent()}
        </main>
    )
}


//get a better understanding of how the onclick