import Component from '../../ui/Component'
import Button from '../button/Button'

class ToolDropdown extends Component {
  render($$) {
    var tools = this.props.tools
    var commandStates = this.props.commandStates
    var el = $$('div').addClass('sc-tool-dropdown')
    el.addClass('sm-target-'+this.props.name)
    el.append(
      this.renderButton($$)
    )
    if (this.state.open) {
      var optionEls = [];
      tools.forEach(function(tool, name) {
        var toolProps = Object.assign({}, commandStates[name])
        toolProps.name = name
        toolProps.label = name
        toolProps.hint = 'CTRL+4'
        toolProps.style = 'plain-dark' // plain button style on dark bg will be used
        optionEls.push($$(tool.Class, toolProps))
      })
      el.append(
        $$('div').addClass('se-options').append(
          $$('div').addClass('se-arrow'),
          $$('div').addClass('se-content').append(
            optionEls
          )
        )
      )
    }
    return el
  }

  renderButton($$) {
    var btn = $$(Button, {
      label: this.props.name,
      active: this.state.open,
      disabled: this.props.disabled,
      style: this.props.style
    }).on('click', this.onClick)
    return btn
  }

  onClick() {
    var open = !this.state.open
    this.setState({
      open: open
    })
  }
}

export default ToolDropdown