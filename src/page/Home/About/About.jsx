
const About = () => {
    return (

        <div className="grid md:grid-cols-2 mt-60 mb-60 max-w-screen-xl mx-auto  ">
            <div>
                <img className="rounded-lg"
                    src="https://educax-next.thetork.com/images/about/1.png"
                    alt="Album" />
            </div>
            <div className="mt-20">
                <h2 className="card-title mb-8">About Us ------</h2>
                <h1 className="text-6xl font-bold">We Are Maximize Your Learning Growth</h1>
                <p className="mt-10 mb-4 text-xl">Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempo.</p>

                <div className="grid md:grid-cols-2">
                    <div className="card card-side ">
                        <figure>
                            <img src="https://educax-next.thetork.com/images/icon/svg/1.svg" alt="" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Training Services</h2>
                        </div>
                    </div>
                    <div className="card card-side ">
                        <figure>
                            <img src="https://educax-next.thetork.com/images/icon/svg/1.svg" alt="" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Big Experience</h2>
                        </div>
                    </div>
                    <div className="card card-side ">
                        <figure>
                            <img src="https://educax-next.thetork.com/images/icon/svg/1.svg" alt="" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Expert Trainer</h2>
                        </div>
                    </div>
                    <div className="card card-side ">
                        <figure>
                            <img src="https://educax-next.thetork.com/images/icon/svg/1.svg" alt="" />
                        </figure>
                        <div className="card-body">
                            <h2 className="text-xl font-semibold">Lifetime access</h2>
                        </div>
                    </div>
                </div>
                <button className="btn btn-primary rounded-full text-xl font-semibold mt-6">Explore More +</button>
            </div>
        </div>

    );
};

export default About;