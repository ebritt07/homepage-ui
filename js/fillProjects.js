const placeholder = document.getElementById('placeholder')
        placeholder.remove();

        const projectList = document.getElementById('project-buttons');
        projects.forEach(project => {
            const projectButton = document.createElement('button');
            projectButton.className = 'circle-button';
            projectButton.textContent = 'test';
            projectButton.textContent = `${project.title}`;
            projectButton.addEventListener('click', function () {
                window.open(project.link, '_blank');
            });
            projectButton.style.backgroundColor = project.color;
            projectButton.style.transition = 'background-color 0.3s;'
            projectButton.addEventListener('mouseover', function () {
                projectButton.style.backgroundColor = 'rgb(231, 238, 242)';
            });
            projectButton.addEventListener('mouseout', function () {
                projectButton.style.backgroundColor = project.color;
            })
            projectList.appendChild(projectButton);
        });