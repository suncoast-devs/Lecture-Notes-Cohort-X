import React, { Component } from 'react';

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
            temp: ''
        }
    }

    componentDidMount() {
        const key = "5c418bd61b262dfeab5ee02852a70c07"
        const _url = "https://api.openweathermap.org/data/2.5/weather?q=32830&appid=" + key
        fetch(_url).then(resp => resp.json())
            .then(newWeatherData => {
                console.log(newWeatherData)
                this.setState({
                    condition:newWeatherData.weather[0].main,
                    temp:newWeatherData.main.temp
                })
            })

    }

    render() {
        return (
            <div>
                This is the current weather
                <div>
                    {this.state.condition}
                </div>
            </div>
        );
    }
}

export default CurrentWeather;
