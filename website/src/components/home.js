import * as React from 'react'
import { Button } from 'baseui/button'
import { Select } from 'baseui/select'
import { setLanguage, t, getLanguage } from 'react-switch-lang'
import { useThemeUpdate } from '../context/ThemeContext';
import { useResourceUpdate } from '../context/ResourcesContext'
import { useUsername } from '../context/UserContext'

const getWidth = () => window.innerWidth 
  || document.documentElement.clientWidth 
  || document.body.clientWidth;

const Home = (props) => {

  const OPTIONS = [
    {id: t('English'), langCode: 'en'},
    {id: t('Korean'), langCode: 'ko'},
    {id: t('Chinese'), langCode: 'zh'},
  ]
  
  const username = useUsername();
  const toggleTheme = useThemeUpdate()
  const [ value, setValue ] = React.useState([])
  const [ containerClass, setContainerClass ] = React.useState('home-container home-container-height')
  let [ width, setWidth ] = React.useState(getWidth());
  const updateResources = useResourceUpdate();  

  React.useEffect(() => {
    switch(getLanguage()) {
      case 'ko':
        setValue([{id: t('Korean'), langCode: 'ko'}])
        break
      case 'zh':
        setValue([{id: t('Chinese'), langCode: 'zh'}])
        break
      default:
        setValue([{id: t('English'), langCode: 'en'}])
        break
    }
  },[props.lang])

  React.useEffect(() => {
    if(window.innerHeight < width) {
      setContainerClass('home-container home-container-height')
    } else {
      setContainerClass('home-container')
    }
    
    let timeoutId = null;
    const resizeListener = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setWidth(getWidth()), 150);
    };
    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    }    
  }, [width])

  

  const updateLanguage = (selected) => {
    setLanguage(selected.value[0].langCode)
    setValue(selected.value)
    updateResources()
  }
  
  return (
    <div className={containerClass}>
      {username && <h1>Hello <code>{username}</code></h1>}
      <div className='select-language'>
        <Select  
          options={OPTIONS}
          labelKey='id'
          langCode='langCode'
          searchable={false}
          clearable={false}
          onChange={updateLanguage}
          value={value}
        />
      </div>
      <br /><br /><br />
      <Button onClick={toggleTheme}>{t('changeTheme')}</Button>
    </div>
  )
}

export default Home
