import React from 'react';
import SearchBar from './Searchbar';
import Youtube from '../Api/Youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{

	state = { videos: [], selectedVideo: null };

	componentDidMount(){
		this.onTermSubmit('bootstrap navbar');
	}

	onTermSubmit = async (term) => {
		const response = await Youtube.get('/search', {
			params:{
				q: term
			}
		})
		
		this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
		
		console.log(this.state.videos);
	};

	onVideoSelect = (video) => {
		this.setState({ selectedVideo: video });
	}

	render(){
		return(
			<React.Fragment>
				<SearchBar onTermSubmit={ this.onTermSubmit } />

				<div className="ui container">
					{/* We found {this.state.videos.length} videos for you :) */}
					<div className="ui grid">
						<div className="ui row">
							<div className="eleven wide column">
								<VideoDetail video={this.state.selectedVideo} />
							</div>

							<div className="five wide column">
								<VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default App;