import React, { Component } from 'react';
import {postComment} from "./api"

class AddComment extends Component {
    state = {
        newComment = '',
        isLoading = true
    }

    componentDidMount() {
        this.setState()
    }

    addComment = () => {
        postComment(article_id).then(comment => {
            this.setState({newComment: comment, isLoading: false})
        })
    }
    
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default AddComment;