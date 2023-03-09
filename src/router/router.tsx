import { Routes, Route } from 'react-router-dom';
import App from '../App';
import Edit from './../edit';
import Create from './../create';

const Router = () => {
 return (
    <>
       <Routes>
          <Route path="/" element={<App />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/create" element={<Create/>} />
       </Routes>
    </>
 );
};

export default Router;