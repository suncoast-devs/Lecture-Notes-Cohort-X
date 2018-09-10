import React, { Component } from 'react';

import hobbies from '../Data/hobbies.json'



class PhotoDetail extends Component {
    render() {
        const _category = this.props.match.params.category;
        const _index = this.props.match.params.index;
        const _photoData = hobbies[_category].photos[_index]

        return (
            <div>
            <header>{_photoData.title}</header>
            <img src={_photoData.imageURL} alt={_photoData.title} />
            <a href={_photoData.sourceURL}>Source</a>

            </div>
        );
    }
}

export default PhotoDetail;
