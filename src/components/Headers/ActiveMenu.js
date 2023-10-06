'use client'
import Link from "next/link"
import { useRouter } from "next/router";
import { useState } from "react";

const ActiveMenu = ({ path, menu }) => {
    const router = useRouter();
    const [currentPath, setCurrentPath] = useState('');
    useEffect(() => {
        if (router.asPath) {
            setCurrentPath(router.asPath);
        }
    }, [router.asPath]);
    return (
        <Link href={path} className={`${currentPath == path.slice(1) ? "text-primary" : ""}`}>{menu}</Link>
    )
}

export default ActiveMenu