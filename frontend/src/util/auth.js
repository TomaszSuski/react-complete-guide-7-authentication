import { redirect } from "react-router-dom";

export function getTokenDuration() {
    const storedExpDate = localStorage.getItem('tokenExp');
    const expDate = new Date(storedExpDate);
    const now = new Date();

    const duration = expDate.getTime() - now.getTime();
    return duration;
}

export function getAuthToken() {
    const token = localStorage.getItem('token');
    const expiresIn = getTokenDuration();

    return {token: token, expiresIn: expiresIn};
}

export function loader() {
    return getAuthToken();
}

export function checkAuthLoader() {
    const token = getAuthToken().token;

    if (!token) {
        return redirect('/auth');
    }

    return null;
}