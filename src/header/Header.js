import {Navigation} from "./Navigation";
import {Information} from "./Information";

export default function Header () {
    return (
        <header className="header">
            <div className="wrapper">
                <Navigation/>
                <Information/>
                <div className="header-img">
                    <div className="header-img-text">
                        <h1>Lorem ipsum dolor sit amet.</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt explicabo dolorum cumque.
                            Dolores ducimus, tenetur impedit ex, consequatur ipsa incidunt quidem doloribus aliquid
                            suscipit animi ullam soluta velit quis quam!</p>
                    </div>
                </div>
            </div>
        </header>
    )
}