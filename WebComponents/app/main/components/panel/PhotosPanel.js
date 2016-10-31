import React, { Component } from 'react';
import Images from '../../images/Images';
import PhotoSquare from './PhotoSquare';

class PhotosPanel extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        const photoSquares = this.props.models.map((item, index) => {
            return (
                <PhotoSquare key={`${index}`} title={item.title} image={item.image} onPhotoClick={item.onPhotoClick} onDeleteClick={item.onDeleteClick} />
            );
        });
        return (
            <div style={{...styles.container, ...this.props.style}}>
                {photoSquares}
            </div>
        );
    }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
};

export default PhotosPanel;
