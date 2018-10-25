import React, {Component, Fragment} from 'react';
import DragSortableList from 'react-drag-sortable';

import SVG from '../svg';
import InputBlock from './input-block';
import DynamicListItem from './dynamic-list-item';

class DynamicList extends Component {

  constructor(props) {
    super(props);

    window.dynamicList = this;

    this.state = {

      // Items in the list
      items: [],
    }
  }

  async componentWillMount() {
    await this.setStateAsync({ items: this.props.items });
  }

  renderLabel ({label = null, id, icon}) {
    if ( label ) {
      return (
        <Fragment>
          {icon ? (<SVG name={icon} />) : ''}
          <label htmlFor={id}>
            {label}
          </label>
        </Fragment>
      )
    } else {
      return null;
    }
  }

  addItem() {
    let items = this.listData;
    this.setState({
      items: [...items, {text: '', subtext: ''}]
    });
  }

  deleteItem( index ) {
    let items = [...this.state.items];
    items.splice(index, 1);
    this.setState({ items });
  }

  // Updates the list items according to the sorted UI
  onSort(sortedList) {
    this.setState({ items: this.listData });
  }

  get listData() {
    let listData = [];
    let elements = this.element.querySelectorAll('.dynamic-list__item');

    for ( let element of elements ) {
      listData.push({
        text: element.querySelector('.dynamic-list__item__text').textContent,
        subtext: element.querySelector('.dynamic-list__item__subtext').textContent,
      });
    }

    return listData;
  }

  get items() {
    return this.state.items.map( (item, key) => {
      return {
        content: (<DynamicListItem parentList={this} item={item} key={key} itemKey={key} />)
      }
    });
  }

  render() {

    let { animatedLabel = null, name, label = null, icon, value = '', id, rules = null, className = null, children = null, buttonLabel = null, ...props } = this.props;

    return (
      <div className="dynamic-list input-block" ref={ ref => this.element = ref }>
        <InputBlock animatedLabel={animatedLabel} className={`dynamic-list ${className}`} rules={rules} {...props} ref={ ref => this.InputBlock = ref }>
          <input type="hidden" name={name} defaultValue={value} hidden />
          <button type="button" className="dynamic-list__button btn" onClick={this.addItem.bind(this)} >{ buttonLabel ? buttonLabel : `Add ${label}` }</button>
          {this.renderLabel({label, icon, id})}
        </InputBlock>
        <DragSortableList onSort={this.onSort.bind(this)} className="dynamic-list__items" items={this.items} type="vertical" />
      </div>
    )
  }

}

export default DynamicList;