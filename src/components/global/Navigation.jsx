import { NavLink, useLocation } from "react-router-dom";

const nav = [
    {
        title: "Home",
        slug: "/",
        clickable: true,
        children: [],
    },
    // {
    //     title: "Case Studies",
    //     slug: "/case-studies",
    //     clickable: false,
    //     children: [
    //         {
    //             title: "Smart Fusion",
    //             slug: "/smart-fusion",
    //             clickable: true,
    //         },
    //     ],
    // },
];

function CreateNavItem({ item }) {
    const { pathname } = useLocation();
  const hasChildren = item.children?.length > 0;

  const isParentActive =
    item.slug && item.slug !== "/" && pathname.startsWith(item.slug);

  return (
    <li
      className={[
        "nav-item",
        hasChildren ? "has-submenu" : "",
        isParentActive ? "active" : "",
      ].join(" ").trim()}
    >
      {item.clickable ? (
        <NavLink
          to={item.slug}
          className={({ isActive }) =>
            ["nav-link", isActive ? "active" : ""].join(" ").trim()
          }
          aria-haspopup={hasChildren ? "true" : undefined}
        >
          {item.title}
          {hasChildren && <span className="caret" aria-hidden="true" />}
        </NavLink>
      ) : (
        <span className="nav-label">
          {item.title}
          {hasChildren && <span className="caret" aria-hidden="true" />}
        </span>
      )}

      {hasChildren && (
        <ul className="submenu">
          {item.children.map((child) => (
            <li key={child.slug}>
              <NavLink
                to={`${item.slug}/${child.slug}`}
                className={({ isActive }) =>
                  ["submenu-link", isActive ? "active" : ""].join(" ").trim()
                }
              >
                {child.title}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

function Navigation({}) {
    // const { pathname } = useLocation();
    // console.log("pathname", pathname);

    return (
        <div className="navigation">
            <div className="left">
                <h6 className="s_header">Alex Khachadoorian</h6>
                <p className="eyebrow">Full Stack Developer</p>
            </div>
            <nav>
                <ul className="main_nav">
                    {nav.map((item) => (
                        <CreateNavItem key={item.slug} item={item} />
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;
