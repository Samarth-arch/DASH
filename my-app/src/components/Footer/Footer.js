import ANDROID_LOGO from './Android_logo.webp'

export default function Footer(){
    return(
        <footer className="bg-sky-600 text-slate-200 px-20 py-6 ">
            <div className='flex justify-center'>
                <div className="flex">
                    <div className="flex-auto w-96">
                        <h1 className="text-2xl">Digital Door</h1>
                        <p className="w-60 mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, porro? Ipsa, commodi repellendus! Totam, adipisci. Nulla autem quo eius vero.</p>
                    </div>
                    <div className="flex-auto w-64 flex flex-col">
                        <ul className="list-none">
                            {/* <li className="mt-2"><a href="#">About</a></li> */}
                            <li className="mt-2"><a href="#">Map</a></li>
                            <li className="mt-2"><a href="#">FAQs</a></li>
                            <li className="mt-2"><a href="#">Statistics</a></li>
                            <li className="mt-2"><a href="#">Resources</a></li>
                        </ul>
                    </div>
                    <div className="flex-auto w-64 flex flex-col">
                        <ul className="list-none">
                            <li className="mt-2"><a href="#">Water Tax</a></li>
                            <li className="mt-2"><a href="#">Property Tax</a></li>
                            <li className="mt-2"><a href="#">Electricity Tax</a></li>
                            <li className="mt-2"><a href="#">Birth Certificate</a></li>
                            <li className="mt-2"><a href="#">Death Certificate</a></li>
                        </ul>
                    </div>
                    <div className="flex-auto w-64">
                        <a href='#'>
                            <img src={ANDROID_LOGO} alt="" />
                        </a>
                    </div>
                </div>
            </div>
            <hr className="bg-white my-5"/>
            <div className='flex justify-center'>
                <p>&#169; 2024 Digital Door. All right reserved.</p>
            </div>
        </footer>
    )
}