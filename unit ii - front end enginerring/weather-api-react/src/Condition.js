import React, {Component} from 'react'

class Condition extends Component{

    getIconUrl () {
        if (this.props.icon){
            return `http://openweathermap.org/img/w/${this.props.icon}.png`
        } else {
            return ''
        }
    }

    render () {
        return (
            <section>
                <img src={this.getIconUrl()} />
                <h3>{this.props.condition}</h3>
            </section>
        )
    }

}

export default Condition