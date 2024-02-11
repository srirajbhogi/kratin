document.addEventListener("DOMContentLoaded", function() {
    var healthTips = document.getElementById("healthTips");
    var tips = [
        "Stay active by taking regular walks or participating in senior-friendly exercises like yoga or tai chi.",
        "Eat a balanced diet rich in fruits, vegetables, whole grains, and lean proteins to maintain your health.",
        "Stay socially connected with friends and family to support your mental and emotional well-being.",
        "Get regular check-ups with your doctor and follow their recommendations for preventive care.",
        "Make time for hobbies and activities you enjoy to reduce stress and increase happiness.",
    ];

    tips.forEach(function(tip) {
        var tipItem = document.createElement("p");
        tipItem.textContent = tip;
        healthTips.appendChild(tipItem);
    });
});
