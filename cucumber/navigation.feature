Feature: Primary navigation
  Scenario: Navigate from Home to About
    Given the Angular application is open on the home page
    Then the application logo reads "My App"
    When I navigate to the About page
    Then the About page is displayed
