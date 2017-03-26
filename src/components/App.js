import React, { Component } from 'react'

class App extends Component {
  render () {
    return <div>
      <h1>Resize the window</h1>
      <div className='grid'>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div className='span2'>5</div>
        <div className='span2 subitems'>
          <div>A</div>
          <div>B</div>
        </div>
      </div>
    </div>
  }
}

export default App
