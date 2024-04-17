import { pages } from '../router/routes';

const Navbar = () => {
  return (
    <div>
        <h1>Navbar</h1>
        {pages.map(({ label, path }) => (
              <li key={path} className="nav-link text-nowrap">
                <a href={path}>
                    {label}
                </a>
              </li>
            ))}
    </div>
  )
}

export default Navbar