import React, { Component } from 'react';

class AddForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue:''
        }
    }
    
    updateInputValue = (event) => {
        this.setState({
          inputValue: event.target.value
        })
      }

      addItemEvent = () => {
          if (this.state.inputValue){
              this.props.addItemToList(this.state.inputValue)
              this.setState({
                  inputValue:''
              })
          }
      }

    render() {
        return (
            <section>
                <input
                    type="text"
                    placeholder="Add item to bag"
                    value={this.state.inputValue}
                    onChange={this.updateInputValue}
                />
                <button onClick={this.addItemEvent}>Add Item to bag</button>
            </section>
        );
    }
}

export default AddForm;
