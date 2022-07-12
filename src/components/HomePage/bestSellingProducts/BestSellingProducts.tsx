import { Box, Typography, useMediaQuery, Grid, Paper } from "@material-ui/core";
import Rating from "@mui/material/Rating";
import useStyles from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { styled } from "@mui/material/styles";
import BestSellingProductCard from "./BestSellingProductCard";

const BestSellingProducts = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(max-width:960px)");
  const isLaptop = useMediaQuery("(max-width:1280px)");
  const isDesktop = useMediaQuery("(max-width:1920px)");
  const isWidescreen = useMediaQuery("(max-width:2560px)");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography
        className={classes.title}
        variant="h4"
        gutterBottom
        align="center"
      >
        {/* BestSellingProducts */}
        BEST SELLING PRODUCTS
      </Typography>
      <Swiper
        slidesPerView={
          isMobile
            ? 1
            : isTablet
            ? 2
            : isLaptop
            ? 3
            : isDesktop
            ? 5
            : isWidescreen
            ? 5
            : 6
        }
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={classes.swiper}
      >
        <SwiperSlide>
          <BestSellingProductCard
            image="https://images.unsplash.com/photo-1588906467706-5b5db3c388bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wyMTYwMzI0MXx8ZW58MHx8fHw%3D&w=1000&q=80"
            name="BLK BOX BLACKOUT BINARY FOLDING SQUAT RACK"
            price={7000}
            rating={4}
          />
        </SwiperSlide>

        <SwiperSlide>
          <BestSellingProductCard
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAQv6_XA833MhfvoyYYdMN6bwXZ5c2lj5K9A&usqp=CAU"
            name="BLK BOX HEAVY DUTY IMPACT BUMPER WEIGHT PLATES"
            price={6000}
            rating={4}
          />
        </SwiperSlide>

        <SwiperSlide>
          <BestSellingProductCard
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaG14Kh9Jq-YkV1PQoV3H18L3pVoJhQahAnA&usqp=CAU"
            name="BLK BOX HEAVY DUTY IMPACT BUMPER WEIGHT PLATES"
            price={9000}
            rating={5}
          />
        </SwiperSlide>

        <SwiperSlide>
          <BestSellingProductCard
            image="https://media.gettyimages.com/photos/treadmills-in-a-row-picture-id80488814?s=612x612"
            name="BLK BOX HEAVY DUTY IMPACT BUMPER WEIGHT PLATES"
            price={9000}
            rating={5}
          />
        </SwiperSlide>

        <SwiperSlide>
          <BestSellingProductCard
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV-wEkOXXyu0LU2Yykw1V9jokPYK3MlX0cvw&usqp=CAU"
            name="BLK BOX HEAVY DUTY IMPACT BUMPER WEIGHT PLATES"
            price={10000}
            rating={3}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BestSellingProductCard
            image="https://images.pexels.com/photos/2261482/pexels-photo-2261482.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            name="BLK BOX HEAVY DUTY IMPACT BUMPER WEIGHT PLATES"
            price={10000}
            rating={3}
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default BestSellingProducts;
