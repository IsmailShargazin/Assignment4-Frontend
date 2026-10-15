# Assignment 4 Forms and Validation

An individual HTML, CSS, Bootstrap and JavaScript assignment.

| Page | Requirement |
| --- | --- |
| task0.html | Contact form: Name, Email, Message, Submit and labels |
| task1.html | HTML5 validation: required, type=email and maxlength |
| task2.html | Bootstrap contact form, responsive grid, placeholders and helper text |
| task3.html | is-valid/is-invalid and success/error feedback below inputs |
| task4.html | Responsive registration with all required controls and validation |

The navbar links to every task. index.html shows Task 0 directly.
Registration includes First Name, Last Name, Email, Password, Confirm Password, Gender radios, Hobbies checkboxes, Country dropdown, Submit and Reset. The password minimum is 8 characters. Confirmation must match the password.

## Run

Extract the ZIP and open index.html in a browser, or use VS Code Live Server. No installation is required. In the hosted source checkout, pages are in dist/.

## Check validation

Task 1: try empty fields, a malformed email and text longer than the maximum. Task 3: submit invalid and valid values to view Bootstrap feedback. Task 4: test missing fields, a short password and different passwords; then valid input and Reset. Resize the browser to check the Bootstrap Grid.

## Publish

Upload the extracted site files, assets/, README.md and BOOTSTRAP_LICENSE.txt directly to a GitHub repository root. In Settings > Pages, select Deploy from a branch, main, / (root), then Save. From the hosted checkout, use the contents of dist/ plus README.md and the license.

The assignment requires GitHub Pages or Netlify publication, submission of the repository link by the Moodle deadline and an individual defense. This working preview does not replace that publication.

## Files

assets/style.css contains minimal shared styles. Bootstrap 5.3.3 is included locally. Tasks 0-2 contain no JavaScript and use native HTML5 validation and standard browser messages. A valid Submit performs the normal HTML form submission to the current page; there is no processing backend. assets/validation.js is used only on Tasks 3-4 to apply Bootstrap feedback on Submit, check matching passwords and clear feedback on Reset. No messages are emailed and no accounts are created.

Bootstrap is licensed under MIT; see BOOTSTRAP_LICENSE.txt.

Tasks 0-2 use the browser's normal validation messages. Red error messages in Tasks 3-4 are explicitly written in English. Valid fields in Tasks 3-4 show "Correct".
