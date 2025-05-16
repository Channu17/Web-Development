async function hacker() {
    console.log("Hacker is trying to hack the system...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Hacker has hacked the system!");
            resolve();
        }, 2000);
    });
}

async function getData() {
    console.log("Before calling hacker");
    await hacker();
    console.log("After calling hacker");
}
getData();