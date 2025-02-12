'use client';

import Link from "next/link";

interface Props {
  path: string;
  text: string;
}

import style from "./ActiveLink.module.css";
import { usePathname } from "next/navigation";

export const ActiveLink = ({ path, text }: Props) => {
 const pathName = usePathname();
 const isActive = pathName === path;
  return (
    <Link href={path} className={`${style.link} ${isActive? style['active-link']: ''}`}>
      {text}
    </Link>
  );
};
