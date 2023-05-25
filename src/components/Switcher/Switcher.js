import {useState, useLayoutEffect} from 'react';
import {ReactComponent as LightIcon} from './../../assets/img/icon-sun.svg';
import {ReactComponent as DarkIcon} from './../../assets/img/icon-moon.svg';


const Switcher = () => {
    const [theme,setTheme] = useState('light')

    useLayoutEffect(()=> {
        let app = document.querySelector('#app')
        app.setAttribute('theme', `theme-${theme}`)
    },[theme])

    const onClick = () => {
        theme === 'light' ? setTheme('dark'): setTheme('light')
    }

    const ThemeIcon = theme === 'light' ? <LightIcon fill='white'/>: <DarkIcon fill='white'/>


    return (<div onClick={onClick}>
        {ThemeIcon}
    </div>)
}

export default Switcher