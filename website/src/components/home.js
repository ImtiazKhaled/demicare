import * as React from 'react'
import { Button } from 'baseui/button'
import {Select} from 'baseui/select'
import { setLanguage, t, getLanguage } from 'react-switch-lang'

const OPTIONS = [
  {id: t('English'), langCode: 'en'},
  {id: t('Korean'), langCode: 'ko'},
  {id: t('Chinese'), langCode: 'zh'},
];

const Home = (props) => {

  const [value, setValue] = React.useState([]);
  
  React.useEffect(() => {
    switch(getLanguage()) {
      case 'ko':
        setValue([{id: t('Korean'), langCode: 'ko'}])
        break
      case 'zh':
        setValue([{id: t('Chinese'), langCode: 'zh'}])
        break
      case 'en':
        setValue([{id: t('English'), langCode: 'en'}])
        break
      default:
        setValue([{id: t('English'), langCode: 'en'}])
        break
    }
  },[ props.lang ])

  const updateLanguage = (selected) => {
    setLanguage(selected.value[0].langCode)
    setValue(selected.value)
  }
  
  return (
    <div className='home-container'>
      <div className='select-language'>
        <Select  
          options={OPTIONS}
          labelKey='id'
          langCode='color'
          searchable={false}
          clearable={false}
          onChange={updateLanguage}
          value={value}
        />
      </div>
      <br /><br /><br />
      <Button onClick={() => props.changeTheme()}>{t('changeTheme')}</Button>
    </div>
  )
}

export default Home
