const items = document.querySelectorAll('.item');
const sortableList = document.querySelector('.sortable-list'); // Use querySelector to select a single element

items.forEach(item => {
  item.addEventListener('dragstart', () => {
    setTimeout(() => {
      item.classList.add('dragging');
    }, 0);
  });
  item.addEventListener('dragend', () => item.classList.remove('dragging'));
});

const initSortableList = (e) => {
  const draggingItem = sortableList.querySelector('.dragging');
  const siblings = [...sortableList.querySelectorAll(".item:not(.dragging)")];

  let nextSiblings = siblings.find(sibling => {
    return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
  });

  if (nextSiblings) {
    const parent = nextSiblings.parentNode; // Get the parent of nextSiblings
    parent.insertBefore(draggingItem, nextSiblings);
  }
}


sortableList.addEventListener('dragover', initSortableList);
