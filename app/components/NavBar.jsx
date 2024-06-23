import NavItem from "./NavItem"

const navItems = [
    {
    label: 'Why Cypress?',
    path: '/',
    },
    {
    label: 'Fundamentals',
    path: '/fundamentals'
    },
    {
        label: 'Forms',
        path: '/forms'
    },
    {
        label: 'Examples',
        path: '/examples' 
    }
]

export default function NavBar(){
    return (
        <ul className="nav-bar">
            {
                navItems.map((item)=> (
                    <NavItem key={item.label} label={item.label} path={item.path} />
                ))
            }
        </ul>
    )
}