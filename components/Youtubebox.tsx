import YouTube, { YouTubeProps } from 'react-youtube';
const getYouTubeID = require('get-youtube-id');

type UR = {
  url?: string;
};

const Youtubebox = ({ url }: UR) => {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.pauseVideo();
    event.target.mute();
  };

  const onPlayerEnd: YouTubeProps['onEnd'] = (event) => {
    event.target.playVideo();
  };

  const VIDEO_WIDTH = `100%`;
  const VIDEO_HEIGHT = `310`;

  const opts: YouTubeProps['opts'] = {
    height: VIDEO_HEIGHT,
    width: VIDEO_WIDTH,
    mute: 1,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      controls: 1,
      disablekb: 0,
      fs: 0,
      rel: 0,
      loop: 1,
      start: 0,
    },
  };

  if (url) {
    return (
      <div className="youtubebox">
        <YouTube
          videoId={getYouTubeID(url)}
          opts={opts}
          onReady={onPlayerReady}
          onEnd={onPlayerEnd}
        />
      </div>
    );
  } else {
    return null;
  }
};

export default Youtubebox;
