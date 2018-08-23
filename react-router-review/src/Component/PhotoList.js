import React, { Component } from 'react';

import hobbies from '../Data/hobbies.json'


class PhotoList extends Component {

    render() {
        const _categoryData = hobbies[this.props.match.params.category]
        if (!_categoryData){
            return <h3>Nothing was found</h3>
        } else {
            return (
                <div>
                    <header>{_categoryData.title}</header>
                    <p>{_categoryData.description}</p>
                    <section>
                        {
                            _categoryData.photos.map((photo, i) => {
                                return <img src={photo.imageURL} alt={photo.title} />
                            })
                        }
                    </section>
                </div>
            );
        }
    }
}

export default PhotoList;
