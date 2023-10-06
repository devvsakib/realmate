import Link from "next/link"
import { useEffect, useState } from "react"
import menu from "../Menus/Menu"

const ActiveMenu = ({ path, menu }) => {
    const [isActive, setIsActive] = useState(false)
    // useEffect(() => {
    //     menu.main.items.map((item) => item.path === path && setIsActive(true))
    // }, [])
    return (
        <Link href={path} className={`${isActive ? "text-primary" : ""}`}>{menu}</Link>
    )
}

export default ActiveMenu