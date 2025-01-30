function calculateBMI() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
    var age = parseInt(document.getElementById('age').value);

    if (isNaN(weight) || isNaN(height) || isNaN(age)) {
        alert("Silakan masukkan data yang valid.");
        return;
    }

    if (weight > 0 && height > 0 && age > 0) {
        var heightInMeters = height / 100;
        var bmi = weight / (heightInMeters * heightInMeters);
        var resultText = `BMI Anda: ${bmi.toFixed(2)}<br>`;

        if (bmi < 18.5) {
            resultText += "Kategori: Kurus";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            resultText += "Kategori: Normal";
        } else if (bmi >= 25 && bmi < 29.9) {
            resultText += "Kategori: Kelebihan Berat Badan";
        } else {
            resultText += "Kategori: Obesitas";
        }
        document.getElementById('result').innerHTML = resultText; // Use innerHTML to include <br>
    } else {
        alert("Silakan masukkan semua data.");
    }
}