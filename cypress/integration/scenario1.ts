import { page } from './../support/TodoList.page';


describe('My First Test', () => {
    it('Visits the initial project page', () => {
      cy.visit('/')
      page  .nbItemsShouldBe(0)
            .valueOfQueFaireShouldBe("")
            .addItem("coucou")
            .nbItemsShouldBe(1)
            .valueOfQueFaireShouldBe('')
    })
  })
