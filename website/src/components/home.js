import * as React from 'react'
import {Button} from 'baseui/button'

const Home = (props) => {
    return <div className='home-container'>
        <Button onClick={() => props.changeTheme()}>Change theme</Button>
    </div>
}

export default Home