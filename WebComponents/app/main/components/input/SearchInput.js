import React, { Component } from 'react';
import { FormGroup, InputGroup, FormControl, Glyphicon } from 'react-bootstrap';

class SearchInput extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <FormGroup>
              <InputGroup>
                <FormControl type="text" placeholder="搜索"/>
                <InputGroup.Addon>
                  <Glyphicon glyph="glyphicon glyphicon-search" />
                </InputGroup.Addon>
              </InputGroup>
            </FormGroup>
        );
    }
}

export default SearchInput;
