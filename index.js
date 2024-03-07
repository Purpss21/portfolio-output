const expandIcon = document.getElementById('expandIcon');
const projContainer = document.querySelector('.proj-container');

expandIcon.addEventListener('click', function() {
    projContainer.classList.toggle('expanded');
});
