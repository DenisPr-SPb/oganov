
export function Navigation () {
    const menuItems = [
        'Главная',
        'Образование',
        'Карьера',
        'Работа',
        'Контакты'
    ]

    const listItems = menuItems.map(menuItem => {
       return (
           <li key={menuItem}>
               <a>{menuItem}</a>
           </li>
       )
    })

    return (
        <nav className="nav">
            <ul className="menu">
                {listItems}
            </ul>
        </nav>
    )
}