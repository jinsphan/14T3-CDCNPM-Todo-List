import React, {Component, Fragment} from 'react';
import Flickity from 'flickity';

import ImageService from '../../services/imageService';

import SVG from '../svg';
import Button from '../button';
import InputBlock from './input-block';
import Modal from '../modal';

class ImageUpload extends Component {

  constructor(props) {
    super(props);

    this.state = {
      uploading: false,
      uploadingCount: 0,
      selectedItem: null,
      selectedIndex: 0,
      items: [],
    };
  }

  async componentDidMount() {
    await this.setStateAsync({ items: [...this.props.items] });
    await this.setStateAsync({ empty: this.props.items.length ? false : true });
    this.inializeCarousel();
  }

  componentWillUpdate() {
    this.destroyCarousel();
  }

  componentDidUpdate() {
    this.inializeCarousel();
  }

  inializeCarousel() {
    if ( this.carouselElement ) {
      this.flickityInstance = new Flickity(this.carouselElement, this.flickityOptions);
    }
  }

  destroyCarousel() {
    if ( this.flickityInstance ) {
      this.flickityInstance.destroy();
    }
  }

  async uploadNewImages() {
    const images = await this.uploadFilesFromField();

    if ( !images ) return;
    const items = [...this.state.items].concat(images);
    this.setState({ items });
  }

  async uploadReplacementImage() {
    const items = [...this.state.items];
    const selectedIndex = this.flickityInstance.selectedIndex;
    const images = await this.uploadFilesFromField(false);

    if ( !images ) return;

    items[selectedIndex] = images[0];
    this.setState({ items });
  }

  /**
   * Uploads image files from the proper field
   * @param {Bool} isNew       new|replace|add
   * @return {[type]}             [description]
   */
  async uploadFilesFromField( isNew = true ) {

    let sourceField = this.newImagesUploadField;

    if ( !isNew ) {
      sourceField = this.replacementImageUploadField;
    }

    if ( !sourceField.files.length ) return;

    this.setState({ uploading: true, uploadingCount: sourceField.files.length });

    // Upload
    let result = await ImageService.upload(sourceField.files);

    this.setState({ uploading: false, uploadingCount: 0 });

    return result;

  }

  async confirmItemDelete(e) {
    e.preventDefault();
    let selectedIndex = this.flickityInstance.selectedIndex;
    let selectedItem = this.state.items[selectedIndex];

    await this.setStateAsync({ selectedItem, selectedIndex });
    this.confirmDeleteModal.show();
  }

  async proceedDelete() {
    let selectedIndex = this.state.selectedIndex;
    let items = [...this.state.items];
    items.splice( selectedIndex, 1 );
    this.confirmDeleteModal.hide();

    setTimeout(() => this.setState({ items }), 300 );
  }

  renderItem({item = null, key}) {
    if ( !item ) {
      return null;
    }

    return (
      <div className="image-upload__carousel-item" key={key} data-item-data={JSON.stringify(item)} >
        <img src={item.src} alt={item.title} />
      </div>
    )
  }

  renderItemElement({item=null, key}) {
    if ( !item ) {
      return null;
    }

    let div = document.createElement('div');
    let img = document.createElement('img');

    div.dataset.itemData = JSON.stringify(item);
    div.classList.add('image-upload__carousel-item');
    img.setAttribute('src', item.src);
    img.setAttribute('alt', item.title);

    div.appendChild(img);

    return div;
  }

  get flickityOptions() {
    return {
      prevNextButtons: false,
    };
  }

  get carouselItems() {
    return this.state.items.map((item, key) => this.renderItem({item, key}));
  }

  get uploadingItems() {
    if ( !this.state.uploadingCount ) {
      return null
    } else {
      return (
        <div className="image-upload__uploading">
          Uploading {this.state.uploadingCount} { this.state.uploadingCount > 1 ? 'images' : 'image' }
        </div>
      )
    }
  }

  get inputFields() {
    return [
      <input key='new-images-upload' className="image-upload-field" type="file" name="_new_images" multiple id="new-images-hidden-field" ref={ el => this.newImagesUploadField = el } onChange={this.uploadNewImages.bind(this)} hidden />,
      <input key='replacement-image-upload' className="replacement-image-hidden-field" type="file" name="_replacement_image" id="replacement-image-hidden-field" ref={ el => this.replacementImageUploadField = el } onChange={this.uploadReplacementImage.bind(this)}  hidden />
    ]
  }

  get confirmDeleteModalComponent() {
    return (
      <Modal ref={ ref => this.confirmDeleteModal = ref }>
        <div className="modal__heading">Delete this image?</div>
        {
          this.state.selectedItem
          ? <img src={this.state.selectedItem.src} alt="" className="modal__image"/>
          : null
        }
        <div className="modal__actions">
          <Button className="btn modal__dismiss" text="No, don’t delete" onClick={ e => this.confirmDeleteModal.hide() }></Button>
          <Button className="btn modal__proceed" text="Yes, delete" onClick={this.proceedDelete.bind(this)}></Button>
        </div>
      </Modal>
    )
  }

  get content() {
    let { items = [] } = this.props;

    // If uploading
    if ( this.state.uploading ) {
      return (
        <div className="image-upload__uploading">
          <SVG name='loading' />
        </div>
      )
    }

    // If no images uploaded yet
    else if ( this.state.items.length === 0 ) {
      return (
        <label htmlFor="new-images-hidden-field" className="image-upload">
          <div className="image-upload__content image-upload__empty">
            <img src="/images/image.svg" alt="" className="image-upload__empty-graphic"/>
            <div className="image-upload__empty-text">
              Upload image cover by <br/>
              clicking here
            </div>
          </div>
        </label>
      )
    }

    // Carousel
    else {
      return (
        <Fragment>
          <div className="image-upload">
            <div className="image-upload__content">
              <div className="image-upload__carousel-wrapper">
                <div className="image-upload__carousel" ref={ref => this.carouselElement = ref}>
                  {this.carouselItems}
                </div>
              </div>
              <div className="image-upload__actions">
                <label className="btn image-upload__change" htmlFor="replacement-image-hidden-field">Change</label>
                <Button className="btn image-upload__delete" icon='times-thick' text='Delete' onClick={this.confirmItemDelete.bind(this)} />
              </div>
            </div>
          </div>
          <label className="btn image-upload__button" htmlFor="new-images-hidden-field">
            <span>Add another photo</span>
          </label>
        </Fragment>
      )
    }
  }

  render() {
    return (
      <Fragment>
        {this.inputFields}
        {this.content}
        {this.uploadingItems}
        {this.confirmDeleteModalComponent}
      </Fragment>
    )
  }

}

export default ImageUpload;
