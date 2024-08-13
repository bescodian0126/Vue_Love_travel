<template>
  <div class="home-banner-bg relative flex p-0">
    <div class="background-img">
      <img
        :src="desktop_background"
        class="w-full h-full object-cover bg-center"
      />
    </div>
    <!-- <div class="banner-img-desktop absolute inset-0" v-if="isDesktop">  
          
    </div>  
    <div class="banner-img-mobile absolute inset-0" v-else>  
        <img :src="mobile_background" class="w-full h-full object-cover bg-center" />  
    </div>   -->

    <!-- Gradient Overlay -->
    <div class="absolute inset-0 object-cover bg-center">
      <img src="../../assets/images/backgrounds/home_banner_gradient.png" />
    </div>

    <!-- Content Layer -->
    <div
      class="banner-widget1 absolute xl_desktop:top-[250px] lg_desktop:top-[150px] top-[50px] xl_desktop:left-[285px] lg_desktop:left-[130px] desktop:left-[50px] left-[50px] xl_desktop:w-[607.5px] lg_desktop:w-[550px] w-[500px] h-[570px]"
    >
      <div class="element-wrap-snow relative top-0 left-[15px] right-[15px]">
        <div
          class="banner-text-snow absolute top-[0.5px] left-[1.5px] xl_desktop:text-[130px] lg_desktop:text-[100px] text-[80px] font-bold font-jost italic text-white leading-[169px]"
        >
          SNOW
        </div>
      </div>
      <div
        class="element-wrap-adventure relative xl_desktop:top-[159px] lg_desktop:top-[140px] top-[120px] left-[15px]"
      >
        <div
          class="banner-text-adventure absolute left-[0px] font-bold italic font-jost text-banner-adventure-blue xl_desktop:text-[90px] lg_desktop:text-[70px] text-[50px] top-[-30px] leading-[117px]"
        >
          ADVENTURE
        </div>
      </div>
      <div
        class="element-wrap-description relative xl_desktop:top-[296px] lg_desktop:top-[230px] top-[200px] mx-[15px] w-[90%]"
      >
        <div
          class="banner-text-description absolute top-0 font-poppins text-[16px] text-white text-left leading-[24px]"
        >
          Don't wait, discover the best mountains and ski or snowboard around
          the world and enjoy your time with your friends.
        </div>
      </div>
      <div
        class="element-wrap-search-panel absolute xl_desktop:top-[363.97px] lg_desktop:top-[333px] top-[300px] mx-[15px] w-[95%] h-[121.03px]"
      >
        <div
          class="search-panel-box absolute top-[-20.03px] bg-white rounded-[10px] w-full h-[101px]"
        >
          <div class="search-position-wrapper relative top-[20px] left-[10px]">
            <div class="position-icon absolute top-[8px] left-[30px]">
              <img src="../../assets/images/icons/position-icon.png" />
            </div>
            <div
              class="position-text-destinations absolute xl_desktop:left-[90px] left-[70px] top-[1px] font-bold font-poppins text-[16px] text-black"
            >
              Destinations
            </div>
            <div
              class="position-text-all-destinations absolute xl_desktop:left-[94px] left-[72px] top-[31px] font-normal text-[14px] font-poppins leading-5"
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
      class="banner-widget2 absolute xl_desktop:top-[238.25px] lg_desktop:top-[180px] top-[150px] xl_desktop:right-[285px] lg_desktop:right-[130px] desktop:right-[50px] laptop:right-[20px] xl_desktop:w-[742px] xl_desktop:h-[593.5px] desktop:w-[650px] desktop:h-[500px] w-[500px] h-[400px]"
    >
      <div
        class="skii-banner absolute top-[-36.87px] left-[43.49px] z-10 xl_desktop:w-[100%] lg_desktop:w-[80%] w-[70%] justify-center items-center"
      >
        <img src="../../assets/images/banners/skii.png" />
      </div>
      <div class="mask-group absolute top-[-11.75px] left-[74px] z-5">
        <div class="mask-image xl_desktop:w-[100%] lg_desktop:w-[80%] w-[70%]">
          <img src="../../assets/images/banners/slide-square.jpg" />
        </div>
      </div>
    </div>
    <div
      class="banner-link-section1 absolute right-[25px] bottom-[102px] bg-menu-item-color items-center justify-center flex w-[160.77px] h-[34px]"
    >
      <div
        class="section-link-purchase-theme font-poppins font-bold text-[14px] leading-[14px] text-white"
      >
        Purchase Theme
      </div>
    </div>
    <div
      class="banner-link-section1 absolute right-[210px] bottom-[102px] bg-[#1E92FD] items-center justify-center flex w-[160.77px] h-[34px]"
    >
      <div
        class="section-link-purchase-theme font-poppins font-bold text-[14px] leading-[14px] text-white"
      >
        All Demos
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class HomeBanner extends Vue {
  isDesktop: boolean = this.checkWindowSize();

  mounted() {
    window.addEventListener("resize", this.onResize);
  }

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  }

  onResize() {
    this.isDesktop = this.checkWindowSize();
  }

  checkWindowSize(): boolean {
    return window.innerWidth > 1024;
  }

  get desktop_background() {
    return require("../../assets/images/backgrounds/home_bg1.png");
  }

  get mobile_background() {
    return require("../../assets/images/backgrounds/home_bg_mobile.png");
  }
}
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
