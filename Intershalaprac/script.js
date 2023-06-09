const items = document.querySelectorAll('.item');
const container1 = document.getElementById('container1');
const container2 = document.getElementById('container2');
const resetButton = document.getElementById('resetButton');

// Add event listeners for drag and drop events
items.forEach(item => {
  item.addEventListener('dragstart', handleDragStart);
});

container2.addEventListener('dragenter', handleDragEnter);
container2.addEventListener('dragover', handleDragOver);
container2.addEventListener('dragleave', handleDragLeave);
container2.addEventListener('drop', handleDrop);

resetButton.addEventListener('click', handleReset);

// Set the data of the dragged item
function handleDragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.innerText);
  event.target.classList.add('dragging');
}

// Prevent default behavior on drag over to allow drop
function handleDragEnter(event) {
  event.preventDefault();
  container2.classList.add('dragging-over');
}

// Prevent default behavior on drag over to allow drop
function handleDragOver(event) {
  event.preventDefault();
}

// Handle the drag leave event
function handleDragLeave(event) {
  container2.classList.remove('dragging-over');
}

// Handle the drop event and move the item to the second container
function handleDrop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData('text/plain');
  const newItem = document.createElement('div');
  newItem.classList.add('item');
  newItem.innerText = data;
  container2.appendChild(newItem);
  container2.classList.remove('dragging-over');
  event.target.classList.remove('dragging');

  // Display a success message
  const successMessage = document.createElement('p');
  successMessage.innerText = 'Item successfully dropped!';
  successMessage.classList.add('success-message');
  container2.appendChild(successMessage);
}

// Reset the containers to their original state
function handleReset() {
  container1.innerHTML = `
    <h2>Container 1</h2>
    <div class="item" draggable="true">Item 1</div>
    <div class="item" draggable="true">Item 2</div>
    <div class="item" draggable="true">Item 3</div>
    <div class="item" draggable="true">Item 4</div>
  `;
  container2.innerHTML = `
    <h2>Container 2</h2>
  `;
}

