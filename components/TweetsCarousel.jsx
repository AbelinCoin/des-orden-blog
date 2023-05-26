import TweetEmbed from 'react-tweet-embed';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const TweetsCarousel = ({ tweetIds }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      swipeable
      draggable
      ssr={false}
      infinite
      autoPlay
      autoPlaySpeed={3000}
      keyBoardControl
      showDots
      customTransition="all .5s ease-in-out"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={['tablet', 'mobile']}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {tweetIds.map((tweetId) => (
        <div className="px-3">
          <TweetEmbed tweetId={tweetId} options={{}} className="h-full" />
        </div>
      ))}
    </Carousel>
  );
};

export default TweetsCarousel;