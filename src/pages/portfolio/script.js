let name=document.querySelector(".name");
async function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}
async function updateName() {
    while (true) {
        await sleep(1500);
        name.textContent = "udontur";
        await sleep(1500);
        name.textContent = "Hadrian";
    }
}
updateName();