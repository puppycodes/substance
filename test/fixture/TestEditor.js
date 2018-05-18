import { AbstractEditor, ContainerEditor } from 'substance'

export default class TestEditor extends AbstractEditor {
  constructor (...args) {
    super(...args)
    this.handleActions({
      domSelectionRendered: function () {}
    })
  }

  render ($$) {
    let doc = this.editorSession.getDocument()
    let el = $$('div')
    let body = $$(ContainerEditor, {
      node: doc.get('body')
    }).ref('surface')
    el.append(body)
    return el
  }
}
