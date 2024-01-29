import { OrganizationSwitcher, SignedIn, SignOutButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="footerDiv">
        <p className="footerTitle">Форум Эко Эл™</p>
        <p>
        <a className="footerLink" href="mailto:ecoelforum@gmail.com">Написать в тех. поддержку</a>
        <span className="footerDot"> · </span>
        <a className="footerLink" href="/profile/user_2baXFmPV6SqcvtMwhgHNBfv8H5s">Аккаунт администрации</a>
        <span className="footerDot"> · </span>
        <a className="footerLink" href="/rules">Правила форума</a>
        </p>
    </div>
  );
}

export default Footer;
