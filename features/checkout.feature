Feature: Checkout

  Background:
    Given user login dan memiliki produk di cart

  Scenario: Checkout sampai selesai
    When user checkout dengan data valid
    Then order berhasil diselesaikan

  Scenario: Checkout tanpa first name
    When user checkout tanpa first name
    Then tampil error message checkout

  Scenario: Checkout tanpa last name
    When user checkout tanpa last name
    Then tampil error message checkout

  Scenario: Checkout tanpa postal code
    When user checkout tanpa postal code
    Then tampil error message checkout
