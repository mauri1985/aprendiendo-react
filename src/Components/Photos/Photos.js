import React from 'react';

class Photos extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            photos: [],
            isFetching: true
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(jsonPhotos => this.setState({ photos: jsonPhotos, isFetching: false }
            ))         
    }
    
    render(){
        if(this.state.isFetching)
            return 'Cargando...'
        
        return(
            <div>
                <h2>
                    Photos: <br/>
                </h2>
                <ol>
                    {this.state.photos.map( 
                        (photo, i) => 
                        <li key={i}> 
                            {photo.title} 
                            <img src={photo.url} />
                        </li> 
                    )}
                </ol>
            </div>
        );
    }
}

export default Photos;