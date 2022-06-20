import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { act } from 'react-dom/test-utils'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useDispatch, useSelector } from 'react-redux'
import { getPopularVideos } from '../../redux/actions/videos.actions'
import Categories from '../Categoriesbar/Categories'
import Video from '../video/Video'




const HomeScreen = () => {
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getPopularVideos())
   }, [dispatch])

   const { videos, activeCategory, loading } = useSelector(
      state => state.homeVideosReducer
   )

   const data =  useSelector(
      state => state.homeVideosReducer
   )
   console.log('Video: ', data);

   const fetchdata = () =>{
      if(activeCategory=='All'){
      dispatch(getPopularVideos())
      } else{
         dispatch(getPopularVideos(activeCategory))
      }
   }
    

   return (
      <Container style={{display: 'flex',flexWrap: 'wrap'}}>
         <Categories/>
         <InfiniteScroll
            dataLength={data.videos.length}
            next={fetchdata}
            hasMore={true}
            loader={
              !loading?<div className='spinner-border text-danger d-block mx-auto'></div>:''
            }
            >
           <Row>
            {
               videos?.map(video => (
                    <Col lg={2.5} md={3}>
                       <Video video={video} key={video.id}/>                   
                    </Col>
                 ))
             }
             </Row>
             </InfiniteScroll >
   
      </Container>
   )
}

export default HomeScreen