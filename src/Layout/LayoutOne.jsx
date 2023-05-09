import Nav from '../Component/Header/Nav';
import { Outlet } from 'react-router-dom';

const LayoutOne = () => {
    return (
        <>
            <Nav></Nav>   
            <Outlet></Outlet>
        </>
    );
};

export default LayoutOne;