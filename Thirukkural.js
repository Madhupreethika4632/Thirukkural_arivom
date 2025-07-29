function kural() {
  let a = document.getElementById("kural_number").value;
  
  // Check if input is a number and between 1 and 1330
  if (isNaN(a) || a < 1 || a > 1330) {
    const kuralDetailsElement = document.getElementById("kd");
    kuralDetailsElement.innerHTML = "Please enter a number between 1 and 1330";
  } else {
    fetch(`https://getthirukkural.appspot.com/api/3.0/kural/${a}?appid=18c2aukokxmoz`)
      .then(res => res.json())
      .then(msg => {
        const kuralDetailsElement = document.getElementById("kd");
        kuralDetailsElement.innerHTML = "";

        const result1Element = document.createElement("div");
        result1Element.innerHTML = `<h4>Kural</h4>${msg.line1}<br>${msg.line2}`;
        kuralDetailsElement.appendChild(result1Element);

        const meaningElement = document.createElement("div");
        meaningElement.innerHTML = `<h4>Meaning</h4>${msg.urai1}`;
        kuralDetailsElement.appendChild(meaningElement);

        const translationElement = document.createElement("div");
        translationElement.innerHTML = `<h4>Translation</h4>${msg.translation}`;
        kuralDetailsElement.appendChild(translationElement);

        const athigaramElement = document.createElement("div");
        athigaramElement.innerHTML = `<h4>Athigaram</h4>${msg.athigaram}`;
        kuralDetailsElement.appendChild(athigaramElement);

        const iyalElement = document.createElement("div");
        iyalElement.innerHTML = `<h4>Iyal</h4>${msg.iyal}`;
        kuralDetailsElement.appendChild(iyalElement);

        const urai1Element = document.createElement("div");
        urai1Element.innerHTML = `<h4>Urai 1</h4>${msg.urai1}`;
        kuralDetailsElement.appendChild(urai1Element);

        const urai1AuthorElement = document.createElement("div");
        urai1AuthorElement.innerHTML = `<h4>Urai 1 Author</h4>${msg.urai1Author}`;
        kuralDetailsElement.appendChild(urai1AuthorElement);

        const urai2Element = document.createElement("div");
        urai2Element.innerHTML = `<h4>Urai 2</h4>${msg.urai2}`;
        kuralDetailsElement.appendChild(urai2Element);

        const urai2AuthorElement = document.createElement("div");
        urai2AuthorElement.innerHTML = `<h4>Urai 2 Author</h4>${msg.urai2Author}`;
        kuralDetailsElement.appendChild(urai2AuthorElement);

        const urai3Element = document.createElement("div");
        urai3Element.innerHTML = `<h4>Urai 3</h4>${msg.urai3}`;
        kuralDetailsElement.appendChild(urai3Element);

        const urai3AuthorElement = document.createElement("div");
        urai3AuthorElement.innerHTML = `<h4>Urai 3 Author</h4>${msg.urai3Author}`;
        kuralDetailsElement.appendChild(urai3AuthorElement);
      });
  }
}

// Call the kural function with default value of 1
document.getElementById("kural_number").value = 1;
kural();