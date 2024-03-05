class Tabs {
    constructor(container, config) {
        this.container = document.getElementById(container);
        this.config = Array.isArray(config) ? config : [config];
        this.activeTab = 0;
        this.contentElement = null;
        this.divListAdded = false;
        this.render();
    }

    changeTab(index) {
        this.divListAdded = !this.divListAdded;
        const tabs = this.container.querySelectorAll('.tab');

        tabs[this.activeTab].classList.remove('active');
        tabs[index].classList.add('active');
        this.activeTab = index;
    }

    render() {
        const ulListElement = document.createElement('ul');

        this.config.forEach((tab, index) => {
            const liListElement = document.createElement('li');
            const headerListElement = document.createElement('h2');
            ulListElement.appendChild(liListElement);
            liListElement.appendChild(headerListElement);
            liListElement.classList.add('tab');
            headerListElement.textContent = tab.label;

            liListElement.addEventListener('click', () =>
                this.changeTab(index),
            );

            this.container.appendChild(ulListElement);
        });
    }
}
