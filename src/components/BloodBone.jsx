import React, { Component } from 'react';

class Rambo extends Component {
    constructor(props){
        super()
        this.state = {
            items: [],
            isLoaded: false
        }
    }
componentDidMount(){
    fetch('https://api.themoviedb.org/3/search/movie?api_key=6f8e1a05b89eb5fc7573c786613ad889&query=Blood+and+Bone')
    .then(res => res.json())
    .then(json => {
        this.setState({
            isLoaded: true,
            items: [json.results],
        });
        console.log(json.results)
    })
}
    render() {
        var{ isLoaded, items } = this.state;
        if (!isLoaded) {
            return <div> Loading.. </div>
        }
        else {
            return (
                <div>
                <ul>
                    {Object.keys(items).map((item, i)=> (
                            <li className = "new" key={i}>
                                

                            </li>
                    ))};
                </ul>
                </div>
            ); 
        }
        
    }
}

export default Rambo;