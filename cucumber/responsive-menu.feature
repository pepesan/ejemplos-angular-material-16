Feature: Responsive menu breakpoint
  The compact menu is shown below the desktop breakpoint.

  Scenario: Viewport narrower than the breakpoint uses the compact menu
    Given a viewport width of 767 pixels
    When the responsive menu breakpoint is evaluated
    Then the compact menu is enabled

  Scenario: Viewport at the breakpoint uses the desktop menu
    Given a viewport width of 768 pixels
    When the responsive menu breakpoint is evaluated
    Then the compact menu is disabled
