import React, { Component } from 'react';
import commonStyles from '../../../main/styles/commonStyles';
import Constant from '../../../main/constant/Constant';
import Images from '../../../main/images/Images';
import Title from '../../../main/components/Title';
import PhotosPanel from '../../../main/components/panel/PhotosPanel';
import Button from '../../../main/components/input/PrimaryButton';

class ContractApplyPhotosView extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        const models = [
            {
                title: '身份证正面照',
                image: Images.photoPlaceholder,
                onPhotoClick: () => {
                    console.log('=== onPhotoClick ===');
                },
                onDeleteClick: () => {
                    console.log('=== onDeleteClick ===');
                }
            },
            {
                title: '身份证反面照',
                // image: Images.photoPlaceholder,
                onPhotoClick: () => {

                },
                // onDeleteClick: () => {
                //
                // }
            },
            {
                title: '更多身份证照片',
                onPhotoClick: () => {

                },
            },
            {
                title: '更多身份证照片',
                onPhotoClick: () => {

                },
            },
        ]
        return (
            <div style={commonStyles.fullScreenContainer}>
                <Title title="签约申请 > 身份验证 > " subTitle="收集照片" backTo="/businessManagement" />
                <div style={styles.container}>
                    <PhotosPanel models={models} />
                    <PhotosPanel models={models} style={styles.photosPanel} />
                    <div style={styles.buttonLayout}>
                        <Button title="确认提交" onClick={this.props.handleSubmitClick} />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 100,
    },
    photosPanel: {
        marginTop: 50
    },
    buttonLayout: {
        marginTop: 50,
        alignSelf: 'center',
        marginBottom: 20
    },
}

export default ContractApplyPhotosView;
