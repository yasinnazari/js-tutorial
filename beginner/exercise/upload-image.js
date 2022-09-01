let isUploaded = false
let userUploadStatus = prompt('Enter the Status')

if (userUploadStatus) {
  isUploaded = true
  setTimeout(() => {
    if (isUploaded) {
      console.log('عکس آپلود شد')
    }
  }, 5000)  
} else {
  setTimeout(() => {
    if (!isUploaded){
      console.log('فرصت آپلود عکس تمام شد')
    }
}, 5000)
}
