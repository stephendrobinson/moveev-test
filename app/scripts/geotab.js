if (typeof geotab === 'object' && typeof geotab.addin === 'object') {
    /**
     * @returns {{initialize: Function, focus: Function, blur: Function}}
     */
    geotab.addin.moveEV = function () {
        'use strict';

        let api;
        let state;
        let elAddin;


        // Data for the bar chart
        const barData = {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
            datasets: [{
                label: 'Total Kilowatts',
                data: [13, 24, 33, 30, 48, 52, 66, 56, 77, 96],
                backgroundColor: 'rgba(0, 123, 255, 0.5)'
            }]
        };

        // Data for the pie chart
        const pieData = {
            labels: ['Fossil', 'Potential', 'EV Savings'],
            datasets: [{
                label: 'Pie Dataset',
                data: [46, 14, 40],
                backgroundColor: [
                    'red', 'orange', 'green'
                ]
            }]
        };

        // Options for the bar chart
        const barOptions = {
            type: 'bar',
            data: barData,
            options: {
                maintainAspectRatio: false, // Add this line
                responsive: true  // Ensures chart is responsive
            }
        };


        // Options for the pie chart
        const pieOptions = {
            type: 'pie',
            data: pieData,
            options: {
                maintainAspectRatio: false, // Add this line
                responsive: true  // Ensures chart is responsive
            }
        };

        return {
            /**
             * initialize() is called only once when the Add-In is first loaded. Use this function to initialize the
             * Add-In's state such as default values or make API requests (MyGeotab or external) to ensure interface
             * is ready for the user.
             * @param {object} freshApi - The GeotabApi object for making calls to MyGeotab.
             * @param {object} freshState - The page state object allows access to URL, page navigation and global group filter.
             * @param {function} initializeCallback - Call this when your initialize route is complete. Since your initialize routine
             *        might be doing asynchronous operations, you must call this method when the Add-In is ready
             *        for display to the user.
             */
            initialize: function (freshApi, freshState, initializeCallback) {
                api = freshApi;
                state = freshState;

                console.log('initializeTriggered');

                elAddin = document.getElementById('moveEV');

                if (state.translate) {
                    state.translate(elAddin || '');
                }

                // Create the bar chart
                new Chart(document.getElementById('barChart'), barOptions);

                // Create the pie chart
                new Chart(document.getElementById('pieChart'), pieOptions);

                initializeCallback();
            },

            /**
             * focus() is called whenever the Add-In receives focus.
             *
             * The first time the user clicks on the Add-In menu, initialize() will be called and when completed, focus().
             * focus() will be called again when the Add-In is revisited. Note that focus() will also be called whenever
             * the global state of the MyGeotab application changes, for example, if the user changes the global group
             * filter in the UI.
             *
             * @param {object} freshApi - The GeotabApi object for making calls to MyGeotab.
             * @param {object} freshState - The page state object allows access to URL, page navigation and global group filter.
             */
            focus: function (freshApi, freshState) {
                // api = freshApi;
                // state = freshState;

                // console.log('focusTriggered');
                // // show main content
                // elAddin.style.display = 'block';

            },

            /**
             * blur() is called whenever the user navigates away from the Add-In.
             *
             * Use this function to save the page state or commit changes to a data store or release memory.
             *
             * @param {object} freshApi - The GeotabApi object for making calls to MyGeotab.
             * @param {object} freshState - The page state object allows access to URL, page navigation and global group filter.
             */
            blur: function () {

                // console.log('blurTriggered');
                // hide main content
                // elAddin.style.display = 'none';
            }
        };
    };
} else {
    // Handle the case where geotab or geotab.addin is not available
    console.log("Geotab object or addin property is not available.");

    // Data for the bar chart
    const barData = {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        datasets: [{
            label: 'Total Kilowatts',
            data: [13, 24, 33, 30, 48, 52, 66, 56, 77, 96],
            backgroundColor: 'rgba(0, 123, 255, 0.5)'
        }]
    };

    // Data for the pie chart
    const pieData = {
        labels: ['Fossil', 'Potential', 'EV Savings'],
        datasets: [{
            label: 'Pie Dataset',
            data: [46, 14, 40],
            backgroundColor: [
                'red', 'orange', 'green'
            ]
        }]
    };

    // Options for the bar chart
    const barOptions = {
        type: 'bar',
        data: barData,
        options: {
            maintainAspectRatio: false, // Add this line
            responsive: true  // Ensures chart is responsive
        }
    };


    // Options for the pie chart
    const pieOptions = {
        type: 'pie',
        data: pieData,
        options: {
            maintainAspectRatio: false, // Add this line
            responsive: true  // Ensures chart is responsive
        }
    };

    document.addEventListener('DOMContentLoaded', function () {
        // Chart.js code goes here

        // Create the bar chart
        new Chart(document.getElementById('barChart'), barOptions);

        // Create the pie chart
        new Chart(document.getElementById('pieChart'), pieOptions);
    });

}
