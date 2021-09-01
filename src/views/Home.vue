<script setup>
import IPInfo from "../components/IPInfo.vue";
import leaflet from "leaflet";
import { onMounted } from "@vue/runtime-core";
let map;
onMounted(() => {
  map = leaflet.map("mapid").setView([42.5145, -83.0147], 9);
  leaflet
    .tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZWZuaW5qYSIsImEiOiJja3Qwa2xuemgwMWNrMndxcDF3azZnbHhpIn0._iLl_joRGqEE08QjYx52UA",
      {
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          "pk.eyJ1IjoiZWZuaW5qYSIsImEiOiJja3Qwa2xuemgwMWNrMndxcDF3azZnbHhpIn0._iLl_joRGqEE08QjYx52UA"
      }
    )
    .addTo(map);
});
</script>
<template>
  <div class="flex flex-col h-screen max-h-screen">
    <!-- Search / Results -->
    <div
      class="z-20 flex justify-center relative bg-hero-pattern bg-cover px-4 pt-8 pb-32"
    >
      <!-- Search Input -->
      <div class="w-full max-w-screen-sm">
        <h1 class="text-white text-center text-3xl pb-4">IP Address Tracker</h1>
        <div class="flex">
          <input
            class="flex-1 py-3 px-2 rounded-tl-md rounded-bl-md focus:outline-none"
            type="text"
            placeholder="Search for any IP address or leave empty to get your ip info"
          />
          <i
            class="flex items-center px-4 bg-black text-white rounded-tr-md rounded-br-md pb-1 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 20 20"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </i>
        </div>
      </div>
      <!-- IP Info -->
      <IPInfo />
    </div>
    <!-- Map -->
    <div class="z-10 h-full" id="mapid"></div>
  </div>
</template>
