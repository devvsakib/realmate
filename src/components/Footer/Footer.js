import Link from "next/link"
import CommonLayout from "../Layouts/CommonLayout"
import menu from "../Menus/Menu"
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="bg-footerbg text-white pt-16">
            <CommonLayout>
                <div className="grid grid-cols-2 gap-20 pb-10">
                    <div>
                        <div>
                            <img className="w-1/4" src="/assets/footerlogo.svg" alt="" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-10 justify-start text-sm">
                        <ul className="grid gap-2">
                            {
                                menu.main.items.map((item, index) => (
                                    <li>
                                        <Link href={item.path} key={index}>
                                            <span className="">{item.title}</span>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                        <ul className="grid gap-2">
                            {
                                menu.usefulmenu.items.map((item, index) => (
                                    <li>
                                        <Link href={item.path} key={index}>
                                            <span className="">{item.title}</span>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="mt-5 w-full h-[1px] bg-primary opacity-60" />
                <div className="flex items-center justify-between gap-2 py-4">
                    <div className="flex items-center gap-2">
                        <FaFacebook />
                        <FaTwitter />
                        <FaInstagram />
                        <FaYoutube />
                        <FaLinkedin />
                    </div>
                    <p>© {new Date().getFullYear()} Real Mate. All rights reserved.</p>
                </div>
            </CommonLayout>
        </footer>
    )
}

export default Footer