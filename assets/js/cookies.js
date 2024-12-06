(function () {
        // Select the element with ID 'cookies'
        const cookieBanner = document.getElementById('cookies');

        // Check if 'cookies_accepted' exists in localStorage
        if (!localStorage.getItem('cookies_accepted')) {
            // If it does not exist, add the 'show' class
            if (cookieBanner) {
                cookieBanner.classList.add('show');
            }
        }
    })();

function acceptCookies() {
        // Set 'cookies_accepted' in localStorage
        localStorage.setItem('cookies_accepted', 'true');

        // Remove the 'show' class from the cookie banner
        const cookieBanner = document.getElementById('cookies');
        if (cookieBanner) {
            cookieBanner.classList.remove('show');
        }
    }