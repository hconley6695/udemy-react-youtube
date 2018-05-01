import React, { Component } from 'react';


// COMMENTED CODE IS SAME AS LINE 10 - ES6
// const VideoListItem = (props) => {
// 	const video = props.video;

// onVideoSelect was passed from VideoList so it is now a property of VideoListItem. Now we have to make use
// of this item.  When user clicks on the <li>, we need to treat as selection

const VideoListItem = ({video, onVideoSelect}) => {
	const imageUrl = video.snippet.thumbnails.medium.url;

	// When user clicks on li (see onClick), the callback will use the video param above
	return (
		<li onClick={() => onVideoSelect(video)} className="list-group-item"> 
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imageUrl} />
				</div>
				<div  className="media-body">
					<div className="media-heading">
						{video.snippet.title} 
					</div>
				</div>	
			</div>
		</li>

	);

}

export default VideoListItem;
