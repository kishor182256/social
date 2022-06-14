import React, { useEffect } from 'react'
import { Col, Container } from 'react-bootstrap'
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

    

   return (
      <Container style={{display: 'flex', flexDirection: ''}}>
         <Categories/>

            {
               videos?.map(video => (
                    <Col lg={3} md={4}>
                       <Video video={video} key={video.id} />
                    
                    </Col>
                 ))
             }
       
      </Container>
   )
}

export default HomeScreen