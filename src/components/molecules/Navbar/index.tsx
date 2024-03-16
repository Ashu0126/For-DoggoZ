import styles from "./index.module.scss";

const Navbar = (props: any) => {
  const { logo, navTabs } = props;

  return (
    <nav className={styles.navbar}>
      <a href={logo?.link}>
        <img className={styles.logo} src={logo?.icon} alt="" />
      </a>
      <ul className={styles.navTabs}>
        {navTabs?.map((item: any) => (
          <a href={item?.link} key={item?.name}>
            <li className={styles.tab}>{item?.name}</li>
          </a>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
