const getCroppedImageUrl = (url : string) =>{
  if(!url) return undefined; //game without an image
  const index = url.indexOf('media/') + 'media/'.length  // we added length to add crop after media
  return url.slice(0,index) + "crop/600/400/" + url.slice(index) //index is staring pos of media prameter  0 mean from the begining
}
export default getCroppedImageUrl
// download smaller imahe to make loading faster