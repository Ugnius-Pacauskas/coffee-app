import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

class Item extends React.Component {
    render() {
        return (
            <div className="col-lg-3 col-md-6">
                <div className="item">
                    <FontAwesomeIcon className = "delete" icon = {faTimes} size="2x" onClick = {() => this.props.deleteItemClicked(this.props.data.id)}/>
                    <div className = "image-container">
                        <img className = "image" src={this.props.data.imageUrl} alt={this.props.data.alt}></img>
                    </div>
                    <div className = "name">
                        {this.props.data.name}
                    </div>
                    <div className = "text">
                        {this.props.data.price.toLocaleString("lookup", {style: "currency", currency: "EUR"})}
                    </div>
                </div>
            </div>
        );
    }
}

export default Item