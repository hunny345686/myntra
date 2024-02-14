import ImageGallery from "react-image-gallery";
function ImgsSlider({ imgs }) {
  const images = imgs.map((item) => {
    return { original: item }
  })
  return (
    <ImageGallery items={images} showNav={false} showFullscreenButton={false} autoPlay={true} showBullets={true} showThumbnails={false} showPlayButton={false} slideInterval={500} />
  )
}

export default ImgsSlider