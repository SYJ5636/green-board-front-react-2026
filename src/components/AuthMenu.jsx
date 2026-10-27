import { Link } from "react-router-dom";
import { useAuthContext } from "../useAuthContect";

export default function AuthMenu() {
    const { token, clearAuth } = useAuthContext();
    return <>
        {!token && <Link classNAme="login-link" to="/login">로그인</Link>}
        {token &&<button className="logout-button" type="button" onClick={clearAuth}>로그아웃</button>}
    </>
}