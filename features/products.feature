Feature: Products & Cart

  Background:
    Given user login sebagai standard user

  Scenario: Add 1 produk ke cart
    When user menambahkan 1 produk ke cart
    Then cart berisi 1 produk

  Scenario: Add multiple produk ke cart
    When user menambahkan 2 produk ke cart
    Then cart berisi 2 produk

  Scenario: Remove produk dari cart
    When user menambahkan 2 produk ke cart
    And user menghapus 1 produk dari cart
    Then cart berisi 1 produk
