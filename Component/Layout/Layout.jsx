import Link from "next/link";
import {VscListSelection} from "react-icons/vsc";
import {BiMessageSquareAdd} from "react-icons/bi";
import {RxDashboard} from "react-icons/rx";
import {signOut, useSession} from "next-auth/react";
import {FiLogOut} from "react-icons/fi";


function Layouts({children}) {


    const {status} = useSession()
    const startLogout = () => {
        signOut()
    }


    return (
        <div className="container">
            <header>
                <p>Botostart Todo App</p>
                {status === "authenticated" ? (<button onClick={startLogout}>
                    Logout
                    <FiLogOut/>
                </button>) : null}
                {
                    status === "unauthenticated" ?
                        (<>
                            <button><Link href="/signin">signin</Link></button>
                            <button><Link href="/signup">signUP</Link></button>
                        </>) : null
                }


            </header>
            <div className="container--main">
                <aside>
                    <p>Welcome 👋</p>
                    <ul>
                        <li>
                            <VscListSelection/>
                            <Link href="/">Todos</Link>
                        </li>
                        <li>
                            <BiMessageSquareAdd/>
                            <Link href="/add-todo">Add Todo</Link>
                        </li>
                        <li>
                            <RxDashboard/>
                            <Link href="/profile">Profile</Link>
                        </li>
                    </ul>
                </aside>
                <section>{children}</section>
            </div>
        </div>
    );
}

export default Layouts;