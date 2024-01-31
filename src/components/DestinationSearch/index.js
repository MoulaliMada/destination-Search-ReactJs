// Write your code here
import DestinationItem from './components/DestinationItem/index'
import {Component} from 'react'
import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
    destinationList: this.props.destinationsList,
  }

  render() {
    const {destinationList} = this.state
    return (
      <div>
        <h1>Destination Search</h1>
        <input type="search" />
        <ul>
          {destinationList.map(eachItem => (
            <DestinationItem item={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
