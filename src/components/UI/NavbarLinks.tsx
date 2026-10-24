import { Button } from './Button'
interface ClassNameProps{
  classNameBtnItem: string;
  classNameNavItem: string;
  classNameDiv: string;
}
const NavbarLinks = ({classNameBtnItem, classNameNavItem, classNameDiv} : ClassNameProps) => {
  const linkList = [
    {id: 1, name : "Home", href: "/"},
    {id: 2, name : "Products", href: '/products'}
  ]
  return (
    <div className={classNameDiv}>
      {linkList.map((link) => (
        <a key={link.id} href={link.href} className={classNameNavItem}>
          {link.name}
        </a>
        
      ))}
      <Button className={classNameBtnItem}>Get Started</Button>
    </div>
  )
}

export default NavbarLinks