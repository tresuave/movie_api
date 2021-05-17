import React, { Component } from 'react';

class Data extends Component {
constructor() {
        super()
        this.state={
            data:[]
        }

    }

try{ searchMovies = async ()=>{
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=6f8e1a05b89eb5fc7573c786613ad889&language=en-US&query=${Rambo}&page=1&include_adult=false`)
     const json = await response.json();
        this.setState({data: json});
    }
    componentDidMount() {
        this.fetch();
 }



    render() {
        return (
            <div>
             < Rambo data={this.state.data}  />
            </div>
        );
    }
}

export default Data;