import Link from "next/link"
import CommonLayout from "../Layouts/CommonLayout"
import menu from "../Menus/Menu"
import ActiveMenu from "./ActiveMenu"

const MainHeader = () => {
    return (
        <header className="py-3 shadow-md">
            <CommonLayout>
                <div className="lg:flex justify-between items-center">
                    <div>
                        <img className="w-2/4" src="/assets/logo.svg" alt="RealMate" />
                    </div>
                    <div>
                        <ul className="flex gap-6">
                            {
                                menu.main.items.map((item, index) => (
                                    <li>
                                        <ActiveMenu path={item.path} menu={item.title} />
                                        
                                        {/* <Link href={item.path} key={index}>
                                            <span className="">{item.title}</span>
                                        </Link> */}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <div>
                                <Link href={"signin"}>
                                    <span className="">Sign in</span>
                                </Link>
                            </div>
                            <div>
                                <Link href={"/register"} className="btn-grade">
                                    <span className="">Register</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </CommonLayout>
        </header>
    )
}

export default MainHeader