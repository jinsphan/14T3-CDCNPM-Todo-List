import React, {Component} from 'react';

import SVG from '../svg';
import InputBlock from './input-block';
import ColorService from "../../services/colorService";
import {publish} from "pubsub-js";
import {headerUpdateCounts} from "../../services/topicsService";


class ColorpickerBox extends Component {

    constructor(props) {
        super(props);

        this.state = {
            colorSelectorVisible: false,
            color_value: '',
            items: []
        };
        this.colorItems = this.colorItems.bind(this)
    }

    componentDidMount() {
        if ( this.props.value ) {
            this.setState({
                color_value: this.props.defaultValue,
            });
        }

        this.bindBodyClick();
    }

    bindBodyClick() {
        let body = document.querySelector('body');
        body.addEventListener('click', e => {
            this.hideColorSelector();
        })
    }

    showColorSelector(e) {
        e.stopPropagation();
        this.setState({ colorSelectorVisible: true }, () => {
            setTimeout(this.focusColorSelector.bind(this), 100);
        });
    }

    hideColorSelector() {
        this.setState({ colorSelectorVisible: false });
    }

    focusColorSelector() {
        this.colorSelector.querySelector('button').focus();
    }

    onColorClick(e) {
        let element = e.target;
        let selectedColor = element.dataset.color;
        e.preventDefault();
        this.props.onChangeColor(element.dataset)
        if ( selectedColor ) {
            this.setState({
                colorSelectorVisible: false,
                color_value: selectedColor
            });
        }
    }

    colorItems() {
        let { rules } = this.props;
        return rules.map( (color, key) => (
            <button onClick={this.onColorClick.bind(this)} data-id={color.id} data-number={color.color_number} data-name={color.color_name} data-color={color.color_value} key={key} style={{backgroundColor: color.color_value}} />
        ));
    }

    render() {

        let { value = '', id, rules = null, className = null, ...props } = this.props;
        return (
            <div className='color-form'>
                <i className="color-picker__preview" style={{backgroundColor: this.props.color_value ? this.props.color_value : this.props.defaultValue }} onClick={this.showColorSelector.bind(this)}/>
                <div className={`color-picker__selector ${this.state.colorSelectorVisible ? 'visible' : ''}`} ref={ el => this.colorSelector = el }>
                    {this.colorItems()}
                </div>
            </div>
        )
    }

}

export default ColorpickerBox;
