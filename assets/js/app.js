const btnEncrypted = document.getElementById('btnEncrypted');
const btnDecrypted = document.getElementById('btnDecrypted');
const inptTextArea = document.getElementById('inptTextArea');
const outptTextArea = document.getElementById('outptTextArea');
const btnCopyResult = document.getElementById('btnCopyResult');
const preInformation = document.getElementsByClassName("pre-information");

const keysEncoded = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
};

inptTextArea.addEventListener("input", validateText);
btnEncrypted.addEventListener("click", encrypt);
btnDecrypted.addEventListener("click", decrypt);
btnCopyResult.addEventListener("click", copyResult);

function encrypt() {
    const text = inptTextArea.value.trim();
    if (text) {
        const encrypted = Object.entries(keysEncoded).reduce((acc, [key, value]) => {
            return acc.replaceAll(key, value);
        }, text);
        writeResult(encrypted);
    }
}

function decrypt() {
    const text = inptTextArea.value.trim();
    if (text) {
        const decrypted = Object.entries(keysEncoded).reduce((acc, [key, value]) => {
            return acc.replaceAll(value, key);
        }, text);
        writeResult(decrypted);
    }
}

function writeResult(text) {
    outptTextArea.value = text;
    toggleTextOutput("none", "block");
}

function copyResult() {
    outptTextArea.select();
    navigator.clipboard.writeText(outptTextArea.value)
        .catch(() => document.execCommand("copy"));
}

function validateText() {
    const text = inptTextArea.value;
    if (!text) {
        toggleTextOutput("block", "none");
        return;
    }

    const regex = /[WáéíóúÁÉÍÓÚñÑ¿¡«»“”‘’'"´`+*()\-–—/\\=|#@^\[\]{}%$§&~;:<>!?]|[A-Z]/g;
    inptTextArea.value = text.replace(regex, "");
    toggleTextOutput(inptTextArea.value ? "none" : "block", "block");
}

function toggleTextOutput(preInfoDisplay, resultDisplay) {
    Array.from(preInformation).forEach(el => el.style.display = preInfoDisplay);
    outptTextArea.style.display = resultDisplay;
    btnCopyResult.style.display = resultDisplay;
}
