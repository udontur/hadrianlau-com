function get_query_string(name) {
    const query_string = new URLSearchParams(
        window.location.search
    );
    return query_string.get(name);
}
function second_true() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    document.body.textContent = `${hours}:${minutes}:${seconds}`;
}
function second_false() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    document.body.textContent = `${hours}:${minutes}`;
}
const second = get_query_string("seconds");
if (second === "false") {
    document.body.style.fontSize = "40vw";
    second_false();
    setInterval(second_false, 1000);
} else {
    document.body.style.fontSize = "25vw";
    second_true();
    setInterval(second_true, 1000);
}