"use client";

import Link from "next/link";
import { FC } from "react";
import cssClasses from "./footer.module.scss";
import { Badge } from "../ui/badge";
import Icon from "../reusables/AppIcon";

const Footer: FC = () => {
  return (
    <footer>
      <div className={cssClasses["footer-background"]}>
        <div className={cssClasses["footer-logo"]}>
          <Link href="/">
            <div className="font-semibold text-[66px]/[118.8px] text-white">
              tutordem
            </div>
          </Link>
          <p>
            <span>Effortless Conference Solutions and Unmatched</span>
            <span>Research Support</span>
          </p>
        </div>

        <div className={cssClasses["footer-links"]}>
          <div>
            <p className={cssClasses["link-header"]}>company</p>
            <ul>
              <li>
                <Link href="">About</Link>
              </li>
              <li>
                <Link href="">The Team</Link>
              </li>
              <li>
                <Link href="">Contact</Link>
              </li>
              <li>
                <Link href="">
                  Careers
                  <Badge className="text-sm/[19.6px] font-normal bg-primary-500">
                    We’re hiring!
                  </Badge>
                </Link>
              </li>
              <li>
                <Link href="">Press kits</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className={cssClasses["link-header"]}>product</p>
            <ul>
              <li>
                <Link href="/">Past Question</Link>
              </li>
              <li>
                <Link href="/">
                  Leaderboard <span className="font-semibold ">Quiz</span>
                </Link>
              </li>
              <li>
                <Link href="/">Professional tutor</Link>
              </li>
              <li>
                <Link href="/">CBE</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className={cssClasses["link-header"]}>tutor</p>
            <ul>
              <li>
                <Link href="">Media</Link>
              </li>
              <li>
                <Link href="">Security</Link>
              </li>
              <li>
                <Link href="">Blog</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className={cssClasses["link-header"]}>contact</p>
            <ul>
              <li>
                <Link href="">support@tutordem.com</Link>
              </li>
              <li>
                <Link href="">WhatsApp</Link>
              </li>
              <li>
                <Link href="">Help desk</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={cssClasses["address-socials"]}>
          <div className={cssClasses.address}>
            <p>lagos office</p>
            <div>
              <span>30, 69B Road 6th Avenue, Gwarinpa, Abuja</span>
              <span>Email: hello@tutordem.com</span>
              <span> Tel: +234 801 234 5678</span>
            </div>
          </div>
          <div className={cssClasses.socials}>
            <Badge className={cssClasses.badge}>
              <Icon icon="facebook" width={16} height={16} />
              <span>facebook</span>
            </Badge>
            <Badge className={cssClasses.badge}>
              <Icon icon="instagram" width={16} height={16} />
              <span>instagram</span>
            </Badge>
            <Badge className={cssClasses.badge}>
              <Icon icon="x-twitter" width={16} height={16} />
              <span>X/Twitter</span>
            </Badge>
            <Badge className={cssClasses.badge}>
              <Icon icon="linkedin" width={16} height={16} />
              <span>LinkedIn</span>
            </Badge>
          </div>
        </div>

        <p className="font-normal text-base/[23.2px] pt-3 text-white font-dmSans">
          © 2024 TutorDem All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
