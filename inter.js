document.getElementById('submitBtn').addEventListener('click', function() {
    const prompt = document.getElementById('prompt').value;
    const file1 = document.getElementById('upload1').files[0];
    const file2 = document.getElementById('upload2').files[0];

    if (!file1 || !file2) {
        alert("Please upload both images.");
        return;
    }

    if (!prompt) {
        alert("Please enter a prompt.");
        return;
    }

    // Here you would typically handle the file and prompt submission
    console.log("Image 1:", file1);
    console.log("Image 2:", file2);
    console.log("Prompt:", prompt);

    alert("Generating animation based on the prompt: " + prompt);
});
