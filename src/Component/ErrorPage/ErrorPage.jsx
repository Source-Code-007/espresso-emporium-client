import { Link } from 'react-router-dom';
import errImg from '../../assets/img/404.gif'

const ErrorPage = () => {
    return (
        <div className='min-h-screen bg-no-repeat bg-center relative' style={{backgroundImage: `url(${errImg})`}}>
                <p className='absolute top-6 left-1/2 -translate-x-1/2 rounded p-4 bg-orange-500 text-white font-bold'><Link to={'/'}>Back to Homepage</Link> </p>
        </div>
    );
};

export default ErrorPage;