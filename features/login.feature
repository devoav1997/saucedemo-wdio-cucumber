Feature: Login SauceDemo

  Scenario: Login dengan user valid
    Given user membuka halaman login
    When user login dengan username "standard_user" dan password "secret_sauce"
    Then user berhasil masuk ke halaman products

  Scenario: Login tanpa username
    Given user membuka halaman login
    When user login dengan username "" dan password "secret_sauce"
    Then tampil error message

  Scenario: Login tanpa password
    Given user membuka halaman login
    When user login dengan username "standard_user" dan password ""
    Then tampil error message

  Scenario: Login dengan credential invalid
    Given user membuka halaman login
    When user login dengan username "invalid" dan password "invalid"
    Then tampil error message
