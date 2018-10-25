import React, {Component, Fragment} from 'react';

import InputBlock from './input-block';
import Modal from '../modal';
import Button from '../button';

class DynamicListItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isActionsExpanded: false,
      isEditState: false,
      item: {
        order: 0,
        text: '',
        subtext: '',
      }
    }
  }

  componentDidMount() {
    document.querySelector('body').addEventListener('click', e => {
      this.closeActionsMenu();
    });

    if ( !this.props.item.text && !this.props.item.subtext ) {
      this.setState({ isEditState: true });
    } else {
      this.setState({ item: this.props.item });
    }

    // Focus on first field when in edit state
    if ( this.state.isEditState ) {
      this.formText.focus();
    }
  }

  closeActionsMenu() {
    this.setState({
      isActionsExpanded: false,
    });
  }

  toggleActionsMenu(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      isActionsExpanded: !this.state.isActionsExpanded,
    });
  }

  showEditForm() {
    this.setState({
      isEditState: true,
    });
  }

  hideEditForm(e = {}) {
    if ( e.preventDefault ) {
      e.preventDefault();
    }

    this.setState({
      isEditState: false,
    });
  }

  updateItemData(e) {
    e.stopPropagation();
    e.preventDefault();
    this.hideEditForm();

    let newItemData = this.data;

    this.setState({ item:{...this.state.item,  ...newItemData} });
    this.hideEditForm();
  }

  confirmDelete() {
    this.confirmDeleteModal.show();
  }

  proceedDelete() {
    this.confirmDeleteModal.hide();
    setTimeout(() => this.props.parentList.deleteItem(this.props.itemKey), 300);
  }

  get data() {
    return {
      text: this.formText.value,
      subtext: this.formSubText.value,
    };
  }

  get infoOrForm() {

    let { itemKey, ...props } = this.props;
    let { isActionsExpanded } = this.state;
    let { text, subtext, order } = this.state.item;

    return this.state.isEditState ? (
      <InputBlock className="dynamic-list__item__form" >
        <input ref={ el => this.formText = el } type="text" defaultValue={text} className="dynamic-list__item__input" data-field="text" />
        <input ref={ el => this.formSubText = el } type="text" defaultValue={subtext} className="dynamic-list__item__input" data-field="subtext" />
        <button className="btn dynamic-list__item__save" onClick={ e => this.updateItemData(e) }>Update</button>
        <button className="btn dynamic-list__item__cancel" onClick={ e => this.hideEditForm(e) }>Cancel</button>
      </InputBlock>
    ) : (
      <Fragment>
        <div className="dynamic-list__item__count">{itemKey + 1}</div>
        <div className="dynamic-list__item__details">
          <div className="dynamic-list__item__text">{text}</div>
          <div className="dynamic-list__item__subtext">{subtext ? subtext : ''}</div>
        </div>
        <div className={`dynamic-list__item__actions ${ isActionsExpanded ? 'expanded' : '' }`}>
          <button type="button" className="dynamic-list__item__action-text btn" onClick={this.toggleActionsMenu.bind(this)} >•••</button>
          <div className="dynamic-list__item__action-list">
            <span onClick={ e => this.showEditForm() }>Edit</span>
            <span onClick={ e => this.confirmDelete() }>Delete</span>
          </div>
        </div>
      </Fragment>
    )
  }

  render() {
    let { parentList, itemKey, ...props } = this.props;

    return (
      <div className="dynamic-list__item custom-field" {...props}>
        {this.infoOrForm}

        <Modal ref={ ref => this.confirmDeleteModal = ref }>
          <div className="modal__heading">
            <div>Deleting Step:</div>
            <div>{this.state.item.text}</div>
          </div>
          <div className="modal__text">Are you sure?</div>
          <div className="modal__actions">
            <Button className="btn modal__dismiss" text="No, don’t delete" onClick={ e => this.confirmDeleteModal.hide() }></Button>
            <Button className="btn modal__proceed" text="Yes, delete" onClick={this.proceedDelete.bind(this)}></Button>
          </div>
        </Modal>
      </div>
    )
  }

}

export default DynamicListItem;
