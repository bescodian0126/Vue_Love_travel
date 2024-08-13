<template>
  <div class="top-navbar">
    <div class="overlay"></div>
    <nav class="flex items-center h-[92px] p-0 travel-nav shadow-custom-y">
      <ul class="flex justify-between flex-1 pl-[30px] pr-[45.12px]">
        <li>
          <img src="../../assets/images/logos/logo-white.png" alt="Logo" />
        </li>
        <li class="navbar-menus items-center flex">
          <ul class="flex">
            <li
              class="menu-item-set items-center flex"
              v-for="(item, index) in menuItems"
              :key="index"
            >
              <ul class="flex items-center">
                <li
                  class="text-[16px] font-normal text-white hover:text-menu-item-color hover:cursor-pointer leading-5"
                >
                  {{ item.text }}
                </li>
                <li class="ml-[30.5px] mr-[28.5px]">
                  <img
                    src="../../assets/images/icons/item_right.png"
                    alt="Arrow"
                  />
                </li>
              </ul>
            </li>
            <li class="menu-item-set items-center flex mr-[30.5px]">
              <ul class="flex items-center">
                <li
                  class="text-[16px] font-normal text-white hover:text-menu-item-color hover:cursor-pointer"
                >
                  Contact Us
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="flex items-center">
          <ul class="flex items-center">
            <li class="mr-[23.43px]">
              <img
                src="../../assets/images/icons/Symbol_facebook.png"
                alt="Facebook"
              />
            </li>
            <li class="mr-[23.43px]">
              <img
                src="../../assets/images/icons/Symbol_twitter.png"
                alt="Twitter"
              />
            </li>
            <li class="mr-[23.43px]">
              <img
                src="../../assets/images/icons/Symbol_yutube.png"
                alt="YouTube"
              />
            </li>
            <li>
              <img src="../../assets/images/icons/Symbol_menu.png" alt="Menu" />
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Header extends Vue {
  menuItems = [
    { text: "Home" },
    { text: "Travel" },
    { text: "Pages" },
    { text: "Shop" },
    { text: "Blog" },
  ];
}
</script>

<style scoped>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: #1d1d54;
  z-index: 1;
  height: 92px;
}

.travel-nav {
  background-image: url("../../assets/images/banners/div.elementor-background-overlay.png");
  position: relative;
  width: 100%;
  z-index: 100;
}
</style>
