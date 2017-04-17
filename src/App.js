import React, {Component} from 'react'
import {EventsList} from './EventsList'
import {Stats} from './Stats'

export class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allEvents: [
                {
                    name: 'ngVikings',
                    date: new Date('1/2/2017'),
                    js: true,
                    css: false
                }, {
                    name: 'ReactConf',
                    date: new Date('4/3/2017'),
                    js: true,
                    css: false
                }, {
                    name: 'CssConf',
                    date: new Date('5/8/2017'),
                    js: false,
                    css: true
                }
            ],
            stats: {
                total: 50,
                js: 10,
                css: 30,
                goal: 100
            }
        }
    }
    countEvents(eventType) {
        return this
            .state
            .allEvents
            .filter((event) => (eventType)
                ? event[eventType]
                : event)
            .length
    }
    render() {
        return (
            <div className="app">
                <Stats total={this.countEvents()} js={this.countEvents('js')} css={this.countEvents('css')}/>
                <EventsList days={this.state.allEvents}/>
            </div>
        )
    }
}