import React, {Component} from 'react';

const VideoDetail = ({video}) => {

	if (!video) {
		//added because when App was trying to render, the API wasn't fast enough 
		// to get the Videos and hence the ID of the videos.  Added this section to 
		// prevent an error.
		return <div>Loading... </div>;
	}

	const videoId = video.id.videoId;

	// const url = 'https://www.youtube.com/embed/' + videoId;
	// SAME THING AS ABOVE, BUT ES6 TEMPLATE STRING
	const url = `https://www.youtube.com/embed/${videoId}`;

	return (
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div>
			<div className="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	);

}

export default VideoDetail;