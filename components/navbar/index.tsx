import { SvgIcon } from "@/utils/svgSprite";
import styles from "./Navbar.module.css";
import { Children } from "react";
import { LinksData } from "./NavBarData";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className="flex items-center">
        <Image
          src="/images/logo.png"
          width="112"
          height="44"
          alt="otaghak.com"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className={styles.item}>
        {Children.toArray(
          LinksData.map((link) => (
            <Link href={link.href}>
              <SvgIcon icon={link.icon} width={20} />
              {link.title}
            </Link>
          ))
        )}
      </div>
      <Link href={"/"} className={styles.mobileItem}>
        <SvgIcon icon="telephone" width={16} />
        تماس با پشتیبانی
      </Link>
    </nav>
  );
};

export default Navbar;
