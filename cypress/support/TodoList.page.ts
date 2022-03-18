export interface PageTDL{

  addItem(label: string): this;
  valueOfQueFaireShouldBe(str: string): this;
  nbItemsShouldBe(nb: number): this;
}
// ------------------------------------------------------------------------------------------------------------ //

class C implements PageTDL {
  addItem(label: string): this {
      cy.get("header form input").type(`${label}{enter}`)
      return this;
  }
  valueOfQueFaireShouldBe(str: string): this {
      cy.get("header form input").should("have.length", 1).should("have.value", str)
      return this;
  }


  nbItemsShouldBe(nb: number): this {
      cy.get("li app-todo-item").should("have.length", nb)
      return this;
  }

}

export const page = new C();
