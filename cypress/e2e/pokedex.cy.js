describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:8080')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('individual pokemon page can be opened from front page', function() {
    cy.visit('http://localhost:8080')
    cy.contains('squirtle').click()
    cy.contains('hp')
    cy.contains('torrent')
  })
})