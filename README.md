# URL-Monitoring-App

This is a restful api for an uptime monitoring application which allow users to enter URL of an web server that they want monitored, and received an SMS alerts when those resourses go-down or come-back-up

Requirement:

Feature 1: The API listens on a PORT and accepts incoming HTTP requests for POST , GET, PUT, DELETE and HEAD.

Feature 2. The API allows a client to connect then create a new user,then edit and delete that user.

Feature 3. The API Allows a user to "Sign in" which gives them a token that can use for subsequent authenticated requests.

Feature 4.The API allows the user to Sign-out  which invalidates their token

Feature 5. The API allows a signed-in user to use their token to create a new "Check"

Feature 6. The API allows a signed in user to edit their  or delete any of their checks

Feature 7. In the Background, workers perform all  the checjkjs at the appropriate times an send alerts to the users when a check changes its state from up to down
