import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import HomeScreen from "./components/Homescreen/HomeScreen";
import Login from "./components/Login/Login";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router,Switch  } from 'react-router-dom';


import './_app.scss';
import { Route } from "react-router-dom";
import Search from "./components/Search/Search";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import WatchScreen from "./components/Homescreen/screen/WatchScreen";

const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false)

   const handleToggleSidebar = () => toggleSidebar(value => !value);

  return (
     <>
        <Header handleToggleSidebar={handleToggleSidebar} />
        <div className='app__container'>
           <Sidebar
              sidebar={sidebar}
              handleToggleSidebar={handleToggleSidebar}
           />
           <Container  className='app__main '>
            {children}
           </Container>
        </div>
     </>
  )
}

function App() {
  
   const token = useSelector((state)=>state.authReducer.accessToken)

    const history = useHistory();

   useEffect(()=>{
      if(!token){
            history.push('/login')
            
      }
   },[token])

  return (
    <>
        <Switch>
        <Route exact path="/">
           <Layout>
             <HomeScreen/>
           </Layout>
        </Route>

        <Route path="/login">
             <Login/>
        </Route>

        <Route path="/search">
           <Layout>
             <Search/>
           </Layout>
        </Route>
        <Route path="/watch/:id">
           <Layout>
             <WatchScreen/>
           </Layout>
        </Route>
        <Route>
            <Redirect exact to='/' />
         </Route>
        </Switch>
    </>
    
  );
}

export default App;
