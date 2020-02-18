import React from 'react';
import CreatePostForm from  './CreatePostForm';
import PropTypes from 'prop-types';

function CreatePostControl(){
    return(
        <CreatePostForm onNewPostCreation={this.props.onNewPostCreation}/>
    );
}

CreatePostControl.propTypes = {
    onNewPostCreation: PropTypes.func
};

export default CreatePostControl;