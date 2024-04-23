 function moveToSelected(button) {
    // Get the parent div of the button (containerlistOuter)
    var container = button.closest('.containerlistOuter');
    
    // Move the whole container to the selected div
    document.getElementById('selectedScrollingList').appendChild(container);

    // Change the text of the button to "Retirer"
    button.textContent = 'Retirer';
    
    // Change the click event to call the removeFromSelected function
    button.setAttribute('onclick', 'moveToNonSelected(this)');

    sortContainersByPercentage();
}

function moveToNonSelected(button) {
    // Get the parent div of the button (containerlistOuter)
    var container = button.closest('.containerlistOuter');
    
    // Move the whole container to the selected div
    document.getElementById('nonSelectedScrollingList').appendChild(container);

    // Change the text of the button to "Retirer"
    button.textContent = 'Sélectionner';

    // Change the click event to call the removeFromSelected function
    button.setAttribute('onclick', 'moveToSelected(this)');

    sortContainersByPercentage();
}

function sortContainersByPercentage() {
    var containerList = document.getElementById('nonSelectedScrollingList');
    var containers = containerList.getElementsByClassName('containerlistOuter');

    // Convert NodeList to array for easy sorting
    var containersArray = Array.prototype.slice.call(containers);

    containersArray.sort(function(a, b) {
      var percentageA = getPercentage(a.querySelector('.containerListText').textContent);
      var percentageB = getPercentage(b.querySelector('.containerListText').textContent);
      return percentageB - percentageA; // Sort in descending order
    });

    // Re-arrange containers in the DOM based on sorted order
    containersArray.forEach(function(container) {
      containerList.appendChild(container);
    });
  }

  function getPercentage(text) {
    // Extract the percentage value from text
    var match = text.match(/Niveau de Remplissage: (\d+)%/);
    if (match) {
      return parseInt(match[1]);
    }
    return 0; // Default to 0 if percentage not found
  }




function changeValue(value) {
    document.getElementById("dropbtn").innerText = value;
}

var details = "-Numero de Benne: 409\n-Niveau de Remplissage: 81%\n-Location: Brest\n-Nombre de Benne on location: 3";

function openModal() {
    details = details.replace(/\n/g, '<br>');
    document.getElementById("modalText").innerHTML = details;
    document.getElementById("myModal").style.display = "block";
  }

  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
