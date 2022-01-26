import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import ReactPlayer from 'react-player'



//** actions
import { getMostViewdVideos } from '../../../redux/video/actions'


//** Card styled components */
import VideoCard from '../../../components/cards/VideoCard';

//** redux
import { useSelector, useDispatch } from 'react-redux'


//** Card skeleton */
import CardSkeleton from '../../../components/skeleton/CardSkeleton';
import CustomDialog from '../../../components/dialogs/CustomDialog';



const HomePage = () => {
    const [modalData, setModalData] = useState({
        dialogTitle: '',
        content: () => { },
    });
    const [openModal, setOpenModal] = useState(false);

    //** redux hooks
    const dispatch = useDispatch()
    const mostViewedVideosList = useSelector((state) => state.video.mostViewedVideosList);
    const getMostViewedVideosLoading = useSelector((state) => state.video.getMostViewedVideosLoading);

    // ** Life Cycle
    useEffect(() => {
        dispatch(getMostViewdVideos());
    }, [dispatch]);



    if (getMostViewedVideosLoading) {
        return (
            new Array(10)
                .fill(null)
                .map((item, index) => {
                    return (
                        <CardSkeleton key={index} />
                    )
                })
        )
    }

    const handleOpenVideoDialog = (title, url,pooster) => {
        setModalData(prevState => ({
            ...prevState,
            dialogTitle: title,
            content: () => {
                return (
                    <ReactPlayer
                        url={url}
                        playing={true}
                        width={'100%'}
                        height={'100%'}
                        config={{ file: { attributes: { poster: pooster } } }}
                    />
                )
            }
        }))
        setOpenModal(true)
    }


    return (
        <>
            <CustomDialog open={openModal} setOpen={setOpenModal} dialogTitle={modalData.dialogTitle} content={modalData.content} />
            <Grid container spacing={3} rowSpacing={5} paddingX={2} paddingY={5} >
                {mostViewedVideosList.data.map((item) => {
                    return (
                        <Grid
                            item
                            xs={12}
                            md={4}
                            key={item.id}
                            onClick={() => handleOpenVideoDialog(item.attributes.title, item.attributes.preview_src,item.attributes.big_poster)}

                        >
                            <VideoCard
                                videoPoster={item.attributes.big_poster}
                                play={false}
                                description={item.attributes.description}
                                duration={item.attributes.duration}
                                previewSrc={item.attributes.preview_src}
                                senderName={item.attributes.sender_name}
                                title={item.attributes.title}
                                userName={item.attributes.username}
                                visitCount={item.attributes.visit_cnt}

                            />
                        </Grid>
                    )
                })}
            </Grid>
        </>
    )
};

export default HomePage;
