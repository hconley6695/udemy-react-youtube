import React, { Component } from 'react';
import VideoListItem from './video_list_item';

// passing props from App to VideoList.  Use as an argument in a FUNCTIONAL component.

const VideoList = (props) => {
	// Child items need an ID or key unique to particular record.
	//To add a key, define it as a property
	const VideoItems = props.videos.map((video) => {
		return <VideoListItem key={video.etag} video={video} />
	});

	return(
		<ul className="col-md-4 list-group">
			{VideoItems}
		</ul>
	);
}

export default VideoList;