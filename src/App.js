import { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import HomeScreen from "./components/Homescreen/HomeScreen";
import Sidebar from "./components/sidebar/Sidebar";


import './_app.scss';

function App() {
  const [sidebar, toggleSidebar] = useState(false)

   const handleToggleSidebar = () => toggleSidebar(value => !value);

  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app_container ">
         <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar}/>
         <Container fluid className="app_main">
           <HomeScreen/>
         </Container>
      </div>
      </>
  );
}

export default App;
