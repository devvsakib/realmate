import Link from "next/link"
import { useEffect, useState } from "react"
import menu from "../Menus/Menu"

const ActiveMenu = ({ path, menu }) => {
  const [isActive, setIsActive] = useState(false)
  // useEffect(() => {
  //     menu.main.items.map((item) => item.path === path && setIsActive(true))
  // }, [])
  const handleLinkClick = () => {
    setIsActive(!isActive) // Toggle the isActive state
  }
  return (
    <Link
      href={path}
      onClick={handleLinkClick}
      className={`hover:bg-red-400 p-1 rounded ${isActive ? "bg-red-400 p-1 rounded" : ""}`}>
      {menu}
    </Link>
  )
}

export default ActiveMenu
