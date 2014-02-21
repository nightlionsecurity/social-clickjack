social-clickjack
================

Social Clickjack script - Social Engineering POC


HOW THE CODE WORKS
- User visits the page -> jQuery script is executed
- The script detects which social media sites the user is logged into (Facebook, Twitter, or Google+)
- If the script detects a login from any of those sites, it will iterate down the list and pick the first of the logged in sites (for this example, let’s use Facebook)
- Using HTML, CSS, and Javascript/jQuery, a hidden button will be loaded and tied to the user’s mouse click event
- When the mouse is clicked, the button will trigger and execute a particular function tied to Facebook, Twitter, or Google. In this case, the button is a ‘Like’, and the user has unknowingly liked a page on Facebook.
- The script then unloads, and drops a cookie indicating the the Facebook script has been run
- If the script has been placed in a website’s header, it will reload the next time the user visits a different page on the site. This time the script will detect the clickjack’s ‘Facebook complete’ cookie and automatically iterate to the next logged in service.


USING THE CODE

- Each of the social network functions have specific opacity settings. These are currently set to VISIBLE (1). If you would like to go into stealth mode and hide the buttons, change all the ‘opacity’ settings to 0 (I will eventually make this a global option).
- You must specific your account in the parameters of each of the social networks. Replace all instances of “[YOURNAME]” with your account name.
- Execution of the Facebook code requires a Facebook APP ID. The app ID you are using must have the same domain name as the script. This code is located in index.html
The login status messages can be safely removed form the HTML file without effecting the rest of the code.
