const Banner = () => {
    return (
        <div style={{
            backgroundImage: `url("https://t3.ftcdn.net/jpg/01/09/81/02/240_F_109810224_B2Jmt5FCLjcySrE7K1VwgOnIxPQ6XHQZ.jpg")`
        }} className="text-center bg-cover">
            <h1 className="font-bold md:text-8xl text-3xl  py-10 px-16">Grow Your Skills  to Advance Your Career path.</h1>
            <p className=" font-bold md:text-2xl py-5">Educating, Inspiring, & Transforming Young Women. A Tuituon-Free Private Meddle School</p>
            <button className="btn my-10 px-10 py-1.5 rounded-full  text-2xl font-semibold  btn-accent">Get Started</button>
        </div>
    );
};

export default Banner;