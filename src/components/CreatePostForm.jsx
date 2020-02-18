import React from 'react';
import PropTypes from 'prop-types';

function CreatePostForm(props){
    let _title = null;
    let _post = null;
    let _forum = props.match.params;

    function handleNewPostFormSubmission(event){
        event.preventDefault();
        props.onNewPostCreation({title: _title.value, post: _post.value, forum: _forum})
        _post.value = '';
        _title.value = '';
    }

    return(
        <div>
            <div>
            <form onSubmit={handleNewPostFormSubmission}>
                <input
                type='text'
                id='title'
                placeholder='Title'
                ref={(input) => {_title = input;}}/>
                <textarea
                id='post'
                placeholder='Write your post.'
                ref={(textarea) => {_post = textarea;}}/>
                <button type='submit'>Help!</button>
            </form>
            </div>
        </div>
    );
}

CreatePostForm.propTypes = {
    onNewPostCreation: PropTypes.func
};

export default CreatePostForm;