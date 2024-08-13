<template>
  <div class="home-banner relative">
    <!-- Background Image Layer -->
    <div class="home-banner-bg relative w-full h-[1060px] overflow-hidden">
      <div class="absolute inset-0 object-cover bg-center">
        <img src="../../assets/images/backgrounds/home_bg1.png" />
      </div>

      <!-- Gradient Overlay -->
      <div class="absolute inset-0 object-cover bg-center">
        <img src="../../assets/images/backgrounds/home_banner_gradient.png" />
      </div>
    </div>

    <!-- Content Layer -->
    <div
      class="banner-widget1 absolute top-[250px] left-[285px] w-[607.5px] h-[570px]"
    >
      <div class="element-wrap-snow relative top-0 left-[15px] right-[15px]">
        <div
          class="banner-text-snow absolute top-[0.5px] left-[1.5px] text-[130px] font-bold font-jost italic text-white leading-[169px]"
        >
          SNOW
        </div>
      </div>
      <div class="element-wrap-adventure relative top-[159px] left-[15px]">
        <div
          class="banner-text-adventure absolute left-[0px] font-bold italic font-jost text-banner-adventure-blue text-[90px] top-[-30px] leading-[117px]"
        >
          ADVENTURE
        </div>
      </div>
      <div class="element-wrap-description relative top-[296px] mx-[15px]">
        <div
          class="banner-text-description absolute top-0 left-0 right-0 font-poppins text-[16px] text-white w-[552.67px] text-left leading-[24px]"
        >
          Don't wait, discover the best mountains and ski or snowboard around
          the world and enjoy your time with your friends.
        </div>
      </div>
      <div
        class="element-wrap-search-panel absolute top-[363.97px] mx-[15px] w-[95%] h-[121.03px]"
      >
        <div
          class="search-panel-box absolute top-[-20.03px] bg-white rounded-[10px] w-full h-[101px]"
        >
          <div class="search-position-wrapper relative top-[20px] left-[10px]">
            <div class="position-icon absolute top-[8px] left-[30px]">
              <img src="../../assets/images/icons/position-icon.png" />
            </div>
            <div
              class="position-text-destinations absolute left-[90px] top-[1px] font-bold font-poppins text-[16px] text-black"
            >
              Destinations
            </div>
            <div
              class="position-text-all-destinations absolute left-[94px] top-[31px] font-normal text-[14px] font-poppins leading-5"
            >
              All Destinations
            </div>
          </div>
          <div
            class="search-btn-wrapper absolute top-5 right-[30px] w-[46.5%] h-[61px] bg-menu-item-color rounded-[10px] text-white flex items-center justify-center"
          >
            <div class="text-[14px] font-bold font-poppins">SEARCH</div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="banner-widget2 absolute top-[238.25px] right-[285px] w-[620px] h-[426px]"
    >
      <div class="skii-banner absolute top-[-36.87px] left-[43.49px] z-10">
        <img src="../../assets/images/banners/skii.png" />
      </div>
      <div
        class="mask-group absolute top-[-11.75px] left-[74px] w-[593.5px] h-[593.5px] z-5"
      >
        <div class="mask-image">
          <img src="../../assets/images/banners/slide-square.jpg" />
        </div>
      </div>
    </div>
    <div
      class="banner-link-section1 absolute right-[25px] top-[934px] bg-menu-item-color items-center justify-center flex w-[160.77px] h-[34px]"
    >
      <div
        class="section-link-purchase-theme font-poppins font-bold text-[14px] leading-[14px] text-white"
      >
        Purchase Theme
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
export default class HomeBanner extends Vue {}
</script>

<style scoped>
div.home-banner {
  width: 100%;
  height: 100vh;
  position: relative;
}

.banner-text-snow {
  text-shadow: 3px 3px 0px #fd661e;
}
.banner-text-adventure {
  text-shadow: 2px 2px 0px #ffffff;
}
.banner-widget1 {
  display: flex; /* Setting the display to flex */
  flex-direction: column; /* Align children in a column */
  align-items: flex-start; /* Align items to the start (left) */
}
</style>
