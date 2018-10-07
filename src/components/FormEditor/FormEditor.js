/**
 * Created by minmin on 4/19/18.
 */
import React, { Component } from 'react'
import { Editor } from 'react-draft-wysiwyg'
import './FormEditor.scss'
import './FormEditorCustom.scss'
import axios from 'axios'
import { convertToRaw, convertFromHTML, ContentState, EditorState } from 'draft-js'
import htmlToDraft from 'html-to-draftjs'
import draftToHtml from 'draftjs-to-html'
import PropTypes from 'prop-types'

export default class FormEditor extends Component {
  static propTypes = {
    getContent: PropTypes.func.isRequired,
    defaultContent: PropTypes.string,
  }
  constructor (props) {
    super(props)
    this.state = {
      newproject : undefined,
      editorState : EditorState.createEmpty(),
      ContentState: {},
      defaultContent : props.defaultContent ? props.defaultContent : '<p>your content</p>'
    }
  }
  componentWillMount () {
    const blockfromhtml = htmlToDraft(this.state.defaultContent)
    const state = ContentState.createFromBlockArray(
      blockfromhtml.contentBlocks
    )
    this.setState({
      editorState: EditorState.createWithContent(state)
    })
  }
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState
    })
    this.props.getContent(draftToHtml(convertToRaw(editorState.getCurrentContent())))
  };
  uploadImageCallBack = (file) => {
    return new Promise(
      (resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open('POST', 'https://api.imgur.com/3/image')
        xhr.setRequestHeader('Authorization', 'Client-ID 8d26ccd12712fca')
        const data = new FormData()
        data.append('image', file)
        xhr.send(data)
        xhr.addEventListener('load', () => {
          const response = JSON.parse(xhr.responseText)
          resolve(response)
        })
        xhr.addEventListener('error', () => {
          const error = JSON.parse(xhr.responseText)
          reject(error)
        })
        // const newName = `project-${Date.parse(new Date())}.jpg`
        // const newFile = new File([file], newName, { type: 'image/jpg' })
        // console.log(newFile)
        // const data = new FormData()
        // data.append('image', newFile)
        // return axios.post(`https://api.bdx.com.vn/api/containers/avatar/upload`,
        //   data,
        //   {
        //     headers: {
        //       'Content-Type': 'multipart/form-data'
        //     }
        //   }
        // ).then(function (res) {
        //   // const response = JSON.parse(res.request.responseText)
        //   resolve(res.request)
        //   console.log(res.request)
        // }).catch(function (res) {
        //   // const error = JSON.parse(res.request.responseText)
        //   console.log(res.request)
        //   reject(res.request)
        // })
      }
    )
  }
  render () {
    // console.log(ContentState.createFromBlockArray(convertFromHTML(this.state.defaultContent)))
    // const defaultcontent = ContentState.createFromBlockArray(convertFromHTML(this.state.defaultContent))
    return (
      <div>
        <Editor
          editorState={this.state.editorState}
          wrapperClassName='wrapper-class'
          editorClassName='editor-class'
          toolbarClassName='toolbar-class'
          onEditorStateChange={this.onEditorStateChange}
          // defaultEditorState={state}
          toolbar={{
            image : {
              uploadEnabled: true,
              urlEnabled: true,
              previewImage: true,
              uploadCallback: this.uploadImageCallBack,
              alt: { present: true, mandatory: true }
            },
            colorPicker:{
              className :'customColorPicker'
            }
          }}
        />

      </div>

    )
  }
}
