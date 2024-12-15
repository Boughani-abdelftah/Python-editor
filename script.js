// script.js
function runCode() {
    const code = document.getElementById("code").value;
    const outputDiv = document.getElementById("output");

    // تنظيف الناتج السابق
    outputDiv.innerHTML = "";

    try {
        Sk.configure({
            output: function (text) {
                outputDiv.innerHTML += text + "\n";
            },
            read: function (x) {
                if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined) {
                    throw "File not found: " + x;
                }
                return Sk.builtinFiles["files"][x];
            },
        });

        Sk.importMainWithBody("<stdin>", false, code);
    } catch (e) {
        outputDiv.innerHTML = `خطأ: ${e.toString()}`;
    }
}

document.getElementById("run-button").addEventListener("click", runCode);
