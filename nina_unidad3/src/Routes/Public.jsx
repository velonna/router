import Home from "../Pages/Home";
import ContainerClass from "../Pages/ContainerClass";
import Login from "../Pages/Login";
import CointainaerProductos from "../Pages/ContainerProductos";

import { Route, Routes } from 'react-router-dom';
function Public(){
    return (
       
              <Routes>
                <Route path="/" element={<Home />}/>
                     
                <Route path="/login" element={<Login />}/>
                <Route path="/productos" element={<CointainaerProductos />}/>           
                <Route path="/contacto" element={<ContainerClass />}/>
                <Route path="*" element={<Login/>}/>
            </Routes>
      
    )
}
export default Public