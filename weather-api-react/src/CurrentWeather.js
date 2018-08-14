import React, { Component } from 'react';

import Condition from './Condition'

/* TODO:
 - fetch
 - update the UI
 - setInterval()
*/


class CurrentWeather extends Component {

    constructor(props) {
        super(props)
        this.state = {
            condition: 'loading...',
            temp: '', 
            lastUpdateTime: new Date()
        }
    }

    componentDidMount() {
        setInterval(() => {
            const key = "5c418bd61b262dfeab5ee02852a70c07"
            const _url = `https://api.openweathermap.org/data/2.5/weather?q=${this.props.zip}&appid=${key}`
            fetch(_url).then(resp => resp.json())
                .then(newWeatherData => {
                    console.log(newWeatherData)
                    this.setState({
                        condition: newWeatherData.weather[0].main,
                        temp: newWeatherData.main.temp,
                        weatherIcon: newWeatherData.weather[0].icon,
                        lastUpdateTime: new Date()
                    })
                })

        }, 2500)

    }

    render() {
        return (
            <div>
                This is the current weather in Disney World is
                <div>
                    <Condition condition={this.state.condition} icon={this.state.weatherIcon} />
                </div>
                <h4>last updated at {this.state.lastUpdateTime.toLocaleString()}</h4>
            </div>
        );
    }
}

export default CurrentWeather;
