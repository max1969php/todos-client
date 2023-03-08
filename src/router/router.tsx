import { Routes, Route } from 'react-router-dom';
import App from './../App';
import Edit from './../edit';

const Router = () => {
 return (
    <>
       <Routes>
          <Route path="/" element={<App />} />
          <Route path="/edit" element={<Edit />} />
       </Routes>
    </>
 );
};

export default Router;