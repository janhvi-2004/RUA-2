import styles from "./Header.module.scss";
import { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { CiMenuFries } from "react-icons/ci";

const Header = () => {
  const navItems = ["SERVICES", "ABOUT", "CONTACT"];

  const [isMobileView, setIsMobileView] = useState(false);
  const [openMobNav, setOpenMobNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 600);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleOpenMobNav = (val: boolean) => {
    setOpenMobNav(val);
  };

  return (
    <>
      {isMobileView && openMobNav ? (
        <div className={styles.MobNavBar}>
          <div className={styles.CloseIcon}>
            <RxCross1
              size={30}
              color="#000"
              onClick={() => handleOpenMobNav(false)}
            />
          </div>
          <div className={styles.BottomContainer}>
            <div className={styles.MobNavItems}>
              {navItems.map((navItem, index) => (
                <a key={index} href={`${navItem.toLowerCase()}`}>
                  {navItem}
                </a>
              ))}
            </div>
            <div className={styles.HorizontalBar}></div>
          </div>
        </div>
      ) : (
        <div className={styles.Header}>
          <div className={styles.Logo}>RUA</div>
          <div className={styles.NavItems}>
            {isMobileView ? (
              !openMobNav ? (
                <CiMenuFries
                  size={40}
                  color="#fff"
                  onClick={() => handleOpenMobNav(true)}
                />
              ) : (
                ""
              )
            ) : (
              navItems.map((navItem, index) => (
                <a key={index} href={`${navItem.toLowerCase()}`}>
                  {navItem}
                </a>
              ))
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
