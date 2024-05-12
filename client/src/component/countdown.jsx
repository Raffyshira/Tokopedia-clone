import React, { Component } from "react";
import { CiClock2 } from "react-icons/ci";

class Countdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeRemaining: this.calculateTimeRemaining()
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                timeRemaining: this.calculateTimeRemaining()
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    calculateTimeRemaining() {
        const { endTime } = this.props;
        const currentTime = new Date();
        const difference = endTime - currentTime;

        let timeRemaining = {};

        if (difference > 0) {
            timeRemaining = {
                hours: Math.floor(
                    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                ),
                minutes: Math.floor(
                    (difference % (1000 * 60 * 60)) / (1000 * 60)
                ),
                seconds: Math.floor((difference % (1000 * 60)) / 1000)
            };
        }

        return timeRemaining;
    }

    render() {
        const { hours, minutes, seconds } = this.state.timeRemaining;
        return (
            <div className="bg-red-500 py-1 px-3 rounded-full">
                <p className="text-white text-tiny inline-flex items-center font-bold">
                    <CiClock2 className="mr-1" /> {hours} : {minutes} :{" "}
                    {seconds}
                </p>
            </div>
        );
    }
}

export default Countdown;
