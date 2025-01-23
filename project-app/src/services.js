const isauthenticated = () => {
    var user = localStorage.getItem("user");
    if (user) {
        return true;
    } else {
        return false;
    }
}
 