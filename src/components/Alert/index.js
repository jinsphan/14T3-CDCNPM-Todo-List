import swal from 'sweetalert'
import loadingIcon from './imgs/loading-icon.gif'
export const errorAlert = (title, text, cancelButtonText, func) => {
  return swal({
    title,
    text,
    icon: 'error',
    buttons: [null, cancelButtonText],
  }).then(result => {
    if (result && func) {
      func()
    }
  })
}
const warningAlert = (title, text, button) => {
  return swal(title, text, 'warning', {
    button: button,
  })
}
const notificationAlert = (title, text, confirmButtonText, func) => {
  return swal({
    title: title,
    text: text,
    icon: 'warning',
    buttons: [confirmButtonText, 'Đóng'],
  }
  .then(result => {
    }))
}

export const confirmAlert = (title, text, confirmButtonText, cancelButtonText, func, type = 'warning') => {
  swal({
    title,
    text,
    buttons: [cancelButtonText, confirmButtonText],
    icon: type,
  })
    .then(result => {
      if (result) {
        func()
        swal.close()
      } else {
        swal.close()
      }
    })
  // swal({
  //   title: title,
  //   text: text,
  //   confirmButtonText: buttonConfirm,
  //   cancelButtonText: buttonCancel,
  //   showCancelButton: true,
  //   type: type,
  // },
  //   () => {
  //     if (func) {
  //       func()
  //       swal.close()
  //     }
  //   })
}

const successAlert = (title, text, button, func, timer = 1000) => {
  swal({
    title,
    text,
    icon: 'success',
    buttons: [button],
    timer: timer,
  }).then(result => {
    if (result && func) {
      func()
    }
  })
}
const loadingAlert = (text = 'Đang xử lý...') => {
  swal({
    title: '',
    text: text,
    icon: loadingIcon,
    allowOutsideClick:false,
  })
}
const Alert = {
  errorAlert,
  warningAlert,
  notificationAlert,
  successAlert,
  loadingAlert,
  confirmAlert
}
export default Alert
