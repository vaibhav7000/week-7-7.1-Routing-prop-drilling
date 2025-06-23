import { memo } from "react";
import { useNavigate } from "react-router"

function Header() {
    const navigate = useNavigate();

    return (
        <div style={{
            height: 50, width: "100vw", position: "absolute", top: 0, left: 0, right: 0, backgroundColor: "whitesmoke", color: "gray", display: "flex", gap: 40, justifyContent: "center", padding: 20
        }}>
            <button onClick={function() {
                navigate("")
            }}>
                Landing Page
            </button>

            <button onClick={() => navigate("dashboard")}>
                DashBoard
            </button>

            <button onClick={() => navigate("about")}>
                About
            </button>
        </div>
    )
}


const HeaderMemo = memo(Header);
export default HeaderMemo;
// we can use -> "window.location.href" to naviagate between different pages but this does not enable Client-side-routing instead it causes a full-reload ( sends the request again to the server that again comes with fresh html + css + js )

// using "useNavigate" Hook to enable client-side-routing + this hook can only be used inside the Component which is wrapped inside the BrowserStack