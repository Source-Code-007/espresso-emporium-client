import Banner from '../Header/Banner';
import Coffees from './Coffees/Coffees';
import WhoWeAre from './WhoWeAre/WhoWeAre';

const Homepage = () => {
    return (
        <>
            <Banner></Banner>
            <WhoWeAre></WhoWeAre>
            <Coffees></Coffees>
        </>
    );
};

export default Homepage;