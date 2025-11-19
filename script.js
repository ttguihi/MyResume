document.addEventListener('DOMContentLoaded', function () {
    const projectHeaders = document.querySelectorAll('.project-header');

    projectHeaders.forEach(header => {
        header.addEventListener('click', (event) => {
            event.stopPropagation();

            const details = header.nextElementSibling;
            const button = header.querySelector('.toggle-btn');

            details.classList.toggle('expanded');

            if (button) {
                const isExpanded = details.classList.contains('expanded');
                button.textContent = isExpanded ? '折叠' : '展开';
                button.setAttribute('aria-expanded', isExpanded.toString());
            }
        });
    });
});