

const Header = () => {
    return (
        <div className='container mx-auto my-5 flex justify-between items-center'>
            <div>
                <img src="../../../image/logo.png" alt="" />
            </div>
            <div className='flex justify-center items-center gap-3'>
                <ul className='flex gap-3 text-lg menu menu-horizontal px-1'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Fixture</a></li>
                    <li><a href="#">Teams</a></li>
                    <li><a href="#">Schedules</a></li>
                </ul>
                <ul>
                    <li className='font-bold flex gap-2'><span>0</span>  Coin <img className='w-5 h-5' src="https://img.icons8.com/?size=100&id=sPBQkuep9vDA&format=png&color=000000" alt="" /></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;