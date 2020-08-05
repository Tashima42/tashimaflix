import React from 'react'
import axios from 'axios'

export default class videList extends React.Component {
    state = {
        videos: []
    }

    componentDidMount() {
        const options = {
            part: 'snippet',
            maxResults: 30,
            playlistId: 'PLlb_v-Zf0J9KkVXgarFl79qyqOkoMssPV',
            key: 'AIzaSyBcE8lI_gEgUE4JMPQuoKIL7Q33jB9DmAk'
        }

        axios.get(`https://www.googleapis.com/youtube/v3/playlistItems`, options)
            .then(res => {
                console.log(res)
                this.setState({ videos: res.data});
            })
    }

    render() {
        return (
            <ul>
                { this.state.videos.map(video => <li>{video.items.title}</li>) }
            </ul>
        )
    }
} 
/*
Test commit 1
*/
