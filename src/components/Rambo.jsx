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
    fetch('https://api.themoviedb.org/3/search/movie?api_key=6f8e1a05b89eb5fc7573c786613ad889&query=Rambo')
    .then(res => res.json())
    .then(json => {
        this.setState({
            isLoaded: true,
            items: [json.results],
        });
        console.log(json.results[1].title)
        
    })
}
render() {
    var{ isLoaded, items} = this.state;
    if (!isLoaded) {
        return <div> Loading.. </div>
    }
    else {
        return (
            <div>
                <ul>
                 {items.map(item => (
                        <li key={item} >
                        {items.results.title}
                        {items.results.overview}

                        </li>
                ))};
            </ul>
            </div>
        ); 
    }
    
}
}

export default Rambo;

// &language=en-US& &page=1&include_adult=false