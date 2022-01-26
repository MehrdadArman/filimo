import styled from 'styled-components';
import React, { useRef, useEffect } from 'react';
import ReactPlayer from 'react-player'
import { useState } from 'react';

//* icons
import { PlayCircleFilled, PauseCircleFilled } from '@mui/icons-material';

// ** utilities */
import { convertHMS } from '../../utilities/Time';




// ** styled component */
const CardWrapper = styled.div`
  width:100%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  background-color:#fff;
  border-radius:4px;
  height:100%;
  overflow:hidden;

`
const CardMedia = styled.header`
width:100%;
position: relative;
height:200px;
overflow:hidden;
position:relative;
`

const CardFooter = styled.footer`
 margin:15px 10px;
`

const CardTitle = styled.h2`
color: #000;
font-weight: 500;
text-align:right;
@media (max-width: 500px) {
  font-size: 1rem;
}
`
const PlayIcon = styled.div`
    position: absolute;
    top: 10px;
    z-index: 999;
    left: 10px;
    display: flex;
    justify-content: center;
    border-radius: 4px;
`
const TimeDuration = styled.div`
position: absolute;
top: 15px;
z-index: 999;
right: 10px;
display: flex;
justify-content: center;
border-radius: 4px;
background-color:rgba(0,0,0,.7);
padding: 3px 10px;
`



const VideoCard = ({ videoPoster, duration, previewSrc, title }) => {

    const cardRef = useRef();
    const [cardCurrentPosition, setCardCurrentPosition] = useState(0);
    const [playVideo, setPlayVideo] = useState(false);
    const windowHeight = window.innerHeight;

    const scrollHandler = () => {
        setCardCurrentPosition(cardRef.current.getBoundingClientRect().y)
    }
    const hanlePlayVideo = () => {
        if (windowHeight / 4 < cardCurrentPosition + 100 && cardCurrentPosition + 200 < windowHeight / 2 + 200) { setPlayVideo(true) }
        else { setPlayVideo(false) }
    }

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler, true);
        hanlePlayVideo();
        return () => {
            hanlePlayVideo();
            window.removeEventListener("scroll", scrollHandler, true);
        };
    }, [hanlePlayVideo]);



    return (
        <CardWrapper ref={cardRef} o>
            <CardMedia>
                <ReactPlayer
                    url={previewSrc}
                    playing={playVideo}
                    width={'100%'}
                    height={'unset'}
                    config={{ file: { attributes: { poster: videoPoster } } }}
                    loop={true}
                />
                <PlayIcon>
                    {playVideo ? <PauseCircleFilled fontSize={'large'} style={{ color: '#fff' }} /> : <PlayCircleFilled fontSize={'large'} style={{ color: '#fff' }} />}
                </PlayIcon>
                <TimeDuration>
                    <span className='fs-14 text-white'>{convertHMS(duration)}</span>
                </TimeDuration>
            </CardMedia>
            <CardFooter>
                <CardTitle>{title}</CardTitle>

            </CardFooter>
        </CardWrapper>
    );
};

export default VideoCard;
