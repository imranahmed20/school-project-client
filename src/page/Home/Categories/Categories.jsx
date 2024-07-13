import image1 from '../../../../images/data.png'
import image2 from '../../../../images/english.png'
import image3 from '../../../../images/finance.png'
import image4 from '../../../../images/content writing.png'
import image5 from '../../../../images/development.png'
import image6 from '../../../../images/art and design.png'
import image7 from '../../../../images/managment.png'
import image8 from '../../../../images/business.png'

const Categories = () => {
    return (
        <div className="max-w-screen-xl mt-20 mx-auto card card-side bg-base-100 ">
            <div className='ms-10 mt-40'>
                <h1 className="text-5xl font-bold mb-5">Explore <br />
                    Our <br /> Categories</h1>
                <p className="text-xl">Look into yourself, get something in return as your AchievementLook into yourself, get something Return as your achievement</p>
                <button className="btn my-5 px-10 py-1.5 rounded-full  text-xl font-semibold  btn-accent">Explore Categories</button>
            </div>
            <div className="card-body">
                <div className='grid grid-cols-4 gap-4'>
                    <div className='bg-green-50 rounded-lg w-full p-5 shadow-md m-4'>
                        <img src={image1} className='' alt="" />
                        <h1 className='text-center py-6 font-bold'>Data Science</h1>
                    </div>
                    <div className='bg-yellow-50 rounded-lg w-full p-5 shadow-md m-4'>
                        <img src={image2} alt="" />
                        <h1 className='text-center py-6 font-bold'>English</h1>
                    </div>
                    <div className='rounded-lg bg-red-50 w-full p-5 shadow-md m-4'>
                        <img src={image3} alt="" />
                        <h1 className='text-center py-6 font-bold'>Finance</h1>
                    </div>
                    <div className='rounded-lg bg-orange-50 w-full p-5 shadow-md m-4'>
                        <img src={image4} alt="" />
                        <h1 className='text-center py-6 font-bold'> Writing</h1>
                    </div>
                    <div className='rounded-lg w-full bg-red-50 p-5 shadow-md m-4'>
                        <img src={image5} alt="" />
                        <h1 className='text-center py-6 font-bold'>Development</h1>
                    </div>
                    <div className='rounded-lg bg-green-50 w-full p-5 shadow-md m-4'>
                        <img src={image6} alt="" />
                        <h1 className='text-center py-6 font-bold'>Art & Design</h1>
                    </div>
                    <div className='rounded-lg bg-yellow-50 w-full p-5 shadow-md m-4'>
                        <img src={image7} alt="" />
                        <h1 className='text-center py-6 font-bold'>Management</h1>
                    </div>
                    <div className='rounded-lg w-full p-5 bg-red-50 shadow-md m-4'>
                        <img src={image8} alt="" />
                        <h1 className='text-center py-6 font-bold'>Business</h1>
                    </div>


                </div>
            </div>
        </div>

    );
};

export default Categories;