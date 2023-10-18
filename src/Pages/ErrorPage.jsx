import { MdError } from 'react-icons/Md';

const ErrorPage = () => {
    return (
        <div>
            <div className='flex justify-center items-center flex-col h-screen bg-black'>
                <MdError className='w-[150px] h-[100px]'></MdError>
                <h1 className='text-4xl font-bold text-white'>ERROR 404</h1>
                <p className='text-2xl font-extralight mt-5'>Server Error: Please Try Again Later</p>
            </div>
        </div>
    );
};

export default ErrorPage;