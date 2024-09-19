import UserImage from "../images/user.png";
import Books from "../images/books.png";

export default function Navbar() {
    return (
        <nav className="navbar bg-slate-700 p-2 text-white text-sm">
            <div className="container mx-auto w-full lg:flex md:flex flex-row justify-center sm:hidden hidden">
                <div className="w-1/4 mr-auto flex justify-start gap-5 items-center">
                    <a href="#" ><img className="h-8 w-auto" src={Books} /></a>
                    <a href="#" >Book Store</a>
                </div>
                <div className="w-1/4 mx-auto flex justify-center gap-5 items-center">
                    <a href="#">Home</a>
                    <a href="#" >Books</a>
                    <a href="#" >Purchases</a>
                </div>
                <div className="w-1/4 ml-auto flex flex-row justify-end gap-5 items-center">
                    <button type="button">
                        <img className="h-8 w-auto" src={UserImage} />
                    </button>
                </div>
            </div>
            <div className="container mx-auto lg:hidden md:hidden flex flex-col justify-end items-start gap-2" id="mobile-menu">
                <a href="#" className="w-full p-2 hover:bg-slate-900">Home</a>
                <a href="#" className="w-full p-2 hover:bg-slate-900">Books</a>
                <a href="#" className="w-full p-2 hover:bg-gray-900">Purchases</a>
                <a href="#" className="w-full p-2 hover:bg-gray-900">Logout</a>
                <button type="button">
                    <img className="h-8 w-auto" src={UserImage} />
                </button>
            </div>
        </nav>
    );
}