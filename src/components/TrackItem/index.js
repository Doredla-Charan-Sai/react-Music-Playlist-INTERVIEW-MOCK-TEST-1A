import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const TrackItem = props => {
  const {details, deleteItem} = props
  const remove = () => {
    deleteItem(details.id)
  }
  return (
    <li className="list-item">
      <img src={details.imageUrl} alt="track" className="thumb-img" />
      <div className="head-search-cont">
        <div className="name-cont">
          <p className="name">{details.name}</p>
          <p className="genre">{details.genre}</p>
        </div>
        <div className="name-btn">
          <p className="name">{details.duration}</p>
          <button
            type="button"
            onClick={remove}
            data-testid="delete"
            label="delete"
            className="btn"
          >
            <AiOutlineDelete className="search" />
          </button>
        </div>
      </div>
    </li>
  )
}
export default TrackItem
