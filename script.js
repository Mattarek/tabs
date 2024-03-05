class Tabs {
    constructor(container, config) {
        this.container = document.getElementById(container);
        this.config = Array.isArray(config) ? config : [config];
        this.activeTab = 0;
        this.render();
    }

    changeTab(index, mainElement) {
        const tabs = this.container.querySelectorAll('.tab');

        tabs[this.activeTab].classList.remove('active');
        tabs[index].classList.add('active');
        mainElement.textContent = this.config[index].component;
        this.activeTab = index;
    }

    render() {
        const ulListElement = document.createElement('ul');
        const mainElement = document.createElement('main');

        mainElement.classList.add('content');

        this.config.forEach((tab, index) => {
            const liListElement = document.createElement('li');
            const headerListElement = document.createElement('h2');

            ulListElement.appendChild(liListElement);
            liListElement.appendChild(headerListElement);

            liListElement.classList.add('tab');
            headerListElement.textContent = tab.label;

            liListElement.addEventListener('click', () =>
                this.changeTab(index, mainElement),
            );

            this.container.appendChild(ulListElement);
        });

        this.container.appendChild(mainElement);
        const tabs = this.container.querySelectorAll('.tab');
        tabs[0].classList.add('active');
        mainElement.textContent = this.config[0].component;
    }
}
