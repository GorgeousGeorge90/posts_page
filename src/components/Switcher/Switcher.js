import {useState, useLayoutEffect} from 'react';
import {ReactComponent as LightIcon} from './../../assets/img/icon-sun.svg';
import {ReactComponent as DarkIcon} from './../../assets/img/icon-moon.svg';


const Switcher = () => {
    const [theme,setTheme] = useState('light')

    useLayoutEffect(()=> {
        let app = document.querySelector('#app')
        app.setAttribute('theme', `theme-${theme}`)
    },[theme])
    
    const styles = {
        paddingRight:'8px',
        textTransform: 'uppercase',
    }

    const onClick = () => {
        theme === 'light' ? setTheme('dark'): setTheme('light')
    }
    
    const ThemeIcon = theme === 'light' ? <>
        <span style={styles}>light</span>
        <LightIcon fill='white'/>
        </>:
        <>
            <span style={styles}>dark</span>
            <DarkIcon fill='white'/>
        </>


    return (<div onClick={onClick}>
        {ThemeIcon}
    </div>)
}

export default Switcher
