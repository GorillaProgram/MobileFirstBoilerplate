import React, { Component } from 'react';
import Images from '../../images/Images';

class PhotoSquare extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        const deleteButton = this.props.image ? (<img src={Images.photoDelete} style={styles.deleteButton} onClick={this.props.onDeleteClick} />) : null;
        const image = this.props.image ? this.props.image : Images.photoPlaceholder;
        return (
            <div style={styles.container}>
                {deleteButton}
                <div onClick={this.props.onPhotoClick} style={styles.photoContent}>
                    <img src={image} style={styles.image} />
                    <label style={styles.title}>{this.props.title}</label>
                </div>
            </div>
        );
    }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 120,
    },
    deleteButton: {
        width: 40,
        height: 40,
        alignSelf: 'flex-end',
        marginTop: -20,
        marginRight: -20,
        marginBottom: -20,
        zIndex: '0'
    },
    photoContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    image: {
        width: 120,
    },
    title: {
        fontSize: 16,
        marginTop: 10
    }
}

export default PhotoSquare;
