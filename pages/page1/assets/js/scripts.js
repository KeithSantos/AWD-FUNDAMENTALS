document.querySelectorAll(".photo-container").forEach((container, index) => {
    container.addEventListener("mouseenter", () => {
        showFundamentalExample(container, index);
    });
    container.addEventListener("mouseleave", (event) => {
        if (!event.relatedTarget || !document.getElementById("exampleOverlay").contains(event.relatedTarget)) {
            hideFundamentalExample();
        }
    });
});

function showFundamentalExample(container, index) {
    const examples = [
        `
        <h3>Variable Declaration Example</h3>
        <pre>
let name = "Keith"; // String
let age = 20;      // Number
let isStudent = true; // Boolean
console.log(name, age, isStudent);
        </pre>
        `,
        `
        <h3>Input and Output Example</h3>
        <div>
            <label for="userInput" style="font-size: 16px;">Enter your name:</label>
            <input type="text" id="userInput" placeholder="Type your name..." style="padding: 8px; margin: 10px 0; width: 80%;">
            <button id="showOutput" style="padding: 8px; margin-left: 5px;">Submit</button>
            <p id="output" style="margin-top: 15px; font-size: 16px; color: #00ff00;"></p>
        </div>
        `,
        `
        <h3>Conditional Statement Example</h3>
        <pre>
const age = 18;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}
        </pre>
        `,
        `
        <h3>Looping Statement Example</h3>
        <div>
            <label for="loopCount" style="font-size: 16px;">Enter the number of loops:</label>
            <input type="number" id="loopCount" placeholder="Enter a number..." style="padding: 8px; margin: 10px 0; width: 80%;">
            <button id="runLoop" style="padding: 8px; margin-left: 5px;">Run</button>
            <div id="loopOutput" style="margin-top: 15px; font-size: 16px; color: #00ff00; max-height: 150px; overflow-y: auto;"></div>
        </div>
        `
    ];

    hideFundamentalExample();

    const exampleDiv = document.createElement("div");
    exampleDiv.id = "exampleOverlay";
    exampleDiv.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center;">
            <h3 style="margin: 0; color: #ffffff;">Fundamental Example</h3>
        </div>
        <hr style="border-color: #ffffff; margin: 10px 0;">
        ${examples[index]}
    `;
    exampleDiv.style.position = "absolute";
    exampleDiv.style.top = `${container.offsetTop + container.offsetHeight + 10}px`;
    exampleDiv.style.left = `${container.offsetLeft}px`;
    exampleDiv.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    exampleDiv.style.color = "white";
    exampleDiv.style.padding = "15px";
    exampleDiv.style.borderRadius = "10px";
    exampleDiv.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.5)";
    exampleDiv.style.zIndex = "1000";
    exampleDiv.style.width = "95%";
    exampleDiv.style.maxWidth = "600px";
    exampleDiv.style.overflowY = "auto";

    document.body.appendChild(exampleDiv);

    exampleDiv.addEventListener("click", (event) => {
        event.stopPropagation();
    });

    if (index === 1) {
        const button = exampleDiv.querySelector("#showOutput");
        const input = exampleDiv.querySelector("#userInput");
        const output = exampleDiv.querySelector("#output");

        button.addEventListener("click", () => {
            const value = input.value.trim();
            output.textContent = value ? `Hello, ${value}!` : "Please enter a name.";
        });
    }

    if (index === 3) {
        const button = exampleDiv.querySelector("#runLoop");
        const input = exampleDiv.querySelector("#loopCount");
        const output = exampleDiv.querySelector("#loopOutput");

        button.addEventListener("click", () => {
            const count = parseInt(input.value, 10);
            output.innerHTML = "";

            if (isNaN(count) || count <= 0) {
                output.textContent = "Please enter a valid positive number.";
            } else {
                for (let i = 1; i <= count; i++) {
                    const loopItem = document.createElement("p");
                    loopItem.textContent = `Loop iteration ${i}`;
                    output.appendChild(loopItem);
                }
            }
        });
    }
}

function hideFundamentalExample() {
    const exampleDiv = document.getElementById("exampleOverlay");
    if (exampleDiv) {
        exampleDiv.remove();
    }
}

document.addEventListener("click", (event) => {
    const exampleDiv = document.getElementById("exampleOverlay");
    if (exampleDiv && !exampleDiv.contains(event.target)) {
        hideFundamentalExample();
    }
});
