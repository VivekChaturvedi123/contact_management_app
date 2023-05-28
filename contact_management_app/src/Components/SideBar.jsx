import contact from '../utils/contact-book.png';
import bar from '../utils/bar-chart.png';
import { Link } from "react-router-dom"
export default function Sidebar() {
    return (
        <div className="flex border-r-2">
            <div className="flex pt-16 flex-col h-screen p-3 bg-white shadow w-60">
                <div className="space-y-3">
                    <div className="flex items-center">
                        <h2 className="text-xl mt-4 font-bold">Dashboard</h2>
                    </div>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li className="rounded-sm">
                                <Link
                                    to="/"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <img src={contact} />
                                    <span>Contacts</span>
                                </Link>
                            </li>
                            <li className="rounded-sm">
                                <Link
                                    to="/dashboard"
                                    className="flex items-center p-2 space-x-3 rounded-md">
                                    <img src={bar} alt="" />
                                    <span>Charts And Maps</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
}
/*the Sidebar component represents a sidebar navigation menu. It displays a title "Dashboard" and provides two navigation links: "Contacts" and "Charts And Maps". Each link is represented as a list item with an image and text, and the navigation is handled by the React Router's <Link> component. it has white background, a shadow effect, and a border on the right side.*/